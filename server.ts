import 'dotenv/config';
import express, { type Request, type Response } from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT) || 3000;
const OWNER_EMAIL = (process.env.OWNER_EMAIL || 'romainadounto594@gmail.com').trim();

interface NotifyOrderItem {
  productId: string;
  title: string;
  unitPrice: number;
  priceSuffix?: string;
  quantity: number;
}

interface NotifyShippingAddress {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  street: string;
  postalCode: string;
  city: string;
  notes?: string;
}

interface NotifyOrderPayload {
  orderNumber: string;
  createdAt: string;
  deliveryMethod: 'home' | 'pickup';
  paymentMethod: 'card' | 'transfer' | 'cod';
  paymentStatus: string;
  cardHolder?: string;
  cardLast4?: string;
  subtotal: number;
  deliveryFee: number;
  total: number;
  shippingAddress: NotifyShippingAddress;
  items: NotifyOrderItem[];
}

const RATE_WINDOW_MS = 60_000;
const RATE_MAX_REQUESTS = 10;
const rateBuckets = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const bucket = rateBuckets.get(ip);
  if (!bucket || bucket.resetAt <= now) {
    rateBuckets.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }
  if (bucket.count >= RATE_MAX_REQUESTS) {
    return false;
  }
  bucket.count += 1;
  return true;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function stripHeaderControls(value: string): string {
  return value.replace(/[\r\n\t]+/g, ' ').trim();
}

function isNonEmptyString(val: unknown, maxLen = 200): val is string {
  return typeof val === 'string' && val.trim().length > 0 && val.trim().length <= maxLen;
}

function isOptionalString(val: unknown, maxLen = 500): val is string | undefined {
  return val === undefined || (typeof val === 'string' && val.length <= maxLen);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 200;
}

function formatEur(amount: number): string {
  return `${amount.toFixed(2).replace('.', ',')} €`;
}

function isMailConfigured(): boolean {
  const hasResend = Boolean(process.env.RESEND_API_KEY?.trim());
  const hasSmtp = Boolean(process.env.SMTP_USER?.trim() && process.env.SMTP_PASS?.trim());
  return hasResend || hasSmtp;
}

