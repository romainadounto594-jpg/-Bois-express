import React from 'react';
import { CATEGORIES_META, getProductsByCategory } from '../data/products';
import { CategoryLayout } from '../components/CategoryLayout';

export const Pellets: React.FC = () => {
  const meta = CATEGORIES_META.pellets;
  const products = getProductsByCategory('pellets');
  return <CategoryLayout meta={meta} products={products} />;
};
