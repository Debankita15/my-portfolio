// src/pages/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  // Example project data
  const projects = [
    {
      title: 'Project One',
      description: 'A brief description of Project One.',
      link: '#',
      image: 'https://via.placeholder.com/400',
    },
    {
      title: 'Project Two',
      description: 'A brief description of Project Two.',
      link: '#',
      image: 'https://via.placeholder.com/400',
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.8 }}
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
