
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../contexts/AppContext';
import { cvUrls } from '../../data/profile';
import { DownloadIcon, GithubIcon, LinkedinIcon, TwitterIcon } from '../icons';

const HeroSection: React.FC = () => {
  const { t, language } = useAppContext();
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    if (window.pageYOffset < window.innerHeight) {
        setOffsetY(window.pageYOffset);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      className="relative flex items-center justify-center text-center h-[90vh] min-h-[700px] overflow-hidden rounded-3xl bg-light-surface/30 dark:bg-dark-surface/30"
    >
      
      {/* Decorative Background Shapes */}
      <div 
        className="absolute bg-light-accent/20 dark:bg-dark-accent/20 rounded-full filter blur-3xl"
        style={{ 
          width: 'clamp(20rem, 30vw, 30rem)',
          height: 'clamp(20rem, 30vw, 30rem)',
          top: '-5rem',
          left: '-5rem',
          transform: `translateY(${offsetY * 0.3}px)`,
        }}
      />
      <div 
        className="absolute bg-purple-400/20 dark:bg-purple-800/20 rounded-full filter blur-3xl"
        style={{ 
          width: 'clamp(15rem, 25vw, 25rem)',
          height: 'clamp(15rem, 25vw, 25rem)',
          bottom: '-5rem',
          right: '-5rem',
          transform: `translateY(${offsetY * 0.15}px)`,
        }}
      />

      {/* Hero Content */}
      <div 
        className="relative z-10 px-4"
        style={{ transform: `translateY(${offsetY * -0.25}px)` }} // Moves up on scroll
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-light-primary dark:text-dark-primary">
          {t('home.greeting')}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-light-secondary dark:text-dark-secondary">
          {t('home.description')}
        </p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Link 
            to="/projects" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-light-accent hover:bg-light-accent-hover dark:bg-dark-accent dark:hover:bg-dark-accent-hover transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            {t('home.viewProjects')}
          </Link>
          <a 
            href={cvUrls[language]}
            download={`CV-Portfolio-${language.toUpperCase()}.pdf`}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-light-primary dark:text-dark-primary bg-light-surface dark:bg-dark-surface hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <DownloadIcon className="w-5 h-5 mr-2" />
            {t('home.downloadCV')}
          </a>
        </div>
         <div className="mt-10 flex justify-center gap-6">
          <a href="#" aria-label="Github" className="text-light-secondary dark:text-dark-secondary hover:text-light-accent dark:hover:text-dark-accent transition-colors transform hover:scale-110">
              <GithubIcon className="w-7 h-7" />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-light-secondary dark:text-dark-secondary hover:text-light-accent dark:hover:text-dark-accent transition-colors transform hover:scale-110">
              <LinkedinIcon className="w-7 h-7" />
          </a>
          <a href="#" aria-label="Twitter" className="text-light-secondary dark:text-dark-secondary hover:text-light-accent dark:hover:text-dark-accent transition-colors transform hover:scale-110">
              <TwitterIcon className="w-7 h-7" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;