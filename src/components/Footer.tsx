import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail } from 'lucide-react';
import { COMPANY_INFO, FOOTER_LEGAL_LINKS } from '../data/navigation';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onOpenCookieSettings: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCookieSettings }) => {
  return (
    <footer className="bg-[#292929] text-white w-full">
      <div className="max-w-[1347px] mx-auto px-4 sm:px-6 pt-10 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Column 1: Footer Logo */}
          <div className="flex justify-center md:justify-start">
            <Link to="/" aria-label="Accueil Bois express">
              <BrandLogo variant="stacked" />
            </Link>
          </div>

          {/* Column 2: Contact Info */}
          <div className="flex justify-center">
            <ul className="space-y-4 text-[16px] font-normal">
              <li>
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="flex items-center gap-3 hover:text-[#FC8920] transition-colors"
                >
                  <Phone className="w-[18px] h-[18px] text-[#FC8920] shrink-0" />
                  <span>{COMPANY_INFO.phoneDisplay}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-[18px] h-[18px] text-[#FC8920] shrink-0 mt-1" />
                <span>
                  {COMPANY_INFO.address}
                  <br />
                  {COMPANY_INFO.postalCity}
                </span>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-3 hover:text-[#FC8920] transition-colors"
                >
                  <Mail className="w-[18px] h-[18px] text-[#FC8920] shrink-0" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal Links */}
          <div className="flex justify-center md:justify-end">
            <ul className="space-y-2.5 text-[16px] font-normal text-center md:text-left">
              {FOOTER_LEGAL_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white hover:text-[#FC8920] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={onOpenCookieSettings}
                  className="text-white hover:text-[#FC8920] transition-colors cursor-pointer"
                >
                  Gestions des Cookies
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Row */}
      <div className="bg-[#292929] border-t border-white/10 py-4 px-4">
        <div className="max-w-[1347px] mx-auto text-center text-[15px] sm:text-[16px] text-white flex flex-wrap items-center justify-center gap-2">
          <span>© BOIS EXPRESS – 2026. Tous droits réservés.</span>
        </div>
      </div>
    </footer>
  );
};
