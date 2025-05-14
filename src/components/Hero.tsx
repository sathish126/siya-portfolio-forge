import React from 'react';
import { Button } from '@/components/ui/button';
import { DownloadIcon } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center min-h-screen px-4 py-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-gradient leading-tight">
          Siyas Mahmood
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-6 sm:mb-8 text-white/80 leading-snug">
          Production Engineer
        </h2>
        <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-white/60 mb-10 sm:mb-12 leading-relaxed">
          Specializing in Automation, Metrology, and Process Planning with a strong foundation in 
          mechanical engineering and industrial automation.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 w-full max-w-md">
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-portfolio-primary hover:bg-portfolio-secondary"
            onClick={() => {
              const projectsSection = document.getElementById('projects');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            View Projects
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="w-full sm:w-auto border-portfolio-secondary text-portfolio-secondary hover:bg-portfolio-secondary/10"
            onClick={() => window.open('/assets/SIYAS-MAHMOOD.pdf', '_blank')}
          >
            <DownloadIcon className="mr-2 h-4 w-4" /> Download Resume
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/70 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
