
import React from 'react';
import { Article } from '../../utils/types';
import ArticleCard from '../ArticleCard';
import { Pagination } from '../Pagination';

interface ArticleGridProps {
    articles: Article[];
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const ArticleGrid: React.FC<ArticleGridProps> = ({ articles, currentPage, totalPages, onPageChange }) => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {articles.map(article => (
                    <ArticleCard key={article.id} article={article} />
                ))}
            </div>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
            />
        </>
    );
};

export default ArticleGrid;
