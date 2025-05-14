
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, OrbitControls, RoundedBox } from '@react-three/drei';
import { Badge } from "@/components/ui/badge";

const achievements = [
  {
    title: 'Technical Mastery',
    description: 'Won First Place in the JANATICS Automation Skill Competition 2023, organized by JANATICS INDIA PVT LTD in partnership with DIDACTICS INDIA.',
    icon: '🏆'
  },
  {
    title: 'Design Innovation',
    description: 'Awarded First Place in the PNEUMO 23 Circuit Design Contest, conducted by the ASME Student Chapter PSG CT in collaboration with FESTO.',
    icon: '🥇'
  },
  {
    title: 'Consistent Performance',
    description: 'Achieved Third Rank in 4th Semester and 5th Semester BE Production Engineering (SW) (2021-2023).',
    icon: '🎓'
  },
  {
    title: 'Academic Excellence',
    description: 'Secured Third Rank in the First Year of DME with an impressive 85.5% (2018-19).',
    icon: '📚'
  },
  {
    title: 'GATE Success',
    description: 'Cleared GATE 2024 with an All India Rank of 501.',
    icon: '🎯'
  }
];

const Trophy = () => {
  const meshRef = useRef();
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });
  
  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <RoundedBox args={[1.5, 2, 0.3]} radius={0.2} smoothness={4}>
        <meshStandardMaterial 
          color="#D6BCFA" 
          metalness={0.8}
          roughness={0.2}
        />
      </RoundedBox>
      <Text3D
        position={[-0.5, 0, 0.2]}
        size={0.4}
        height={0.1}
        font="/fonts/Inter-Bold.json"
      >
        #1
        <meshStandardMaterial 
          color="#9b87f5" 
          metalness={0.8}
          roughness={0.2}
        />
      </Text3D>
    </mesh>
  );
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 bg-gradient-to-b from-portfolio-dark to-portfolio-dark/90">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">
          Achievements & Recognition
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="h-[400px] glass-morphism rounded-lg p-2">
            <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <Trophy />
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>
          
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="glass-morphism p-5 rounded-lg flex gap-4 hover:border-portfolio-secondary/50 transition-colors duration-300"
              >
                <div className="text-4xl">{achievement.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-portfolio-secondary mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center text-portfolio-accent">
            Certifications & Extracurricular Activities
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-morphism p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4 text-portfolio-secondary">Certifications</h4>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-portfolio-secondary"></div>
                  AI Tools in Environment Sustainability
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-portfolio-secondary"></div>
                  Industrial Finance and Taxation
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-portfolio-secondary"></div>
                  Tool and die design and fabrication
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-portfolio-secondary"></div>
                  Computer aided design, manufacturing, and CNC machining practice
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-portfolio-secondary"></div>
                  Two weeks of Industrial Training in Industrial Internet of Things (IIOT)
                </li>
              </ul>
            </div>
            
            <div className="glass-morphism p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4 text-portfolio-secondary">Extracurricular Activities</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-portfolio-secondary text-portfolio-secondary bg-portfolio-secondary/10">
                  Secretary, Industry (Alumni) Interaction Forum (2024-25)
                </Badge>
                <Badge variant="outline" className="border-portfolio-secondary text-portfolio-secondary bg-portfolio-secondary/10">
                  Member of Student Union (2024-25)
                </Badge>
                <Badge variant="outline" className="border-portfolio-secondary text-portfolio-secondary bg-portfolio-secondary/10">
                  Class representative, VIII & IX semester
                </Badge>
                <Badge variant="outline" className="border-portfolio-secondary text-portfolio-secondary bg-portfolio-secondary/10">
                  Senior Executive, Aero Modelling Club (2023-24)
                </Badge>
                <Badge variant="outline" className="border-portfolio-secondary text-portfolio-secondary bg-portfolio-secondary/10">
                  Executive, Martial Arts Club (2023-24)
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
