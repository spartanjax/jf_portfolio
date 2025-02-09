import React from 'react'
import Overlay from './Components/Overlay/overlay'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About Me/about'
import Experience from './Components/Experience/experience'
import Projects from './Components/Projects/projects'

const App = () => {
  // let sections = document.querySelectorAll('section');
  // let navLinks = document.querySelectorAll('.navBut dark-nav');

  // window.onscroll = () => {
  //   sections.forEach(sec => {
  //     let top = window.scrollY;
  //     let offset = sec.offsetTop-150;
  //     let height = sec.offsetHeight;
  //     let id = sec.getAttribute('id');

  //     if (top >= offset && top < offset + height) {
  //       navLinks.forEach(links => {
  //         links.classList.remove('active');
  //         document.querySelector(id).classList.add('active');
  //       });
  //     }
  //   });
  // }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  function show(){
    const HiddenLeft = document.querySelectorAll('.hidden-left');
    const HiddenRight = document.querySelectorAll('.hidden-right');
    const Popup = document.querySelectorAll('.popup');
    HiddenLeft.forEach((hidden) => observer.observe(hidden));
    HiddenRight.forEach((hidden) => observer.observe(hidden));
    Popup.forEach((hidden) => observer.observe(hidden));
  }
 
  window.addEventListener('load', show);

  return (
    <div>
      <Overlay/>
      <section id="homep"><Navbar/><Hero/></section>
      <section id="aboutp"><About/></section>
      <section id="experiencep"><Experience/></section>
      <section id="projectsp"><Projects/></section>
      <section id="contactsp"></section>
    </div>
  )
}

export default App
