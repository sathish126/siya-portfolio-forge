
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ThreeScene = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <MeshDistortMaterial 
        color="#6E59A5" 
        attach="material" 
        distort={0.3} 
        speed={3} 
        roughness={0.4}
      />
    </mesh>
  );
};

export default ThreeScene;
