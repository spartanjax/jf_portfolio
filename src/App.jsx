import React, { useEffect } from 'react';
import Overlay from './Components/Overlay/overlay';
import Navbar from './Components/1_Navbar/Navbar';
import Hero from './Components/2_Hero/Hero';
import About from './Components/About Me/about';
import Experience from './Components/Experience/experience';
import Projects from './Components/Projects/projects';
import Contact from "./Components/Contact/contact";

const App = () => {
  useEffect(() => {
    const root = document.documentElement;
    
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      root.style.setProperty('--x', `${x}%`);
      root.style.setProperty('--y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Main Content */}
      <div className="portfolio">
        <Overlay />
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>

      {/* Glowing Animated Background Layer */}
      <div className="background-gradient" />
      <div className="background-glow" />
    </>
  );
};

export default App;
