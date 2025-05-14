
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from '@/lib/utils';

const projects = [
  {
    title: 'Transporter of Bikes',
    description: 'Designed and implemented a specialized transporter solution to reduce worker fatigue in the bike transportation process.',
    image: '/images/project1.jpg',
    tags: ['Design', 'Ergonomics', 'Worker Safety'],
  },
  {
    title: 'Mini Forklift',
    description: 'Developed a compact forklift system to reduce human activity and improve efficiency in storage system automation.',
    image: '/images/project2.jpg',
    tags: ['Automation', 'Storage', 'Efficiency'],
  },
  {
    title: 'Beetroot Harvesting Machine',
    description: 'Designed and fabricated a specialized machine for efficient beetroot harvesting, improving agricultural productivity.',
    image: '/images/project3.jpg',
    tags: ['Agricultural', 'Design', 'Fabrication'],
  },
  {
    title: 'Development of Aluminium/Polypropylene/Aluminium Sandwich Sheet',
    description: 'Researched, developed, and tested a composite sandwich sheet for car hood applications, focusing on material properties and performance.',
    image: '/images/project4.jpg',
    tags: ['Materials', 'Testing', 'Automotive'],
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="glass-morphism border-portfolio-primary/20 overflow-hidden h-full">
        <div className="h-48 bg-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-portfolio-primary/30 to-portfolio-secondary/30">
            <span className="text-5xl opacity-50">{index + 1}</span>
          </div>
        </div>
        <CardHeader>
          <CardTitle className="text-portfolio-secondary">{project.title}</CardTitle>
          <CardDescription className="text-white/70">{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag, tagIndex) => (
              <span 
                key={tagIndex}
                className="bg-portfolio-primary/20 border border-portfolio-primary/30 text-white/80 text-xs px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-white/70 mb-6">
            These projects demonstrate my ability to solve real-world engineering challenges through 
            innovative design and practical implementation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
