
import React from 'react';
import { Project } from '../../utils/types';
import { useAppContext } from '../../contexts/AppContext';
import { GithubIcon, ExternalLinkIcon } from '../icons';

interface ProjectHeaderProps {
    project: Project;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ project }) => {
    const { t, language } = useAppContext();

    return (
        <header className="relative w-full h-[60vh] min-h-[500px] rounded-3xl overflow-hidden flex items-end p-8 md:p-12 text-white shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10" />
            <img src={project.image} alt={project.title[language]} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"/>
            <div className="relative z-20">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>{project.title[language]}</h1>
                <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-200" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.7)'}}>
                    {project.description[language]}
                </p>
                <div className="mt-8 flex items-center gap-4 flex-wrap">
                    {project.url && project.url !== '#' && (
                        <a 
                            href={project.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-dark-background bg-white hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            <ExternalLinkIcon className="w-5 h-5 mr-2" />
                            {t('common.viewDemo')}
                        </a>
                    )}
                    {project.githubUrl && project.githubUrl !== '#' && (
                        <a 
                            href={project.githubUrl}
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-base font-medium rounded-md text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            <GithubIcon className="w-5 h-5 mr-2" />
                            {t('common.sourceCode')}
                        </a>
                    )}
                </div>
            </div>
        </header>
    );
};

export default ProjectHeader;
