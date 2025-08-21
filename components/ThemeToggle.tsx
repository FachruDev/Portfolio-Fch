
import React from 'react';
import { useAppContext, Theme } from '../contexts/AppContext';
import { SunIcon, MoonIcon } from './icons';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useAppContext();

  const toggleTheme = () => {
    setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-light-secondary dark:text-dark-secondary hover:bg-gray-500/10 dark:hover:bg-white/10 hover:text-light-primary dark:hover:text-dark-primary transition-colors"
      aria-label="Toggle theme"
    >
      {theme === Theme.LIGHT ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
    </button>
  );
};

export default ThemeToggle;
