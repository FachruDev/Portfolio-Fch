
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './icons';

const Footer: React.FC = () => {
  const { t } = useAppContext();

  const navLinksGroups = [
      {
          title: 'Explore',
          links: [
              { to: '/', label: t('nav.home') },
              { to: '/about', label: t('nav.about') },
              { to: '/projects', label: t('nav.projects') },
          ]
      },
      {
          title: 'Content',
          links: [
              { to: '/certificates', label: t('nav.certificates') },
              { to: '/blog', label: t('nav.blog') },
              { to: '/contact', label: t('nav.contact') },
          ]
      }
  ];

  const socialLinks = [
    { href: '#', icon: <GithubIcon className="w-6 h-6" />, name: 'GitHub' },
    { href: '#', icon: <LinkedinIcon className="w-6 h-6" />, name: 'LinkedIn' },
    { href: '#', icon: <TwitterIcon className="w-6 h-6" />, name: 'Twitter' },
  ];

  return (
    <footer className="bg-light-surface dark:bg-dark-surface border-t border-gray-200/50 dark:border-gray-700/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Branding */}
          <div className="lg:col-span-4">
            <Link to="/" className="text-2xl font-bold text-light-accent dark:text-dark-accent">
              Portfolio
            </Link>
            <p className="mt-4 text-light-secondary dark:text-dark-secondary max-w-xs">
              {t('home.description')}
            </p>
          </div>

          {/* Links */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {navLinksGroups.map(group => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold text-light-primary dark:text-dark-primary tracking-wider uppercase">{group.title}</h3>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to} className="text-base text-light-secondary dark:text-dark-secondary hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-300">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            <div>
              <h3 className="text-sm font-semibold text-light-primary dark:text-dark-primary tracking-wider uppercase">Social</h3>
              <ul className="mt-4 space-y-3">
                 {socialLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-base text-light-secondary dark:text-dark-secondary hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-300">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200/50 dark:border-gray-700/50 flex flex-col-reverse sm:flex-row justify-between items-center gap-6">
          <p className="text-sm text-light-secondary dark:text-dark-secondary text-center sm:text-left">
            &copy; {new Date().getFullYear()} John Doe. All Rights Reserved. <br className="sm:hidden" /> {t('footer.madeWith')}
          </p>
           <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-light-secondary dark:text-dark-secondary hover:text-light-accent dark:hover:text-dark-accent transition-colors" aria-label={link.name}>
                {link.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
