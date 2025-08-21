import React from 'react';
import AboutIntro from '../components/about/AboutIntro';
import ExperienceSection from '../components/about/ExperienceSection';
import CertificatesSection from '../components/home/CertificatesSection';
import CtaSection from '../components/home/CtaSection';
import SkillsSection from '../components/about/SkillsSection';

const About: React.FC = () => {
    return (
        <div className="relative overflow-hidden py-8 md:py-16">
             {/* Background Splashes */}
            <div aria-hidden="true" className="absolute inset-0 -z-10">
                <div className="absolute top-0 -left-64 w-[40rem] h-[40rem] bg-purple-400/10 dark:bg-purple-800/20 rounded-full filter blur-3xl opacity-50" />
                <div className="absolute bottom-0 -right-48 w-[50rem] h-[50rem] bg-light-accent/5 dark:bg-dark-accent/10 rounded-full filter blur-3xl opacity-40" />
            </div>

            <AboutIntro />
            <ExperienceSection />

            <div className="mt-24">
                <CertificatesSection />
            </div>

            <SkillsSection />

            <CtaSection />
        </div>
    );
};

export default About;
