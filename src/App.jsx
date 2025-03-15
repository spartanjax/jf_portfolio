import React from 'react';
import Overlay from './Components/Overlay/overlay';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About Me/about';
import Experience from './Components/Experience/experience';
import Projects from './Components/Projects/projects';
import Contact from "./Components/Contact/contact";

const App = () => {

//   White: 
// Light Blue: rgb(169, 181, 223)
// Blue: #7886C7  rgb(120, 134, 199)
// Dark Blue: #2D336B rgb(45, 51, 107)

  function componentDidMount() {
    const root = document.documentElement;
    root.style.setProperty('--primary', 'rgb(45, 51, 107)');
    root.style.setProperty('--secondary', 'rgb(120, 134, 199)');
    root.style.setProperty('--tertiary', 'rgb(169, 181, 223)');
    root.style.setProperty('--quaternary', 'rgb(240, 241, 252)');
    root.style.setProperty('--grey', 'rgb(66, 66, 66)');
    }

  componentDidMount();

//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("show");
//       }
//     });
//   }, {
//     root: null, // Observe relative to viewport
//     rootMargin: "0px",
//     threshold: 0.1, // Trigger when at least 10% of the element is visible
//   });

//   function show(){
//     const HiddenLeft = document.querySelectorAll('.hidden-left');
//     const HiddenRight = document.querySelectorAll('.hidden-right');
//     const Popup = document.querySelectorAll('.popup');
//     HiddenLeft.forEach((hidden) => observer.observe(hidden));
//     HiddenRight.forEach((hidden) => observer.observe(hidden));
//     Popup.forEach((hidden) => observer.observe(hidden));
//   }
 
// window.addEventListener('load', show);

  return (
    <div className="portfolio">
      <Overlay/>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
