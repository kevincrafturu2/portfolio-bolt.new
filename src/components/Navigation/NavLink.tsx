import React from 'react';

interface NavLinkProps {
  href: string;
  icon: React.ReactNode;
  text: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, icon, text }) => {
  return (
    <a
      href={href}
      className="flex items-center space-x-2 text-[#E0E0E0] hover:text-[#FFD700] transition-colors"
    >
      {icon}
      <span>{text}</span>
    </a>
  );
};

export default NavLink;