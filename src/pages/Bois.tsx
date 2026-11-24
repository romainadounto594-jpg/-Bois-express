import React from 'react';
import { CATEGORIES_META, getProductsByCategory } from '../data/products';
import { CategoryLayout } from '../components/CategoryLayout';

export const Bois: React.FC = () => {
  const meta = CATEGORIES_META.bois;
  const products = getProductsByCategory('bois');
  return <CategoryLayout meta={meta} products={products} />;
};
