import React, { useEffect } from 'react';
import Overlay from './Components/Overlay/overlay';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About Me/about';
import Experience from './Components/Experience/experience';
import Projects from './Components/Projects/projects';
import Contact from "./Components/Contact/contact";

const App = () => {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--primary', 'rgb(45, 51, 107)');
    root.style.setProperty('--secondary', 'rgb(81, 106, 214)');
    root.style.setProperty('--tertiary', 'rgb(169, 181, 223)');
    root.style.setProperty('--quaternary', 'rgb(240, 241, 252)');
    root.style.setProperty('--grey', 'rgb(66, 66, 66)');

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
      {/* Glowing Animated Background Layer */}
      <div className="background-gradient" />
      <div className="background-glow" />

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
    </>
  );
};

export default App;
