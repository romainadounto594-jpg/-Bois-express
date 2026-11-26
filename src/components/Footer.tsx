import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Globe } from 'lucide-react';
import { COMPANY_INFO } from '../data/navigation';
import { useLanguage } from '../hooks/useLanguage';
import { BrandLogo } from './BrandLogo';
import { LanguageSwitcher } from './LanguageSwitcher';

interface FooterProps {
  onOpenCookieSettings: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCookieSettings }) => {
  const { t } = useLanguage();

  const legalLinks = [
    { label: t.footer.mentionsLegales, path: '/mentions-legales' },
    { label: t.footer.protectionDonnees, path: '/protection-des-donnees' },
    { label: t.footer.cgu, path: '/conditions-dutilisation' },
    { label: t.footer.cgv, path: '/conditions-generales-de-vente' },
  ];

  return (
    <footer className="bg-[#292929] text-white w-full">
      <div className="max-w-[1347px] mx-auto px-4 sm:px-6 pt-10 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Column 1: Footer Logo */}
          <div className="flex justify-center md:justify-start">
            <Link to="/" aria-label={t.header.homeAria}>
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
              {legalLinks.map((link) => (
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
                  {t.footer.cookieSettings}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Language bar inside footer */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[13px] text-white/75 flex items-center gap-2">
            <Globe className="w-4 h-4 text-[#FC8920]" />
            {t.footer.languageTitle} :
          </span>
          <LanguageSwitcher variant="inline" />
        </div>
      </div>

      {/* Bottom Copyright Row */}
      <div className="bg-[#292929] border-t border-white/10 py-4 px-4">
        <div className="max-w-[1347px] mx-auto text-center text-[15px] sm:text-[16px] text-white flex flex-wrap items-center justify-center gap-2">
          <span>{t.footer.copyright}</span>
        </div>
      </div>
    </footer>
  );
};
