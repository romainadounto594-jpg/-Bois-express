import React from 'react';
import { Breadcrumb, BreadcrumbSegment } from './Breadcrumb';

interface PageBannerProps {
  title: string;
  breadcrumbs: BreadcrumbSegment[];
  backgroundImage: string;
  align?: 'right' | 'center';
  titleColor?: 'primary' | 'white';
}

export const PageBanner: React.FC<PageBannerProps> = ({
  title,
  breadcrumbs,
  backgroundImage,
  align = 'right',
  titleColor = 'primary',
}) => {
  return (
    <section
      className="relative w-full bg-cover bg-center pt-14 lg:pt-[150px] pb-14 px-5 overflow-hidden"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="relative z-10 max-w-[1140px] mx-auto">
        <div className={align === 'center' ? 'text-center' : 'text-right'}>
          <h1
            className={`text-[30px] sm:text-[35px] font-semibold mb-2 ${
              titleColor === 'primary' ? 'text-[#FC8920]' : 'text-white'
            }`}
          >
            {title}
          </h1>
          <Breadcrumb
            items={breadcrumbs}
            align={align === 'center' ? 'center' : 'right'}
            light
          />
        </div>
      </div>
    </section>
  );
};
