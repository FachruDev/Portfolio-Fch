
import React from 'react';

interface MetaInfoItemProps {
    icon: React.ReactNode;
    label: string;
    value: string;
}

const MetaInfoItem: React.FC<MetaInfoItemProps> = ({ icon, label, value }) => (
    <div className="flex items-start">
        <div className="flex-shrink-0 text-light-accent dark:text-dark-accent mt-1 w-6 h-6">{icon}</div>
        <div className="ml-4">
            <p className="text-sm font-medium text-light-secondary dark:text-dark-secondary">{label}</p>
            <p className="text-base font-semibold text-light-primary dark:text-dark-primary">{value}</p>
        </div>
    </div>
);

export default MetaInfoItem;
