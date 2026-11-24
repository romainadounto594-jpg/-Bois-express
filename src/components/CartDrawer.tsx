import React from 'react';
import { Link } from 'react-router-dom';
import { X, Trash2, AlertTriangle, ShoppingBag } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { formatPrice } from '../context/CartContext';

export const CartDrawer: React.FC = () => {
  const {
    items,
    subtotal,
    hasOrderConflict,
    isDrawerOpen,
    closeDrawer,
    updateQuantity,
    removeItem,
  } = useCart();

  if (!isDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 transition-opacity"
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* Side cart panel */}
      <aside
        aria-label="Panier latéral"
        className="relative z-10 w-full max-w-[400px] bg-white h-full flex flex-col shadow-2xl"
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#dcdcdc]">
          <h2 className="text-[18px] font-semibold text-[#292929]">Votre panier</h2>
          <button
            type="button"
            onClick={closeDrawer}
            aria-label="Fermer le panier"
            className="p-1.5 text-[#595959] hover:text-[#292929] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="text-center py-16 text-[#595959]">
              <ShoppingBag className="w-12 h-12 mx-auto text-[#dcdcdc] mb-3" />
              <p className="text-[15px] mb-4">Votre panier est actuellement vide.</p>
              <Link
                to="/boutique"
                onClick={closeDrawer}
                className="inline-block px-5 py-2.5 bg-[#FC8920] hover:bg-[#292929] text-white text-[14px] font-semibold rounded transition-colors"
              >
                Découvrir le catalogue
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-[#dcdcdc]">
              {items.map((entry) => (
                <li key={entry.product.id} className="py-4 flex gap-3.5 items-start">
                  <Link
                    to={`/produit/${entry.product.slug}`}
                    onClick={closeDrawer}
                    className="w-16 h-16 rounded border border-[#dcdcdc] overflow-hidden shrink-0 bg-[#f7f7f7]"
                  >
                    <img
                      src={entry.product.image}
                      alt={entry.product.title}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/produit/${entry.product.slug}`}
                      onClick={closeDrawer}
                      className="text-[14px] font-semibold text-[#FC8920] hover:underline block leading-snug"
                    >
                      {entry.product.title}
                    </Link>
                    <p className="text-[14px] font-medium text-[#292929] mt-1 tabular-nums">
                      {entry.quantity} × {formatPrice(entry.product.price)}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(entry.product.id, entry.quantity - 1)
                        }
                        aria-label="Diminuer la quantité"
                        className="w-7 h-7 border border-[#dcdcdc] rounded text-sm font-semibold text-[#292929] hover:bg-[#f7f7f7] cursor-pointer"
                      >
                        -
                      </button>
                      <span className="text-[14px] font-medium w-6 text-center tabular-nums">
                        {entry.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(entry.product.id, entry.quantity + 1)
                        }
                        aria-label="Augmenter la quantité"
                        className="w-7 h-7 border border-[#dcdcdc] rounded text-sm font-semibold text-[#292929] hover:bg-[#f7f7f7] cursor-pointer"
                      >
                        +
                      </button>
                      <button
                        type="button"
                        onClick={() => removeItem(entry.product.id)}
                        aria-label={`Supprimer ${entry.product.title}`}
                        className="ml-auto p-1 text-[#595959] hover:text-red-600 transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {hasOrderConflict && (
            <div className="mt-4 p-3 bg-[#FC8920]/15 border border-[#FC8920] rounded text-[12px] text-[#292929] flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-[#FC8920] shrink-0 mt-0.5" />
              <span>
                Les commandes de pellets et de bois en vrac ne peuvent pas faire partie de la même commande. Il faudra passer 2 commandes le cas échéant.
              </span>
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-[#dcdcdc] px-5 py-4 bg-[#f7f7f7] space-y-3">
            <div className="flex items-center justify-between text-[16px] font-semibold text-[#292929]">
              <span>Sous-total :</span>
              <span className="tabular-nums">{formatPrice(subtotal)}</span>
            </div>
            <div className="grid grid-cols-1 gap-2">
              <Link
                to="/panier"
                onClick={closeDrawer}
                className="w-full py-2.5 text-center bg-[#595959] hover:bg-[#292929] text-white text-[14px] font-semibold rounded transition-colors"
              >
                Voir le panier
              </Link>
              <Link
                to="/commander"
                onClick={closeDrawer}
                className="w-full py-2.5 text-center bg-[#FC8920] hover:bg-[#292929] text-white text-[14px] font-semibold rounded transition-colors"
              >
                Commander
              </Link>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
};
