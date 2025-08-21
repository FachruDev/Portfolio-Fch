
import React from 'react';
import { SearchIcon } from '../icons';

interface SearchBarProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    ariaLabel: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, placeholder, ariaLabel }) => {
    return (
        <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
                <input
                    type="search"
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="w-full pl-12 pr-4 py-3 rounded-full bg-light-surface dark:bg-dark-surface border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent focus:outline-none transition-shadow"
                    aria-label={ariaLabel}
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-light-secondary dark:text-dark-secondary">
                    <SearchIcon className="w-5 h-5" />
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
