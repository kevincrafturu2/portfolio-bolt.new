import React from 'react';
import { Home, Code, Mail } from 'lucide-react';
import NavLink from './NavLink';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A0F0F]/90 backdrop-blur-sm border-b border-[#FF4500]/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          <div className="flex items-center space-x-12">
            <NavLink href="#home" icon={<Home size={20} />} text="Home" />
            <NavLink href="#projects" icon={<Code size={20} />} text="Projects" />
            <NavLink href="#contact" icon={<Mail size={20} />} text="Commission" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;