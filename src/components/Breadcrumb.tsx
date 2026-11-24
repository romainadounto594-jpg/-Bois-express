import React from 'react';
import { Link } from 'react-router-dom';

export interface BreadcrumbSegment {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbSegment[];
  align?: 'left' | 'right' | 'center';
  light?: boolean;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  align = 'right',
  light = true,
}) => {
  const alignClass =
    align === 'right'
      ? 'justify-end text-right'
      : align === 'center'
      ? 'justify-center text-center'
      : 'justify-start text-left';

  return (
    <nav
      aria-label="Fil d'Ariane"
      className={`flex flex-wrap items-center gap-1.5 text-[14px] ${alignClass} ${
        light ? 'text-white/90' : 'text-[#595959]'
      }`}
    >
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <React.Fragment key={`${item.label}-${idx}`}>
            {idx > 0 && (
              <span aria-hidden="true" className="mx-1 opacity-75">
                »
              </span>
            )}
            {item.path && !isLast ? (
              <Link
                to={item.path}
                className={`hover:text-[#FC8920] transition-colors ${
                  light ? 'text-white' : 'text-[#292929]'
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <span className={light ? 'text-white/85' : 'text-[#595959]'}>
                {item.label}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
