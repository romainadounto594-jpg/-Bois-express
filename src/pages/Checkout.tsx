import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AlertTriangle,
  CheckCircle2,
  CreditCard,
  Landmark,
  Truck,
  Lock,
  Loader2,
  UserCheck,
} from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { useAuth } from '../hooks/useAuth';
import { formatPrice } from '../context/CartContext';
import {
  DeliveryMethod,
  PaymentMethod,
  SimulatedOrder,
} from '../types';
import { Breadcrumb } from '../components/Breadcrumb';

function formatCardNumber(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 16);
  return digits.replace(/(\d{4})(?=\d)/g, '$1 ');
}

function formatExpiry(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 4);
  if (digits.length >= 3) {
    return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  }
  return digits;
}

export const Checkout: React.FC = () => {
  const { items, subtotal, hasOrderConflict, clearCart } = useCart();
  const { user, register, addOrder } = useAuth();

  const [shipping, setShipping] = useState({
    firstName: user?.firstName ?? '',
    lastName: user?.lastName ?? '',
    email: user?.email ?? '',
    phone: user?.phone ?? '',
    street: user?.street ?? '',
    postalCode: user?.postalCode ?? '',
    city: user?.city ?? '',
    notes: '',
  });

  useEffect(() => {
    if (user) {
      setShipping((prev) => ({
        ...prev,
        firstName: prev.firstName || user.firstName,
        lastName: prev.lastName || user.lastName,
        email: prev.email || user.email,
        phone: prev.phone || user.phone,
        street: prev.street || user.street,
        postalCode: prev.postalCode || user.postalCode,
        city: prev.city || user.city,
      }));
    }
  }, [user]);

  const [createAccount, setCreateAccount] = useState(false);
  const [accountPassword, setAccountPassword] = useState('');

  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>('home');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');

  const [card, setCard] = useState({
    holder: '',
    number: '',
    expiry: '',
    cvc: '',
  });

  const [acceptCgv, setAcceptCgv] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState<SimulatedOrder | null>(null);

  const deliveryFee = 0;
  const total = subtotal + deliveryFee;

  const fillTestCard = () => {
    setCard({
      holder: `${shipping.firstName || 'Jean'} ${shipping.lastName || 'Dupont'}`.trim().toUpperCase(),
      number: '4242 4242 4242 4242',
      expiry: '12/28',
      cvc: '123',
    });
    setErrors((prev) => {
      const next = { ...prev };
      delete next.cardHolder;
      delete next.cardNumber;
      delete next.cardExpiry;
      delete next.cardCvc;
      return next;
    });
  };

  const validate = (): boolean => {
    const next: Record<string, string> = {};

    if (!shipping.firstName.trim()) next.firstName = 'Prénom requis.';
    if (!shipping.lastName.trim()) next.lastName = 'Nom requis.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(shipping.email.trim())) {
      next.email = 'Adresse e-mail invalide.';
    }
    if (!shipping.phone.trim()) next.phone = 'Numéro de téléphone requis.';

    if (deliveryMethod === 'home') {
      if (!shipping.street.trim()) next.street = 'Adresse de livraison requise.';
      if (!shipping.postalCode.trim()) next.postalCode = 'Code postal requis.';
      if (!shipping.city.trim()) next.city = 'Ville requise.';
    }

    if (!user && createAccount && accountPassword.length < 6) {
      next.accountPassword = 'Mot de passe requis (6 caractères minimum).';
    }

    if (paymentMethod === 'card') {
      if (!card.holder.trim()) next.cardHolder = 'Nom du titulaire requis.';
      const rawCard = card.number.replace(/\s/g, '');
      if (!/^\d{16}$/.test(rawCard)) {
        next.cardNumber = 'Numéro de carte à 16 chiffres requis.';
      }
      if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(card.expiry)) {
        next.cardExpiry = 'Format MM/AA requis.';
      }
      if (!/^\d{3,4}$/.test(card.cvc)) {
        next.cardCvc = 'Code CVC à 3 ou 4 chiffres requis.';
      }
    }

    if (!acceptCgv) {
      next.acceptCgv = 'Veuillez accepter les conditions générales de vente.';
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (hasOrderConflict || items.length === 0 || isProcessing) return;
    if (!validate()) return;

    setIsProcessing(true);

    window.setTimeout(() => {
      let activeUserId = user?.id ?? null;

      if (!user && createAccount) {
        const regRes = register({
          firstName: shipping.firstName,
          lastName: shipping.lastName,
          email: shipping.email,
          phone: shipping.phone,
          street: shipping.street || 'Retrait dépôt',
          postalCode: shipping.postalCode || '57600',
          city: shipping.city || 'Forbach',
          password: accountPassword,
        });
        if (regRes.ok && regRes.user) {
          activeUserId = regRes.user.id;
        }
      }

      const rawCardDigits = card.number.replace(/\s/g, '');
      const order: SimulatedOrder = {
        id: `ord-${Date.now()}`,
        orderNumber: `#BE-2026-${String(Math.floor(1000 + Math.random() * 9000))}`,
        userId: activeUserId,
        createdAt: new Date().toISOString(),
        items: items.map((entry) => ({
          productId: entry.product.id,
          slug: entry.product.slug,
          title: entry.product.title,
          image: entry.product.image,
          unitPrice: entry.product.price,
          priceSuffix: entry.product.priceSuffix,
          quantity: entry.quantity,
        })),
        subtotal,
        deliveryFee,
        total,
        deliveryMethod,
        paymentMethod,
        cardLast4: paymentMethod === 'card' ? rawCardDigits.slice(-4) : undefined,
        shippingAddress: {
          firstName: shipping.firstName.trim(),
          lastName: shipping.lastName.trim(),
          email: shipping.email.trim(),
          phone: shipping.phone.trim(),
          street:
            deliveryMethod === 'home'
              ? shipping.street.trim()
              : 'Retrait dépôt - 3 rue de Schoeneck',
          postalCode:
            deliveryMethod === 'home' ? shipping.postalCode.trim() : '57600',
          city: deliveryMethod === 'home' ? shipping.city.trim() : 'Forbach',
          notes: shipping.notes.trim() || undefined,
        },
        status:
          paymentMethod === 'card'
            ? 'Payée (Simulation)'
            : paymentMethod === 'transfer'
            ? 'En attente de virement (Simulation)'
            : 'Paiement à la livraison',
      };

      addOrder(order);
      clearCart();
      setIsProcessing(false);
      setConfirmedOrder(order);
      window.scrollTo(0, 0);
    }, 900);
  };

  if (confirmedOrder) {
    return (
      <div className="max-w-[920px] mx-auto px-4 sm:px-6 py-12">
        <div className="border border-[#FC8920] rounded-[10px] p-6 sm:p-10 bg-white shadow-sm">
          <div className="flex items-start gap-4 pb-6 mb-6 border-b border-[#dcdcdc]">
            <CheckCircle2 className="w-10 h-10 text-[#FC8920] shrink-0" />
            <div>
              <p className="text-[13px] font-bold uppercase tracking-wider text-[#FC8920]">
                Confirmation de commande simulée
              </p>
              <h1 className="text-[26px] sm:text-[32px] font-semibold text-[#292929] mt-1">
                Merci {confirmedOrder.shippingAddress.firstName}, votre commande {confirmedOrder.orderNumber} est confirmée
              </h1>
              <p className="text-[14px] text-[#595959] mt-2">
                Ceci est une simulation frontend : aucun débit bancaire réel n’a été effectué.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 p-4 bg-[#f7f7f7] rounded-lg text-[14px]">
            <div>
              <span className="block text-[12px] text-[#595959]">Numéro de commande</span>
              <strong className="text-[#292929]">{confirmedOrder.orderNumber}</strong>
            </div>
            <div>
              <span className="block text-[12px] text-[#595959]">Statut du paiement</span>
              <strong className="text-[#292929]">{confirmedOrder.status}</strong>
            </div>
            <div>
              <span className="block text-[12px] text-[#595959]">Mode de paiement</span>
              <strong className="text-[#292929]">
                {confirmedOrder.paymentMethod === 'card'
                  ? `Carte (•••• ${confirmedOrder.cardLast4})`
                  : confirmedOrder.paymentMethod === 'transfer'
                  ? 'Virement bancaire'
                  : 'À la livraison'}
              </strong>
            </div>
            <div>
              <span className="block text-[12px] text-[#595959]">Total TTC</span>
              <strong className="text-[#292929] tabular-nums">
                {formatPrice(confirmedOrder.total)}
              </strong>
            </div>
          </div>

          <h2 className="text-[18px] font-semibold text-[#292929] mb-3">
            Détail des articles commandés
          </h2>
          <div className="border border-[#dcdcdc] rounded-lg divide-y divide-[#dcdcdc] mb-6">
            {confirmedOrder.items.map((item) => (
              <div
                key={item.productId}
                className="p-3.5 flex items-center justify-between gap-4 text-[14px]"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 rounded object-cover border border-[#dcdcdc]"
                  />
                  <div>
                    <p className="font-semibold text-[#292929]">{item.title}</p>
                    <p className="text-[12px] text-[#595959]">
                      Quantité : {item.quantity} × {formatPrice(item.unitPrice)}
                    </p>
                  </div>
                </div>
                <span className="font-semibold text-[#292929] tabular-nums shrink-0">
                  {formatPrice(item.unitPrice * item.quantity)}
                </span>
              </div>
            ))}
          </div>

          <div className="mb-8 text-[14px] text-[#595959]">
            <p className="font-semibold text-[#292929] mb-1">
              {confirmedOrder.deliveryMethod === 'home'
                ? 'Adresse de livraison :'
                : 'Point de retrait :'}
            </p>
            <p>
              {confirmedOrder.shippingAddress.firstName}{' '}
              {confirmedOrder.shippingAddress.lastName}
            </p>
            <p>{confirmedOrder.shippingAddress.street}</p>
            <p>
              {confirmedOrder.shippingAddress.postalCode}{' '}
              {confirmedOrder.shippingAddress.city}
            </p>
            <p>Tél : {confirmedOrder.shippingAddress.phone}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/mon-compte"
              className="px-6 py-3 bg-[#FC8920] hover:bg-[#292929] text-white font-semibold text-[14px] rounded transition-colors"
            >
              Voir mes commandes
            </Link>
            <Link
              to="/boutique"
              className="px-6 py-3 bg-[#595959] hover:bg-[#292929] text-white font-semibold text-[14px] rounded transition-colors"
            >
              Continuer les achats
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1140px] mx-auto px-4 sm:px-6 py-10">
      <div className="mb-4">
        <Breadcrumb
          align="left"
          light={false}
          items={[
            { label: 'Accueil', path: '/' },
            { label: 'Panier', path: '/panier' },
            { label: 'Validation de la commande' },
          ]}
        />
      </div>

      <h1 className="text-[30px] sm:text-[35px] font-semibold text-[#292929] mb-6">
        Validation de la commande
      </h1>

      {items.length === 0 ? (
        <div className="border border-[#dcdcdc] rounded-[10px] p-10 text-center bg-[#f7f7f7]">
          <p className="text-[16px] text-[#595959] mb-5">
            Votre panier est vide. Ajoutez des produits avant de procéder au paiement.
          </p>
          <Link
            to="/boutique"
            className="inline-block px-6 py-3 bg-[#FC8920] hover:bg-[#292929] text-white font-semibold rounded transition-colors"
          >
            Accéder à la boutique
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmitOrder} noValidate className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left 2 Columns: Account, Address, Delivery, Payment */}
          <div className="lg:col-span-2 space-y-6">
            {hasOrderConflict && (
              <div className="p-4 bg-[#FC8920]/15 border border-[#FC8920] rounded-[10px] flex items-start gap-3 text-[14px] text-[#292929]">
                <AlertTriangle className="w-5 h-5 text-[#FC8920] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Commande incompatible</p>
                  <p className="mt-1">
                    Les commandes de pellets et de bois en vrac ne peuvent pas être passées dans la même commande.{' '}
                    <Link to="/panier" className="text-[#FC8920] font-semibold underline">
                      Modifier mon panier
                    </Link>
                    .
                  </p>
                </div>
              </div>
            )}

            {/* Account Status Banner */}
            {user ? (
              <div className="p-4 bg-[#f7f7f7] border border-[#dcdcdc] rounded-[10px] flex items-center justify-between gap-4 text-[14px]">
                <div className="flex items-center gap-2.5 text-[#292929]">
                  <UserCheck className="w-5 h-5 text-[#FC8920] shrink-0" />
                  <span>
                    Connecté en tant que{' '}
                    <strong>
                      {user.firstName} {user.lastName}
                    </strong>{' '}
                    ({user.email})
                  </span>
                </div>
                <Link to="/mon-compte" className="text-[#FC8920] font-semibold hover:underline shrink-0">
                  Changer de compte
                </Link>
              </div>
            ) : (
              <div className="p-4 bg-[#f7f7f7] border border-[#dcdcdc] rounded-[10px] flex flex-wrap items-center justify-between gap-3 text-[14px]">
                <span className="text-[#292929]">
                  Déjà client Bois express ? Connectez-vous pour pré-remplir vos coordonnées.
                </span>
                <Link
                  to="/mon-compte?redirect=/commander"
                  className="px-4 py-2 bg-[#292929] hover:bg-[#FC8920] text-white font-semibold text-[13px] rounded transition-colors"
                >
                  Se connecter / S’inscrire
                </Link>
              </div>
            )}

            {/* Section 1: Shipping / Billing details */}
            <div className="border border-[#d5d5d5] rounded-[10px] p-6 bg-white">
              <h2 className="text-[20px] font-semibold text-[#292929] pb-3 mb-5 border-b border-[#dcdcdc]">
                1. Coordonnées et livraison
              </h2>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="chk-firstName" className="block text-[14px] font-medium text-[#292929] mb-1">
                      Prénom *
                    </label>
                    <input
                      id="chk-firstName"
                      type="text"
                      value={shipping.firstName}
                      onChange={(e) => setShipping({ ...shipping, firstName: e.target.value })}
                      className="w-full border border-[#dcdcdc] px-3.5 py-2.5 text-[14px] rounded focus:outline-none focus:border-[#FC8920]"
                    />
                    {errors.firstName && (
                      <p className="text-[12px] text-red-600 mt-1">{errors.firstName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="chk-lastName" className="block text-[14px] font-medium text-[#292929] mb-1">
                      Nom *
                    </label>
                    <input
                      id="chk-lastName"
                      type="text"
                      value={shipping.lastName}
                      onChange={(e) => setShipping({ ...shipping, lastName: e.target.value })}
                      className="w-full border border-[#dcdcdc] px-3.5 py-2.5 text-[14px] rounded focus:outline-none focus:border-[#FC8920]"
                    />
                    {errors.lastName && (
                      <p className="text-[12px] text-red-600 mt-1">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="chk-email" className="block text-[14px] font-medium text-[#292929] mb-1">
                      Adresse e-mail *
                    </label>
                    <input
                      id="chk-email"
                      type="email"
                      value={shipping.email}
                      onChange={(e) => setShipping({ ...shipping, email: e.target.value })}
                      className="w-full border border-[#dcdcdc] px-3.5 py-2.5 text-[14px] rounded focus:outline-none focus:border-[#FC8920]"
                    />
                    {errors.email && (
                      <p className="text-[12px] text-red-600 mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="chk-phone" className="block text-[14px] font-medium text-[#292929] mb-1">
                      Téléphone *
                    </label>
                    <input
                      id="chk-phone"
                      type="tel"
                      value={shipping.phone}
                      onChange={(e) => setShipping({ ...shipping, phone: e.target.value })}
                      className="w-full border border-[#dcdcdc] px-3.5 py-2.5 text-[14px] rounded focus:outline-none focus:border-[#FC8920]"
                    />
                    {errors.phone && (
                      <p className="text-[12px] text-red-600 mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Delivery method choice */}
                <div className="pt-2">
                  <span className="block text-[14px] font-medium text-[#292929] mb-2">
                    Mode de livraison
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label
                      className={`p-3.5 border rounded-lg cursor-pointer flex items-start gap-3 ${
                        deliveryMethod === 'home'
                          ? 'border-[#FC8920] bg-[#FC8920]/5'
                          : 'border-[#dcdcdc]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="deliveryMethod"
                        checked={deliveryMethod === 'home'}
                        onChange={() => setDeliveryMethod('home')}
                        className="mt-1 accent-[#FC8920]"
                      />
                      <div className="text-[13px]">
                        <p className="font-semibold text-[#292929] flex items-center gap-1.5">
                          <Truck className="w-4 h-4 text-[#FC8920]" />
                          Livraison à domicile
                        </p>
                        <p className="text-[#595959] mt-0.5">
                          Camion benne 7.5T (vrac) ou 19T hayon (palettes)
                        </p>
                      </div>
                    </label>

                    <label
                      className={`p-3.5 border rounded-lg cursor-pointer flex items-start gap-3 ${
                        deliveryMethod === 'pickup'
                          ? 'border-[#FC8920] bg-[#FC8920]/5'
                          : 'border-[#dcdcdc]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="deliveryMethod"
                        checked={deliveryMethod === 'pickup'}
                        onChange={() => setDeliveryMethod('pickup')}
                        className="mt-1 accent-[#FC8920]"
                      />
                      <div className="text-[13px]">
                        <p className="font-semibold text-[#292929]">
                          Retrait au dépôt (Forbach)
                        </p>
                        <p className="text-[#595959] mt-0.5">
                          3 rue de Schoeneck, 57600 Forbach
                        </p>
                      </div>
                    </label>
                  </div>
                </div>

                {deliveryMethod === 'home' && (
                  <>
                    <div>
                      <label htmlFor="chk-street" className="block text-[14px] font-medium text-[#292929] mb-1">
                        Adresse de livraison *
                      </label>
                      <input
                        id="chk-street"
                        type="text"
                        value={shipping.street}
                        onChange={(e) => setShipping({ ...shipping, street: e.target.value })}
                        placeholder="Numéro et nom de rue"
                        className="w-full border border-[#dcdcdc] px-3.5 py-2.5 text-[14px] rounded focus:outline-none focus:border-[#FC8920]"
                      />
                      {errors.street && (
                        <p className="text-[12px] text-red-600 mt-1">{errors.street}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="chk-postal" className="block text-[14px] font-medium text-[#292929] mb-1">
                          Code postal *
                        </label>
                        <input
                          id="chk-postal"
                          type="text"
                          value={shipping.postalCode}
                          onChange={(e) => setShipping({ ...shipping, postalCode: e.target.value })}
                          placeholder="57600"
                          className="w-full border border-[#dcdcdc] px-3.5 py-2.5 text-[14px] rounded focus:outline-none focus:border-[#FC8920]"
                        />
                        {errors.postalCode && (
                          <p className="text-[12px] text-red-600 mt-1">{errors.postalCode}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="chk-city" className="block text-[14px] font-medium text-[#292929] mb-1">
                          Ville *
                        </label>
                        <input
                          id="chk-city"
                          type="text"
                          value={shipping.city}
                          onChange={(e) => setShipping({ ...shipping, city: e.target.value })}
                          placeholder="Forbach"
                          className="w-full border border-[#dcdcdc] px-3.5 py-2.5 text-[14px] rounded focus:outline-none focus:border-[#FC8920]"
                        />
                        {errors.city && (
                          <p className="text-[12px] text-red-600 mt-1">{errors.city}</p>
                        )}
                      </div>
                    </div>
                  </>
                )}

                <div>
                  <label htmlFor="chk-notes" className="block text-[14px] font-medium text-[#292929] mb-1">
                    Instructions de livraison (accès camion, digicode, créneau…)
                  </label>
                  <textarea
                    id="chk-notes"
                    rows={2}
                    value={shipping.notes}
                    onChange={(e) => setShipping({ ...shipping, notes: e.target.value })}
                    className="w-full border border-[#dcdcdc] px-3.5 py-2 text-[14px] rounded focus:outline-none focus:border-[#FC8920]"
                  />
                </div>

                {!user && (
                  <div className="pt-2 border-t border-[#e9e9e9]">
                    <label className="flex items-center gap-2 text-[14px] text-[#292929] font-medium cursor-pointer">
                      <input
                        type="checkbox"
                        checked={createAccount}
                        onChange={(e) => setCreateAccount(e.target.checked)}
                        className="w-4 h-4 accent-[#FC8920] cursor-pointer"
                      />
                      Créer un compte client Bois express avec ces informations
                    </label>

                    {createAccount && (
                      <div className="mt-3 max-w-[340px]">
                        <label htmlFor="chk-pwd" className="block text-[13px] font-medium text-[#292929] mb-1">
                          Choisir un mot de passe *
                        </label>
                        <input
                          id="chk-pwd"
                          type="password"
                          value={accountPassword}
                          onChange={(e) => setAccountPassword(e.target.value)}
                          placeholder="6 caractères minimum"
                          className="w-full border border-[#dcdcdc] px-3.5 py-2 text-[14px] rounded focus:outline-none focus:border-[#FC8920]"
                        />
                        {errors.accountPassword && (
                          <p className="text-[12px] text-red-600 mt-1">{errors.accountPassword}</p>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Section 2: Simulated Payment */}
            <div className="border border-[#d5d5d5] rounded-[10px] p-6 bg-white">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-5 border-b border-[#dcdcdc]">
                <h2 className="text-[20px] font-semibold text-[#292929] flex items-center gap-2">
                  <Lock className="w-5 h-5 text-[#FC8920]" />
                  2. Paiement (Simulation)
                </h2>
                <span className="text-[12px] font-semibold text-[#595959]">
                  Environnement de démonstration sans débit réel
                </span>
              </div>

              <div className="space-y-3">
                {/* Credit Card Option */}
                <div
                  className={`border rounded-lg p-4 ${
                    paymentMethod === 'card'
                      ? 'border-[#FC8920] bg-[#FC8920]/5'
                      : 'border-[#dcdcdc]'
                  }`}
                >
                  <label className="flex items-center justify-between gap-3 cursor-pointer">
                    <span className="flex items-center gap-2.5 font-semibold text-[15px] text-[#292929]">
                      <input
                        type="radio"
                        name="paymentMethod"
                        checked={paymentMethod === 'card'}
                        onChange={() => setPaymentMethod('card')}
                        className="accent-[#FC8920]"
                      />
                      <CreditCard className="w-5 h-5 text-[#FC8920]" />
                      Carte bancaire (CB / Visa / Mastercard)
                    </span>
                    {paymentMethod === 'card' && (
                      <button
                        type="button"
                        onClick={fillTestCard}
                        className="text-[12px] font-semibold text-[#FC8920] hover:underline cursor-pointer"
                      >
                        Remplir carte de test
                      </button>
                    )}
                  </label>

                  {paymentMethod === 'card' && (
                    <div className="mt-4 pt-4 border-t border-[#dcdcdc]/70 space-y-3">
                      <div>
                        <label htmlFor="card-holder" className="block text-[13px] font-medium text-[#292929] mb-1">
                          Titulaire de la carte *
                        </label>
                        <input
                          id="card-holder"
                          type="text"
                          value={card.holder}
                          onChange={(e) => setCard({ ...card, holder: e.target.value })}
                          placeholder="JEAN DUPONT"
                          className="w-full border border-[#dcdcdc] bg-white px-3.5 py-2 text-[14px] rounded focus:outline-none focus:border-[#FC8920]"
                        />
                        {errors.cardHolder && (
                          <p className="text-[12px] text-red-600 mt-1">{errors.cardHolder}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="card-number" className="block text-[13px] font-medium text-[#292929] mb-1">
                          Numéro de carte *
                        </label>
                        <input
                          id="card-number"
                          type="text"
                          inputMode="numeric"
                          value={card.number}
                          onChange={(e) =>
                            setCard({ ...card, number: formatCardNumber(e.target.value) })
                          }
                          placeholder="4242 4242 4242 4242"
                          className="w-full border border-[#dcdcdc] bg-white px-3.5 py-2 text-[14px] rounded tabular-nums focus:outline-none focus:border-[#FC8920]"
                        />
                        {errors.cardNumber && (
                          <p className="text-[12px] text-red-600 mt-1">{errors.cardNumber}</p>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="card-expiry" className="block text-[13px] font-medium text-[#292929] mb-1">
                            Expiration (MM/AA) *
                          </label>
                          <input
                            id="card-expiry"
                            type="text"
                            inputMode="numeric"
                            value={card.expiry}
                            onChange={(e) =>
                              setCard({ ...card, expiry: formatExpiry(e.target.value) })
                            }
                            placeholder="12/28"
                            className="w-full border border-[#dcdcdc] bg-white px-3.5 py-2 text-[14px] rounded tabular-nums focus:outline-none focus:border-[#FC8920]"
                          />
                          {errors.cardExpiry && (
                            <p className="text-[12px] text-red-600 mt-1">{errors.cardExpiry}</p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="card-cvc" className="block text-[13px] font-medium text-[#292929] mb-1">
                            Cryptogramme (CVC) *
                          </label>
                          <input
                            id="card-cvc"
                            type="text"
                            inputMode="numeric"
                            maxLength={4}
                            value={card.cvc}
                            onChange={(e) =>
                              setCard({
                                ...card,
                                cvc: e.target.value.replace(/\D/g, '').slice(0, 4),
                              })
                            }
                            placeholder="123"
                            className="w-full border border-[#dcdcdc] bg-white px-3.5 py-2 text-[14px] rounded tabular-nums focus:outline-none focus:border-[#FC8920]"
                          />
                          {errors.cardCvc && (
                            <p className="text-[12px] text-red-600 mt-1">{errors.cardCvc}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bank Transfer Option */}
                <div
                  className={`border rounded-lg p-4 ${
                    paymentMethod === 'transfer'
                      ? 'border-[#FC8920] bg-[#FC8920]/5'
                      : 'border-[#dcdcdc]'
                  }`}
                >
                  <label className="flex items-center gap-2.5 font-semibold text-[15px] text-[#292929] cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === 'transfer'}
                      onChange={() => setPaymentMethod('transfer')}
                      className="accent-[#FC8920]"
                    />
                    <Landmark className="w-5 h-5 text-[#FC8920]" />
                    Virement bancaire (Simulation)
                  </label>
                  {paymentMethod === 'transfer' && (
                    <p className="mt-2.5 text-[13px] text-[#595959] pl-6">
                      Votre commande sera enregistrée avec le statut « En attente de virement ». Les coordonnées bancaires simulées Bois express vous seront affichées sur le récapitulatif.
                    </p>
                  )}
                </div>

                {/* Cash / Card on Delivery */}
                <div
                  className={`border rounded-lg p-4 ${
                    paymentMethod === 'cod'
                      ? 'border-[#FC8920] bg-[#FC8920]/5'
                      : 'border-[#dcdcdc]'
                  }`}
                >
                  <label className="flex items-center gap-2.5 font-semibold text-[15px] text-[#292929] cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                      className="accent-[#FC8920]"
                    />
                    <Truck className="w-5 h-5 text-[#FC8920]" />
                    Paiement à la livraison (chèque ou espèces au chauffeur)
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="border border-[#d5d5d5] rounded-[10px] p-6 bg-[#f7f7f7] lg:sticky lg:top-6">
            <h2 className="text-[20px] font-semibold text-[#292929] pb-3 mb-4 border-b border-[#dcdcdc]">
              Votre commande
            </h2>

            <ul className="divide-y divide-[#dcdcdc] mb-4 max-h-[300px] overflow-y-auto">
              {items.map((entry) => (
                <li
                  key={entry.product.id}
                  className="py-3 flex items-start justify-between gap-3 text-[14px]"
                >
                  <div className="min-w-0">
                    <p className="font-medium text-[#292929] leading-snug">
                      {entry.product.title}
                    </p>
                    <span className="text-[12px] text-[#595959] tabular-nums">
                      Qté : {entry.quantity}
                    </span>
                  </div>
                  <span className="font-semibold text-[#292929] tabular-nums shrink-0">
                    {formatPrice(entry.product.price * entry.quantity)}
                  </span>
                </li>
              ))}
            </ul>

            <div className="space-y-2.5 py-3 border-t border-b border-[#dcdcdc] text-[14px]">
              <div className="flex justify-between">
                <span className="text-[#595959]">Sous-total</span>
                <span className="font-semibold text-[#292929] tabular-nums">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#595959]">Livraison</span>
                <span className="font-semibold text-[#292929] tabular-nums">
                  {deliveryFee === 0 ? 'Incluse (0,00 €)' : formatPrice(deliveryFee)}
                </span>
              </div>
              <div className="flex justify-between text-[18px] pt-2">
                <span className="font-semibold text-[#292929]">Total TTC</span>
                <span className="font-bold text-[#292929] tabular-nums">
                  {formatPrice(total)}
                </span>
              </div>
            </div>

            <div className="mt-4">
              <label className="flex items-start gap-2.5 text-[13px] text-[#595959] cursor-pointer">
                <input
                  type="checkbox"
                  checked={acceptCgv}
                  onChange={(e) => setAcceptCgv(e.target.checked)}
                  className="mt-0.5 w-4 h-4 accent-[#FC8920] cursor-pointer"
                />
                <span>
                  J’ai lu et j’accepte les{' '}
                  <Link to="/conditions-generales-de-vente" className="text-[#FC8920] underline">
                    conditions générales de vente
                  </Link>
                  .
                </span>
              </label>
              {errors.acceptCgv && (
                <p className="text-[12px] text-red-600 mt-1">{errors.acceptCgv}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={hasOrderConflict || isProcessing}
              className="mt-5 w-full py-3.5 px-5 bg-[#FC8920] hover:bg-[#292929] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-[15px] rounded transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Validation du paiement…
                </>
              ) : (
                `Payer ${formatPrice(total)} (Simulation)`
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
