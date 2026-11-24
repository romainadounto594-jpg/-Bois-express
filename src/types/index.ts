export type ProductCategorySlug =
  | 'bois'
  | 'briquettes'
  | 'pellets'
  | 'granules-de-bois'
  | 'allumage';

export type OrderGroup = 'bulk-wood' | 'pellet' | 'standard';

export interface Product {
  id: string;
  slug: string;
  category: ProductCategorySlug;
  categoryName: string;
  title: string;
  price: number;
  priceSuffix: string;
  shortDesc: string;
  inStock: boolean;
  image: string;
  orderGroup: OrderGroup;
}

export interface CategoryMeta {
  slug: ProductCategorySlug;
  name: string;
  title: string;
  description: string;
  bannerImage: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ArticleBlock {
  type: 'heading' | 'paragraph';
  text: string;
}

export interface NewsArticle {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  blocks: ArticleBlock[];
}

export interface NavItem {
  label: string;
  path: string;
}

export interface LegalSection {
  heading?: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface LegalPageData {
  slug: string;
  title: string;
  breadcrumbLabel: string;
  lastUpdated?: string;
  sections: LegalSection[];
}

export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  apis: boolean;
  advertising: boolean;
  social: boolean;
  video: boolean;
  updatedAt: string;
}
