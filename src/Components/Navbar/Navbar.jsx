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

  const [menuOpen, setMenuOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);

  const smallSize = 600;

  React.useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth < smallSize);
    };

    const handleScroll = () => {
      if (window.scrollY > 150) {
        setCollapsed(true);
        handleShow();
      } else {
        setCollapsed(window.innerWidth < smallSize); // only collapse if width < 768
        setMenuOpen(false);
        handleHide();
      }
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
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
      <nav className={`container`} id="nav">
      {collapsed ? (
        <>
          {/* Hamburger icon */}
          <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu} style={{ display: collapsed ? 'flex' : 'none' }}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          {menuOpen && (
            <ul className={`nav-links ${collapsed ? 'collapsed' : ''} ${menuOpen ? 'open' : ''}`}>
              <li><button className={`navBut ${menuOpen ? 'open' : ''}`} onClick={() => { toggleMenu(); scrollToSection('about', -100); }}>About</button></li>
              <li><button className={`navBut ${menuOpen ? 'open' : ''}`} onClick={() => { toggleMenu(); scrollToSection('experience'); }}>Experience</button></li>
              <li><button className={`navBut ${menuOpen ? 'open' : ''}`} onClick={() => { toggleMenu(); scrollToSection('projects', -50); }}>Projects</button></li>
            </ul>
          )}
        </>
      ) : (
        <ul className="desktop-nav">
          <li><button className='navBut' onClick={() => scrollToSection('about', -100)}>About</button></li>
          <li><button className='navBut' onClick={() => scrollToSection('experience')}>Experience</button></li>
          <li><button className='navBut' onClick={() => scrollToSection('projects', -50)}>Projects</button></li>
        </ul>
      )}

      {showArrow && (
        <button id="upArrow" className="navBut" onClick={() => scrollToSection('hero')}>↑</button>
      )}
    </nav>
    </>
  )
}

export default Navbar
