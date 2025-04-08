// Hero.jsx
import React from 'react';


export default function Hero() {
  return (
    <section  id='hero' className="w-full h-screen grid grid-cols-1 md:grid-cols-2">
      
      {/* Left Side - Text Content */}
      <div className="w=full h=full flex flex-col justify-center items-start bg-black text-white px-10">
        <h1 className="text-5xl font-bold mb-4">Welcome to MegaBlog</h1>
        <p className="text-xl mb-6">
          Creativity. Strategy. Execution. Let's bring ideas to life!
        </p>
        <button className="px-6 py-3 bg-white text-black rounded-full font-semibold shadow-md hover:scale-105 transition">
         <a href="#contact">Get Started</a>
        </button>
      </div>

      {/* Right Side - Background or Image */}
      <div className="bg-[#1e1e1e] w-full h-full relative min-h-screen overflow-hidden ">
        {/* Optional: Add an image here */}
        <img src="https://www.posterwallprints.com/cdn/shop/files/Matsumoto_Hoji_frog_poster.jpg?v=1741233118&width=533" alt="Visual" className="w-full h-full object-cover" />
      </div>

    </section>
  );
}

