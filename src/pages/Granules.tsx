import React from 'react';
import { CATEGORIES_META, getProductsByCategory } from '../data/products';
import { CategoryLayout } from '../components/CategoryLayout';

export const Granules: React.FC = () => {
  const meta = CATEGORIES_META['granules-de-bois'];
  const products = getProductsByCategory('granules-de-bois');
  return <CategoryLayout meta={meta} products={products} />;
};
