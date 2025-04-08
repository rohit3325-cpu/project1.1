import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa'; // import icons

export default function Hero() {
  return (
    <section id="hero" className="w-full min-h-screen bg-black flex flex-col md:flex-row">
      
      {/* Left Side - Text Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-white px-6 md:px-16 py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to MegaBlog</h1>
        <p className="text-lg md:text-xl mb-6 text-gray-300">
          Creativity. Strategy. Execution. <br className="hidden md:block" />
          Let&apos;s bring ideas to life!
        </p>
        
        <a
          href="#contact"
          className="px-6 py-3 bg-white text-black rounded-full font-semibold shadow-md hover:scale-105 transition-transform"
        >
          Get Started
        </a>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-6">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 text-2xl">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 text-2xl">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2 h-72 md:h-auto">
        <img
          src="https://www.posterwallprints.com/cdn/shop/files/Matsumoto_Hoji_frog_poster.jpg?v=1741233118&width=533"
          alt="Visual"
          className="w-full h-full object-cover"
        />
      </div>

    </section>
  );
}



