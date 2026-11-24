import React from 'react';

interface BrandLogoProps {
  variant?: 'horizontal' | 'stacked';
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'horizontal',
  className = '',
}) => {
  if (variant === 'stacked') {
    return (
      <div className={`inline-flex flex-col items-center text-center select-none ${className}`}>
        <svg
          viewBox="0 0 64 56"
          className="w-16 h-14 mb-2"
          aria-hidden="true"
        >
          <path
            d="M33 4c2 9-4 14-4 21 0 5 3 8 7 8 4 0 7-4 7-9 0-4-2-8-4-11 6 3 11 10 11 18 0 10-8 18-18 18S14 41 14 31c0-11 9-19 19-27z"
            fill="#FC8920"
          />
          <rect x="8" y="45" width="48" height="6" rx="3" fill="#FFFFFF" />
          <circle cx="13" cy="48" r="2.5" fill="#FC8920" />
          <circle cx="51" cy="48" r="2.5" fill="#FC8920" />
        </svg>
        <div className="leading-none tracking-tight">
          <span className="text-[28px] font-extrabold text-white">Bois </span>
          <span className="text-[28px] font-extrabold text-[#FC8920]">express</span>
        </div>
        <span className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/75">
          Bois de chauffage &amp; granulés
        </span>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <svg
        viewBox="0 0 48 48"
        className="w-9 h-9 sm:w-11 sm:h-11 shrink-0"
        aria-hidden="true"
      >
        <path
          d="M25 3c1.6 7.5-3.2 11.5-3.2 17.5 0 4.2 2.5 6.8 5.8 6.8 3.2 0 5.6-3.2 5.6-7.5 0-3.4-1.5-6.6-3.2-9.2 5 2.5 9 8.4 9 15 0 8.4-6.7 15-15 15S9 34 9 25.6C9 16.5 16.4 9.6 25 3z"
          fill="#FC8920"
        />
        <rect x="6" y="39" width="36" height="5" rx="2.5" fill="#FFFFFF" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="text-[22px] sm:text-[26px] font-extrabold tracking-tight whitespace-nowrap">
          <span className="text-white">Bois </span>
          <span className="text-[#FC8920]">express</span>
        </span>
        <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.16em] text-white/80 mt-1 whitespace-nowrap">
          Bois de chauffage &amp; pellets
        </span>
      </div>
    </div>
  );
};
