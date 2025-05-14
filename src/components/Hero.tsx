
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, PerspectiveCamera, OrbitControls, Sphere } from '@react-three/drei';
import { Button } from '@/components/ui/button';
import { DownloadIcon } from 'lucide-react';

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
              color="#9b87f5"
              emissive="#6E59A5"
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

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex flex-col items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 15]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <ParticleField />
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </div>
      
      <div className="container mx-auto px-4 pt-24 pb-12 z-10 text-center">
        <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight">
          <span className="text-gradient">Siyas Mahmood S</span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-light mb-8 text-white/80">
          Production Engineer
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/60 mb-12">
          Specializing in Automation, Metrology, and Process Planning with a strong foundation in 
          mechanical engineering and industrial automation.
        </p>
        <div className="flex justify-center gap-6">
          <Button size="lg" className="bg-portfolio-primary hover:bg-portfolio-secondary">
            View Projects
          </Button>
          <Button variant="outline" size="lg" className="border-portfolio-secondary text-portfolio-secondary hover:bg-portfolio-secondary/10">
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
