import React from 'react';
import { getLocalizedCategoryMeta, getLocalizedProductsByCategory } from '../data/i18nProducts';
import { useLanguage } from '../hooks/useLanguage';
import { CategoryLayout } from '../components/CategoryLayout';

export const Briquettes: React.FC = () => {
  const { language } = useLanguage();
  const meta = getLocalizedCategoryMeta('briquettes', language);
  const products = getLocalizedProductsByCategory('briquettes', language);
  return <CategoryLayout meta={meta} products={products} />;
};
