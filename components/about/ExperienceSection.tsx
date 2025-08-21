import React, { useState, useMemo } from 'react';
import { useAppContext } from '../../contexts/AppContext';
import { experiences } from '../../data/experiences';
import { CheckCircleIcon, ChevronDownIcon } from '../icons';

const ExperienceSection: React.FC = () => {
    const { t, language } = useAppContext();

    const sortedExperiences = useMemo(() => experiences
        .sort((a, b) => {
            const isAPresent = a.dateRange.en.toLowerCase().includes('present');
            const isBPresent = b.dateRange.en.toLowerCase().includes('present');
            if (isAPresent && !isBPresent) return -1;
            if (!isAPresent && isBPresent) return 1;
            
            const dateA = new Date(a.dateRange.en.split(' - ')[0] || 0);
            const dateB = new Date(b.dateRange.en.split(' - ')[0] || 0);
            return dateB.getTime() - dateA.getTime();
        }), [experiences]);

    // State for Desktop Tab View
    const [selectedId, setSelectedId] = useState(sortedExperiences[0]?.id);
    const selectedExperience = sortedExperiences.find(exp => exp.id === selectedId);

    // State for Mobile Accordion View
    const [openId, setOpenId] =useState<string | null>(null);

    const ExperienceDetails: React.FC<{ experience: typeof sortedExperiences[0] }> = ({ experience }) => (
        <>
            <h3 className="text-xl md:text-2xl font-bold text-light-primary dark:text-dark-primary">{experience.title[language]}</h3>
            <p className="text-md font-medium text-light-accent dark:text-dark-accent mt-1">{experience.company[language]}</p>
            <p className="text-sm text-light-secondary dark:text-dark-secondary mt-2 mb-6">
                {experience.dateRange[language]} &bull; {experience.location[language]}
            </p>
            
            <ul className="space-y-3 text-light-secondary dark:text-dark-secondary">
                {experience.description[language].map((point, i) => (
                    <li key={i} className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-light-accent dark:text-dark-accent" />
                        <span>{point}</span>
                    </li>
                ))}
            </ul>
        </>
    );

    return (
        <div className="mt-24 pt-16 border-t border-gray-200/50 dark:border-gray-700/50">
            <h2 className="text-3xl font-bold mb-12 text-center">{t('about.workExperience')}</h2>
            
            {/* Desktop View: Tab Layout */}
            <div className="hidden md:grid md:grid-cols-12 md:gap-12 min-h-[400px]">
                <div 
                    className="md:col-span-4 flex flex-col space-y-2"
                    role="tablist" 
                    aria-label="Job experiences"
                >
                    {sortedExperiences.map(exp => {
                        const isActive = selectedId === exp.id;
                        return (
                             <button
                                key={exp.id}
                                role="tab"
                                aria-selected={isActive}
                                aria-controls={`experience-panel-${exp.id}`}
                                onClick={() => setSelectedId(exp.id)}
                                className={`w-full text-left p-4 rounded-lg transition-all duration-300 ease-in-out border-l-4 ${
                                    isActive 
                                    ? 'bg-light-surface dark:bg-dark-surface shadow-md border-light-accent dark:border-dark-accent' 
                                    : 'border-transparent hover:bg-light-surface/50 dark:hover:bg-dark-surface/50 text-light-secondary dark:text-dark-secondary'
                                }`}
                            >
                                <span className={`font-semibold ${isActive ? 'text-light-primary dark:text-dark-primary' : ''}`}>
                                    {exp.company[language]}
                                </span>
                                <span className={`block text-sm ${isActive ? 'text-light-secondary dark:text-dark-secondary' : ''}`}>{exp.title[language]}</span>
                            </button>
                        )
                    })}
                </div>
                <div className="md:col-span-8">
                    {selectedExperience && (
                        <div
                            key={selectedId} // Re-triggers animation
                            id={`experience-panel-${selectedExperience.id}`}
                            role="tabpanel"
                            className="experience-content-desktop bg-light-surface dark:bg-dark-surface p-8 rounded-2xl shadow-xl border border-gray-200/30 dark:border-gray-700/50"
                        >
                           <ExperienceDetails experience={selectedExperience} />
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile View: Accordion Layout */}
            <div className="md:hidden flex flex-col gap-4">
                {sortedExperiences.map(exp => {
                    const isOpen = openId === exp.id;
                    return (
                        <div key={exp.id} className="bg-light-surface dark:bg-dark-surface rounded-xl shadow-md border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
                            <button
                                onClick={() => setOpenId(isOpen ? null : exp.id)}
                                className="w-full flex justify-between items-center p-4 text-left"
                                aria-expanded={isOpen}
                                aria-controls={`accordion-content-${exp.id}`}
                            >
                                <div className="flex-1">
                                    <p className="font-semibold text-light-primary dark:text-dark-primary">{exp.company[language]}</p>
                                    <p className="text-sm text-light-secondary dark:text-dark-secondary">{exp.title[language]}</p>
                                </div>
                                <ChevronDownIcon className={`w-6 h-6 text-light-secondary dark:text-dark-secondary transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                            </button>
                            <div
                                id={`accordion-content-${exp.id}`}
                                className={`accordion-content ${isOpen ? 'max-h-[1000px]' : 'max-h-0'}`}
                            >
                                <div className="p-4 border-t border-gray-200/50 dark:border-gray-700/50">
                                     <ExperienceDetails experience={exp} />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default ExperienceSection;