import React from 'react';
import { NavLink } from 'react-router-dom';
import { X, Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO, MAIN_NAV_ITEMS } from '../data/navigation';
import { BrandLogo } from './BrandLogo';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 z-50 flex flex-col bg-[#292929] text-white overflow-y-auto">
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/15">
        <NavLink to="/" onClick={onClose} aria-label="Accueil Bois express">
          <BrandLogo variant="horizontal" />
        </NavLink>
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer le menu"
          className="p-2.5 text-white hover:text-[#FC8920] transition-colors cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <nav aria-label="Menu mobile" className="flex-1 px-4 py-4">
        <ul className="divide-y divide-[#dcdcdc]/20">
          {MAIN_NAV_ITEMS.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === '/'}
                onClick={onClose}
                className={({ isActive }) =>
                  `block py-3.5 px-2 text-[16px] font-medium transition-colors ${
                    isActive ? 'text-[#FC8920]' : 'text-white hover:text-[#FC8920]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              to="/panier"
              onClick={onClose}
              className={({ isActive }) =>
                `block py-3.5 px-2 text-[16px] font-medium transition-colors ${
                  isActive ? 'text-[#FC8920]' : 'text-white hover:text-[#FC8920]'
                }`
              }
            >
              Panier
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/zones-de-livraison"
              onClick={onClose}
              className={({ isActive }) =>
                `block py-3.5 px-2 text-[16px] font-medium transition-colors ${
                  isActive ? 'text-[#FC8920]' : 'text-white hover:text-[#FC8920]'
                }`
              }
            >
              Zones de livraison
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="px-6 py-5 bg-black/25 space-y-3 text-sm">
        <div className="flex items-center gap-3">
          <MapPin className="w-4 h-4 text-[#FC8920] shrink-0" />
          <span>{COMPANY_INFO.fullAddress}</span>
        </div>
        <a
          href={COMPANY_INFO.phoneHref}
          className="flex items-center gap-3 hover:text-[#FC8920] transition-colors"
        >
          <Phone className="w-4 h-4 text-[#FC8920] shrink-0" />
          <span>{COMPANY_INFO.phoneDisplay}</span>
        </a>
        <a
          href={`mailto:${COMPANY_INFO.email}`}
          className="flex items-center gap-3 hover:text-[#FC8920] transition-colors"
        >
          <Mail className="w-4 h-4 text-[#FC8920] shrink-0" />
          <span>{COMPANY_INFO.email}</span>
        </a>
      </div>
    </div>
  );
};