function validateOrderPayload(raw: unknown): { ok: true; data: NotifyOrderPayload } | { ok: false; error: string } {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) {
    return { ok: false, error: 'Corps de requête invalide.' };
  }

  const body = raw as Record<string, unknown>;

  // Reject any attempt to transmit raw card numbers or CVC codes
  if ('cardNumber' in body || 'cvc' in body || 'cardExpiry' in body) {
    return { ok: false, error: 'Les données sensibles de carte ne doivent pas être transmises.' };
  }

  if (!isNonEmptyString(body.orderNumber, 40)) {
    return { ok: false, error: 'Numéro de commande invalide.' };
  }
  if (!isNonEmptyString(body.createdAt, 50)) {
    return { ok: false, error: 'Date de commande invalide.' };
  }
  if (body.deliveryMethod !== 'home' && body.deliveryMethod !== 'pickup') {
    return { ok: false, error: 'Mode de livraison invalide.' };
  }
  if (body.paymentMethod !== 'card' && body.paymentMethod !== 'transfer' && body.paymentMethod !== 'cod') {
    return { ok: false, error: 'Mode de paiement invalide.' };
  }
  if (!isNonEmptyString(body.paymentStatus, 100)) {
    return { ok: false, error: 'Statut de paiement invalide.' };
  }
  if (!isOptionalString(body.cardHolder, 100)) {
    return { ok: false, error: 'Titulaire de carte invalide.' };
  }
  if (body.cardLast4 !== undefined && (typeof body.cardLast4 !== 'string' || !/^\d{4}$/.test(body.cardLast4))) {
    return { ok: false, error: 'Les 4 derniers chiffres de la carte sont invalides.' };
  }

  if (
    typeof body.subtotal !== 'number' ||
    !Number.isFinite(body.subtotal) ||
    body.subtotal < 0 ||
    typeof body.deliveryFee !== 'number' ||
    !Number.isFinite(body.deliveryFee) ||
    body.deliveryFee < 0 ||
    typeof body.total !== 'number' ||
    !Number.isFinite(body.total) ||
    body.total < 0
  ) {
    return { ok: false, error: 'Montants de commande invalides.' };
  }

  if (!body.shippingAddress || typeof body.shippingAddress !== 'object' || Array.isArray(body.shippingAddress)) {
    return { ok: false, error: 'Adresse de livraison manquante.' };
  }
  const addr = body.shippingAddress as Record<string, unknown>;
  if (
    !isNonEmptyString(addr.firstName, 100) ||
    !isNonEmptyString(addr.lastName, 100) ||
    !isNonEmptyString(addr.email, 200) ||
    !isValidEmail(addr.email.trim()) ||
    !isNonEmptyString(addr.phone, 40) ||
    !isNonEmptyString(addr.street, 200) ||
    !isNonEmptyString(addr.postalCode, 20) ||
    !isNonEmptyString(addr.city, 100) ||
    !isOptionalString(addr.notes, 600)
  ) {
    return { ok: false, error: 'Coordonnées client incomplètes ou invalides.' };
  }

  if (!Array.isArray(body.items) || body.items.length === 0 || body.items.length > 50) {
    return { ok: false, error: 'Liste des articles invalide.' };
  }

  const cleanItems: NotifyOrderItem[] = [];
  for (const item of body.items) {
    if (!item || typeof item !== 'object' || Array.isArray(item)) {
      return { ok: false, error: 'Article invalide.' };
    }
    const entry = item as Record<string, unknown>;
    if (
      !isNonEmptyString(entry.productId, 120) ||
      !isNonEmptyString(entry.title, 200) ||
      !isOptionalString(entry.priceSuffix, 120) ||
      typeof entry.unitPrice !== 'number' ||
      !Number.isFinite(entry.unitPrice) ||
      entry.unitPrice < 0 ||
      entry.unitPrice > 100_000 ||
      typeof entry.quantity !== 'number' ||
      !Number.isInteger(entry.quantity) ||
      entry.quantity < 1 ||
      entry.quantity > 1000
    ) {
      return { ok: false, error: 'Détail d’article invalide.' };
    }
    cleanItems.push({
      productId: entry.productId.trim(),
      title: entry.title.trim(),
      priceSuffix: entry.priceSuffix?.trim(),
      unitPrice: entry.unitPrice,
      quantity: entry.quantity,
    });
  }

  return {
    ok: true,
    data: {
      orderNumber: stripHeaderControls(body.orderNumber),
      createdAt: body.createdAt.trim(),
      deliveryMethod: body.deliveryMethod,
      paymentMethod: body.paymentMethod,
      paymentStatus: body.paymentStatus.trim(),
      cardHolder: body.cardHolder ? stripHeaderControls(body.cardHolder) : undefined,
      cardLast4: body.cardLast4,
      subtotal: body.subtotal,
      deliveryFee: body.deliveryFee,
      total: body.total,
      shippingAddress: {
        firstName: addr.firstName.trim(),
        lastName: addr.lastName.trim(),
        email: stripHeaderControls(addr.email),
        phone: addr.phone.trim(),
        street: addr.street.trim(),
        postalCode: addr.postalCode.trim(),
        city: addr.city.trim(),
        notes: addr.notes?.trim() || undefined,
      },
      items: cleanItems,
    },
  };
}

