
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, RoundedBox } from '@react-three/drei';

const RotatingCube = () => {
  return (
    <RoundedBox args={[3, 3, 3]} radius={0.2} smoothness={4}>
      <meshStandardMaterial 
        color="#6E59A5" 
        metalness={0.5}
        roughness={0.2}
      />
    </RoundedBox>
  );
};

const About = () => {
  return (
    <section id="about" className="min-h-screen py-24 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="h-[400px] w-full">
              <Canvas>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <RotatingCube />
                <OrbitControls autoRotate enableZoom={false} />
              </Canvas>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">About Me</h2>
            
            <div className="space-y-6 text-white/80">
              <p>
                Production Engineering graduate from PSG College of Technology with a strong foundation in mechanical engineering.
                My passion lies in Automation, Metrology, Process Planning, and Supply Chain Management.
              </p>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-portfolio-secondary">Education</h3>
                <ul className="space-y-4">
                  <li className="glass-morphism p-4 rounded-lg">
                    <div className="font-semibold">BE Production Engineering</div>
                    <div className="text-sm text-white/60">PSG College of Technology, 2021-2025</div>
                    <div>CGPA: 8.88 (up to IX Sem)</div>
                  </li>
                  <li className="glass-morphism p-4 rounded-lg">
                    <div className="font-semibold">Diploma in Mechanical Engineering (DME)</div>
                    <div className="text-sm text-white/60">Sri Krishna Polytechnic College, 2018-2021</div>
                    <div>Percentage: 90%</div>
                  </li>
                  <li className="glass-morphism p-4 rounded-lg">
                    <div className="font-semibold">SSLC</div>
                    <div className="text-sm text-white/60">RKV CBSE SR SEC SCHOOL, 2008-2018</div>
                    <div>Percentage: 61.8%</div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-portfolio-secondary">Areas of Interest</h3>
                <div className="flex flex-wrap gap-3">
                  {['Automation', 'Metrology', 'Process Planning and Cost Estimation', 'Production and Operation Management', 'Supply Chain Management'].map((interest, index) => (
                    <span key={index} className="bg-portfolio-primary/20 border border-portfolio-primary/30 text-white px-3 py-1 rounded-full text-sm">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
