import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Globe, Check } from 'lucide-react';
import { SUPPORTED_LANGUAGES } from '../data/translations';
import { useLanguage } from '../hooks/useLanguage';

interface LanguageSwitcherProps {
  variant?: 'dropdown' | 'inline';
  onSelect?: () => void;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  variant = 'dropdown',
  onSelect,
}) => {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open]);

  if (variant === 'inline') {
    return (
      <div className="flex flex-wrap items-center gap-2" role="group" aria-label={t.common.chooseLanguage}>
        {SUPPORTED_LANGUAGES.map((opt) => {
          const active = opt.code === language;
          return (
            <button
              key={opt.code}
              type="button"
              onClick={() => {
                setLanguage(opt.code);
                onSelect?.();
              }}
              aria-pressed={active}
              className={`px-2.5 py-1 text-[12px] font-semibold rounded border transition-colors cursor-pointer ${
                active
                  ? 'bg-[#FC8920] border-[#FC8920] text-white'
                  : 'bg-transparent border-white/25 text-white/85 hover:border-[#FC8920] hover:text-[#FC8920]'
              }`}
            >
              {opt.shortLabel} · {opt.label}
            </button>
          );
        })}
      </div>
    );
  }

  const current = SUPPORTED_LANGUAGES.find((l) => l.code === language) ?? SUPPORTED_LANGUAGES[0];

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.common.chooseLanguage}
        className="flex items-center gap-1.5 px-2.5 py-1 rounded border border-white/20 hover:border-[#FC8920] text-white hover:text-[#FC8920] text-[13px] font-medium transition-colors cursor-pointer"
      >
        <Globe className="w-3.5 h-3.5 text-[#FC8920] shrink-0" />
        <span>{current.shortLabel}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-150 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={t.common.chooseLanguage}
          className="absolute right-0 mt-2 w-40 bg-white text-[#292929] border border-[#dcdcdc] rounded-md shadow-xl py-1 z-50"
        >
          {SUPPORTED_LANGUAGES.map((opt) => {
            const active = opt.code === language;
            return (
              <li key={opt.code} role="option" aria-selected={active}>
                <button
                  type="button"
                  onClick={() => {
                    setLanguage(opt.code);
                    setOpen(false);
                    onSelect?.();
                  }}
                  className={`w-full px-3.5 py-2 text-left text-[13px] flex items-center justify-between transition-colors cursor-pointer ${
                    active
                      ? 'bg-[#FC8920]/10 text-[#FC8920] font-semibold'
                      : 'text-[#292929] hover:bg-[#f7f7f7]'
                  }`}
                >
                  <span>
                    <span className="font-semibold mr-1.5">{opt.shortLabel}</span>
                    {opt.label}
                  </span>
                  {active && <Check className="w-3.5 h-3.5 text-[#FC8920]" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
