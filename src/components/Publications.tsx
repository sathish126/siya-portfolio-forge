
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Publications = () => {
  return (
    <section id="publications" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">
          Publications & Research
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Card className="glass-morphism border-portfolio-primary/20">
            <CardHeader>
              <CardTitle className="text-portfolio-secondary text-2xl">
                Investigating the Effect of Cutting Speed, Feed Rate, and Radial Depth of Cut on Tool Wear during Turning of Al-1060 Alloy by High-Speed Steel Cutting Tools
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80">
                This research paper investigates the effects of various cutting parameters on tool wear 
                when machining aluminum alloys. The study provides valuable insights into optimizing 
                cutting conditions for increased tool life and improved machining efficiency.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between items-center border-t border-white/10 pt-4">
              <div className="text-white/60 text-sm">Presented at ICAMDMS 2024</div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-portfolio-secondary"></span>
                <span className="text-portfolio-secondary">Published Research</span>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Publications;
