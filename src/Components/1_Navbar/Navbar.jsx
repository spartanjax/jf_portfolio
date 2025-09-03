import React from 'react';
import { useState } from 'react';
import './Navbar.mod.scss';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

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
      if (window.scrollY < 150){
        setCollapsed(window.innerWidth < smallSize);
      }
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

    handleResize();

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const scrollToSection = (id, offset = 0, duration = 1000) => {
    console.log('test');
    
    const el = document.getElementById(id);
    if (el) {
      const targetY = el.getBoundingClientRect().top + window.scrollY + offset;
      const startY = window.scrollY;
      const distance = targetY - startY;
      const startTime = performance.now();

      const easeOutCubic = (t) => {
        return 1 - Math.pow(1 - t, 3); // Easing function for smoother scrolling
      };

      const scroll = (currentTime) => {
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1); // Limit progress to 100%

        const easingProgress = easeOutCubic(progress);
        const currentScrollY = startY + distance * easingProgress;

        window.scrollTo(0, currentScrollY);

        if (timeElapsed < duration) {
          requestAnimationFrame(scroll); // Continue scrolling if duration is not reached
        }
      };

      requestAnimationFrame(scroll); // Start the scrolling animation
    }
  };





  return (
    <>
      <nav className={`container`} id="nav">
      {collapsed ? (
        <>
          {/* Hamburger icon */}

            <div className={`hamburger ${menuOpen ? 'open' : ''} ${collapsed ? 'visible' : 'hidden'}`} onClick={toggleMenu}>
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
            <ThemeToggle />
            <li><button className='navBut' onClick={() => scrollToSection('about', -100)}>About</button></li>
            <li><button className='navBut' onClick={() => scrollToSection('experience')}>Experience</button></li>
            <li><button className='navBut' onClick={() => scrollToSection('projects', -50)}>Projects</button></li>
          </ul>
      )}
      <button className={`upArrow ${showArrow ? 'show' : ''}`} onClick={() => scrollToSection('hero')}>↑</button>
    </nav>
    </>
  )
}

export default Navbar
