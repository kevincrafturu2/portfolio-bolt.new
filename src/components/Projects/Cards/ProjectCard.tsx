import React from 'react';
import { ExternalLink, Youtube } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  videoId: string;
  buyLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  videoId,
  buyLink,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-[#1A0F0F] to-[#2A1F1F] p-1">
      <div className="relative bg-[#1A0F0F] p-6 rounded-lg h-full">
        <div className="aspect-video mb-4 rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          />
        </div>
        <h3 className="text-[#FFD700] text-xl font-bold mb-2">{title}</h3>
        <p className="text-[#E0E0E0] mb-4">{description}</p>
        <div className="flex gap-4">
          <a
            href={buyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#FF4500] text-[#FF4500] hover:bg-[#FF4500] hover:text-white transition-colors"
          >
            <ExternalLink size={20} />
            Buy on BuiltByBit
          </a>
          <a
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-white transition-colors"
          >
            <Youtube size={20} />
            Watch Video
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;