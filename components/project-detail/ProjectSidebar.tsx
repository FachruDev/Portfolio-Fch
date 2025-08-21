
import React from 'react';
import { Project } from '../../utils/types';
import { useAppContext } from '../../contexts/AppContext';
import DetailItem from './DetailItem';
import { CalendarIcon, CodeIcon, UserIcon } from '../icons';

interface ProjectSidebarProps {
    project: Project;
}

const ProjectSidebar: React.FC<ProjectSidebarProps> = ({ project }) => {
    const { t, language } = useAppContext();

    return (
        <aside className="lg:col-span-1 mt-12 lg:mt-0">
            <div className="sticky top-24 bg-light-surface dark:bg-dark-surface p-6 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50">
                <h2 className="text-xl font-bold text-light-primary dark:text-dark-primary mb-6">{t('common.projectDetails')}</h2>
                <div className="space-y-6">
                    <DetailItem icon={<CalendarIcon className="w-5 h-5"/>} label={t('common.issuedOn')}>
                        {new Date(project.date).toLocaleDateString(language, { year: 'numeric', month: 'long' })}
                    </DetailItem>
                    
                    {project.role && (
                        <DetailItem icon={<UserIcon className="w-5 h-5"/>} label={t('common.role')}>
                            {project.role[language]}
                        </DetailItem>
                    )}
                    
                    <DetailItem icon={<CodeIcon className="w-5 h-5"/>} label={t('common.technologies')}>
                         <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 text-sm rounded-full bg-light-background dark:bg-dark-background text-light-secondary dark:text-dark-secondary font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </DetailItem>
                </div>
            </div>
        </aside>
    );
};

export default ProjectSidebar;
