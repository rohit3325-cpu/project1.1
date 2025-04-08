// src/components/Navbar.jsx
import React from "react";


const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">MegaBlog</h1>
        <ul className="hidden md:flex gap-8 font-medium">
           <li><a href="#hero" className="hover:text-gray-300">Home</a></li>
           <li><a href="#about" className="hover:text-gray-300">About</a></li>
           <li><a href="#services" className="hover:text-gray-300">Services</a></li>
           <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
        </ul>

        <button className="md:hidden">
          {/* You can add a mobile menu icon here */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
