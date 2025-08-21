
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../contexts/AppContext';
import { ArrowRightIcon } from '../icons';

const AboutSection: React.FC = () => {
    const { t } = useAppContext();
    return (
        <section className="py-24 sm:py-32">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-5 gap-x-12 lg:gap-x-16 gap-y-16 items-center">
                    
                    {/* Text Content Column */}
                    <div className="md:col-span-3">
                        <span className="text-sm font-bold uppercase tracking-wider text-light-accent dark:text-dark-accent">
                            {t('home.aboutMe')}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight my-4 text-light-primary dark:text-dark-primary">
                            A Passion for Crafting Digital Experiences
                        </h2>
                        <div className="prose prose-lg dark:prose-invert max-w-none space-y-4 text-light-secondary dark:text-dark-secondary">
                            <p>{t('about.p1')}</p>
                            <p>{t('about.p2')}</p>
                        </div>
                        <Link 
                            to="/about" 
                            className="mt-8 inline-flex items-center text-light-accent dark:text-dark-accent font-semibold group/link"
                        >
                            <span>Learn more about me</span>
                            <ArrowRightIcon className="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Image Column */}
                    <div className="md:col-span-2 flex justify-center md:justify-start items-center group">
                        <div className="relative w-[300px] h-[400px] aspect-[3/4]">
                            {/* A solid background frame creating a layered effect */}
                            <div className="absolute inset-0 bg-light-surface dark:bg-dark-surface rounded-3xl transform translate-x-4 translate-y-4 sm:translate-x-6 sm:translate-y-6 transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3"></div>
                            
                            <img 
                                src="https://picsum.photos/seed/aboutme/600/800"
                                alt={t('about.title')}
                                className="relative w-full h-full object-cover rounded-3xl shadow-2xl z-10 transition-transform duration-500 ease-in-out group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </div>
      </section>
    );
};

export default AboutSection;