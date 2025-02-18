import React, { useEffect, useRef, useState } from 'react';

const VisibleReveal = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true); // Ensure the animation happens only once
        }
      },
      { threshold: 0.1 } // Adjust based on when you want to trigger the animation
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div
      ref={titleRef}
      className={`visible-reveal ${isVisible ? 'vbanimate' : ''}`}
    >{children}
    </div>
  );
};

export default VisibleReveal;
