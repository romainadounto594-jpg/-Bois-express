import React from 'react';
import { getLocalizedCategoryMeta, getLocalizedProductsByCategory } from '../data/i18nProducts';
import { useLanguage } from '../hooks/useLanguage';
import { CategoryLayout } from '../components/CategoryLayout';

export const Granules: React.FC = () => {
  const { language } = useLanguage();
  const meta = getLocalizedCategoryMeta('granules-de-bois', language);
  const products = getLocalizedProductsByCategory('granules-de-bois', language);
  return <CategoryLayout meta={meta} products={products} />;
};
