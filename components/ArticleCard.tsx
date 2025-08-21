import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../utils/types';
import { useAppContext } from '../contexts/AppContext';
import { ArrowRightIcon } from './icons';

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => {
  const { language } = useAppContext();
  const articleCategory = article.category ? article.category[language] : '';

  return (
    <Link to={`/blog/${article.id}`} className="bento-grid-item group flex flex-col justify-between h-full text-left">
      <div>
        <div className="overflow-hidden rounded-xl mb-4">
            <img src={article.image} alt={article.title[language]} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        {articleCategory && (
            <p className="text-sm font-semibold text-light-accent dark:text-dark-accent uppercase tracking-wider mb-2">{articleCategory}</p>
        )}
        <h3 className="text-xl font-bold text-light-primary dark:text-dark-primary group-hover:text-light-accent dark:group-hover:text-dark-accent transition-colors">{article.title[language]}</h3>
        <p className="text-sm text-light-secondary dark:text-dark-secondary mt-2">{new Date(article.date).toLocaleDateString(language, { year: 'numeric', month: 'long', day: 'numeric' })} • {article.readingTime} min read</p>
        <p className="mt-3 text-light-secondary dark:text-dark-secondary flex-grow line-clamp-3">{article.description[language]}</p>
      </div>
      <div className="mt-4 flex items-center text-sm font-semibold text-light-accent dark:text-dark-accent group-hover:translate-x-1 transition-transform">
        <span>Read Article</span>
        <ArrowRightIcon className="w-4 h-4 ml-1"/>
      </div>
    </Link>
  );
};

export default ArticleCard;