
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';

const NotFound: React.FC = () => {
  const { t } = useAppContext();

  return (
    <div className="flex flex-col items-center justify-center text-center h-full py-20">
        <h1 className="text-9xl font-extrabold text-light-accent dark:text-dark-accent tracking-tighter">404</h1>
      <h2 className="text-3xl font-bold text-light-primary dark:text-dark-primary mt-4">{t('common.notFound')}</h2>
      <p className="mt-2 text-lg text-light-secondary dark:text-dark-secondary">
        {t('common.notFoundMessage')}
      </p>
      <Link 
        to="/" 
        className="mt-8 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-light-accent hover:bg-light-accent-hover dark:bg-dark-accent dark:hover:bg-dark-accent-hover transition-colors"
      >
        {t('common.homeButton')}
      </Link>
    </div>
  );
};

export default NotFound;
