
import React from 'react';
import SortFilter from './SortFilter';

interface SortOption {
    key: string;
    label: string;
}

interface CertificatesSidebarProps {
    sortBy: string;
    onSortByChange: (sort: string) => void;
    sortTitle: string;
    sortOptions: SortOption[];
}

const CertificatesSidebar: React.FC<CertificatesSidebarProps> = ({
    sortBy,
    onSortByChange,
    sortTitle,
    sortOptions,
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
            </div>
        </aside>
    );
};

export default CertificatesSidebar;
