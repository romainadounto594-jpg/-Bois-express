import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { useLanguage } from '../hooks/useLanguage';
import { formatPrice } from '../context/CartContext';
import { getLocalizedProduct } from '../data/i18nProducts';
import { Breadcrumb } from '../components/Breadcrumb';
import { CartSummary } from '../components/CartSummary';

export const Cart: React.FC = () => {
  const { items, updateQuantity, removeItem } = useCart();
  const { language, t } = useLanguage();

  return (
    <div className="max-w-[1140px] mx-auto px-4 sm:px-6 py-10">
      <div className="mb-4">
        <Breadcrumb
          align="left"
          light={false}
          items={[{ label: t.common.home, path: '/' }, { label: t.cart.pageTitle }]}
        />
      </div>

      <h1 className="text-[30px] sm:text-[35px] font-semibold text-[#292929] mb-8">
        {t.cart.pageTitle}
      </h1>

      {items.length === 0 ? (
        <div className="border border-[#dcdcdc] rounded-[10px] p-10 text-center bg-[#f7f7f7]">
          <ShoppingBag className="w-14 h-14 mx-auto text-[#595959]/40 mb-4" />
          <p className="text-[16px] text-[#595959] mb-6">
            {t.cart.emptyCart}
          </p>
          <Link
            to="/boutique"
            className="inline-block px-7 py-3 bg-[#FC8920] hover:bg-[#292929] text-white font-semibold text-[15px] rounded transition-colors"
          >
            {t.cart.continueShopping}
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Cart Items Table / Cards */}
          <div className="lg:col-span-2">
            {/* Desktop Table */}
            <div className="hidden md:block border border-[#d5d5d5] rounded-[10px] overflow-hidden bg-white">
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#f7f7f7] border-b border-[#dcdcdc] text-[13px] uppercase text-[#292929]">
                  <tr>
                    <th className="py-3.5 px-4 font-semibold">{t.cart.colProduct}</th>
                    <th className="py-3.5 px-3 font-semibold">{t.cart.colPrice}</th>
                    <th className="py-3.5 px-3 font-semibold">{t.cart.colQuantity}</th>
                    <th className="py-3.5 px-3 font-semibold text-right">{t.cart.colSubtotal}</th>
                    <th className="py-3.5 px-3 font-semibold text-center">{t.cart.colAction}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#dcdcdc] text-[15px]">
                  {items.map((entry) => {
                    const localized = getLocalizedProduct(entry.product, language);
                    return (
                      <tr key={entry.product.id}>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3.5">
                            <Link
                              to={`/produit/${localized.slug}`}
                              className="w-16 h-16 rounded border border-[#dcdcdc] overflow-hidden shrink-0 bg-[#f7f7f7]"
                            >
                              <img
                                src={localized.image}
                                alt={localized.title}
                                className="w-full h-full object-cover"
                              />
                            </Link>
                            <div>
                              <Link
                                to={`/produit/${localized.slug}`}
                                className="font-semibold text-[#FC8920] hover:underline leading-snug block"
                              >
                                {localized.title}
                              </Link>
                              {localized.priceSuffix && (
                                <span className="text-[12px] text-[#595959]">
                                  {localized.priceSuffix}
                                </span>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-3 font-medium text-[#292929] whitespace-nowrap tabular-nums">
                          {formatPrice(localized.price)}
                        </td>
                        <td className="py-4 px-3">
                          <div className="inline-flex items-center border border-[#dcdcdc] rounded overflow-hidden">
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(entry.product.id, entry.quantity - 1)
                              }
                              aria-label={t.common.decreaseQty}
                              className="w-8 h-8 bg-[#f7f7f7] hover:bg-[#e9e9e9] font-semibold text-[#292929] cursor-pointer"
                            >
                              -
                            </button>
                            <input
                              type="number"
                              min={1}
                              max={99}
                              value={entry.quantity}
                              onChange={(e) =>
                                updateQuantity(
                                  entry.product.id,
                                  Math.max(1, parseInt(e.target.value || '1', 10))
                                )
                              }
                              aria-label={`${t.common.quantity} ${localized.title}`}
                              className="w-11 h-8 text-center text-[14px] font-semibold text-[#292929] focus:outline-none tabular-nums"
                            />
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(entry.product.id, entry.quantity + 1)
                              }
                              aria-label={t.common.increaseQty}
                              className="w-8 h-8 bg-[#f7f7f7] hover:bg-[#e9e9e9] font-semibold text-[#292929] cursor-pointer"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="py-4 px-3 font-semibold text-[#292929] text-right whitespace-nowrap tabular-nums">
                          {formatPrice(localized.price * entry.quantity)}
                        </td>
                        <td className="py-4 px-3 text-center">
                          <button
                            type="button"
                            onClick={() => removeItem(entry.product.id)}
                            aria-label={`${t.common.removeItem} ${localized.title}`}
                            className="p-1.5 text-[#595959] hover:text-red-600 transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {items.map((entry) => {
                const localized = getLocalizedProduct(entry.product, language);
                return (
                  <div
                    key={entry.product.id}
                    className="border border-[#d5d5d5] rounded-[10px] p-4 bg-white"
                  >
                    <div className="flex gap-3.5 items-start">
                      <Link
                        to={`/produit/${localized.slug}`}
                        className="w-20 h-20 rounded border border-[#dcdcdc] overflow-hidden shrink-0 bg-[#f7f7f7]"
                      >
                        <img
                          src={localized.image}
                          alt={localized.title}
                          className="w-full h-full object-cover"
                        />
                      </Link>
                      <div className="flex-1 min-w-0">
                        <Link
                          to={`/produit/${localized.slug}`}
                          className="font-semibold text-[15px] text-[#FC8920] hover:underline block leading-snug"
                        >
                          {localized.title}
                        </Link>
                        <p className="text-[14px] text-[#292929] font-medium mt-1 tabular-nums">
                          {t.cart.unitPricePrefix} {formatPrice(localized.price)}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#e9e9e9] flex items-center justify-between gap-3">
                      <div className="inline-flex items-center border border-[#dcdcdc] rounded overflow-hidden">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(entry.product.id, entry.quantity - 1)
                          }
                          aria-label={t.common.decreaseQty}
                          className="w-9 h-9 bg-[#f7f7f7] font-semibold text-[#292929] cursor-pointer"
                        >
                          -
                        </button>
                        <span className="w-10 text-center text-[14px] font-semibold text-[#292929] tabular-nums">
                          {entry.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(entry.product.id, entry.quantity + 1)
                          }
                          aria-label={t.common.increaseQty}
                          className="w-9 h-9 bg-[#f7f7f7] font-semibold text-[#292929] cursor-pointer"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="block text-[12px] text-[#595959]">{t.cart.subtotalLabel}</span>
                        <span className="font-bold text-[16px] text-[#292929] tabular-nums">
                          {formatPrice(localized.price * entry.quantity)}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeItem(entry.product.id)}
                        aria-label={`${t.common.removeItem} ${localized.title}`}
                        className="p-2 text-[#595959] hover:text-red-600 cursor-pointer"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Summary Sidebar */}
          <div>
            <CartSummary />
          </div>
        </div>
      )}
    </div>
  );
};
