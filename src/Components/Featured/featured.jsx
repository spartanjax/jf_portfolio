import React, { useState, useEffect } from "react";
import '../Featured/featured.mod.scss';
import proj from "../../assets/featured_proj";

const featured = ({ proj }) => {
  const images = [
    "/images/1.png",
    "/images/2.png",
    "/images/3.png",
    "/images/4.png"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true); // Fade in new image
      }, 400); // Match transition duration
    }, 3000); 

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
          <h3 className="blurb">{proj.blurb}<br/><b>Skills: </b>{proj.skills}</h3>
        </div>
      </div>
      </a>
    </div>
  )
}

export default featured;
