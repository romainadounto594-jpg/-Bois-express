import React from 'react';
import { Link } from 'react-router-dom';
import { Info } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { getLocalizedProducts } from '../data/i18nProducts';
import { ProductGrid } from '../components/ProductGrid';

const FEATURED_SLUGS = [
  'bois-de-chauffage-sec-en-vrac-longueur-33-ou-50-cm-essences-calorifiques',
  'buches-de-jours-type-ruf-en-paquets',
  'pellet-erda-din-la-palette',
  'allume-feu-ecologique',
];

export const Home: React.FC = () => {
  const { language, t } = useLanguage();

  const categoryCards = [
    {
      title: t.home.catBois,
      image: '/images/cat-bois.webp',
      path: '/type-de-chauffage/bois',
    },
    {
      title: t.home.catBriquettes,
      image: '/images/cat-briquettes.webp',
      path: '/type-de-chauffage/briquettes',
    },
    {
      title: t.home.catPellets,
      image: '/images/cat-pellets.webp',
      path: '/type-de-chauffage/pellets',
    },
    {
      title: t.home.catAllumage,
      image: '/images/cat-allumage.webp',
      path: '/type-de-chauffage/allumage',
    },
  ];

  const localizedProducts = getLocalizedProducts(language);
  const featuredProducts = FEATURED_SLUGS.map((slug) =>
    localizedProducts.find((p) => p.slug === slug)
  ).filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <div>
      {/* Hero Banner */}
      <section
        className="relative w-full bg-cover bg-center pt-20 pb-36 lg:pt-[220px] lg:pb-[210px] px-4 overflow-hidden"
        style={{ backgroundImage: "url('/images/hero-bois.webp')" }}
      >
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        <div className="relative z-10 max-w-[1140px] mx-auto text-center">
          <h1 className="text-[34px] sm:text-[46px] lg:text-[54px] font-semibold text-white tracking-tight">
            {t.home.heroTitle}
          </h1>
          <div className="w-[240px] sm:w-[300px] h-[2px] bg-white mx-auto mt-4" />
        </div>
      </section>

      {/* 4 Category Call-To-Action Cards overlapping Hero */}
      <section className="max-w-[1600px] mx-auto px-4 lg:px-8 -mt-[85px] sm:-mt-[100px] relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categoryCards.map((card) => (
            <Link
              key={card.path}
              to={card.path}
              className="group relative block h-[250px] overflow-hidden shadow-md"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${card.image}')` }}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-colors duration-700" />
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
                <h2 className="text-[24px] font-bold text-white tracking-wide mb-4">
                  {card.title}
                </h2>
                <span className="inline-block bg-[#FC8920] text-white text-[14px] font-semibold px-5 py-2.5 rounded-sm transition-transform duration-300 group-hover:scale-105">
                  {t.home.viewProducts}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Qui sommes-nous ? / Présentation */}
      <section className="my-14 sm:my-16 px-4">
        <div className="max-w-[920px] mx-auto text-center">
          <p className="text-[18px] font-black text-[#292929]">
            {t.home.aboutEyebrow}
          </p>
          <h2 className="text-[28px] sm:text-[34px] font-semibold text-[#292929] uppercase mt-1 mb-5">
            {t.home.aboutTitle}
          </h2>
          <p className="text-[16px] font-normal text-[#595959] leading-[1.75] mb-8">
            {t.home.aboutText}
          </p>
          <Link
            to="/boutique"
            className="inline-block bg-[#FC8920] hover:bg-[#292929] text-black hover:text-white font-extrabold text-[15px] uppercase px-7 py-3.5 rounded-sm transition-colors duration-200"
          >
            {t.home.discoverCatalog}
          </Link>
        </div>
      </section>

      {/* Produits mis en avant */}
      <section className="py-10 px-4 sm:px-6 max-w-[1140px] mx-auto border-t border-[#e9e9e9]">
        <div className="text-center mb-8">
          <p className="text-[15px] font-bold text-[#FC8920] uppercase tracking-wide">
            {t.home.featuredEyebrow}
          </p>
          <h2 className="text-[26px] sm:text-[30px] font-semibold text-[#292929] mt-1">
            {t.home.featuredTitle}
          </h2>
        </div>

        <ProductGrid products={featuredProducts} />

        {/* Information sur les commandes */}
        <div className="mt-10 bg-white border border-[#d5d5d5] shadow-sm p-5 sm:p-6 max-w-[780px] mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#FC8920] text-black font-extrabold text-[17px] sm:text-[20px] px-3 py-1.5 mb-3">
            <Info className="w-5 h-5 shrink-0" />
            <span>{t.common.orderNoticeTitle}</span>
          </div>
          <p className="text-[15px] font-semibold text-[#292929] mb-2">
            {t.common.orderNoticeIntro}
          </p>
          <ul className="list-disc pl-5 text-[15px] font-medium text-[#292929]">
            <li>{t.common.orderNoticeRule}</li>
          </ul>
        </div>
      </section>

      {/* Delivery 50/50 Split Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 w-full mt-8">
        {/* Left: Camion Benne 7.5 T */}
        <div
          className="relative bg-cover bg-center py-24 md:py-[150px] px-6 text-center overflow-hidden"
          style={{ backgroundImage: "url('/images/delivery-vrac.webp')" }}
        >
          <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
          <div className="relative z-10 max-w-[440px] mx-auto flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
              className="w-[69px] h-[69px] fill-white mb-4"
              aria-hidden="true"
            >
              <path d="M24.5,74c0-8.642-4.364-14.375-7.25-14.375S10,65.356,10,74s4.364,14.375,7.25,14.375S24.5,82.64,24.5,74Zm-11,0c0-6.448,2.667-9.988,3.75-10.769C18.333,64.01,21,67.55,21,74s-2.667,9.988-3.75,10.769C16.167,83.986,13.5,80.446,13.5,74Z" />
              <path d="M127.661,69.19c0-.026,0-.053-.01-.079-1.606-11.107-8.574-19.488-16.9-19.488H95.468V35.375c0-3.773-5.373-5.748-10.68-5.748-5.006,0-10.066,1.758-10.625,5.124L63.977,49.623H17.25C7.738,49.623,0,60.558,0,74S7.738,98.373,17.25,98.373h93.5C120.262,98.373,128,87.438,128,74A34.174,34.174,0,0,0,127.661,69.19ZM84.788,33.127c4.711,0,7.18,1.67,7.18,2.248s-2.469,2.248-7.18,2.248-7.181-1.67-7.181-2.248S80.076,33.127,84.788,33.127ZM3.5,74c0-11.511,6.168-20.875,13.75-20.875S31,62.487,31,74,24.832,94.873,17.25,94.873,3.5,85.509,3.5,74ZM110.75,94.873h-84.6a21.149,21.149,0,0,0,4.5-5.55H61a1.75,1.75,0,0,0,0-3.5H32.327a32.894,32.894,0,0,0,0-23.65h20.09a1.75,1.75,0,0,0,0-3.5H30.651a21.149,21.149,0,0,0-4.5-5.55H64.9a1.751,1.751,0,0,0,1.444-.761L75.768,38.6c2.405,2,6,2.52,9.02,2.52a17.317,17.317,0,0,0,7.18-1.388V51.373a1.75,1.75,0,0,0,1.75,1.75H110.75c6.142,0,11.354,6.147,13.113,14.6h-19.78a1.75,1.75,0,0,0,0,3.5h20.281c.08.91.136,1.832.136,2.775C124.5,85.509,118.332,94.873,110.75,94.873Z" />
              <path d="M65.81,62.173h44.523a1.75,1.75,0,0,0,0-3.5H65.81a1.75,1.75,0,0,0,0,3.5Z" />
              <path d="M74.8,69.473a1.75,1.75,0,0,0-1.75-1.75H51.193a1.75,1.75,0,0,0,0,3.5H73.049A1.75,1.75,0,0,0,74.8,69.473Z" />
              <path d="M108.625,76.773H64a1.75,1.75,0,0,0,0,3.5h44.625a1.75,1.75,0,0,0,0-3.5Z" />
              <path d="M52.833,76.773h-8.5a1.75,1.75,0,0,0,0,3.5h8.5a1.75,1.75,0,0,0,0-3.5Z" />
              <path d="M106.5,85.823H90.375a1.75,1.75,0,0,0,0,3.5H106.5a1.75,1.75,0,0,0,0-3.5Z" />
            </svg>
            <h3 className="text-[20px] font-semibold text-white uppercase tracking-wide mb-2">
              {t.home.deliveryLeftTitle}
            </h3>
            <p className="text-[16px] text-white leading-relaxed">
              {t.home.deliveryLeftLine1}
              <br />
              {t.home.deliveryLeftLine2}
            </p>
          </div>
        </div>

        {/* Right: Camion 19T hayon élévateur */}
        <div
          className="relative bg-cover bg-center py-24 md:py-[150px] px-6 text-center overflow-hidden"
          style={{ backgroundImage: "url('/images/delivery-palettes.webp')" }}
        >
          <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
          <div className="relative z-10 max-w-[440px] mx-auto flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-[69px] h-[69px] fill-white mb-4"
              aria-hidden="true"
            >
              <path d="m501.5 418.1h-94.4c-3.8-14-11.6-26.4-22.1-35.9v-373.3c0-5.8-4.7-10.5-10.5-10.5 0 0 0 0-.1 0-29.5 0-53.4 24-53.4 53.5v133.2c0 37.5 15.6 73 43 98.4v85.1c-6.1-2.6-12.5-4.5-19.2-5.4v-7.6c0-21.8-17.7-39.5-39.5-39.5h-4.2l-70.2-220.8h32.7c5.8 0 10.5-4.7 10.5-10.5s-4.7-10.5-10.5-10.5h-158.2c-22.2 0-41.1 16.6-43.8 38.7l-18.9 153.5c-1.2.5-2.3 1.2-3.2 2.2l-27.9 27.9c-7.5 7.4-11.6 17.3-11.6 27.9v104.6c0 21.8 17.7 39.5 39.5 39.5h4.2c11.8 26.5 38.3 45 69.1 45s57.3-18.5 69.1-45h83.4c11.8 26.5 38.3 45 69.1 45 41.3 0 74.9-33.3 75.5-74.5h91.7c5.8 0 10.5-4.7 10.5-10.5-.1-5.8-4.8-10.5-10.6-10.5zm-159.5-233v-133.2c0-14.2 9.2-26.3 21.9-30.7v231c-14.1-19.3-21.9-42.7-21.9-67.1zm-218.8-89.8h85.6l70.2 220.9h-47.2c-11.9 0-23.4-4.2-32.6-11.7l-27.2-22.4c-12.9-10.6-29.2-16.5-45.9-16.5h-3zm-40.8 20.1c1.3-10.5 9.5-18.5 19.8-19.9v170h-38.2zm30.3 377.2c-30.1 0-54.5-24.5-54.5-54.6s24.5-54.6 54.5-54.6c30.1 0 54.6 24.5 54.6 54.6s-24.5 54.6-54.6 54.6zm146.6-45.1h-71.7c.4-3.1.7-6.3.7-9.5 0-41.7-33.9-75.6-75.6-75.6s-75.6 33.9-75.6 75.6c0 3.2.3 6.3.6 9.3-9.4-.9-16.7-8.7-16.7-18.3v-104.5c0-4.9 1.9-9.5 5.4-13l24.8-24.8h74.9c11.9 0 23.4 4.2 32.6 11.7l27.2 22.4c12.9 10.6 29.2 16.5 45.9 16.5h73.4c10.2 0 18.4 8.3 18.4 18.4v7.6c-36.7 5.1-65.1 36.7-65.1 74.8.1 3.2.4 6.3.8 9.4zm74.9 45.1c-30.1 0-54.5-24.5-54.5-54.6s24.5-54.6 54.5-54.6c30.1 0 54.6 24.5 54.6 54.6s-24.5 54.6-54.6 54.6z" />
            </svg>
            <h3 className="text-[20px] font-semibold text-white uppercase tracking-wide mb-2">
              {t.home.deliveryRightTitle}
            </h3>
            <p className="text-[16px] text-white leading-relaxed">
              {t.home.deliveryRightLine1}
              <br />
              {t.home.deliveryRightLine2}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
