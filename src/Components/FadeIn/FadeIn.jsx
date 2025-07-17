import { useEffect, useRef, useState } from "react";
import "./FadeIn.mod.scss";

const FadeIn = ({ children, className = "", direction = "up", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggle visibility state every time the element enters or leaves the viewport
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when entering
        } else {
          setIsVisible(false); // Optionally trigger reverse animation when leaving
        }
      },
      { threshold: 0.1 } // Adjust based on when you'd like it to trigger
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-in ${isVisible ? "show" : ""} ${className} fade-${direction}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
