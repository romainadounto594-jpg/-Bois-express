import React from 'react';
import { NavLink } from 'react-router-dom';
import { X, Phone, Mail, MapPin, UserCircle, Globe } from 'lucide-react';
import { COMPANY_INFO } from '../data/navigation';
import { useAuth } from '../hooks/useAuth';
import { useLanguage } from '../hooks/useLanguage';
import { BrandLogo } from './BrandLogo';
import { LanguageSwitcher } from './LanguageSwitcher';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { user } = useAuth();
  const { t } = useLanguage();

  if (!isOpen) return null;

  const navItems = [
    { label: t.nav.home, path: '/' },
    { label: t.nav.bois, path: '/type-de-chauffage/bois' },
    { label: t.nav.briquettes, path: '/type-de-chauffage/briquettes' },
    { label: t.nav.pellets, path: '/type-de-chauffage/pellets' },
    { label: t.nav.granules, path: '/type-de-chauffage/granules-de-bois' },
    { label: t.nav.allumage, path: '/type-de-chauffage/allumage' },
    { label: t.nav.actualites, path: '/actualites' },
    { label: t.nav.contact, path: '/contact' },
  ];

  return (
    <div className="lg:hidden fixed inset-0 z-50 flex flex-col bg-[#292929] text-white overflow-y-auto">
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/15">
        <NavLink to="/" onClick={onClose} aria-label={t.header.homeAria}>
          <BrandLogo variant="horizontal" />
        </NavLink>
        <button
          type="button"
          onClick={onClose}
          aria-label={t.nav.closeMenu}
          className="p-2.5 text-white hover:text-[#FC8920] transition-colors cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <nav aria-label={t.nav.mobileNavAria} className="flex-1 px-4 py-4">
        <ul className="divide-y divide-[#dcdcdc]/20">
          {navItems.map((item) => (
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
              {t.nav.cart}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mon-compte"
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-2.5 py-3.5 px-2 text-[16px] font-medium transition-colors ${
                  isActive ? 'text-[#FC8920]' : 'text-white hover:text-[#FC8920]'
                }`
              }
            >
              <UserCircle className="w-5 h-5 text-[#FC8920]" />
              <span>
                {user ? `${t.nav.accountPrefix} (${user.firstName})` : t.nav.loginRegister}
              </span>
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
              {t.nav.deliveryZones}
            </NavLink>
          </li>
        </ul>

        <div className="mt-5 pt-4 border-t border-white/15 px-2">
          <p className="text-[13px] font-semibold text-white/80 flex items-center gap-2 mb-2.5">
            <Globe className="w-4 h-4 text-[#FC8920]" />
            <span>{t.common.chooseLanguage}</span>
          </p>
          <LanguageSwitcher variant="inline" onSelect={onClose} />
        </div>
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
