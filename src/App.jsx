import React from 'react'
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

  return (
    <div>
      <section id="homep"><Navbar/><Hero/></section>
      <section id="aboutp"><About/></section>
      <section id="experiencep"><Experience/></section>
      <section id="projectsp"><Projects/></section>
      <section id="contactsp"></section>
      
      
    </div>
  )
}

export default App
