import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getArticleBySlug, NEWS_ARTICLES } from '../data/articles';
import { PageBanner } from '../components/PageBanner';

export const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return (
      <div className="max-w-[900px] mx-auto px-4 py-20 text-center">
        <h1 className="text-[28px] font-semibold text-[#292929] mb-4">
          Article introuvable
        </h1>
        <Link
          to="/actualites"
          className="inline-block px-6 py-3 bg-[#FC8920] hover:bg-[#292929] text-white font-semibold rounded transition-colors"
        >
          Retour aux actualités
        </Link>
      </div>
    );
  }

  const otherArticles = NEWS_ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <div>
      <PageBanner
        title={article.title}
        titleColor="white"
        align="center"
        backgroundImage={article.image}
        breadcrumbs={[
          { label: 'Accueil', path: '/' },
          { label: 'Actualités', path: '/actualites' },
          { label: article.category },
        ]}
      />

      <article className="max-w-[860px] mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#dcdcdc]">
          <div className="flex items-center gap-2 text-[14px] text-[#595959]">
            <span className="font-semibold text-[#FC8920]">{article.category}</span>
            <span aria-hidden="true">•</span>
            <time>{article.date}</time>
          </div>

          <Link
            to="/actualites"
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#292929] hover:text-[#FC8920] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Toutes les actualités
          </Link>
        </div>

        <div className="mb-8 rounded-lg overflow-hidden border border-[#e9e9e9]">
          <img
            src={article.image}
            alt={article.title}
            className="w-full max-h-[420px] object-cover"
          />
        </div>

        <div className="space-y-4 text-[16px] leading-[1.75] text-[#595959]">
          {article.blocks.map((block, index) =>
            block.type === 'heading' ? (
              <h2
                key={index}
                className="text-[22px] font-semibold text-[#292929] pt-4"
              >
                {block.text}
              </h2>
            ) : (
              <p key={index}>{block.text}</p>
            )
          )}
        </div>

        <div className="mt-12 pt-8 border-t border-[#dcdcdc]">
          <h3 className="text-[20px] font-semibold text-[#292929] mb-5">
            Articles récents
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {otherArticles.map((item) => (
              <Link
                key={item.slug}
                to={`/actualites/${item.slug}`}
                className="group block border border-[#e9e9e9] rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="aspect-[3/2] bg-[#f7f7f7] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3.5">
                  <p className="text-[12px] text-[#FC8920] font-medium mb-1">
                    {item.date}
                  </p>
                  <h4 className="text-[14px] font-semibold text-[#292929] group-hover:text-[#FC8920] transition-colors leading-snug">
                    {item.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};
