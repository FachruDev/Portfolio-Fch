
import React from 'react';
import { useAppContext } from '../../contexts/AppContext';

interface CertificateSkillsProps {
    tags: string[];
}

const CertificateSkills: React.FC<CertificateSkillsProps> = ({ tags }) => {
    const { t } = useAppContext();
    return (
        <div className="mt-8">
            <h3 className="text-lg font-semibold text-light-primary dark:text-dark-primary mb-3">{t('common.skillsCovered')}</h3>
            <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-sm rounded-full bg-light-surface dark:bg-dark-surface text-light-secondary dark:text-dark-secondary font-medium">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default CertificateSkills;
