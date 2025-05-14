
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 glass-morphism">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-gradient">Siyas Mahmood S</h2>
            <p className="text-white/60 mt-1">Production Engineer</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              <a href="#" className="text-white/60 hover:text-portfolio-secondary transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-white/60 hover:text-portfolio-secondary transition-colors">
                GitHub
              </a>
              <a href="#" className="text-white/60 hover:text-portfolio-secondary transition-colors">
                Email
              </a>
            </div>
            
            <p className="text-white/40 text-sm">
              &copy; {new Date().getFullYear()} Siyas Mahmood S. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
