
import React from 'react';

interface CategoryFilterProps {
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
    categories: string[];
    title: string;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, onCategoryChange, categories, title }) => {
    return (
        <div className="bg-light-surface dark:bg-dark-surface p-6 rounded-2xl shadow-md border border-gray-200/50 dark:border-gray-700/50">
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <div className="flex flex-col space-y-2">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => onCategoryChange(category)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 ${
                            selectedCategory === category
                                ? 'bg-light-accent text-white dark:bg-dark-accent dark:text-dark-background font-semibold'
                                : 'text-light-secondary dark:text-dark-secondary hover:bg-gray-200/50 dark:hover:bg-gray-700/50'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategoryFilter;
