
import React from 'react';
import { useAppContext } from '../../contexts/AppContext';

const ContactHeader: React.FC = () => {
    const { t } = useAppContext();
    return (
        <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">{t('contact.title')}</h1>
            <p className="text-lg text-light-secondary dark:text-dark-secondary mb-12">
            {t('contact.description')}
            </p>
        </div>
    );
};

export default ContactHeader;
