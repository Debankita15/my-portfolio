// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="container mx-auto px-4 py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
      <div className="flex flex-col md:flex-row items-center">
        <img
          src="https://via.placeholder.com/300"
          alt="Your Name"
          className="w-64 h-64 rounded-full mb-8 md:mb-0 md:mr-12 object-cover"
        />
        <div>
          <p className="text-lg text-gray-700 mb-4">
            [Your Name] is a passionate Data Scientist with expertise in AI, Machine Learning, and Data Visualization. With a strong background in [Your Background], [Your Name] has worked on numerous projects that leverage data to drive insights and inform decision-making.
          </p>
          <p className="text-lg text-gray-700">
            In addition to technical skills, [Your Name] excels in problem-solving, critical thinking, and effective communication, making them a valuable asset to any team.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
