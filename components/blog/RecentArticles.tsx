
import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../../utils/types';
import { useAppContext } from '../../contexts/AppContext';

interface RecentArticlesProps {
    articles: Article[];
    title: string;
}

const RecentArticles: React.FC<RecentArticlesProps> = ({ articles, title }) => {
    const { language } = useAppContext();
    return (
        <div className="bg-light-surface dark:bg-dark-surface p-6 rounded-2xl shadow-md border border-gray-200/50 dark:border-gray-700/50">
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <div className="flex flex-col space-y-4">
                {articles.map(article => (
                    <Link
                        key={article.id}
                        to={`/blog/${article.id}`}
                        className="group"
                    >
                        <p className="font-semibold text-light-primary dark:text-dark-primary group-hover:text-light-accent dark:group-hover:text-dark-accent transition-colors leading-tight">
                            {article.title[language]}
                        </p>
                        <p className="text-xs text-light-secondary dark:text-dark-secondary mt-1">
                            {new Date(article.date).toLocaleDateString(language, { year: 'numeric', month: 'short', day: 'numeric' })}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default RecentArticles;
