import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
          alt="Modern Architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Crafting Spaces,<br />Creating Dreams</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Transform your vision into reality with our innovative architectural designs
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}