function buildOrderEmail(order: NotifyOrderPayload): { subject: string; html: string; text: string } {
  const paymentMethodLabel =
    order.paymentMethod === 'card'
      ? `Carte bancaire (•••• ${order.cardLast4 ?? '4242'})`
      : order.paymentMethod === 'transfer'
      ? 'Virement bancaire'
      : 'Paiement à la livraison';

  const deliveryLabel =
    order.deliveryMethod === 'home'
      ? 'Livraison à domicile'
      : 'Retrait au dépôt (Forbach)';

  const subject = stripHeaderControls(
    `[Bois express] Nouvelle commande ${order.orderNumber} — ${formatEur(order.total)} (${order.shippingAddress.firstName} ${order.shippingAddress.lastName})`
  );

  const itemsRowsHtml = order.items
    .map(
      (item) => `
      <tr>
        <td style="padding: 10px 12px; border-bottom: 1px solid #e5e5e5; color: #292929;">
          <strong>${escapeHtml(item.title)}</strong>
          ${item.priceSuffix ? `<br><span style="font-size: 12px; color: #595959;">${escapeHtml(item.priceSuffix)}</span>` : ''}
        </td>
        <td style="padding: 10px 12px; border-bottom: 1px solid #e5e5e5; text-align: center; color: #292929;">${item.quantity}</td>
        <td style="padding: 10px 12px; border-bottom: 1px solid #e5e5e5; text-align: right; color: #292929;">${escapeHtml(formatEur(item.unitPrice))}</td>
        <td style="padding: 10px 12px; border-bottom: 1px solid #e5e5e5; text-align: right; font-weight: 600; color: #292929;">${escapeHtml(formatEur(item.unitPrice * item.quantity))}</td>
      </tr>`
    )
    .join('');

  const html = `
<!doctype html>
<html lang="fr">
<body style="margin:0; padding:0; background:#f4f4f4; font-family: Arial, Helvetica, sans-serif; color:#292929;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="640" cellspacing="0" cellpadding="0" style="max-width:640px; width:100%; background:#ffffff; border:1px solid #dcdcdc; border-radius:8px; overflow:hidden;">
          <tr>
            <td style="background:#292929; padding:20px 24px; border-bottom:4px solid #FC8920;">
              <h1 style="margin:0; color:#ffffff; font-size:20px;">Bois express — Notification de paiement et commande</h1>
              <p style="margin:6px 0 0; color:#FC8920; font-size:14px; font-weight:bold;">Commande ${escapeHtml(order.orderNumber)}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:24px;">
              <h2 style="margin:0 0 12px; font-size:16px; color:#292929; border-bottom:1px solid #e5e5e5; padding-bottom:6px;">Informations de paiement</h2>
              <p style="margin:4px 0; font-size:14px;"><strong>Mode de paiement :</strong> ${escapeHtml(paymentMethodLabel)}</p>
              <p style="margin:4px 0; font-size:14px;"><strong>Statut du paiement :</strong> ${escapeHtml(order.paymentStatus)}</p>
              ${order.cardHolder ? `<p style="margin:4px 0; font-size:14px;"><strong>Titulaire de la carte :</strong> ${escapeHtml(order.cardHolder)}</p>` : ''}
              ${order.cardLast4 ? `<p style="margin:4px 0; font-size:14px;"><strong>Carte (4 derniers chiffres) :</strong> •••• ${escapeHtml(order.cardLast4)}</p>` : ''}
              <p style="margin:4px 0 18px; font-size:14px;"><strong>Montant total TTC :</strong> <span style="color:#FC8920; font-weight:bold;">${escapeHtml(formatEur(order.total))}</span></p>

              <h2 style="margin:0 0 12px; font-size:16px; color:#292929; border-bottom:1px solid #e5e5e5; padding-bottom:6px;">Coordonnées du client &amp; livraison</h2>
              <p style="margin:4px 0; font-size:14px;"><strong>Client :</strong> ${escapeHtml(order.shippingAddress.firstName)} ${escapeHtml(order.shippingAddress.lastName)}</p>
              <p style="margin:4px 0; font-size:14px;"><strong>E-mail :</strong> ${escapeHtml(order.shippingAddress.email)}</p>
              <p style="margin:4px 0; font-size:14px;"><strong>Téléphone :</strong> ${escapeHtml(order.shippingAddress.phone)}</p>
              <p style="margin:4px 0; font-size:14px;"><strong>Mode de livraison :</strong> ${escapeHtml(deliveryLabel)}</p>
              <p style="margin:4px 0; font-size:14px;"><strong>Adresse :</strong> ${escapeHtml(order.shippingAddress.street)}, ${escapeHtml(order.shippingAddress.postalCode)} ${escapeHtml(order.shippingAddress.city)}</p>
              ${order.shippingAddress.notes ? `<p style="margin:4px 0; font-size:14px;"><strong>Instructions :</strong> ${escapeHtml(order.shippingAddress.notes)}</p>` : ''}

              <h2 style="margin:20px 0 12px; font-size:16px; color:#292929; border-bottom:1px solid #e5e5e5; padding-bottom:6px;">Articles commandés</h2>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse; font-size:14px;">
                <thead>
                  <tr style="background:#f7f7f7;">
                    <th align="left" style="padding:10px 12px; border-bottom:2px solid #dcdcdc;">Produit</th>
                    <th align="center" style="padding:10px 12px; border-bottom:2px solid #dcdcdc;">Qté</th>
                    <th align="right" style="padding:10px 12px; border-bottom:2px solid #dcdcdc;">PU</th>
                    <th align="right" style="padding:10px 12px; border-bottom:2px solid #dcdcdc;">Total</th>
                  </tr>
                </thead>
                <tbody>
                  ${itemsRowsHtml}
                </tbody>
              </table>

              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top:16px; font-size:14px;">
                <tr>
                  <td align="right" style="padding:4px 0; color:#595959;">Sous-total :</td>
                  <td align="right" width="120" style="padding:4px 0; font-weight:600;">${escapeHtml(formatEur(order.subtotal))}</td>
                </tr>
                <tr>
                  <td align="right" style="padding:4px 0; color:#595959;">Livraison :</td>
                  <td align="right" width="120" style="padding:4px 0; font-weight:600;">${escapeHtml(formatEur(order.deliveryFee))}</td>
                </tr>
                <tr>
                  <td align="right" style="padding:8px 0 0; font-size:16px; font-weight:bold;">Total TTC :</td>
                  <td align="right" width="120" style="padding:8px 0 0; font-size:16px; font-weight:bold; color:#FC8920;">${escapeHtml(formatEur(order.total))}</td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const textLines = [
    `BOIS EXPRESS - NOTIFICATION DE PAIEMENT ET COMMANDE`,
    `Commande : ${order.orderNumber}`,
    `Date : ${order.createdAt}`,
    ``,
    `--- PAIEMENT ---`,
    `Mode : ${paymentMethodLabel}`,
    `Statut : ${order.paymentStatus}`,
    order.cardHolder ? `Titulaire : ${order.cardHolder}` : null,
    order.cardLast4 ? `Carte : **** ${order.cardLast4}` : null,
    `Total TTC : ${formatEur(order.total)}`,
    ``,
    `--- CLIENT & LIVRAISON ---`,
    `Client : ${order.shippingAddress.firstName} ${order.shippingAddress.lastName}`,
    `Email : ${order.shippingAddress.email}`,
    `Telephone : ${order.shippingAddress.phone}`,
    `Livraison : ${deliveryLabel}`,
    `Adresse : ${order.shippingAddress.street}, ${order.shippingAddress.postalCode} ${order.shippingAddress.city}`,
    order.shippingAddress.notes ? `Instructions : ${order.shippingAddress.notes}` : null,
    ``,
    `--- ARTICLES ---`,
    ...order.items.map(
      (i) => `- ${i.quantity} x ${i.title} (${formatEur(i.unitPrice)}) = ${formatEur(i.unitPrice * i.quantity)}`
    ),
    ``,
    `Sous-total : ${formatEur(order.subtotal)}`,
    `Livraison : ${formatEur(order.deliveryFee)}`,
    `Total TTC : ${formatEur(order.total)}`,
  ].filter((line): line is string => line !== null);

  return {
    subject,
    html,
    text: textLines.join('\n'),
  };
}

async function sendOwnerEmail(order: NotifyOrderPayload): Promise<{
  sent: boolean;
  configured: boolean;
  provider?: 'resend' | 'smtp';
  error?: string;
}> {
  const { subject, html, text } = buildOrderEmail(order);
  const resendKey = process.env.RESEND_API_KEY?.trim();
  const smtpUser = process.env.SMTP_USER?.trim();
  const smtpPass = process.env.SMTP_PASS?.trim();

  if (resendKey) {
    const fromAddress = process.env.MAIL_FROM?.trim() || 'Bois express <onboarding@resend.dev>';
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromAddress,
        to: [OWNER_EMAIL],
        reply_to: order.shippingAddress.email,
        subject,
        html,
        text,
      }),
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => 'Resend API error');
      return {
        sent: false,
        configured: true,
        provider: 'resend',
        error: `Erreur d'envoi Resend (${response.status}): ${detail.slice(0, 160)}`,
      };
    }

    return { sent: true, configured: true, provider: 'resend' };
  }

  if (smtpUser && smtpPass) {
    const host = process.env.SMTP_HOST?.trim() || 'smtp.gmail.com';
    const port = Number(process.env.SMTP_PORT) || 465;
    const normalizedPass =
      host === 'smtp.gmail.com' ? smtpPass.replace(/\s+/g, '') : smtpPass;
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user: smtpUser,
        pass: normalizedPass,
      },
    });

    const fromAddress = process.env.MAIL_FROM?.trim() || `Bois express <${smtpUser}>`;
    await transporter.sendMail({
      from: fromAddress,
      to: OWNER_EMAIL,
      replyTo: order.shippingAddress.email,
      subject,
      text,
      html,
    });

    return { sent: true, configured: true, provider: 'smtp' };
  }

  return {
    sent: false,
    configured: false,
    error: 'MAIL_NOT_CONFIGURED',
  };
}

