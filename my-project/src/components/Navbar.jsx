import React from "react";
import { Mail } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain bg-white p-1 rounded" />
          <span className="font-bold text-lg">MegaBlog</span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-10 text-sm font-medium">
          <li>
            <a href="#hero" className="text-white font-semibold">Home</a>
          </li>
          <li>
            <a href="#about" className="text-gray-400 hover:text-white">About us</a>
          </li>
          <li>
            <a href="#services" className="text-gray-400 hover:text-white">Services</a>
          </li>
          <li>
            <a href="#work" className="text-gray-400 hover:text-white">Our Work</a>
          </li>
        </ul>

        {/* Contact Button */}
        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-200 transition"
        >
          <Mail size={18} />
          Contact Us
        </a>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;


