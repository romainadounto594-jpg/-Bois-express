import React from 'react';
import { NavLink } from 'react-router-dom';
import { MAIN_NAV_ITEMS } from '../data/navigation';

export const Navbar: React.FC = () => {
  return (
    <nav aria-label="Navigation principale" className="hidden lg:block">
      <ul className="flex items-center justify-end gap-5 xl:gap-7">
        {MAIN_NAV_ITEMS.map((item) => (
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
