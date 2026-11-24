import React from 'react';
import { CATEGORIES_META, getProductsByCategory } from '../data/products';
import { CategoryLayout } from '../components/CategoryLayout';

export const Briquettes: React.FC = () => {
  const meta = CATEGORIES_META.briquettes;
  const products = getProductsByCategory('briquettes');
  return <CategoryLayout meta={meta} products={products} />;
};
