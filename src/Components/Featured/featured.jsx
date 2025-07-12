import React, { useState, useEffect } from "react";
import '../Featured/featured.mod.scss';
import proj from "../../assets/featured_proj";
import one from "/images/1.png";
import two from "/images/2.png";  
import three from "/images/3.png";
import four from "/images/4.png";

const scroll_speed = 5;

const featured = ({ proj }) => {
  const images = [one, two, three, four];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true); // Fade in new image
      }, 500); // Match transition duration
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
            className={fade ? "fade-in" : "fade-out"}
          />
        </div>
        <div className="text_container">
          <h1>Featured Project: {proj.title}</h1>
          <h3 className="blurb">{proj.blurb}<br/><br/><b>Skills: </b>{proj.skills}</h3>
        </div>
      </div>
      </a>
    </div>
  )
}

export default featured;
