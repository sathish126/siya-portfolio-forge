import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div id="contact" className="py-24 bg-gradient-to-b from-portfolio-dark to-portfolio-dark/90">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">Get In Touch</h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="glass-morphism rounded-lg p-6 flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-portfolio-primary" />
              <span className="text-white/80">+91 9360791265</span>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-portfolio-primary" />
              <span className="text-white/80">21p923@psgtech.ac.in</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-portfolio-primary" />
              <span className="text-white/80">17/29 Maniyakarar Street, Kuniyamuthur, Coimbatore - 641008</span>
            </div>
          </div>
          
          <div className="glass-morphism rounded-lg p-6 flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
              <Linkedin className="w-6 h-6 text-portfolio-primary" />
              <a 
                href="https://www.linkedin.com/in/siyas-mahmood-1224a6226" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                LinkedIn Profile
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Github className="w-6 h-6 text-portfolio-primary" />
              <a 
                href="https://github.com/siyas-mahmood" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                GitHub Profile
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-portfolio-primary" />
              <a 
                href="mailto:siyasmahmood5@gmail.com" 
                className="text-white/80 hover:text-white transition-colors"
              >
                Personal Email
              </a>
            </div>
          </div>
          
          <div className="glass-morphism rounded-lg p-6 flex flex-col space-y-4 justify-center">
            <div className="text-center">
              <p className="text-white/80 mb-4"> 2025 Siyas Mahmood S. All rights reserved.</p>
              <p className="text-sm text-white/60">Production Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
