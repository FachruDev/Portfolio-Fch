
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../contexts/AppContext';
import { certificates } from '../../data/certificates';
import { ArrowRightIcon } from '../icons';
import HomeCertificateCard from './HomeCertificateCard';

const CertificatesSection: React.FC = () => {
    const { t } = useAppContext();
    // Featuring the 3 most recent certificates for a clean, focused section.
    const featuredCertificates = certificates
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3);

    return (
        <section className="relative py-24 sm:py-32 overflow-hidden">
            {/* New eye-catching background */}
            <div 
                aria-hidden="true" 
                className="absolute inset-0 -z-10"
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-light-accent/10 dark:bg-dark-accent/10 rounded-full filter blur-3xl opacity-50" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-light-primary dark:text-dark-primary">
                        {t('home.myCertificates')}
                    </h2>
                    <p className="text-lg text-light-secondary dark:text-dark-secondary">
                        {t('home.myCertificatesDescription')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredCertificates.map(cert => (
                        <HomeCertificateCard key={cert.id} certificate={cert} />
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Link
                        to="/certificates"
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-light-accent hover:bg-light-accent-hover dark:bg-dark-accent dark:hover:bg-dark-accent-hover transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        {t('home.viewAllCertificates')}
                        <ArrowRightIcon className="w-5 h-5 ml-2" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CertificatesSection;
