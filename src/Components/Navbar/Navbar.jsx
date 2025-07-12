import React from 'react'
import { useState } from 'react'
import './Navbar.mod.scss'
import logo from '../../assets/jf_logo.png'
import { Link, Element } from 'react-scroll';
import { scroller } from 'react-scroll';

const Navbar = () => {
  const [showArrow, setShowArrow] = useState(false);
  const handleShow = () => setShowArrow(true);
  const handleHide = () => setShowArrow(false);
 

  const [sticky, setSticky] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setSticky(true);
        handleShow();
      } else {
        setSticky(false);
        handleHide();
      }
    });
  }, []);

  const scrollToSection = (id, offset = 0) => {
  console.log('test');
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};


  return (
    <>
    <nav className={`container`} id='nav'>
      {showArrow && <button id={`upArrow`} className='navBut' onClick={() => scrollToSection('nav', -100)}>↑</button>}
      
      <ul>
          <li><button className='navBut' onClick={() => scrollToSection('about', -100)}>About</button></li>
          <li><button className='navBut' onClick={() => scrollToSection('experience')}>Experience</button></li>
          <li><button className='navBut' onClick={() => scrollToSection('projects', -50)}>Projects</button></li>            {/* <li><button id='contact_but' className='navBut'><Link to="contact" smooth={true} offset={-100} duration={800}>Contact</Link></button></li> */}
      </ul>
    </nav>
    </>
  )
}

export default Navbar
