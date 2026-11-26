import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';

export const Navbar: React.FC = () => {
  const { t } = useLanguage();

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
    <nav aria-label={t.header.mainNavAria} className="hidden lg:block">
      <ul className="flex items-center justify-end gap-5 xl:gap-7">
        {navItems.map((item) => (
          <li key={item.path} className="shrink-0">
            <NavLink
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `text-[15px] xl:text-[16px] font-medium whitespace-nowrap transition-colors duration-200 py-1.5 ${
                  isActive
                    ? 'text-[#FC8920]'
                    : 'text-white hover:text-[#FC8920]'
                }`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
