import React from 'react'
import './Hero.mod.scss'
import CV from '../../assets/jf_cv_2025.pdf'
import heroImg from '../../assets/HeroPhoto/king.jpg'
import { Link, Element } from 'react-scroll';

const Hero = () => {
  function download(url) {
    const a = document.createElement('a');
    a.href = url;
    a.download = url.split('/').pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  
  return (
    <div className='hero-container'>
      <div className='hero-image'>
        <img className="" src={heroImg} alt="heroImg" />
      </div>
        <div className='hero-text'>
            <h1>Jackson</h1><h1>Fontaine</h1>
            <hr></hr>
            <h2>University of Auckland</h2>
            <h2>BSc in CS/Maths</h2>
            <button className="btn">
              <Link to="about" smooth={true} offset={-150} duration={500}>About Me</Link>
            </button>
            <br/><br/>
            <button className="btn" onClick={()=>download(CV)}>Resume</button>
        </div>
    </div>
  )
}

export default Hero
