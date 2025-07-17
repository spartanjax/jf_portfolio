import React, { useEffect, useRef, useState } from "react";
import "./FadeOut.mod.scss"; // Import the plain Sass file

const FadeOut = ({ children, className = "", direction = "right", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(true); // Initially visible
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Keep element visible when in viewport
        } else {
          setIsVisible(false); // Fade out when leaving the viewport
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-out ${isVisible ? "show" : "hide"} ${className} fade-${direction}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default FadeOut;
