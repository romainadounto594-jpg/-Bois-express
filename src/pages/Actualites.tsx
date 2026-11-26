import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { getLocalizedArticles } from '../data/i18nArticles';
import { PageBanner } from '../components/PageBanner';
import { useLanguage } from '../hooks/useLanguage';

const ALL_CATEGORIES = 'ALL';

export const Actualites: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>(ALL_CATEGORIES);

  useEffect(() => {
    setSelectedCategory(ALL_CATEGORIES);
  }, [language]);

  const articles = useMemo(() => getLocalizedArticles(language), [language]);

  const categories = useMemo(
    () => [ALL_CATEGORIES, ...Array.from(new Set(articles.map((a) => a.category)))],
    [articles]
  );

  const visibleArticles = useMemo(
    () =>
      selectedCategory === ALL_CATEGORIES
        ? articles
        : articles.filter((a) => a.category === selectedCategory),
    [articles, selectedCategory]
  );

  return (
    <div>
      <PageBanner
        title={t.news.bannerTitle}
        titleColor="white"
        align="center"
        backgroundImage="/images/articles/allumage-dun-feu-a-laide-dune-buche-de-bois-compresse-768x512.jpg"
        breadcrumbs={[
          { label: t.common.home, path: '/' },
          { label: t.news.bannerTitle },
        ]}
      />

      <section className="py-12 md:py-20 px-4 sm:px-6 max-w-[1140px] mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-[14px] font-medium rounded transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#FC8920] text-white'
                  : 'bg-[#f7f7f7] text-[#292929] hover:bg-[#e9e9e9]'
              }`}
            >
              {cat === ALL_CATEGORIES ? t.news.allCategories : cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[35px]">
          {visibleArticles.map((article) => (
            <article
              key={article.slug}
              className="flex flex-col bg-white border border-[#e9e9e9] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <Link
                to={`/actualites/${article.slug}`}
                className="relative block aspect-[3/2] overflow-hidden bg-[#f7f7f7]"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </Link>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-[12px] text-[#595959] mb-2">
                  <span className="font-semibold text-[#FC8920]">
                    {article.category}
                  </span>
                  <span aria-hidden="true">•</span>
                  <time>{article.date}</time>
                </div>

                <h2 className="text-[18px] font-semibold text-[#292929] leading-snug mb-3">
                  <Link
                    to={`/actualites/${article.slug}`}
                    className="hover:text-[#FC8920] transition-colors"
                  >
                    {article.title}
                  </Link>
                </h2>

                <p className="text-[14px] text-[#595959] leading-relaxed mb-4 flex-1">
                  {article.excerpt}…
                </p>

                <Link
                  to={`/actualites/${article.slug}`}
                  className="text-[14px] font-semibold text-[#FC8920] hover:text-[#292929] transition-colors self-start"
                >
                  {t.news.readMore}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
