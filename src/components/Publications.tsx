
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

const publicationsData = [
  {
    title: "Investigating the Effect of Cutting Speed, Feed Rate, and Radial Depth of Cut on Tool Wear during Turning of Al-1060 Alloy by High-Speed Steel Cutting Tools",
    conference: "International Conference on Advanced Materials and Digital Manufacturing Systems (ICAMDMS 2024)",
    date: "2024",
    link: "#"
  }
];

const Publications = () => {
  return (
    <section id="publications" className="py-24 bg-gradient-to-b from-portfolio-dark/90 to-portfolio-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">
          Research Publications
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {publicationsData.map((publication, index) => (
            <Card key={index} className="glass-morphism border-white/10 mb-8">
              <CardHeader>
                <CardTitle className="text-portfolio-secondary text-xl md:text-2xl">
                  {publication.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <p className="text-white/70 font-medium">{publication.conference}</p>
                    <p className="text-white/50 text-sm mt-1">{publication.date}</p>
                  </div>
                  
                  <div className="flex justify-start md:justify-end">
                    <Button variant="outline" className="border-portfolio-primary bg-portfolio-primary/10 text-white hover:bg-portfolio-primary/20">
                      <FileText className="mr-2 h-4 w-4" /> View Publication
                    </Button>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="border-t border-white/10 pt-4 text-white/60">
                <p className="text-sm">
                  This research investigates the impact of various cutting parameters on tool wear when machining aluminum alloys, providing valuable insights for manufacturing process optimization.
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
