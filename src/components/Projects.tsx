
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projectsData = [
  {
    title: "Transporter of Bikes",
    description: "Designed and implemented a bike transport system to reduce worker fatigue and optimize the transportation process in manufacturing facilities.",
    technologies: ["Mechanical Design", "Ergonomics", "Manufacturing"],
    image: "/placeholder.svg"
  },
  {
    title: "Mini Forklift",
    description: "Developed a compact forklift solution to reduce human intervention in storage systems, improving automation and efficiency in warehouse operations.",
    technologies: ["Automation", "Mechanical Engineering", "Control Systems"],
    image: "/placeholder.svg"
  },
  {
    title: "Beetroot Harvesting Machine",
    description: "Designed and fabricated a specialized machine for harvesting beetroot, increasing efficiency and reducing manual labor in agricultural processes.",
    technologies: ["Agricultural Engineering", "Mechanical Design", "Fabrication"],
    image: "/placeholder.svg"
  },
  {
    title: "Aluminium/Polypropylene/Aluminium Sandwich Sheet",
    description: "Developed and tested sandwich composite materials for car hood applications, focusing on weight reduction while maintaining structural integrity.",
    technologies: ["Material Science", "Automotive Engineering", "Testing"],
    image: "/placeholder.svg"
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-portfolio-dark to-portfolio-dark/90">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">Projects</h2>
        
<<<<<<< HEAD
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
=======
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <Card key={index} className="glass-morphism border-white/10 overflow-hidden transition-all duration-300 hover:border-portfolio-secondary/50">
              <div className="h-48 bg-portfolio-primary/20 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center opacity-70"
                />
              </div>
              
              <CardHeader>
                <CardTitle className="text-portfolio-accent">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline" className="border-portfolio-primary/40 text-white/80">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-white/70">
                  {project.description}
                </CardDescription>
              </CardContent>
            </Card>
>>>>>>> 170ae911ad6e807146f5604aba5c1d17cdf1c465
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
