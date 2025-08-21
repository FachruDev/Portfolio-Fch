
import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../../utils/types';
import { useAppContext } from '../../contexts/AppContext';

interface BlogHeaderProps {
    article: Article;
}

const BlogHeader: React.FC<BlogHeaderProps> = ({ article }) => {
    const { t, language } = useAppContext();

    return (
        <header>
            <Link to="/blog" className="inline-block mb-8 text-light-accent dark:text-dark-accent hover:underline">
                &larr; {t('common.back')} to {t('nav.blog')}
            </Link>
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-2">{article.title[language]}</h1>
            <p className="text-lg text-light-secondary dark:text-dark-secondary mb-4">
                {new Date(article.date).toLocaleDateString(language, { year: 'numeric', month: 'long', day: 'numeric' })} • {article.readingTime} min read
            </p>
        </header>
    );
};

export default BlogHeader;
