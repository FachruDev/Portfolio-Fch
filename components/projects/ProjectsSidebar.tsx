
import React from 'react';
import SortFilter from './SortFilter';
import CategoryFilter from './CategoryFilter';

interface SortOption {
    key: string;
    label: string;
}

interface ProjectsSidebarProps {
    // Sort props
    sortBy: string;
    onSortByChange: (sort: string) => void;
    sortTitle: string;
    sortOptions: SortOption[];
    // Category props
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
    categories: string[];
    categoryTitle: string;
}

const ProjectsSidebar: React.FC<ProjectsSidebarProps> = ({
    sortBy,
    onSortByChange,
    sortTitle,
    sortOptions,
    selectedCategory,
    onCategoryChange,
    categories,
    categoryTitle
}) => {
    return (
        <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-10">
                <SortFilter
                    sortBy={sortBy}
                    onSortByChange={onSortByChange}
                    title={sortTitle}
                    options={sortOptions}
                />
                <CategoryFilter
                    selectedCategory={selectedCategory}
                    onCategoryChange={onCategoryChange}
                    categories={categories}
                    title={categoryTitle}
                />
            </div>
        </aside>
    );
};

export default ProjectsSidebar;
