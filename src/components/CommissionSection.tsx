import React from 'react';
import { Github } from 'lucide-react';

const CommissionSection = () => {
  return (
    <section className="py-20 px-8 bg-[#1A0F0F]/50" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#FF4500] to-[#FFD700] text-transparent bg-clip-text">
          Commission Me
        </h2>
        <p className="text-xl mb-8 text-[#E0E0E0]">
          DM me on Discord to the user mendozauy2 to commission me
        </p>
        <a
          href="https://github.com/kevincrafturu2"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-[#FF4500] text-[#FF4500] hover:bg-[#FF4500] hover:text-white transition-colors"
        >
          <Github size={24} />
          <span className="font-medium">GitHub Profile</span>
        </a>
      </div>
    </section>
  );
};

export default CommissionSection;