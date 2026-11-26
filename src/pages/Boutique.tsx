import React, { useMemo, useState } from 'react';
import { getLocalizedProducts } from '../data/i18nProducts';
import { ProductCategorySlug } from '../types';
import { useLanguage } from '../hooks/useLanguage';
import { PageBanner } from '../components/PageBanner';
import { ProductGrid } from '../components/ProductGrid';

export const Boutique: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<ProductCategorySlug | 'all'>('all');
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc'>('default');

  const filterOptions: { label: string; value: ProductCategorySlug | 'all' }[] = [
    { label: t.boutique.allProducts, value: 'all' },
    { label: t.nav.bois, value: 'bois' },
    { label: t.nav.briquettes, value: 'briquettes' },
    { label: t.nav.pellets, value: 'pellets' },
    { label: t.nav.granules, value: 'granules-de-bois' },
    { label: t.nav.allumage, value: 'allumage' },
  ];

  const localizedProducts = useMemo(() => getLocalizedProducts(language), [language]);

  const filteredProducts = useMemo(() => {
    const base =
      selectedCategory === 'all'
        ? localizedProducts
        : localizedProducts.filter((p) => p.category === selectedCategory);

    if (sortBy === 'price-asc') {
      return [...base].sort((a, b) => a.price - b.price);
    }
    if (sortBy === 'price-desc') {
      return [...base].sort((a, b) => b.price - a.price);
    }
    return base;
  }, [localizedProducts, selectedCategory, sortBy]);

  return (
    <div>
      <PageBanner
        title={t.boutique.title}
        backgroundImage="/images/banner-bois.jpg"
        breadcrumbs={[
          { label: t.common.home, path: '/' },
          { label: t.boutique.title },
        ]}
      />

      <section className="py-12 px-4 sm:px-6 max-w-[1140px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 pb-5 border-b border-[#dcdcdc]">
          <div className="flex flex-wrap items-center gap-2">
            {filterOptions.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => setSelectedCategory(opt.value)}
                className={`px-4 py-2 text-[14px] font-medium rounded transition-colors cursor-pointer ${
                  selectedCategory === opt.value
                    ? 'bg-[#FC8920] text-white'
                    : 'bg-[#f7f7f7] text-[#292929] hover:bg-[#e9e9e9]'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="text-[13px] text-[#595959] tabular-nums">
              {filteredProducts.length} {t.boutique.productsCountSuffix}
            </span>
            <select
              aria-label={t.boutique.sortAria}
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as 'default' | 'price-asc' | 'price-desc')
              }
              className="border border-[#dcdcdc] rounded px-3 py-2 text-[14px] text-[#292929] bg-white focus:outline-none focus:border-[#FC8920]"
            >
              <option value="default">{t.boutique.sortDefault}</option>
              <option value="price-asc">{t.boutique.sortPriceAsc}</option>
              <option value="price-desc">{t.boutique.sortPriceDesc}</option>
            </select>
          </div>
        </div>

        <ProductGrid products={filteredProducts} />
      </section>
    </div>
  );
};
