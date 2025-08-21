
import React from 'react';

interface ContactInfoItemProps {
    icon: React.ReactNode;
    label: string;
    value: string;
    href?: string;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ icon, label, value, href }) => {
    const isLink = !!href;
    const Component = isLink ? 'a' : 'div';
    const props = isLink ? { href, target: '_blank', rel: 'noopener noreferrer', className: "group flex items-start text-left" } : { className: "flex items-start" };

    return (
        <Component {...props}>
            <div className="flex-shrink-0 w-12 h-12 bg-light-background dark:bg-dark-background rounded-full flex items-center justify-center text-light-accent dark:text-dark-accent">
                {icon}
            </div>
            <div className="ml-4">
                <p className="text-sm font-semibold text-light-secondary dark:text-dark-secondary">{label}</p>
                <p className="text-base font-medium text-light-primary dark:text-dark-primary group-hover:text-light-accent dark:group-hover:text-dark-accent transition-colors">{value}</p>
            </div>
        </Component>
    );
}

export default ContactInfoItem;
