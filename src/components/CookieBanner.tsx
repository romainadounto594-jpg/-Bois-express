import React, { useState } from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { CookiePreferences } from '../types';

export const COOKIE_STORAGE_KEY = 'bois_chauffages_cookies_v1';

interface CookieBannerProps {
  isModalOpen: boolean;
  onCloseModal: () => void;
  onOpenModal: () => void;
}

const DEFAULT_PREFS: CookiePreferences = {
  essential: true,
  analytics: false,
  apis: false,
  advertising: false,
  social: false,
  video: false,
  updatedAt: '',
};

function getStoredPreferences(): CookiePreferences | null {
  try {
    const raw = window.localStorage.getItem(COOKIE_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as CookiePreferences;
  } catch {
    return null;
  }
}

export const CookieBanner: React.FC<CookieBannerProps> = ({
  isModalOpen,
  onCloseModal,
  onOpenModal,
}) => {
  const [savedPrefs, setSavedPrefs] = useState<CookiePreferences | null>(
    getStoredPreferences
  );
  const [draft, setDraft] = useState<CookiePreferences>(
    () => getStoredPreferences() ?? DEFAULT_PREFS
  );

  const persistPrefs = (prefs: CookiePreferences) => {
    const next: CookiePreferences = {
      ...prefs,
      essential: true,
      updatedAt: new Date().toISOString(),
    };
    try {
      window.localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(next));
    } catch {
      // Ignore storage error
    }
    setSavedPrefs(next);
    setDraft(next);
    onCloseModal();
  };

  const acceptAll = () => {
    persistPrefs({
      essential: true,
      analytics: true,
      apis: true,
      advertising: true,
      social: true,
      video: true,
      updatedAt: '',
    });
  };

  const refuseAll = () => {
    persistPrefs({
      essential: true,
      analytics: false,
      apis: false,
      advertising: false,
      social: false,
      video: false,
      updatedAt: '',
    });
  };

  return (
    <>
      {/* Slim non-blocking bottom cookie consent bar when no choice saved yet */}
      {!savedPrefs && !isModalOpen && (
        <div
          role="region"
          aria-label="Gestion des cookies"
          className="fixed bottom-0 inset-x-0 z-40 bg-[#292929] text-white border-t border-white/15 px-4 py-3 shadow-lg"
        >
          <div className="max-w-[1347px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[13px]">
            <p className="text-white/90 text-center sm:text-left">
              Ce site utilise des cookies nécessaires à son fonctionnement ainsi que des traceurs soumis à votre consentement (durée de vie maximale : 13 mois).
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 shrink-0">
              <button
                type="button"
                onClick={onOpenModal}
                className="px-3 py-1.5 border border-white/30 hover:border-white text-white rounded text-[12px] font-medium transition-colors cursor-pointer whitespace-nowrap"
              >
                Personnaliser
              </button>
              <button
                type="button"
                onClick={refuseAll}
                className="px-3 py-1.5 bg-[#595959] hover:bg-black text-white rounded text-[12px] font-semibold transition-colors cursor-pointer whitespace-nowrap"
              >
                Tout refuser
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="px-3.5 py-1.5 bg-[#FC8920] hover:bg-white hover:text-[#292929] text-white rounded text-[12px] font-semibold transition-colors cursor-pointer whitespace-nowrap"
              >
                Tout accepter
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Preferences Panel Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-modal-title"
            className="bg-white rounded-[10px] max-w-[620px] w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            <div className="flex items-center justify-between px-6 py-4 bg-[#292929] text-white rounded-t-[10px]">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#FC8920]" />
                <h2 id="cookie-modal-title" className="text-[18px] font-semibold">
                  Panneau de gestion des cookies
                </h2>
              </div>
              <button
                type="button"
                onClick={onCloseModal}
                aria-label="Fermer"
                className="p-1 text-white/80 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 text-[14px] text-[#595959]">
              <p>
                Conformément à la politique de protection des données de Bois express, vous pouvez autoriser ou refuser les catégories de cookies ci-dessous à tout moment.
              </p>

              <div className="divide-y divide-[#dcdcdc] border border-[#dcdcdc] rounded-lg">
                <div className="p-4 flex items-center justify-between gap-4 bg-[#f7f7f7]">
                  <div>
                    <p className="font-semibold text-[#292929]">Cookies exemptés de consentement</p>
                    <p className="text-[12px]">Nécessaires à la consultation du Site et à la gestion du panier.</p>
                  </div>
                  <span className="text-[12px] font-semibold text-[#FC8920] whitespace-nowrap">
                    Toujours actif
                  </span>
                </div>

                {(
                  [
                    {
                      key: 'analytics',
                      label: 'Cookies de mesure d’audience',
                      desc: 'Établir des statistiques sur les visites et visiteurs.',
                    },
                    {
                      key: 'apis',
                      label: 'Cookies d’APIs',
                      desc: 'Charger des scripts interactifs de géolocalisation et de sécurité.',
                    },
                    {
                      key: 'advertising',
                      label: 'Cookies publicitaires',
                      desc: 'Proposer des publicités les plus pertinentes possibles.',
                    },
                    {
                      key: 'social',
                      label: 'Cookies de réseaux sociaux',
                      desc: 'Interagir avec les réseaux sociaux en partageant des contenus.',
                    },
                    {
                      key: 'video',
                      label: 'Cookies de vidéos',
                      desc: 'Consulter des vidéos informatives relatives à nos produits et services.',
                    },
                  ] as const
                ).map((item) => (
                  <label
                    key={item.key}
                    className="p-4 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#f7f7f7]/60"
                  >
                    <div>
                      <p className="font-semibold text-[#292929]">{item.label}</p>
                      <p className="text-[12px]">{item.desc}</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={draft[item.key]}
                      onChange={(e) =>
                        setDraft((prev) => ({ ...prev, [item.key]: e.target.checked }))
                      }
                      className="w-4 h-4 accent-[#FC8920] cursor-pointer shrink-0"
                    />
                  </label>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-end gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={refuseAll}
                  className="px-4 py-2 bg-[#595959] hover:bg-[#292929] text-white text-[13px] font-semibold rounded transition-colors cursor-pointer"
                >
                  Tout refuser
                </button>
                <button
                  type="button"
                  onClick={() => persistPrefs(draft)}
                  className="px-4 py-2 border border-[#292929] text-[#292929] hover:bg-[#292929] hover:text-white text-[13px] font-semibold rounded transition-colors cursor-pointer"
                >
                  Enregistrer mes choix
                </button>
                <button
                  type="button"
                  onClick={acceptAll}
                  className="px-4 py-2 bg-[#FC8920] hover:bg-[#292929] text-white text-[13px] font-semibold rounded transition-colors cursor-pointer"
                >
                  Tout accepter
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
