import React from 'react';
import Overlay from './Components/Overlay/overlay';
import Navbar from './Components/1_Navbar/Navbar';
import Hero from './Components/2_Hero/Hero';
import About from './Components/About Me/about';
import Experience from './Components/Experience/experience';
import Projects from './Components/Projects/projects';
import Contact from "./Components/Contact/contact";

const App = () => {
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

      {/* Animated Background Layer */}
      <div className="background-gradient" />
    </>
  );
};

export default App;
