import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  gameLink?: string;
  githubLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  gameLink,
  githubLink,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-[#1A0F0F] to-[#2A1F1F] p-1">
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF4500] to-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative bg-[#1A0F0F] p-6 rounded-lg h-full">
        <div className="overflow-hidden rounded-lg mb-4">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <h3 className="text-[#FFD700] text-xl font-bold mb-2">{title}</h3>
        <p className="text-[#E0E0E0] mb-4">{description}</p>
        <div className="flex gap-4">
          {gameLink && (
            <a
              href={gameLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#FF4500] hover:text-[#FFD700] transition-colors"
            >
              <ExternalLink size={20} />
              Play Game
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#FF4500] hover:text-[#FFD700] transition-colors"
            >
              <Github size={20} />
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;