import React from 'react';
import { getLocalizedCategoryMeta, getLocalizedProductsByCategory } from '../data/i18nProducts';
import { useLanguage } from '../hooks/useLanguage';
import { CategoryLayout } from '../components/CategoryLayout';

export const Allumage: React.FC = () => {
  const { language } = useLanguage();
  const meta = getLocalizedCategoryMeta('allumage', language);
  const products = getLocalizedProductsByCategory('allumage', language);
  return <CategoryLayout meta={meta} products={products} />;
};
