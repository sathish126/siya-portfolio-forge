import React from 'react';

const skills = [
  { name: 'Creo', category: 'software' },
  { name: 'AutoCAD', category: 'software' },
  { name: 'Ansys', category: 'software' },
  { name: 'Mastercam', category: 'software' },
  { name: 'Power BI', category: 'software' },
  { name: 'MS Excel', category: 'software' },
  { name: 'Automation', category: 'area' },
  { name: 'Metrology', category: 'area' },
  { name: 'Process Planning', category: 'area' },
  { name: 'Production Management', category: 'area' },
  { name: 'Supply Chain Management', category: 'area' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-portfolio-dark to-portfolio-dark/90">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">
          Skills & Technologies
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="h-[400px] glass-morphism rounded-lg p-6 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-portfolio-secondary mb-4">SKILLS</h3>
              <ul className="space-y-2 text-white/80">
                {skills.filter(s => s.category === 'area').map((skill, index) => (
                  <li key={index}>{skill.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="h-[400px] glass-morphism rounded-lg p-6 flex items-center justify-center">
            <div className="text-center">
              <h4 className="text-lg font-medium mb-3 text-white">Software Proficiency</h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {skills.filter(s => s.category === 'software').map((skill, index) => (
                  <span key={index} className="bg-portfolio-primary/20 border border-portfolio-primary/30 text-white px-3 py-1 rounded-full text-sm">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <h4 className="text-lg font-medium mb-3 text-white">Languages</h4>
          <div className="flex flex-wrap gap-2 justify-center">
            {['English', 'Tamil', 'Malayalam', 'Hindi'].map((language, index) => (
              <span key={index} className="bg-portfolio-secondary/20 border border-portfolio-secondary/30 text-white px-3 py-1 rounded-full text-sm">
                {language}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
