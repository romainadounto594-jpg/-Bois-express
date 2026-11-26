import React from 'react';
import { getLocalizedCategoryMeta, getLocalizedProductsByCategory } from '../data/i18nProducts';
import { useLanguage } from '../hooks/useLanguage';
import { CategoryLayout } from '../components/CategoryLayout';

export const Bois: React.FC = () => {
  const { language } = useLanguage();
  const meta = getLocalizedCategoryMeta('bois', language);
  const products = getLocalizedProductsByCategory('bois', language);
  return <CategoryLayout meta={meta} products={products} />;
};
