
import React from 'react';
import { Article } from '../../utils/types';
import CategoryFilter from './CategoryFilter';
import RecentArticles from './RecentArticles';

interface BlogSidebarProps {
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
    categories: string[];
    recentArticles: Article[];
    categoryTitle: string;
    recentArticlesTitle: string;
}

const BlogSidebar: React.FC<BlogSidebarProps> = ({
    selectedCategory,
    onCategoryChange,
    categories,
    recentArticles,
    categoryTitle,
    recentArticlesTitle
}) => {
    return (
        <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-10">
                <CategoryFilter
                    selectedCategory={selectedCategory}
                    onCategoryChange={onCategoryChange}
                    categories={categories}
                    title={categoryTitle}
                />
                <RecentArticles
                    articles={recentArticles}
                    title={recentArticlesTitle}
                />
            </div>
        </aside>
    );
};

export default BlogSidebar;
