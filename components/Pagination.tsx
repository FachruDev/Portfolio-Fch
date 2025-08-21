import React from 'react';
import { useAppContext } from '../contexts/AppContext';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const { t } = useAppContext();
    
    if (totalPages <= 0) {
        return null;
    }

    const getPaginationItems = () => {
        const delta = 1;
        const left = currentPage - delta;
        const right = currentPage + delta;
        const range = [];
        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= left && i <= right)) {
                range.push(i);
            }
        }

        const rangeWithDots: (number | string)[] = [];
        let l: number | undefined;
        for (const i of range) {
            if (l) {
                if (i - l === 2) {
                    rangeWithDots.push(l + 1);
                } else if (i - l !== 1) {
                    rangeWithDots.push('...');
                }
            }
            rangeWithDots.push(i);
            l = i;
        }

        return rangeWithDots;
    };

    const paginationItems = getPaginationItems();

    return (
        <nav className="flex justify-center items-center space-x-2 mt-12" aria-label="Pagination">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg text-sm font-medium bg-light-surface dark:bg-dark-surface text-light-secondary dark:text-dark-secondary disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-colors"
            >
                {t('common.previous')}
            </button>

            {paginationItems.map((item, index) =>
                typeof item === 'string' ? (
                    <span key={`dots-${index}`} className="px-4 py-2 text-sm text-light-secondary dark:text-dark-secondary">
                        ...
                    </span>
                ) : (
                    <button
                        key={item}
                        onClick={() => onPageChange(item)}
                        className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                            item === currentPage
                                ? 'bg-light-accent text-white dark:bg-dark-accent dark:text-dark-background shadow-md'
                                : 'bg-light-surface dark:bg-dark-surface text-light-secondary dark:text-dark-secondary hover:bg-gray-200/50 dark:hover:bg-gray-700/50'
                        }`}
                        aria-current={item === currentPage ? 'page' : undefined}
                    >
                        {item}
                    </button>
                )
            )}

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg text-sm font-medium bg-light-surface dark:bg-dark-surface text-light-secondary dark:text-dark-secondary disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-colors"
            >
                {t('common.next')}
            </button>
        </nav>
    );
};