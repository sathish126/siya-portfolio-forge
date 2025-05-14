
import React from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gradient">Siyas Mahmood S</div>
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href} 
                  className={cn(
                    "text-sm font-medium text-white/70 hover:text-white transition-colors",
                    "hover:text-portfolio-secondary relative",
                    "after:absolute after:left-0 after:bottom-0 after:h-0.5",
                    "after:w-0 hover:after:w-full after:bg-portfolio-secondary",
                    "after:transition-all after:duration-300"
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="md:hidden">
            <button className="text-white p-2">
              Menu
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
