
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { useAppContext } from '../contexts/AppContext';
import NotFound from './NotFound';

import ProjectHeader from '../components/project-detail/ProjectHeader';
import ProjectContent from '../components/project-detail/ProjectContent';
import ProjectSidebar from '../components/project-detail/ProjectSidebar';
import ProjectGallery from '../components/project-detail/ProjectGallery';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t, language } = useAppContext();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <NotFound />;
  }
  
  const imageGallery = [project.image, ...(project.galleryImages || [])].filter(Boolean);

  return (
    <div className="w-full">
        <div className="mb-12">
            <Link to="/projects" className="inline-flex items-center text-light-secondary dark:text-dark-secondary hover:text-light-accent dark:hover:text-dark-accent transition-colors group">
                <span className="transform group-hover:-translate-x-1 transition-transform">&larr;</span> 
                <span className="ml-2">{t('common.back')} to {t('nav.projects')}</span>
            </Link>
        </div>

        <ProjectHeader project={project} />
        
        <main className="py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 lg:gap-x-16">
                <ProjectContent longDescription={project.longDescription} />
                <ProjectSidebar project={project} />
            </div>
            
            <ProjectGallery images={imageGallery} altText={project.title[language]} />
        </main>
    </div>
  );
};

export default ProjectDetail;
