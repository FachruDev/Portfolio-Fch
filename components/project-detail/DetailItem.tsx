
import React from 'react';

interface DetailItemProps {
    icon: React.ReactNode;
    label: string;
    children: React.ReactNode;
}

const DetailItem: React.FC<DetailItemProps> = ({ icon, label, children }) => (
    <div>
        <div className="flex items-center text-sm font-semibold text-light-secondary dark:text-dark-secondary mb-2">
            {icon}
            <span className="ml-2">{label}</span>
        </div>
        <div className="text-base text-light-primary dark:text-dark-primary">{children}</div>
    </div>
);

export default DetailItem;
