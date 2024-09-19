// src/pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <motion.h1
        className="text-5xl font-bold text-blue-500 mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Debankita Basu
      </motion.h1>
      <motion.p
        className="text-xl text-gray-700 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        I'm a Data Scientist specializing in AI, Machine Learning, and Data Visualization.
      </motion.p>
      <motion.a
        href="#projects"
        className="px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View My Work
      </motion.a>
    </section>
  );
};

export default Home;
