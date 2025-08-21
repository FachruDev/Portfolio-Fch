
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../contexts/AppContext';
import { projects } from '../../data/projects';
import { Project } from '../../utils/types';
import { GithubIcon, ArrowRightIcon, ExternalLinkIcon } from '../icons';

const HomeProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const { t, language } = useAppContext();
    return (
      <div className="relative rounded-2xl overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out aspect-[16/9]">
        <img 
          src={project.image} 
          alt={project.title[language]} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
        
        <div className="relative p-6 flex flex-col justify-end h-full text-white">
          <div className="flex-grow"></div>
  
          <div className="flex flex-wrap gap-2 mb-2">
              {project.tags.slice(0, 3).map(tag => (
                <span key={tag} className="px-3 py-1 text-xs rounded-full bg-white/10 backdrop-blur-sm text-white font-medium">
                  {tag}
                </span>
              ))}
          </div>
  
          <h3 className="text-xl font-bold">{project.title[language]}</h3>
          <p className="mt-1 text-sm text-gray-300 leading-relaxed line-clamp-2">
              {project.description[language]}
          </p>
          
          <div className="mt-4 flex items-center justify-between">
              <Link 
                to={`/projects/${project.id}`} 
                className="inline-flex items-center px-4 py-2 text-sm font-semibold bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-lg shadow-md transition-colors">
                {t('common.viewProject')} <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Link>
              <div className="flex items-center gap-2">
                  {project.url && project.url !== '#' && (
                    <a 
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
                        aria-label={t('common.viewDemo')}
                    >
                        <ExternalLinkIcon className="w-5 h-5" />
                    </a>
                  )}
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
                        aria-label={t('common.sourceCode')}
                    >
                        <GithubIcon className="w-5 h-5" />
                    </a>
                  )}
              </div>
          </div>
        </div>
      </div>
    );
};
  

const ProjectsSection: React.FC = () => {
    const { t } = useAppContext();
    const recentProjects = projects
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 4);

    return (
        <section className="py-24">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            {t('home.myProjects')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {recentProjects.map(proj => (
                    <HomeProjectCard key={proj.id} project={proj} />
                ))}
            </div>
            <div className="text-center mt-12">
                <Link to="/projects" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-light-accent hover:bg-light-accent-hover dark:bg-dark-accent dark:hover:bg-dark-accent-hover transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    {t('home.viewAllProjects')}
                    <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
            </div>
      </section>
    );
};
export default ProjectsSection;