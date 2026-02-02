import React from 'react'
import './Hero.mod.scss'
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
    <div className='hero-container' id='hero'>
      <div className='hero-inner'>
        <div className='hero-image'>
          <img className="" src={heroImg} alt="heroImg" />
        </div>
        <div className='hero-text'>
            <h1>Jackson</h1><h1>Fontaine</h1>
            <hr></hr>
            <h2>University of Auckland<br/>BSc in CS/Maths</h2>
        </div>
      </div>
    </div>
  )
}

export default Hero
