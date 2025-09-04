import React, { useState, useEffect } from "react";
import '../Featured/featured.mod.scss';
import proj from "../../assets/featured_proj";
import one from "/images/1.png";
import two from "/images/2.png";  
import three from "/images/3.png";
import four from "/images/4.png";
import five from "/images/5.png";

const scroll_speed = 5;

const featured = ({proj}) => {
  const images = [one, two, three, four, five];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true); // Fade in new image
      }, 600); // Match transition duration
    }, scroll_speed*1000); 

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="proj_container">
      <a href={proj.project_link} target="_blank" rel="noopener noreferrer">
      <div className = "featured">
        <div className="img_container">
            <img
              src={images[currentIndex]}
              className={fade ? "fade-in" : "fade-out"}/>
        </div>
        <div className="text_container">
          <h1>Featured Project: <b>{proj.title}</b></h1>
          <h3 className="blurb">{proj.blurb}</h3>
          <div className="skills_feat">
            {proj.skills.map((skill) =>(
            <div className="skill" key={skill}>
              <div className='skillText'>{skill}</div>
            </div>
            ))}
          </div>
        </div>
      </div>
      </a>
    </div>
  )
}

export default featured;
