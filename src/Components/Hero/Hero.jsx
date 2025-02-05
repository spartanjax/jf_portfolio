import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero-container'>
        <div className='hero-text'>
            <h1>Jackson</h1><h1>Fontaine</h1>
            <hr></hr>
            <h2>University of Auckland</h2>
            <h2>BSc in CS/Maths</h2>
            <button className="btn">About Me</button>
            <button className="btn">Download CV</button>
        </div>
    </div>
  )
}

export default Hero
