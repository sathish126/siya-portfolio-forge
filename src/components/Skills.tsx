
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, OrbitControls } from '@react-three/drei';

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

const Skill = ({ name, position, color }) => {
  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={2}>
      <Text
        position={position}
        color={color}
        fontSize={0.4}
        font="/fonts/Inter-Medium.woff"
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
    </Float>
  );
};

const SkillsCloud = () => {
  const groupRef = useRef();
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });
  
  return (
    <group ref={groupRef}>
      {skills.map((skill, i) => {
        // Position skills in a spherical pattern
        const phi = Math.acos(-1 + (2 * i) / skills.length);
        const theta = Math.sqrt(skills.length * Math.PI) * phi;
        const radius = 5;
        
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);
        
        const color = skill.category === 'software' ? '#9b87f5' : '#D6BCFA';
        
        return (
          <Skill
            key={i}
            name={skill.name}
            position={[x, y, z]}
            color={color}
          />
        );
      })}
    </group>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">
          Skills & Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-7">
            <div className="h-[500px] glass-morphism rounded-lg p-2">
              <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
                <ambientLight intensity={0.6} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <SkillsCloud />
                <OrbitControls enableZoom={false} />
              </Canvas>
            </div>
          </div>
          
          <div className="md:col-span-5">
            <div className="glass-morphism p-6 rounded-lg h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6 text-portfolio-secondary">Technical Expertise</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium mb-3 text-white">Software Proficiency</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.filter(s => s.category === 'software').map((skill, index) => (
                      <span key={index} className="bg-portfolio-primary/20 border border-portfolio-primary/30 text-white px-3 py-1 rounded-full text-sm">
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-3 text-white">Areas of Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.filter(s => s.category === 'area').map((skill, index) => (
                      <span key={index} className="bg-portfolio-accent/20 border border-portfolio-accent/30 text-white px-3 py-1 rounded-full text-sm">
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-3 text-white">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {['English', 'Tamil', 'Malayalam', 'Hindi'].map((language, index) => (
                      <span key={index} className="bg-portfolio-secondary/20 border border-portfolio-secondary/30 text-white px-3 py-1 rounded-full text-sm">
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
