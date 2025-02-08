import React from 'react'
import './Navbar.css'
import logo from '../../assets/jf_logo.png'
import { Link, Element } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <Link to="hero-container" smooth={true} offset={0} duration={500}>
          <img src={logo} alt="JF Logo" className='logo' />
        </Link>
        <ul>
            <li><button className='navBut'><Link to="about" smooth={true} offset={-150} duration={500}>About</Link></button></li>
            <li><button className='navBut'><Link to="projects" smooth={true} offset={-250} duration={500}>Projects</Link></button></li>
            <li><button className='navBut'><Link to="about" smooth={true} offset={-100} duration={500}>Contact</Link></button></li>
        </ul>
    </nav>
  )
}

export default Navbar
