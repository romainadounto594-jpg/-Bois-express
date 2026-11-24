import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, CheckCircle2, Truck } from 'lucide-react';
import { formatPrice } from '../context/CartContext';
import { useCart } from '../hooks/useCart';

interface CartSummaryProps {
  onCheckoutSuccess?: () => void;
}

export const CartSummary: React.FC<CartSummaryProps> = ({ onCheckoutSuccess }) => {
  const { items, subtotal, hasOrderConflict, clearCart } = useCart();
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const handleValidateOrder = () => {
    if (hasOrderConflict || items.length === 0) return;
    setOrderSubmitted(true);
    clearCart();
    if (onCheckoutSuccess) {
      onCheckoutSuccess();
    }
  };

  if (orderSubmitted) {
    return (
      <div className="border border-[#d5d5d5] rounded-[10px] p-6 bg-[#f7f7f7]">
        <div className="flex items-start gap-3 text-[#292929] mb-3">
          <CheckCircle2 className="w-6 h-6 text-[#FC8920] shrink-0 mt-0.5" />
          <div>
            <h3 className="text-[18px] font-bold">Demande de commande enregistrée</h3>
            <p className="text-[14px] text-[#595959] mt-1">
              Votre panier a bien été validé en simulation locale. Pour finaliser une commande réelle et convenir d’un créneau de livraison, contactez Bois express au 03 87 13 38 12.
            </p>
          </div>
        </div>
        <Link
          to="/boutique"
          className="inline-block mt-3 px-5 py-2.5 bg-[#FC8920] hover:bg-[#292929] text-white font-semibold text-[14px] rounded transition-colors"
        >
          Retourner à la boutique
        </Link>
      </div>
    );
  }

  return (
    <div className="border border-[#d5d5d5] rounded-[10px] p-6 bg-[#f7f7f7]">
      <h2 className="text-[20px] font-semibold text-[#292929] pb-3 border-b border-[#dcdcdc] mb-4">
        Total panier
      </h2>

      <div className="space-y-3 text-[15px]">
        <div className="flex items-center justify-between py-2 border-b border-[#dcdcdc]/70">
          <span className="text-[#595959]">Sous-total</span>
          <span className="font-semibold text-[#292929] tabular-nums">
            {formatPrice(subtotal)}
          </span>
        </div>

        <div className="py-2 border-b border-[#dcdcdc]/70">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[#595959]">Livraison</span>
            <span className="text-[13px] font-medium text-[#292929] inline-flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-[#FC8920]" />
              À domicile (secteur Forbach / Moselle / Sarre)
            </span>
          </div>
          <p className="text-[13px] text-[#595959]">
            Consultez nos{' '}
            <Link to="/zones-de-livraison" className="text-[#FC8920] underline">
              zones de livraison desservies
            </Link>
            .
          </p>
        </div>

        <div className="flex items-center justify-between py-2 text-[18px]">
          <span className="font-semibold text-[#292929]">Total TTC</span>
          <span className="font-bold text-[#292929] tabular-nums">
            {formatPrice(subtotal)}
          </span>
        </div>
      </div>

      {hasOrderConflict && (
        <div className="mt-4 p-3.5 bg-[#FC8920]/15 border border-[#FC8920] rounded text-[13px] text-[#292929] flex items-start gap-2.5">
          <AlertTriangle className="w-5 h-5 text-[#FC8920] shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">Information sur les commandes</p>
            <p className="mt-1">
              Les commandes de pellets et de bois en vrac ne peuvent pas faire partie de la même commande. Veuillez retirer l’un des deux types de produits et passer 2 commandes distinctes.
            </p>
          </div>
        </div>
      )}

      <div className="mt-5 space-y-3">
        <button
          type="button"
          onClick={handleValidateOrder}
          disabled={items.length === 0 || hasOrderConflict}
          className="w-full py-3 px-5 bg-[#FC8920] hover:bg-[#292929] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold text-[15px] rounded transition-colors cursor-pointer"
        >
          Valider la commande
        </button>

        <Link
          to="/boutique"
          className="block w-full text-center py-2.5 px-5 bg-[#595959] hover:bg-[#292929] text-white font-medium text-[14px] rounded transition-colors"
        >
          Continuer les achats
        </Link>
      </div>
    </div>
  );
};
