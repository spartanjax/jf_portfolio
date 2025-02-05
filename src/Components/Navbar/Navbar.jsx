import React from 'react'
import './Navbar.css'
import logo from '../../assets/jf_logo.png'

const Navbar = () => {
  return (
    <nav className="container">
        <img src={logo} alt="JF Logo" className='logo' />
        <ul>
            <li><button className='navBut'>About</button></li>
            <li><button className='navBut'>Projects</button></li>
            <li><button className='navBut'>Contact</button></li>
        </ul>
    </nav>
  )
}

export default Navbar
