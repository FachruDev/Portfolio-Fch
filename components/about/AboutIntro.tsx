import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../contexts/AppContext';
import { cvUrls } from '../../data/profile';
import { DownloadIcon, ArrowRightIcon } from '../icons';

const AboutIntro: React.FC = () => {
    const { t, language } = useAppContext();

    return (
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-x-12 lg:gap-x-20 items-center">
            
            {/* Image Column */}
            <div className="md:col-span-2 relative p-4 order-1 md:order-2">
                 <div className="absolute inset-0 bg-light-surface dark:bg-dark-surface rounded-3xl transform -rotate-3 transition-transform group-hover:rotate-0 duration-500"></div>
                 <img 
                    src="https://picsum.photos/seed/about-page/900/1200" 
                    alt="A portrait of the developer" 
                    className="relative w-full aspect-[3/4] object-cover rounded-3xl shadow-2xl z-10"
                />
            </div>

            {/* Text Column */}
            <div className="md:col-span-3 order-2 md:order-1 mt-12 md:mt-0">
                <span className="text-base font-semibold text-light-accent dark:text-dark-accent uppercase tracking-wider">Who I Am</span>
                <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight my-4 text-light-primary dark:text-dark-primary">{t('about.title')}</h1>
                
                <div className="prose prose-lg dark:prose-invert max-w-none text-light-secondary dark:text-dark-secondary">
                    <p>{t('about.p1')}</p>
                    <p>{t('about.p2')}</p>
                </div>
                
                {/* Action Buttons */}
                <div className="mt-8 flex gap-4 flex-wrap">
                    <a 
                        href={cvUrls[language]}
                        download={`CV-Portfolio-${language.toUpperCase()}.pdf`}
                        className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-light-primary dark:text-dark-primary bg-light-surface dark:bg-dark-surface hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        <DownloadIcon className="w-5 h-5 mr-2" />
                        {t('home.downloadCV')}
                    </a>
                     <Link 
                        to="/contact" 
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-light-accent hover:bg-light-accent-hover dark:bg-dark-accent dark:hover:bg-dark-accent-hover transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        <span>{t('home.cta.button')}</span>
                        <ArrowRightIcon className="w-5 h-5 ml-2" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutIntro;
