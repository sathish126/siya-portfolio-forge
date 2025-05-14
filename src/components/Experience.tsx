
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    company: 'CRAFTSMAN AUTOMATION LTD',
    location: 'Arasur, Coimbatore',
    period: 'May 2024 to June 2024',
    focus: 'Explored various manufacturing processes and implementation within the company.',
    color: 'bg-[#9b87f5]'
  },
  {
    company: 'JB TOOLS',
    location: 'Sidco, Coimbatore',
    period: 'January 2024 to February 2024',
    focus: 'Engaged in die design and manufacturing processes.',
    color: 'bg-[#7E69AB]'
  },
  {
    company: 'FESTO INDIA PVT LTD',
    location: 'Bangalore',
    period: 'January 2024 (Three days)',
    focus: 'Studied the intricacies of industrial pneumatic control systems.',
    color: 'bg-[#6E59A5]'
  },
  {
    company: 'JANATICS INDIA PVT LTD',
    location: 'Sidco, Coimbatore',
    period: 'May 2023 to July 2023',
    focus: 'Acquired in-depth knowledge of pneumatic systems and their industrial applications.',
    color: 'bg-[#9b87f5]'
  },
  {
    company: 'SHERWIN INDUSTRY',
    location: 'Sidco, Coimbatore',
    period: '2019',
    focus: 'Gained hands-on experience with special machines.',
    color: 'bg-[#7E69AB]'
  }
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">
          Work Experience
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 flex lg:flex-col overflow-x-auto lg:overflow-visible scrollbar-none">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "min-w-[200px] whitespace-nowrap text-left px-5 py-4 transition-all duration-300",
                  "border-b-2 lg:border-b-0 lg:border-l-2",
                  activeIndex === index 
                    ? "border-portfolio-secondary text-portfolio-secondary" 
                    : "border-white/10 text-white/60 hover:border-white/30 hover:text-white/80"
                )}
              >
                {exp.company}
              </button>
            ))}
          </div>
          
          <div className="lg:col-span-8">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="glass-morphism p-6 rounded-lg"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {experiences[activeIndex].company}
                  </h3>
                  <p className="text-white/60">
                    {experiences[activeIndex].location}
                  </p>
                </div>
                <Badge variant="outline" className="border-portfolio-secondary text-portfolio-secondary">
                  {experiences[activeIndex].period}
                </Badge>
              </div>
              
              <p className="text-white/80">
                <span className="font-semibold text-portfolio-accent">Focus: </span>
                {experiences[activeIndex].focus}
              </p>
              
              <div className="mt-6 flex items-center">
                <div className={`w-3 h-3 rounded-full mr-2 ${experiences[activeIndex].color}`}></div>
                <span className="text-white/60 text-sm">
                  {`${activeIndex + 1} / ${experiences.length}`}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
