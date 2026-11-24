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

export interface ShippingAddress {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  street: string;
  postalCode: string;
  city: string;
  notes?: string;
}

export interface UserAccount {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  street: string;
  postalCode: string;
  city: string;
  createdAt: string;
}

export type PaymentMethod = 'card' | 'transfer' | 'cod';
export type DeliveryMethod = 'home' | 'pickup';

export interface OrderLineItem {
  productId: string;
  slug: string;
  title: string;
  image: string;
  unitPrice: number;
  priceSuffix: string;
  quantity: number;
}

export interface SimulatedOrder {
  id: string;
  orderNumber: string;
  userId: string | null;
  createdAt: string;
  items: OrderLineItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  deliveryMethod: DeliveryMethod;
  paymentMethod: PaymentMethod;
  cardLast4?: string;
  shippingAddress: ShippingAddress;
  status: 'Payée (Simulation)' | 'En attente de virement (Simulation)' | 'Paiement à la livraison';
}

