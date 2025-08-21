
import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../../utils/types';
import { useAppContext } from '../../contexts/AppContext';
import { ArrowRightIcon } from '../icons';

interface FeaturedArticleProps {
    article: Article;
    title: string;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ article, title }) => {
    const { language } = useAppContext();
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight mb-6 text-center lg:text-left">{title}</h2>
            <Link to={`/blog/${article.id}`} className="block group bg-light-surface dark:bg-dark-surface rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="grid md:grid-cols-2 items-center">
                    <div className="p-8 order-2 md:order-1 flex flex-col justify-center">
                        {article.category && <p className="text-sm font-semibold text-light-accent dark:text-dark-accent uppercase tracking-wider mb-2">{article.category?.[language]}</p>}
                        <h3 className="text-2xl lg:text-3xl font-bold text-light-primary dark:text-dark-primary group-hover:text-light-accent dark:group-hover:text-dark-accent transition-colors">{article.title[language]}</h3>
                        <p className="text-sm text-light-secondary dark:text-dark-secondary mt-2">{new Date(article.date).toLocaleDateString(language, { year: 'numeric', month: 'long', day: 'numeric' })} • {article.readingTime} min read</p>
                        <p className="mt-4 text-light-secondary dark:text-dark-secondary flex-grow line-clamp-3">{article.description[language]}</p>
                        <div className="mt-6 flex items-center text-base font-semibold text-light-accent dark:text-dark-accent group-hover:translate-x-1 transition-transform">
                            <span>Read Full Article</span>
                            <ArrowRightIcon className="w-5 h-5 ml-2"/>
                        </div>
                    </div>
                    <div className="overflow-hidden order-1 md:order-2 h-64 md:h-full min-h-[250px]">
                        <img src={article.image} alt={article.title[language]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                </div>
            </Link>
        </section>
    );
};

export default FeaturedArticle;
