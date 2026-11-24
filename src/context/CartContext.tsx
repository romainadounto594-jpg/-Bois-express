import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { CartItem, Product } from '../types';

const CART_STORAGE_KEY = 'bois_chauffages_cart_v1';

interface CartContextValue {
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  hasOrderConflict: boolean;
  isDrawerOpen: boolean;
  lastAddedProduct: Product | null;
  addItem: (product: Product, quantity?: number) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
}

export const CartContext = createContext<CartContextValue | undefined>(undefined);

function loadInitialCart(): CartItem[] {
  try {
    const raw = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (item): item is CartItem =>
        typeof item === 'object' &&
        item !== null &&
        typeof (item as CartItem).quantity === 'number' &&
        (item as CartItem).quantity > 0 &&
        typeof (item as CartItem).product === 'object' &&
        (item as CartItem).product !== null &&
        typeof (item as CartItem).product.id === 'string'
    );
  } catch {
    return [];
  }
}

export function formatPrice(value: number): string {
  return value.toFixed(2).replace('.', ',') + ' €';
}

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(loadInitialCart);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [lastAddedProduct, setLastAddedProduct] = useState<Product | null>(null);

  useEffect(() => {
    try {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Ignore storage quota errors
    }
  }, [items]);

  const addItem = useCallback((product: Product, quantity = 1) => {
    if (!product.inStock || quantity <= 0) return;
    setItems((prev) => {
      const existing = prev.find((entry) => entry.product.id === product.id);
      if (existing) {
        return prev.map((entry) =>
          entry.product.id === product.id
            ? { ...entry, quantity: entry.quantity + quantity }
            : entry
        );
      }
      return [...prev, { product, quantity }];
    });
    setLastAddedProduct(product);
    setIsDrawerOpen(true);
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((entry) => entry.product.id !== productId));
      return;
    }
    setItems((prev) =>
      prev.map((entry) =>
        entry.product.id === productId ? { ...entry, quantity } : entry
      )
    );
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((entry) => entry.product.id !== productId));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const openDrawer = useCallback(() => setIsDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setIsDrawerOpen(false), []);

  const totalItems = useMemo(
    () => items.reduce((sum, entry) => sum + entry.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () => items.reduce((sum, entry) => sum + entry.product.price * entry.quantity, 0),
    [items]
  );

  const hasOrderConflict = useMemo(() => {
    const hasBulkWood = items.some((entry) => entry.product.orderGroup === 'bulk-wood');
    const hasPellet = items.some((entry) => entry.product.orderGroup === 'pellet');
    return hasBulkWood && hasPellet;
  }, [items]);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      totalItems,
      subtotal,
      hasOrderConflict,
      isDrawerOpen,
      lastAddedProduct,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
      openDrawer,
      closeDrawer,
    }),
    [
      items,
      totalItems,
      subtotal,
      hasOrderConflict,
      isDrawerOpen,
      lastAddedProduct,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
      openDrawer,
      closeDrawer,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
