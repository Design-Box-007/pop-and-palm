"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import LeafRight from "../../assets/heroLeftDesign.png";
import LeafLeft from "../../assets/heroRightDesign.png";

// Custom hook to detect if element is in view
const useInView = (options) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      options
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options]);

  return { ref, isInView };
};

const Hero = ({
  heroImage,
  text1, // subtitle left
  text2, // subtitle right
}) => {
  const { ref: heroRef, isInView: isHeroInView } = useInView({
    threshold: 0.1,
  });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(
    window.innerWidth <= 1024
  );

  useEffect(() => {
    const handleResize = () => setIsMobileOrTablet(window.innerWidth <= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsHovered(isHeroInView);
  }, [isHeroInView]);

  const xAnimationValue = isMobileOrTablet ? 80 : 200;

  return (
    <motion.div
      className="hero-section"
      ref={heroRef}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="leaf-right">
        <img src={LeafRight} alt="leaf right" />
      </div>
      <div className="leaf-left">
        <img src={LeafLeft} alt="leaf left" />
      </div>

      <motion.div
        className="hero-image-container"
        animate={{
          width: isHovered ? "60dvw" : "100dvw",
          height: isHovered ? "70dvh" : "100dvh",
        }}
        transition={{ duration: 3, ease: "easeInOut", type: "spring" }}
      >
        {heroImage && (
          <motion.img src={heroImage} alt="hero" className="overlay-image" />
        )}
        <div className="image-overlay" />

        <div className="hero-subtitle-wrapper">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: isHovered ? -xAnimationValue : 0 }}
            transition={{ duration: 3, ease: "easeInOut", type: "spring" }}
          >
            <h1 className="hero-subtitle">{text1}</h1>
          </motion.div>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: isHovered ? xAnimationValue : 0 }}
            transition={{ duration: 3, ease: "easeInOut", type: "spring" }}
          >
            <h1 className="hero-subtitle top-left">{text2}</h1>
          </motion.div>
        </div>
      </motion.div>

      <div className="hero-titles">
        <motion.div
          className="hero-title-wrapper"
          initial={{ x: 0 }}
          animate={{ x: isHovered ? -xAnimationValue : 0 }}
          transition={{ duration: 2, ease: "easeInOut", type: "spring" }}
        >
          <h2 className="hero-title">{text1}</h2>
        </motion.div>
        <motion.div
          className="hero-title-wrapper"
          initial={{ x: 0 }}
          animate={{ x: isHovered ? xAnimationValue : 0 }}
          transition={{ duration: 2, ease: "easeInOut", type: "spring" }}
        >
          <h2 className="hero-title">{text2}</h2>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
