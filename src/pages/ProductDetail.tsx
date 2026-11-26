import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Check, Info } from 'lucide-react';
import { getLocalizedProductBySlug, getLocalizedRelatedProducts } from '../data/i18nProducts';
import { formatPrice } from '../context/CartContext';
import { useCart } from '../hooks/useCart';
import { useLanguage } from '../hooks/useLanguage';
import { Breadcrumb } from '../components/Breadcrumb';
import { ProductGrid } from '../components/ProductGrid';

export const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();
  const product = slug ? getLocalizedProductBySlug(slug, language) : undefined;
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedFeedback, setAddedFeedback] = useState(false);

  if (!product) {
    return (
      <div className="max-w-[900px] mx-auto px-4 py-20 text-center">
        <h1 className="text-[28px] font-semibold text-[#292929] mb-4">
          {t.productDetail.notFoundTitle}
        </h1>
        <p className="text-[#595959] mb-6">
          {t.productDetail.notFoundText}
        </p>
        <Link
          to="/boutique"
          className="inline-block px-6 py-3 bg-[#FC8920] hover:bg-[#292929] text-white font-semibold rounded transition-colors"
        >
          {t.productDetail.backToShop}
        </Link>
      </div>
    );
  }

  const related = getLocalizedRelatedProducts(product, language, 4);

  const handleAddToCart = (e: React.FormEvent) => {
    e.preventDefault();
    if (!product.inStock) return;
    addItem(product, quantity);
    setAddedFeedback(true);
    window.setTimeout(() => setAddedFeedback(false), 1600);
  };

  return (
    <div className="max-w-[1140px] mx-auto px-4 sm:px-6 py-10">
      <div className="mb-6">
        <Breadcrumb
          align="left"
          light={false}
          items={[
            { label: t.common.home, path: '/' },
            {
              label: product.categoryName,
              path: `/type-de-chauffage/${product.category}`,
            },
            { label: product.title },
          ]}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Product Image */}
        <div className="relative border border-[#d5d5d5] rounded-[10px] overflow-hidden bg-[#f7f7f7] aspect-square">
          {!product.inStock && (
            <span className="absolute top-4 left-4 z-10 bg-[#292929] text-white text-[12px] font-bold uppercase px-3 py-1.5 rounded">
              {t.common.outOfStockBadge}
            </span>
          )}
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Info & Add to Cart */}
        <div>
          <p className="text-[13px] font-medium text-[#595959] mb-2">
            {t.productDetail.categoryLabel}{' '}
            <Link
              to={`/type-de-chauffage/${product.category}`}
              className="text-[#FC8920] font-semibold hover:underline"
            >
              {product.categoryName}
            </Link>
          </p>

          <h1 className="text-[26px] sm:text-[32px] font-semibold text-[#292929] leading-tight mb-4">
            {product.title}
          </h1>

          <div className="mb-5 pb-5 border-b border-[#dcdcdc]">
            <span className="text-[30px] font-semibold text-[#292929] tabular-nums">
              {formatPrice(product.price)}
            </span>
            {product.priceSuffix && (
              <span className="ml-2 text-[15px] text-[#595959]">
                {product.priceSuffix}
              </span>
            )}
          </div>

          {product.shortDesc && (
            <p className="text-[15px] leading-[1.7] text-[#595959] mb-6">
              {product.shortDesc}
            </p>
          )}

          {/* Information sur les commandes notice */}
          <div className="mb-6 bg-[#f7f7f7] border border-[#dcdcdc] p-4 rounded">
            <div className="inline-flex items-center gap-2 bg-[#FC8920] text-black font-bold text-[14px] px-2.5 py-1 mb-2">
              <Info className="w-4 h-4 shrink-0" />
              <span>{t.common.orderNoticeTitle}</span>
            </div>
            <p className="text-[13px] text-[#292929] font-medium mb-1">
              {t.common.orderNoticeIntro}
            </p>
            <ul className="list-disc pl-5 text-[13px] text-[#595959]">
              <li>{t.common.orderNoticeRule}</li>
            </ul>
          </div>

          {product.inStock ? (
            <form onSubmit={handleAddToCart} className="flex flex-wrap items-center gap-4">
              <div className="flex items-center border border-[#dcdcdc] rounded overflow-hidden">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label={t.common.decreaseQty}
                  className="w-10 h-11 bg-[#f7f7f7] hover:bg-[#e9e9e9] text-[#292929] font-semibold cursor-pointer"
                >
                  -
                </button>
                <input
                  type="number"
                  min={1}
                  max={99}
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Math.max(1, parseInt(e.target.value || '1', 10)))
                  }
                  aria-label={t.common.quantity}
                  className="w-14 h-11 text-center text-[15px] font-semibold text-[#292929] focus:outline-none tabular-nums"
                />
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.min(99, q + 1))}
                  aria-label={t.common.increaseQty}
                  className="w-10 h-11 bg-[#f7f7f7] hover:bg-[#e9e9e9] text-[#292929] font-semibold cursor-pointer"
                >
                  +
                </button>
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-7 py-3 bg-[#FC8920] hover:bg-[#292929] text-white font-semibold text-[15px] rounded transition-colors cursor-pointer"
              >
                {addedFeedback ? (
                  <>
                    <Check className="w-4 h-4" />
                    {t.common.addedToCart}
                  </>
                ) : (
                  t.common.addToCart
                )}
              </button>
            </form>
          ) : (
            <div className="p-4 border border-[#dcdcdc] rounded bg-[#f7f7f7] text-[14px] text-[#292929]">
              <p className="font-semibold mb-2">{t.productDetail.outOfStockBoxTitle}</p>
              <Link
                to="/contact"
                className="text-[#FC8920] font-semibold hover:underline"
              >
                {t.productDetail.outOfStockContactLink}
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section className="mt-16 pt-10 border-t border-[#dcdcdc]">
          <h2 className="text-[24px] font-semibold text-[#292929] mb-8">
            {t.productDetail.relatedProducts}
          </h2>
          <ProductGrid products={related} />
        </section>
      )}
    </div>
  );
};
