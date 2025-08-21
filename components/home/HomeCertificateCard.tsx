
import React from 'react';
import { Link } from 'react-router-dom';
import { Certificate } from '../../utils/types';
import { useAppContext } from '../../contexts/AppContext';
import { ArrowRightIcon, BriefcaseIcon } from '../icons';

const HomeCertificateCard: React.FC<{ certificate: Certificate }> = ({ certificate }) => {
    const { t, language } = useAppContext();

    return (
        <Link
            to={`/certificates/${certificate.id}`}
            // The card is a flex container to allow the content to grow and the footer to align at the bottom.
            className="group h-full flex flex-col rounded-2xl bg-light-surface dark:bg-dark-surface overflow-hidden border border-gray-200/30 dark:border-gray-700/50 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
        >
            <div className="aspect-video overflow-hidden">
                <img
                    src={certificate.image}
                    alt={certificate.title[language]}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-light-primary dark:text-dark-primary group-hover:text-light-accent dark:group-hover:text-dark-accent transition-colors duration-300">
                    {certificate.title[language]}
                </h3>
                <div className="mt-2 flex items-center text-sm text-light-secondary dark:text-dark-secondary">
                    <BriefcaseIcon className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span>{certificate.issuer}</span>
                </div>
                <p className="mt-1 text-xs text-light-secondary dark:text-dark-secondary">
                    {new Date(certificate.date).toLocaleDateString(language, { year: 'numeric', month: 'long' })}
                </p>
                
                {/* This div grows to push the footer down, ensuring all card footers align. */}
                <div className="flex-grow"></div>

                <div className="mt-4 pt-4 border-t border-gray-200/50 dark:border-gray-700/50 flex items-center justify-between text-sm font-semibold text-light-accent dark:text-dark-accent">
                    <span>{t('common.viewDetails')}</span>
                    <ArrowRightIcon className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </Link>
    );
};

export default HomeCertificateCard;
