import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { Product } from '../types';
import { formatPrice } from '../context/CartContext';
import { useCart } from '../hooks/useCart';
import { useLanguage } from '../hooks/useLanguage';
import { getLocalizedProduct } from '../data/i18nProducts';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();
  const { language, t } = useLanguage();
  const [justAdded, setJustAdded] = useState(false);

  const localized = getLocalizedProduct(product, language);

  const handleAdd = () => {
    addItem(product, 1);
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1400);
  };

  return (
    <article className="relative flex flex-col justify-between text-center border border-[#d5d5d5] rounded-[10px] p-[10px] pb-4 bg-white transition-shadow duration-200 hover:shadow-md">
      {!localized.inStock && (
        <span className="absolute top-3 left-3 z-10 bg-[#292929] text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
          {t.common.outOfStockBadge}
        </span>
      )}

      <Link
        to={`/produit/${localized.slug}`}
        className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FC8920] rounded-md"
      >
        <div className="w-full aspect-square overflow-hidden rounded-[6px] bg-[#f7f7f7] mb-3">
          <img
            src={localized.image}
            alt={localized.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <h2 className="text-[16px] font-semibold text-[#FC8920] leading-snug px-1 py-2 group-hover:underline">
          {localized.title}
        </h2>
      </Link>

      <div className="mt-auto pt-2 flex flex-col items-center">
        <div className="mb-3">
          <span className="block text-[25px] font-medium text-[#292929] leading-tight tabular-nums">
            {formatPrice(localized.price)}
          </span>
          {localized.priceSuffix && (
            <span className="block text-[13px] text-[#595959] mt-0.5">
              {localized.priceSuffix}
            </span>
          )}
        </div>

        {localized.inStock ? (
          <button
            type="button"
            onClick={handleAdd}
            className={`inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-[14px] font-semibold text-white rounded transition-colors duration-200 cursor-pointer whitespace-nowrap ${
              justAdded
                ? 'bg-[#292929]'
                : 'bg-[#FC8920] hover:bg-[#292929]'
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-4 h-4" />
                {t.common.added}
              </>
            ) : (
              t.common.addToCart
            )}
          </button>
        ) : (
          <Link
            to={`/produit/${localized.slug}`}
            className="inline-flex items-center justify-center px-5 py-2.5 text-[14px] font-semibold text-white bg-[#FC8920] hover:bg-[#292929] rounded transition-colors duration-200 whitespace-nowrap"
          >
            {t.common.readMore}
          </Link>
        )}
      </div>
    </article>
  );
};
