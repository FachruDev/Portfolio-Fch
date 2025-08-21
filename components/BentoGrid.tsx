
import React from 'react';
import { Link } from 'react-router-dom';
import { PortfolioItem } from '../utils/types';
import { useAppContext } from '../contexts/AppContext';
import { ArrowRightIcon } from './icons';

interface BentoGridItemProps {
  item: PortfolioItem;
  className?: string;
}

const GridItem: React.FC<BentoGridItemProps> = ({ item, className }) => {
  const { language } = useAppContext();
  const url = `/${item.type === 'article' ? 'blog' : item.type + 's'}/${item.id}`;

  return (
    <Link to={url} className={`bento-grid-item group relative overflow-hidden flex flex-col justify-between ${className}`}>
        <div>
            <p className="text-sm font-semibold text-light-accent dark:text-dark-accent uppercase tracking-wider">{item.type}</p>
            <h3 className="text-xl lg:text-2xl font-bold mt-2 text-light-primary dark:text-dark-primary">{item.title[language]}</h3>
            <p className="mt-2 text-light-secondary dark:text-dark-secondary">{item.description[language]}</p>
        </div>
        <div className="mt-4 flex items-center text-sm font-semibold text-light-accent dark:text-dark-accent group-hover:translate-x-1 transition-transform">
            <span>Read more</span>
            <ArrowRightIcon className="w-4 h-4 ml-1"/>
        </div>
         <img src={item.image} alt={item.title[language]} className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-10 dark:opacity-5 group-hover:scale-105 transition-transform duration-500" />
    </Link>
  );
};

interface BentoGridProps {
  items: PortfolioItem[];
}

const BentoGrid: React.FC<BentoGridProps> = ({ items }) => {
  const itemClasses = [
    'md:col-span-2 md:row-span-2',
    'md:col-span-1 md:row-span-1',
    'md:col-span-1 md:row-span-1',
    'md:col-span-1 md:row-span-1',
    'md:col-span-2 md:row-span-1',
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.slice(0, 5).map((item, index) => (
        <GridItem key={item.id} item={item} className={itemClasses[index % itemClasses.length]} />
      ))}
    </div>
  );
};

export default BentoGrid;
