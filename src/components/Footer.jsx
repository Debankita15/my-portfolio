// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white shadow-md py-4 mt-12">
      <div className="container mx-auto text-center text-gray-600">
        &copy; {new Date().getFullYear()} Debankita Basu. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
