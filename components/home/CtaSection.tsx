
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../contexts/AppContext';
import { ArrowRightIcon, GithubIcon, ExternalLinkIcon, LinkedinIcon } from '../icons';

const CtaSection: React.FC = () => {
    const { t } = useAppContext();
    return (
        <section className="py-24">
            <div className="relative bg-light-surface dark:bg-dark-surface rounded-3xl p-8 md:p-16 overflow-hidden">
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-light-accent/10 dark:bg-dark-accent/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-400/10 dark:bg-purple-800/10 rounded-full blur-3xl" />
                
                <div className="relative grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-light-primary dark:text-dark-primary">
                            {t('home.cta.title')}
                        </h2>
                        <p className="mt-4 text-lg text-light-secondary dark:text-dark-secondary">
                            {t('home.cta.description')}
                        </p>
                        <div className="mt-8">
                            <Link 
                                to="/contact" 
                                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-light-accent hover:bg-light-accent-hover dark:bg-dark-accent dark:hover:bg-dark-accent-hover transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                {t('home.cta.button')}
                                <ArrowRightIcon className="w-5 h-5 ml-2" />
                            </Link>
                        </div>
                    </div>
                    
                    <div className="hidden md:block">
                        <div className="relative w-full h-48 flex justify-center items-center">
                            <div className="absolute top-0 left-10 p-4 bg-white/5 dark:bg-black/10 rounded-2xl shadow-lg transform -rotate-12">
                            <GithubIcon className="w-12 h-12 text-light-secondary/70 dark:text-dark-secondary/70" />
                            </div>
                            <div className="absolute bottom-0 p-4 bg-white/5 dark:bg-black/10 rounded-2xl shadow-lg transform rotate-6 z-10">
                            <ExternalLinkIcon className="w-16 h-16 text-light-accent/80 dark:text-dark-accent/80" />
                            </div>
                            <div className="absolute top-5 right-10 p-4 bg-white/5 dark:bg-black/10 rounded-2xl shadow-lg transform rotate-12">
                            <LinkedinIcon className="w-10 h-10 text-light-secondary/70 dark:text-dark-secondary/70" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </section>
    );
};

export default CtaSection;
