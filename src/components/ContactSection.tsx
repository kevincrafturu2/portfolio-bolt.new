import React from 'react';
import { Github } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20 px-8 bg-[#1A0F0F]/50" id="contact">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#FF4500] to-[#FFD700] text-transparent bg-clip-text">
        Connect With Me
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <iframe 
            src="https://github.com/sponsors/kevincrafturu2/card" 
            title="GitHub Sponsor" 
            className="w-full h-[150px] rounded-lg"
          />
          <iframe 
            src="https://discord.com/widget?id=1135571879852261408"
            width="100%" 
            height="300" 
            allowtransparency="true"
            frameBorder="0" 
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            className="rounded-lg"
          />
        </div>
        <div className="space-y-4">
          <a
            href="https://guns.lol/mendoza"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#FF4500] to-[#FFD700] text-white font-medium hover:opacity-90 transition-opacity w-full justify-center"
          >
            Visit My Social Links
          </a>
          <a
            href="https://github.com/kevincrafturu2"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#FF4500] text-[#FF4500] hover:bg-[#FF4500] hover:text-white transition-colors w-full justify-center"
          >
            <Github size={20} />
            GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;