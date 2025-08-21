
import React from 'react';
import { useAppContext } from '../../contexts/AppContext';

interface ProjectContentProps {
    longDescription?: {
        en: string;
        id: string;
    };
}

const ProjectContent: React.FC<ProjectContentProps> = ({ longDescription }) => {
    const { language } = useAppContext();
    const description = longDescription?.[language] || '';

    return (
        <div className="lg:col-span-2 prose prose-lg dark:prose-invert max-w-none text-light-secondary dark:text-dark-secondary">
            {description.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </div>
    );
};

export default ProjectContent;
