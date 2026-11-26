import React from 'react';
import { Link } from 'react-router-dom';
import { getLocalizedLegalPage } from '../data/i18nLegal';
import { useLanguage } from '../hooks/useLanguage';
import { PageBanner } from '../components/PageBanner';

interface LegalProps {
  pageKey: 'mentions-legales' | 'protection-des-donnees' | 'conditions-generales-de-vente' | 'conditions-dutilisation';
  onOpenCookieSettings: () => void;
}

export const Legal: React.FC<LegalProps> = ({ pageKey, onOpenCookieSettings }) => {
  const { language, t } = useLanguage();
  const page = getLocalizedLegalPage(pageKey, language);

  return (
    <div>
      <PageBanner
        title={page.title}
        backgroundImage="/images/cat-allumage.webp"
        breadcrumbs={[
          { label: t.common.home, path: '/' },
          { label: page.breadcrumbLabel },
        ]}
      />

      <section className="max-w-[960px] mx-auto px-4 sm:px-6 py-12">
        <div className="space-y-8 text-[15px] leading-[1.75] text-[#595959]">
          {page.sections.map((section, idx) => (
            <div key={idx} className="space-y-3">
              {section.heading && (
                <h2 className="text-[20px] font-semibold text-[#292929]">
                  {section.heading}
                </h2>
              )}
              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}
            </div>
          ))}
        </div>

        {pageKey === 'protection-des-donnees' && (
          <div className="mt-8 pt-6 border-t border-[#dcdcdc]">
            <button
              type="button"
              onClick={onOpenCookieSettings}
              className="px-6 py-2.5 bg-[#FC8920] hover:bg-[#292929] text-white font-semibold text-[14px] rounded transition-colors cursor-pointer"
            >
              {t.legal.openCookieSettings}
            </button>
          </div>
        )}

        <div className="mt-10 pt-6 border-t border-[#dcdcdc] flex flex-wrap gap-4 text-[14px]">
          <Link to="/mentions-legales" className="text-[#FC8920] hover:underline">
            {t.legal.mentionsLegales}
          </Link>
          <Link to="/protection-des-donnees" className="text-[#FC8920] hover:underline">
            {t.legal.protectionDonnees}
          </Link>
          <Link to="/conditions-dutilisation" className="text-[#FC8920] hover:underline">
            {t.legal.cgu}
          </Link>
          <Link to="/conditions-generales-de-vente" className="text-[#FC8920] hover:underline">
            {t.legal.cgv}
          </Link>
        </div>
      </section>
    </div>
  );
};
