import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, UserCircle, ShoppingCart, Menu } from 'lucide-react';
import { COMPANY_INFO, TOP_ANNOUNCEMENT } from '../data/navigation';
import { useCart } from '../hooks/useCart';
import { useAuth } from '../hooks/useAuth';
import { formatPrice } from '../context/CartContext';
import { Navbar } from './Navbar';
import { MobileMenu } from './MobileMenu';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  transparentNav?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ transparentNav = false }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, subtotal, openDrawer } = useCart();
  const { user } = useAuth();

  return (
    <header className="relative z-40 w-full">
      {/* Row 1: Orange announcement bar */}
      <div className="bg-[#FC8920] w-full">
        <div className="max-w-[1600px] mx-auto px-4 py-2 text-center">
          <Link
            to={TOP_ANNOUNCEMENT.path}
            className="text-black font-medium text-[14px] sm:text-[17px] leading-snug hover:underline inline-block"
          >
            {TOP_ANNOUNCEMENT.text}
          </Link>
        </div>
      </div>

      {/* Row 2: Dark contact + account + cart utility bar */}
      <div className="bg-[#292929] w-full">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 py-1.5 flex flex-wrap items-center justify-end gap-x-6 gap-y-2">
          <ul className="hidden md:flex items-center gap-6 lg:gap-10 text-[14px] text-white">
            <li className="flex items-center gap-2 whitespace-nowrap">
              <MapPin className="w-3.5 h-3.5 text-[#FC8920] shrink-0" />
              <span>{COMPANY_INFO.fullAddress}</span>
            </li>
            <li>
              <a
                href={COMPANY_INFO.phoneHref}
                className="flex items-center gap-2 whitespace-nowrap hover:text-[#FC8920] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#FC8920] shrink-0" />
                <span>{COMPANY_INFO.phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 whitespace-nowrap hover:text-[#FC8920] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#FC8920] shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </a>
            </li>
          </ul>

          {/* Mobile quick phone link */}
          <a
            href={COMPANY_INFO.phoneHref}
            className="md:hidden mr-auto flex items-center gap-1.5 text-[13px] text-white hover:text-[#FC8920]"
          >
            <Phone className="w-3.5 h-3.5 text-[#FC8920]" />
            <span>{COMPANY_INFO.phoneDisplay}</span>
          </a>

          <div className="flex items-center gap-4">
            <Link
              to="/mon-compte"
              aria-label="Mon compte"
              className="flex items-center gap-1.5 text-white hover:text-[#FC8920] transition-colors p-1 text-[13px] font-medium"
            >
              <UserCircle className="w-6 h-6 shrink-0" />
              <span className="hidden sm:inline whitespace-nowrap">
                {user ? user.firstName : 'Connexion'}
              </span>
            </Link>

            <button
              type="button"
              onClick={openDrawer}
              aria-label="Ouvrir le panier"
              className="flex items-center gap-2.5 text-white hover:text-[#FC8920] transition-colors py-1.5 px-2 cursor-pointer group"
            >
              <span className="text-[14px] font-medium tabular-nums">
                {formatPrice(subtotal)}
              </span>
              <span className="relative inline-flex items-center">
                <ShoppingCart className="w-5 h-5 text-white group-hover:text-[#FC8920] transition-colors" />
                <span className="ml-1 text-[12px] font-semibold bg-[#FC8920] text-white rounded-full min-w-[20px] h-5 px-1.5 inline-flex items-center justify-center tabular-nums">
                  {totalItems}
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Row 3: Logo + Main Navigation */}
      <div
        className={`w-full transition-colors ${
          transparentNav
            ? 'bg-[#292929] lg:absolute lg:left-0 lg:right-0 lg:bg-transparent'
            : 'bg-[#292929] shadow-sm'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 py-4 flex items-center justify-between gap-4">
          <Link
            to="/"
            aria-label="Accueil Bois express"
            className="shrink-0"
          >
            <BrandLogo variant="horizontal" />
          </Link>

          <div className="flex items-center justify-end flex-1">
            <Navbar />

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Permuter le menu"
              className="lg:hidden bg-[#292929] text-white hover:text-[#FC8920] p-2.5 rounded border border-white/15 transition-colors cursor-pointer"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
};
