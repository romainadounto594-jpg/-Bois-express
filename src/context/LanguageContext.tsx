import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { LanguageCode } from '../types';
import { TRANSLATIONS, TranslationSchema } from '../data/translations';

const LANG_STORAGE_KEY = 'bois_express_lang_v1';

const LOCALE_MAP: Record<LanguageCode, string> = {
  fr: 'fr-FR',
  en: 'en-GB',
  de: 'de-DE',
  es: 'es-ES',
};

interface LanguageContextValue {
  language: LanguageCode;
  locale: string;
  setLanguage: (lang: LanguageCode) => void;
  t: TranslationSchema;
}

export const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function loadInitialLanguage(): LanguageCode {
  try {
    const stored = window.localStorage.getItem(LANG_STORAGE_KEY);
    if (stored === 'fr' || stored === 'en' || stored === 'de' || stored === 'es') {
      return stored;
    }
  } catch {
    // Ignore storage error
  }
  return 'fr';
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageCode>(loadInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, language);
    } catch {
      // Ignore storage error
    }
  }, [language]);

  const setLanguage = useCallback((lang: LanguageCode) => {
    setLanguageState(lang);
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      locale: LOCALE_MAP[language],
      setLanguage,
      t: TRANSLATIONS[language],
    }),
    [language, setLanguage]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
