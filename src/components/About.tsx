import React from 'react';
import { DownloadIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProfileImage from '../../assets/siyas.png';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-portfolio-dark to-portfolio-dark/90">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-4 sm:px-6 md:px-8">
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-4 sm:mb-6 text-gradient">
              About Me
            </h2>
            <p className="text-white/80 mb-3 sm:mb-4 text-base sm:text-lg leading-relaxed">
              I'm a dedicated Production Engineering student at PSG College of Technology with a strong foundation in mechanical engineering, automation, and industrial processes.
            </p>
            <p className="text-white/80 mb-3 sm:mb-4 text-base sm:text-lg leading-relaxed">
              My expertise lies in Process Planning, Cost Estimation, Production Management, and Supply Chain Optimization, driven by a passion for innovative technological solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto border-portfolio-secondary text-portfolio-secondary hover:bg-portfolio-secondary/10"
                onClick={() => window.open('/assets/SIYAS-MAHMOOD.pdf', '_blank')}
              >
                <DownloadIcon className="mr-2 h-4 w-4" /> Download Resume
              </Button>
              <a
                href="#contact"
                className="w-full sm:w-auto px-6 py-3 border border-portfolio-primary text-portfolio-primary rounded-full hover:bg-portfolio-primary/10 transition-colors text-center block"
              >
                Contact
              </a>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-3 text-portfolio-secondary">Contact Information</h3>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
                <a 
                  href="mailto:siyasmahmood5@gmail.com" 
                  className="text-white/80 hover:text-white transition-colors text-sm sm:text-base"
                >
                  📧 siyasmahmood5@gmail.com
                </a>
                <a 
                  href="https://www.instagram.com/siyasmahmood5/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors text-sm sm:text-base"
                >
                  📸 @siyasmahmood5
                </a>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-3 text-portfolio-secondary">Areas of Interest</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center md:justify-start">
              {['Automation', 'Process Planning', 'Cost Estimation', 'Production Management', 'Supply Chain Optimization'].map((interest, index) => (
                <span 
                  key={index} 
                  className="px-3 sm:px-4 py-1 sm:py-2 bg-portfolio-primary/10 text-portfolio-primary rounded-full text-xs sm:text-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
            <div className="w-48 h-48 bg-portfolio-primary/20 rounded-full overflow-hidden shadow-lg">
              <img 
                src={ProfileImage} 
                alt="Siyas Mahmood" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
