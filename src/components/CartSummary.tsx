import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AlertTriangle, Truck } from 'lucide-react';
import { formatPrice } from '../context/CartContext';
import { useCart } from '../hooks/useCart';
import { useLanguage } from '../hooks/useLanguage';

export const CartSummary: React.FC = () => {
  const { items, subtotal, hasOrderConflict } = useCart();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleGoToCheckout = () => {
    if (hasOrderConflict || items.length === 0) return;
    navigate('/commander');
  };

  return (
    <div className="border border-[#d5d5d5] rounded-[10px] p-6 bg-[#f7f7f7]">
      <h2 className="text-[20px] font-semibold text-[#292929] pb-3 border-b border-[#dcdcdc] mb-4">
        {t.cart.summaryTitle}
      </h2>

      <div className="space-y-3 text-[15px]">
        <div className="flex items-center justify-between py-2 border-b border-[#dcdcdc]/70">
          <span className="text-[#595959]">{t.cart.subtotalLabel}</span>
          <span className="font-semibold text-[#292929] tabular-nums">
            {formatPrice(subtotal)}
          </span>
        </div>

        <div className="py-2 border-b border-[#dcdcdc]/70">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[#595959]">{t.cart.deliveryLabel}</span>
            <span className="text-[13px] font-medium text-[#292929] inline-flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-[#FC8920]" />
              {t.cart.deliveryArea}
            </span>
          </div>
          <p className="text-[13px] text-[#595959]">
            {t.cart.deliveryZonesPrefix}{' '}
            <Link to="/zones-de-livraison" className="text-[#FC8920] underline">
              {t.cart.deliveryZonesLink}
            </Link>
            .
          </p>
        </div>

        <div className="flex items-center justify-between py-2 text-[18px]">
          <span className="font-semibold text-[#292929]">{t.cart.totalInclTax}</span>
          <span className="font-bold text-[#292929] tabular-nums">
            {formatPrice(subtotal)}
          </span>
        </div>
      </div>

      {hasOrderConflict && (
        <div className="mt-4 p-3.5 bg-[#FC8920]/15 border border-[#FC8920] rounded text-[13px] text-[#292929] flex items-start gap-2.5">
          <AlertTriangle className="w-5 h-5 text-[#FC8920] shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">{t.cart.conflictTitle}</p>
            <p className="mt-1">{t.cart.conflictDesc}</p>
          </div>
        </div>
      )}

      <div className="mt-5 space-y-3">
        <button
          type="button"
          onClick={handleGoToCheckout}
          disabled={items.length === 0 || hasOrderConflict}
          className="w-full py-3 px-5 bg-[#FC8920] hover:bg-[#292929] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold text-[15px] rounded transition-colors cursor-pointer"
        >
          {t.cart.validateOrder}
        </button>

        <Link
          to="/boutique"
          className="block w-full text-center py-2.5 px-5 bg-[#595959] hover:bg-[#292929] text-white font-medium text-[14px] rounded transition-colors"
        >
          {t.cart.continueShopping}
        </Link>
      </div>
    </div>
  );
};
