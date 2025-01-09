import React from 'react';
import ProjectCard from './Cards/ProjectCard';

const RobloxProjects = () => {
  const projects = [
    {
      title: "Watch/Hunger/Thirst System",
      description: "Advanced survival system featuring dynamic hunger mechanics and time-based challenges.",
      videoId: "OMq1HxUnlXA",
      buyLink: "https://builtbybit.com/resources/watch-hunger-thirst-and-timer-system.57551/"
    },
    {
      title: "ATM & Profile UI System",
      description: "Comprehensive banking and profile management system with modern UI.",
      videoId: "ScB8LYa5N60",
      buyLink: "https://builtbybit.com/resources/atm-with-profile-ui-system.57714/"
    },
    {
      title: "Premium UI Rules System",
      description: "Elegant UI system for managing and displaying premium rules and content.",
      videoId: "_rSKHNFHYY4",
      buyLink: "https://builtbybit.com/resources/premium-ui-rules-system.57743/"
    },
    {
      title: "Pepper Spray System",
      description: "Advanced pepper spray system with realistic effects and animations.",
      videoId: "Z9Qe_MwoDgo",
      buyLink: "https://builtbybit.com/resources/pepper-spray-system.57866/"
    }
  ];

  return (
    <section className="py-20 px-8" id="projects">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#FF4500] to-[#FFD700] text-transparent bg-clip-text">
        Roblox Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
          />
        ))}
      </div>
    </section>
  );
};

export default RobloxProjects;