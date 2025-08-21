
import React from 'react';
import { useAppContext, Language } from '../contexts/AppContext';
import { GlobeIcon } from './icons';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useAppContext();

  const toggleLanguage = () => {
    setLanguage(language === Language.EN ? Language.ID : Language.EN);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center p-2 rounded-full text-light-secondary dark:text-dark-secondary hover:bg-gray-500/10 dark:hover:bg-white/10 hover:text-light-primary dark:hover:text-dark-primary transition-colors"
      aria-label="Switch language"
    >
      <GlobeIcon className="w-5 h-5" />
      <span className="ml-2 font-semibold text-sm uppercase">{language}</span>
    </button>
  );
};

export default LanguageSwitcher;
