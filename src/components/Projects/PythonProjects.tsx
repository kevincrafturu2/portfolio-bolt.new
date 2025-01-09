import React from 'react';
import ProjectCard from './Cards/ProjectCard';

const PythonProjects = () => {
  return (
    <section className="py-20 px-8" id="python">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#FF4500] to-[#FFD700] text-transparent bg-clip-text">
        Python Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <ProjectCard
          title="Data Analysis Tool"
          description="Advanced data visualization and analysis tool built with Python and Pandas."
          imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
          githubLink="https://github.com/example/data-analysis"
        />
        <ProjectCard
          title="AI Chat Bot"
          description="Intelligent chatbot using natural language processing and machine learning."
          imageUrl="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
          githubLink="https://github.com/example/ai-chat"
        />
        <ProjectCard
          title="Automation Scripts"
          description="Collection of Python scripts for task automation and productivity."
          imageUrl="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80"
          githubLink="https://github.com/example/automation"
        />
      </div>
    </section>
  );
};

export default PythonProjects;