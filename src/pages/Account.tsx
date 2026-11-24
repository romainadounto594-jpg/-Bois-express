import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Phone, MapPin, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../data/navigation';
import { useCart } from '../hooks/useCart';
import { formatPrice } from '../context/CartContext';
import { PageBanner } from '../components/PageBanner';

export const Account: React.FC = () => {
  const { totalItems, subtotal } = useCart();

  return (
    <div>
      <PageBanner
        title="Mon compte"
        backgroundImage="/images/cat-allumage.webp"
        breadcrumbs={[
          { label: 'Accueil', path: '/' },
          { label: 'Mon compte' },
        ]}
      />

      <section className="max-w-[960px] mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-[#d5d5d5] rounded-[10px] p-6 bg-white">
            <h2 className="text-[20px] font-semibold text-[#292929] mb-3 flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-[#FC8920]" />
              Votre panier en cours
            </h2>
            <p className="text-[15px] text-[#595959] mb-4">
              Vous avez actuellement{' '}
              <strong className="text-[#292929] tabular-nums">{totalItems}</strong>{' '}
              article(s) dans votre panier pour un montant de{' '}
              <strong className="text-[#292929] tabular-nums">{formatPrice(subtotal)}</strong>.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/panier"
                className="px-5 py-2.5 bg-[#FC8920] hover:bg-[#292929] text-white font-semibold text-[14px] rounded transition-colors"
              >
                Accéder au panier
              </Link>
              <Link
                to="/boutique"
                className="px-5 py-2.5 bg-[#595959] hover:bg-[#292929] text-white font-semibold text-[14px] rounded transition-colors"
              >
                Voir le catalogue
              </Link>
            </div>
          </div>

          <div className="border border-[#d5d5d5] rounded-[10px] p-6 bg-[#f7f7f7]">
            <h2 className="text-[20px] font-semibold text-[#292929] mb-3">
              Service client Bois express
            </h2>
            <p className="text-[14px] text-[#595959] mb-4">
              Pour suivre une commande existante, modifier une livraison ou obtenir un devis personnalisé, notre équipe est joignable du lundi au vendredi de 8h à 17h :
            </p>
            <ul className="space-y-2.5 text-[14px] text-[#292929]">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FC8920] shrink-0" />
                <a href={COMPANY_INFO.phoneHref} className="hover:text-[#FC8920]">
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FC8920] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#FC8920]">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#FC8920] shrink-0" />
                <span>{COMPANY_INFO.fullAddress}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
