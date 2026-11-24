import React from 'react';
import { CATEGORIES_META, getProductsByCategory } from '../data/products';
import { CategoryLayout } from '../components/CategoryLayout';

export const Allumage: React.FC = () => {
  const meta = CATEGORIES_META.allumage;
  const products = getProductsByCategory('allumage');
  return <CategoryLayout meta={meta} products={products} />;
};
