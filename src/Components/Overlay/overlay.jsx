import React from 'react'
import './overlay.mod.scss'
import linkedin from '../../assets/icons/overlay/linkedin.png'
import github from '../../assets/icons/overlay/github.png'
import instagram from '../../assets/icons/overlay/instagram.png'
import facebook from '../../assets/icons/overlay/facebook.png'

const overlay = () => {
  return (
    <div id="overlay">
      <div className="icon-links">
        <ul>
            <li><a href="https://www.linkedin.com/in/jackson-fontaine-a6aa15317/" target="_blank"><img src={linkedin} className="icon-logo"></img></a></li>
            <li><a href="https://github.com/spartanjax" target="_blank"><img src={github} className="icon-logo"></img></a></li>
            <li><a href="https://www.instagram.com/spartanjaxx/?hl=en" target="_blank"><img src={instagram} className="icon-logo"></img></a></li>
            <li><a href="https://www.facebook.com/jackson.fontaine.923/" target="_blank"><img src={facebook} className="icon-logo"></img></a></li>
            <div className="vertical-line1"/>
        </ul>
      </div>

      <div className="email-link">
        <a href="mailto:jacksonqfontaine@gmail.com">
          <p>jacksonqfontaine@gmail.com</p>
        </a>
      </div>
      <div className="vertical-line2"/>
    </div>
  )
}

export default overlay
