import React from 'react';
import Navbar from './components/navigation/Navbar';
import Hero from './components/sections/Hero';
import ParallaxProjects from './components/sections/ParallaxProjects';
import Services from './components/sections/Services';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ParallaxProjects />
      <Services />
      <Contact />
    </div>
  );
}

export default App;