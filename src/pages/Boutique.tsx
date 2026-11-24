import React, { useMemo, useState } from 'react';
import { PRODUCTS } from '../data/products';
import { ProductCategorySlug } from '../types';
import { PageBanner } from '../components/PageBanner';
import { ProductGrid } from '../components/ProductGrid';

const FILTER_OPTIONS: { label: string; value: ProductCategorySlug | 'all' }[] = [
  { label: 'Tous les produits', value: 'all' },
  { label: 'Bois', value: 'bois' },
  { label: 'Briquettes', value: 'briquettes' },
  { label: 'Pellets', value: 'pellets' },
  { label: 'Granulés de bois', value: 'granules-de-bois' },
  { label: 'Allumage', value: 'allumage' },
];

export const Boutique: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategorySlug | 'all'>('all');
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc'>('default');

  const filteredProducts = useMemo(() => {
    const base =
      selectedCategory === 'all'
        ? PRODUCTS
        : PRODUCTS.filter((p) => p.category === selectedCategory);

    if (sortBy === 'price-asc') {
      return [...base].sort((a, b) => a.price - b.price);
    }
    if (sortBy === 'price-desc') {
      return [...base].sort((a, b) => b.price - a.price);
    }
    return base;
  }, [selectedCategory, sortBy]);

  return (
    <div>
      <PageBanner
        title="Boutique"
        backgroundImage="/images/banner-bois.jpg"
        breadcrumbs={[
          { label: 'Accueil', path: '/' },
          { label: 'Boutique' },
        ]}
      />

      <section className="py-12 px-4 sm:px-6 max-w-[1140px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 pb-5 border-b border-[#dcdcdc]">
          <div className="flex flex-wrap items-center gap-2">
            {FILTER_OPTIONS.map((opt) => (
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
              {filteredProducts.length} produits
            </span>
            <select
              aria-label="Trier les produits"
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as 'default' | 'price-asc' | 'price-desc')
              }
              className="border border-[#dcdcdc] rounded px-3 py-2 text-[14px] text-[#292929] bg-white focus:outline-none focus:border-[#FC8920]"
            >
              <option value="default">Tri par défaut</option>
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix décroissant</option>
            </select>
          </div>
        </div>

        <ProductGrid products={filteredProducts} />
      </section>
    </div>
  );
};
