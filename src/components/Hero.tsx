<<<<<<< HEAD
import React from 'react';
=======

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, PerspectiveCamera, OrbitControls } from '@react-three/drei';
>>>>>>> 170ae911ad6e807146f5604aba5c1d17cdf1c465
import { Button } from '@/components/ui/button';
import { DownloadIcon } from 'lucide-react';
import * as THREE from 'three';

<<<<<<< HEAD
=======
const ParticleField = () => {
  const particlesRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={particlesRef}>
      {[...Array(100)].map((_, i) => {
        const x = (Math.random() - 0.5) * 20;
        const y = (Math.random() - 0.5) * 20;
        const z = (Math.random() - 0.5) * 20;
        const size = Math.random() * 0.05 + 0.02;
        return (
          <mesh key={i} position={[x, y, z]}>
            <sphereGeometry args={[size, 8, 8]} />
            <meshStandardMaterial 
              color={new THREE.Color("#9b87f5")}
              emissive={new THREE.Color("#6E59A5")}
              emissiveIntensity={0.5}
            />
          </mesh>
        );
      })}
    </group>
  );
};

const FloatingText = () => {
  return (
    <Float
      speed={2}
      rotationIntensity={0.2}
      floatIntensity={1}
    >
      <Text
        font="/fonts/Inter-Bold.woff"
        fontSize={1.2}
        letterSpacing={0.05}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Production Engineer
      </Text>
    </Float>
  );
};

>>>>>>> 170ae911ad6e807146f5604aba5c1d17cdf1c465
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
