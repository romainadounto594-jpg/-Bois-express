import { NavItem } from '../types';

export const TOP_ANNOUNCEMENT = {
  text: 'Consultez nos différentes zones de livraison à domicile en cliquant ici',
  path: '/zones-de-livraison',
};

export const COMPANY_INFO = {
  name: 'Bois express',
  shortName: 'BOIS EXPRESS',
  address: '3 rue de Schoeneck',
  postalCity: '57600 Forbach',
  fullAddress: '3 rue de Schoeneck 57600 Forbach',
  phoneDisplay: '03 87 13 38 12',
  phoneHref: 'tel:0387133812',
  email: 'contact@bois-express.fr',
  siret: '50182636600038',
  naf: '8130Z',
  director: 'Direction Bois express',
};

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: 'Accueil', path: '/' },
  { label: 'Bois', path: '/type-de-chauffage/bois' },
  { label: 'Briquettes', path: '/type-de-chauffage/briquettes' },
  { label: 'Pellets', path: '/type-de-chauffage/pellets' },
  { label: 'Granulés de bois', path: '/type-de-chauffage/granules-de-bois' },
  { label: 'Allumage', path: '/type-de-chauffage/allumage' },
  { label: 'Actualités', path: '/actualites' },
  { label: 'Contact', path: '/contact' },
];

export const FOOTER_LEGAL_LINKS: NavItem[] = [
  { label: 'Mentions légales', path: '/mentions-legales' },
  { label: 'Protection des données', path: '/protection-des-donnees' },
  { label: "Conditions d'utilisation", path: '/conditions-dutilisation' },
  { label: 'Conditions de vente', path: '/conditions-generales-de-vente' },
];
