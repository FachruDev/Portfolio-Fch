
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar: React.FC = () => {
  const { t } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Effect to handle scroll state and close menu on resize
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    const handleResize = () => setIsOpen(false);
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/projects', label: t('nav.projects') },
    { to: '/certificates', label: t('nav.certificates') },
    { to: '/blog', label: t('nav.blog') },
    { to: '/contact', label: t('nav.contact') },
  ];
  
  const linkClass = "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300";
  const activeLinkClass = "bg-light-accent/10 dark:bg-dark-accent/10 text-light-accent dark:text-dark-accent";
  const inactiveLinkClass = "text-light-secondary hover:text-light-primary dark:text-dark-secondary dark:hover:text-dark-primary";
  
  const mobileLinkClass = "block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors";
  const mobileActiveLinkClass = "bg-light-accent text-white dark:bg-dark-accent dark:text-dark-background";
  const mobileInactiveLinkClass = "text-light-primary hover:bg-light-background dark:text-dark-primary dark:hover:bg-dark-background";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <div
        className={`
          relative flex items-center justify-between h-16 px-4
          mx-auto max-w-7xl rounded-full
          transition-all duration-300 ease-in-out
          ${scrolled ? 'bg-light-surface/80 dark:bg-dark-surface/80 backdrop-blur-xl shadow-2xl border border-gray-200/20 dark:border-gray-700/30' : 'bg-light-surface/50 dark:bg-dark-surface/50'}
        `}
      >
        <div className="flex-shrink-0">
          <Link to="/" className="text-xl font-bold text-light-accent dark:text-dark-accent" onClick={() => setIsOpen(false)}>
            Portfolio
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <div className="flex items-baseline space-x-2 bg-light-background/50 dark:bg-dark-background/50 p-1 rounded-full">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : inactiveLinkClass}`}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
        
        {/* Desktop Controls */}
        <div className="hidden md:flex items-center space-x-1 p-1 rounded-full bg-light-background/50 dark:bg-dark-background/50">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
        
        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-full text-light-primary dark:text-dark-primary bg-light-background/50 dark:bg-dark-background/50 focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        <div 
          className={`
            absolute top-[calc(100%+1rem)] left-0 w-full md:hidden
            transition-all duration-300 ease-out origin-top
            ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
          `}
          id="mobile-menu"
        >
          <div className="mx-4 bg-light-surface dark:bg-dark-surface rounded-2xl shadow-lg p-4 space-y-2 border border-gray-200/50 dark:border-gray-700/50">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `${mobileLinkClass} ${isActive ? mobileActiveLinkClass : mobileInactiveLinkClass}`}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-3 mt-2 border-t border-gray-200/50 dark:border-gray-700/50 flex items-center justify-start space-x-1">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
