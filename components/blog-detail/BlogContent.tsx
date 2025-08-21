
import React from 'react';
import { Article } from '../../utils/types';
import { useAppContext } from '../../contexts/AppContext';

interface BlogContentProps {
    article: Article;
}

const BlogContent: React.FC<BlogContentProps> = ({ article }) => {
    const { language } = useAppContext();

    return (
        <article className="prose prose-lg dark:prose-invert max-w-none text-light-primary dark:text-dark-primary">
            <p className="lead">{article.description[language]}</p>
            <p>{article.longDescription?.[language]}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </article>
    );
};

export default BlogContent;