async function startServer(): Promise<void> {
  const app = express();
  app.set('trust proxy', 1);
  app.use(express.json({ limit: '100kb' }));

  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({
      ok: true,
      ownerEmail: OWNER_EMAIL,
      mailConfigured: isMailConfigured(),
    });
  });

  app.post('/api/orders/notify', async (req: Request, res: Response) => {
    const clientIp = req.ip || 'unknown';
    if (!checkRateLimit(clientIp)) {
      res.status(429).json({
        sent: false,
        configured: isMailConfigured(),
        recipient: OWNER_EMAIL,
        error: 'Trop de requêtes. Veuillez réessayer dans une minute.',
      });
      return;
    }

    const validation = validateOrderPayload(req.body);
    if (!validation.ok) {
      res.status(400).json({
        sent: false,
        configured: isMailConfigured(),
        recipient: OWNER_EMAIL,
        error: validation.error,
      });
      return;
    }

    try {
      const result = await sendOwnerEmail(validation.data);
      res.status(200).json({
        ...result,
        recipient: OWNER_EMAIL,
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Erreur serveur lors de l’envoi e-mail.';
      console.error('Order notification email error:', message);
      res.status(502).json({
        sent: false,
        configured: isMailConfigured(),
        recipient: OWNER_EMAIL,
        error: message,
      });
    }
  });

  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.resolve(__dirname, 'dist');
    app.use(express.static(distDir));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(distDir, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Bois express server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
