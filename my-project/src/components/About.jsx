// components/AboutSection.jsx

import React from 'react';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full h-screen bg-[#0f0f0f] text-white flex items-center justify-center px-6 md:px-20"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* Text Content */}
        <div>
          <h2 className="text-5xl font-bold mb-6">About Us</h2>
          <p className="text-gray-400 text-lg mb-6">
            MegaBlog is your go-to platform for digital innovation and storytelling. 
            We specialize in building sleek, modern, and powerful web experiences that 
            captivate users and grow businesses.
          </p>
          <p className="text-gray-400 text-lg">
            Our expert team merges creativity, technology, and strategy to deliver 
            seamless digital solutions tailored to your brand's unique vision.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=60"
            alt="About MegaBlog"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
