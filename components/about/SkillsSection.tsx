
import React from 'react';
import { useAppContext, Theme } from '../../contexts/AppContext';
import { 
    ReactIcon, TypescriptIcon, NextjsIcon, 
    TailwindIcon, NodejsIcon, GraphqlIcon, FigmaIcon, PenToolIcon, 
    GitIcon, DatabaseIcon 
} from '../icons';
import type { IconProps } from '../icons';

interface Skill {
  name: string;
  icon: React.FC<IconProps>;
  level: 'Expert' | 'Advanced' | 'Intermediate' | 'Beginner';
  percentage: number;
  color: string;
  darkColor?: string;
}

const skillsByCategory: { category: string; skills: Skill[] }[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: ReactIcon, level: 'Expert', percentage: 95, color: '#61DAFB' },
      { name: 'TypeScript', icon: TypescriptIcon, level: 'Advanced', percentage: 90, color: '#3178C6' },
      { name: 'Next.js', icon: NextjsIcon, level: 'Advanced', percentage: 85, color: '#000000', darkColor: '#FFFFFF' },
      { name: 'Tailwind CSS', icon: TailwindIcon, level: 'Expert', percentage: 98, color: '#06B6D4' },
    ]
  },
  {
    category: 'Backend & Database',
    skills: [
      { name: 'Node.js', icon: NodejsIcon, level: 'Intermediate', percentage: 75, color: '#5FA04E' },
      { name: 'GraphQL', icon: GraphqlIcon, level: 'Intermediate', percentage: 70, color: '#E10098' },
      { name: 'MongoDB', icon: DatabaseIcon, level: 'Intermediate', percentage: 65, color: '#47A248' }
    ]
  },
  {
    category: 'Design & Tools',
    skills: [
      { name: 'Figma', icon: FigmaIcon, level: 'Advanced', percentage: 90, color: '#F24E1E' },
      { name: 'UI/UX Design', icon: PenToolIcon, level: 'Advanced', percentage: 85, color: '#A259FF' },
      { name: 'Git', icon: GitIcon, level: 'Expert', percentage: 95, color: '#F05032' },
    ]
  }
];

const SkillsSection: React.FC = () => {
    const { t, theme } = useAppContext();
    const isDarkMode = theme === Theme.DARK;
    
    return (
        <div className="mt-24 pt-16 border-t border-gray-200/50 dark:border-gray-700/50">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">{t('home.mySkills')}</h2>
                <p className="text-lg text-light-secondary dark:text-dark-secondary mb-12">
                    {t('about.skillsDescription')}
                </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {skillsByCategory.map((category) => (
                    <div 
                        key={category.category} 
                        className="bg-light-surface dark:bg-dark-surface p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200/30 dark:border-gray-700/50"
                    >
                        <h3 className="text-xl font-semibold mb-6 text-light-primary dark:text-dark-primary">{category.category}</h3>
                        <div className="space-y-6">
                            {category.skills.map((skill) => {
                                const iconColor = isDarkMode && skill.darkColor ? skill.darkColor : skill.color;
                                return (
                                    <div key={skill.name} className="group">
                                        <div className="flex justify-between items-center mb-1.5">
                                            <div className="flex items-center">
                                                <skill.icon style={{ color: iconColor }} className="w-6 h-6 mr-3" />
                                                <span className="font-semibold text-light-primary dark:text-dark-primary">{skill.name}</span>
                                            </div>
                                            <span className="text-sm font-medium text-light-secondary dark:text-dark-secondary">{skill.level}</span>
                                        </div>
                                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                                            <div
                                                className="h-2.5 rounded-full transition-all duration-500 ease-out"
                                                style={{ 
                                                    width: `${skill.percentage}%`, 
                                                    backgroundColor: skill.color,
                                                    boxShadow: `0 0 10px ${skill.color}99, 0 0 5px ${skill.color}66`
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsSection;