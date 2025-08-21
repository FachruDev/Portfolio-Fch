
import React from 'react';

interface SortOption {
    key: string;
    label: string;
}

interface SortFilterProps {
    sortBy: string;
    onSortByChange: (sort: string) => void;
    title: string;
    options: SortOption[];
}

const SortFilter: React.FC<SortFilterProps> = ({ sortBy, onSortByChange, title, options }) => {
    return (
        <div className="bg-light-surface dark:bg-dark-surface p-6 rounded-2xl shadow-md border border-gray-200/50 dark:border-gray-700/50">
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <div className="flex flex-col space-y-2">
                {options.map((option) => (
                    <button
                        key={option.key}
                        onClick={() => onSortByChange(option.key)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 ${
                            sortBy === option.key
                                ? 'bg-light-accent text-white dark:bg-dark-accent dark:text-dark-background font-semibold'
                                : 'text-light-secondary dark:text-dark-secondary hover:bg-gray-200/50 dark:hover:bg-gray-700/50'
                        }`}
                    >
                        {option.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SortFilter;
