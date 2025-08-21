import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../utils/types';
import { useAppContext } from '../contexts/AppContext';
import { ArrowRightIcon } from './icons';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const { language, t } = useAppContext();
  return (
    <Link to={`/projects/${project.id}`} className="bento-grid-item group flex flex-col justify-between h-full text-left">
      <div>
        <div className="overflow-hidden rounded-xl mb-4">
            <img src={project.image} alt={project.title[language]} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        
        <div className="flex flex-wrap gap-2 mb-2">
            {project.tags.slice(0, 2).map(tag => (
                <span key={tag} className="px-2 py-1 text-xs rounded-full bg-light-background dark:bg-dark-background text-light-secondary dark:text-dark-secondary font-medium">
                    {tag}
                </span>
            ))}
        </div>
        
        <h3 className="text-xl font-bold text-light-primary dark:text-dark-primary group-hover:text-light-accent dark:group-hover:text-dark-accent transition-colors">{project.title[language]}</h3>
        <p className="text-sm text-light-secondary dark:text-dark-secondary mt-2">
          {new Date(project.date).toLocaleDateString(language, { year: 'numeric', month: 'long' })}
        </p>
        <p className="mt-3 text-light-secondary dark:text-dark-secondary flex-grow line-clamp-3">{project.description[language]}</p>
      </div>
      <div className="mt-4 flex items-center text-sm font-semibold text-light-accent dark:text-dark-accent group-hover:translate-x-1 transition-transform">
        <span>{t('common.viewProject')}</span>
        <ArrowRightIcon className="w-4 h-4 ml-1"/>
      </div>
    </Link>
  );
};

export default ProjectCard;