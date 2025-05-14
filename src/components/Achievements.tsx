import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, Users, UserCheck, UserCog, Plane, Zap } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

<<<<<<< HEAD
interface Achievement {
  title: string;
  description?: string;
  date: string;
  icon: React.ComponentType<{ className?: string }>;
}
=======
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, RoundedBox, Text3D } from '@react-three/drei';
import { Badge } from "@/components/ui/badge";
import * as THREE from 'three';
>>>>>>> 170ae911ad6e807146f5604aba5c1d17cdf1c465

interface ExtracurricularActivity {
  title: string;
  date: string;
  icon: React.ComponentType<{ className?: string }>;
}

const achievements: Achievement[] = [
  {
    title: 'Technical Mastery',
    description: 'Won First Place in the JANATICS Automation Skill Competition 2023, organized by JANATICS INDIA PVT LTD in partnership with DIDACTICS INDIA.',
    icon: Trophy,
    date: 'September 2023'
  },
  {
    title: 'Design Innovation',
    description: 'Recognized for Outstanding Performance in Design and Fabrication Project at PSG College of Technology.',
    icon: Star,
    date: 'March 2023'
  },
  {
    title: 'Academic Excellence',
    description: 'Consistently maintained top academic performance in Production Engineering.',
    icon: Award,
    date: 'Ongoing'
  },
  {
    title: 'Research Contribution',
    description: 'Published research paper on Innovative Manufacturing Techniques in International Conference.',
    icon: Trophy,
    date: 'December 2022'
  },
  {
    title: 'GATE Success',
    description: 'Successfully cleared GATE Exam with a commendable performance.',
    icon: Star,
    date: 'February 2024'
  }
];

<<<<<<< HEAD
const extracurricularActivities: ExtracurricularActivity[] = [
  {
    title: 'Secretary, Industry (Alumni) Interaction Forum',
    date: '2024-25',
    icon: Users
  },
  {
    title: 'Member of Student Union',
    date: '2024-25',
    icon: UserCheck
  },
  {
    title: 'Class Representative, VIII & IX Semester',
    date: '2024',
    icon: UserCog
  },
  {
    title: 'Senior Executive, Aero Modelling Club',
    date: '2023-24',
    icon: Plane
  },
  {
    title: 'Executive, Martial Arts Club',
    date: '2023-24',
    icon: Zap
  }
];
=======
const Trophy = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });
  
  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <RoundedBox args={[1.5, 2, 0.3]} radius={0.2} smoothness={4}>
        <meshStandardMaterial 
          color={new THREE.Color("#D6BCFA")}
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
          color={new THREE.Color("#9b87f5")}
          metalness={0.8}
          roughness={0.2}
        />
      </Text3D>
    </mesh>
  );
};
>>>>>>> 170ae911ad6e807146f5604aba5c1d17cdf1c465

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 bg-gradient-to-b from-portfolio-dark to-portfolio-dark/90">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">Achievements</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={`achievement-${index}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="glass-morphism border-portfolio-primary/20 overflow-hidden h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <achievement.icon className="w-8 h-8 text-portfolio-primary" />
                    <div>
                      <CardTitle className="text-portfolio-secondary text-lg sm:text-xl">{achievement.title}</CardTitle>
                      <CardDescription className="text-white/70 text-sm">{achievement.description}</CardDescription>
                      <p className="text-xs text-white/50 mt-1">{achievement.date}</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>

        <h2 className="text-3xl md:text-4xl font-bold my-12 text-center text-gradient">Extracurricular & Co-Curricular Activities</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {extracurricularActivities.map((activity, index) => (
            <motion.div
              key={`extracurricular-${index}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="glass-morphism border-portfolio-primary/20 overflow-hidden h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <activity.icon className="w-8 h-8 text-portfolio-primary" />
                    <div>
                      <CardTitle className="text-portfolio-secondary text-lg sm:text-xl">{activity.title}</CardTitle>
                      <p className="text-xs text-white/50 mt-1">{activity.date}</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
