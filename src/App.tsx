import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CookieBanner } from './components/CookieBanner';
import { Home } from './pages/Home';
import { Bois } from './pages/Bois';
import { Briquettes } from './pages/Briquettes';
import { Pellets } from './pages/Pellets';
import { Granules } from './pages/Granules';
import { Allumage } from './pages/Allumage';
import { Boutique } from './pages/Boutique';
import { ProductDetail } from './pages/ProductDetail';
import { Actualites } from './pages/Actualites';
import { ArticleDetail } from './pages/ArticleDetail';
import { Contact } from './pages/Contact';
import { Cart } from './pages/Cart';
import { ZonesLivraison } from './pages/ZonesLivraison';
import { Legal } from './pages/Legal';
import { Account } from './pages/Account';

const TRANSPARENT_NAV_PATHS = new Set([
  '/',
  '/type-de-chauffage/bois',
  '/type-de-chauffage/briquettes',
  '/type-de-chauffage/pellets',
  '/type-de-chauffage/granules-de-bois',
  '/type-de-chauffage/allumage',
  '/boutique',
  '/actualites',
  '/contact',
  '/zones-de-livraison',
  '/mentions-legales',
  '/protection-des-donnees',
  '/conditions-generales-de-vente',
  '/conditions-dutilisation',
  '/mon-compte',
]);

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppShell: React.FC = () => {
  const { pathname } = useLocation();
  const [cookieModalOpen, setCookieModalOpen] = useState(false);

  const normalizedPath = pathname.endsWith('/') && pathname.length > 1
    ? pathname.slice(0, -1)
    : pathname;

  const isTransparentNav = TRANSPARENT_NAV_PATHS.has(normalizedPath);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#595959]">
      <ScrollToTop />
      <Header transparentNav={isTransparentNav} />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/type-de-chauffage/bois" element={<Bois />} />
          <Route path="/bois" element={<Navigate to="/type-de-chauffage/bois" replace />} />
          <Route path="/type-de-chauffage/briquettes" element={<Briquettes />} />
          <Route path="/briquette" element={<Navigate to="/type-de-chauffage/briquettes" replace />} />
          <Route path="/type-de-chauffage/pellets" element={<Pellets />} />
          <Route path="/pellet" element={<Navigate to="/type-de-chauffage/pellets" replace />} />
          <Route path="/type-de-chauffage/granules-de-bois" element={<Granules />} />
          <Route path="/type-de-chauffage/allumage" element={<Allumage />} />
          <Route path="/allumage" element={<Navigate to="/type-de-chauffage/allumage" replace />} />

          <Route path="/boutique" element={<Boutique />} />
          <Route path="/produit/:slug" element={<ProductDetail />} />

          <Route path="/actualites" element={<Actualites />} />
          <Route path="/actualites/:slug" element={<ArticleDetail />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/panier" element={<Cart />} />
          <Route path="/zones-de-livraison" element={<ZonesLivraison />} />
          <Route path="/mon-compte" element={<Account />} />

          <Route
            path="/mentions-legales"
            element={
              <Legal
                pageKey="mentions-legales"
                onOpenCookieSettings={() => setCookieModalOpen(true)}
              />
            }
          />
          <Route
            path="/protection-des-donnees"
            element={
              <Legal
                pageKey="protection-des-donnees"
                onOpenCookieSettings={() => setCookieModalOpen(true)}
              />
            }
          />
          <Route
            path="/conditions-generales-de-vente"
            element={
              <Legal
                pageKey="conditions-generales-de-vente"
                onOpenCookieSettings={() => setCookieModalOpen(true)}
              />
            }
          />
          <Route
            path="/conditions-dutilisation"
            element={
              <Legal
                pageKey="conditions-dutilisation"
                onOpenCookieSettings={() => setCookieModalOpen(true)}
              />
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer onOpenCookieSettings={() => setCookieModalOpen(true)} />
      <CartDrawer />
      <CookieBanner
        isModalOpen={cookieModalOpen}
        onOpenModal={() => setCookieModalOpen(true)}
        onCloseModal={() => setCookieModalOpen(false)}
      />
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppShell />
      </CartProvider>
    </BrowserRouter>
  );
}
