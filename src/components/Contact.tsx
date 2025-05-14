
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };
  
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">
          Get In Touch
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-portfolio-secondary">Contact Information</h3>
            
            <div className="space-y-6 text-white/80">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-portfolio-accent">Phone</h4>
                  <p className="text-white/60">+91 9360791265</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-portfolio-accent">Email</h4>
                  <p className="text-white/60">21p923@psgtech.ac.in</p>
                  <p className="text-white/60">siyasmahmood5@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-portfolio-accent">Location</h4>
                  <p className="text-white/60">17/29 Maniyakarar Street, Kuniyamuthur, Coimbatore - 641008</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold mb-4 text-portfolio-accent">Connect with me</h4>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/siyas-mahmood-1224a6226" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-portfolio-primary/20 hover:bg-portfolio-primary/40 transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-portfolio-primary/20 hover:bg-portfolio-primary/40 transition-colors">
                  <Github size={18} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="glass-morphism p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-6 text-portfolio-secondary">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-white/70">Name</label>
                  <Input 
                    id="name" 
                    placeholder="Your Name" 
                    className="bg-white/5 border-white/10 focus:border-portfolio-secondary text-white" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-white/70">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="bg-white/5 border-white/10 focus:border-portfolio-secondary text-white" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm text-white/70">Subject</label>
                <Input 
                  id="subject" 
                  placeholder="How can I help you?" 
                  className="bg-white/5 border-white/10 focus:border-portfolio-secondary text-white" 
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-white/70">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Write your message here..." 
                  className="bg-white/5 border-white/10 focus:border-portfolio-secondary text-white min-h-[120px]" 
                />
              </div>
              
              <Button 
                type="submit"
                className="bg-portfolio-primary hover:bg-portfolio-secondary w-full"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
