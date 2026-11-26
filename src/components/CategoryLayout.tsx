import React from 'react';
import { Info } from 'lucide-react';
import { CategoryMeta, Product } from '../types';
import { useLanguage } from '../hooks/useLanguage';
import { PageBanner } from './PageBanner';
import { ProductGrid } from './ProductGrid';

interface CategoryLayoutProps {
  meta: CategoryMeta;
  products: Product[];
}

export const CategoryLayout: React.FC<CategoryLayoutProps> = ({ meta, products }) => {
  const { t } = useLanguage();

  return (
    <div>
      <PageBanner
        title={meta.title}
        backgroundImage={meta.bannerImage}
        breadcrumbs={[
          { label: t.common.home, path: '/' },
          { label: t.common.shop, path: '/boutique' },
          { label: meta.name },
        ]}
      />

      {/* Overlapping white category description card matching Elementor archive template */}
      <section className="px-4 -mt-[45px] relative z-20 mb-5">
        <div className="max-w-[900px] mx-auto bg-white p-[25px] shadow-[0_0_10px_0_rgba(0,0,0,0.5)] text-center">
          <p className="text-[15px] leading-[1.7] text-[#595959]">
            {meta.description}
          </p>
        </div>
      </section>

      {/* Products section */}
      <section className="py-[50px] px-4 sm:px-6 max-w-[1140px] mx-auto">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[14px] text-[#595959]">
          <p>
            {t.category.showingAllPrefix}{' '}
            <span className="font-semibold text-[#292929] tabular-nums">{products.length}</span>{' '}
            {t.category.resultsSuffix}
          </p>
          <div className="inline-flex items-center gap-2 text-[13px] bg-[#f7f7f7] border border-[#dcdcdc] px-3.5 py-2 rounded">
            <Info className="w-4 h-4 text-[#FC8920] shrink-0" />
            <span>{t.common.orderNoticeShort}</span>
          </div>
        </div>

        <ProductGrid products={products} />
      </section>
    </div>
  );
};
