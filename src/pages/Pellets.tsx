import React from 'react';
import { getLocalizedCategoryMeta, getLocalizedProductsByCategory } from '../data/i18nProducts';
import { useLanguage } from '../hooks/useLanguage';
import { CategoryLayout } from '../components/CategoryLayout';

export const Pellets: React.FC = () => {
  const { language } = useLanguage();
  const meta = getLocalizedCategoryMeta('pellets', language);
  const products = getLocalizedProductsByCategory('pellets', language);
  return <CategoryLayout meta={meta} products={products} />;
};
