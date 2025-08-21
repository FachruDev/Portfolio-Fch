
import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import CertificatesSection from '../components/home/CertificatesSection';
import ProjectsSection from '../components/home/ProjectsSection';
import CtaSection from '../components/home/CtaSection';

export const Home: React.FC = () => {
  return (
    <div className="w-full relative overflow-x-hidden"> 
      {/* Background Splashes */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-64 w-[40rem] h-[40rem] bg-purple-400/10 dark:bg-purple-800/20 rounded-full filter blur-3xl opacity-50" />
        <div className="absolute top-1/2 -right-32 w-[50rem] h-[50rem] bg-light-accent/5 dark:bg-dark-accent/10 rounded-full filter blur-3xl opacity-40" />
      </div>

      <HeroSection />
      <AboutSection />
      <CertificatesSection />
      <ProjectsSection />
      <CtaSection />
    </div>
  );
};
