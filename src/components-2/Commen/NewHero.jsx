"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import LeafRight from "../../assets/heroLeftDesign.png";
import LeafLeft from "../../assets/heroRightDesign.png";
import AnimatedWrapper from "../Animation/AnimatedWrapper1";
import { Nav } from "react-bootstrap";
import icons from "../../Icon/Icon";
import "./NewHero.css";

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
  description,
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
    if (isMobileOrTablet) {
      // Auto-trigger animation on mobile/tablet after component mounts with delay
      const timer = setTimeout(() => {
        setIsHovered(true);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setIsHovered(isHeroInView);
    }
  }, [isHeroInView, isMobileOrTablet]);

  const xAnimationValue = isMobileOrTablet ? 60 : 200;

  return (
    <motion.div
      className="hero-section"
      ref={heroRef}
      onHoverStart={() => !isMobileOrTablet && setIsHovered(true)}
      onHoverEnd={() => !isMobileOrTablet && setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
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
          width: isHovered ? (isMobileOrTablet ? "85dvw" : "60dvw") : "100dvw",
          height: isHovered ? (isMobileOrTablet ? "85dvh" : "70dvh") : "100dvh",
        }}
        transition={{ duration: 3, ease: "easeInOut", type: "spring" }}
      >
        {heroImage && (
          <motion.img src={heroImage} alt="hero" className="overlay-image" />
        )}
        <div className="image-overlay" />

        <div className="hero-subtitle-wrapper">
          <div>
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: isMobileOrTablet ? 0 : (isHovered ? -xAnimationValue : 0) }}
              transition={{ duration: 3, ease: "easeInOut", type: "spring" }}
            >
              <h1 className="hero-subtitle">{text1}</h1>
            </motion.div>
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: isMobileOrTablet ? 0 : (isHovered ? xAnimationValue : 0) }}
              transition={{ duration: 3, ease: "easeInOut", type: "spring" }}
            >
              <h1 className="hero-subtitle top-left">{text2}</h1>
            </motion.div>

            <motion.div
              initial={{ x: 0 }}
              animate={{ x: isMobileOrTablet ? 0 : (isHovered ? -xAnimationValue : 0) }}
              transition={{ duration: 3, ease: "easeInOut", type: "spring" }}
            >
              <h1 className="hero-description">{description}</h1>
            </motion.div>
          </div>
          <div>
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: isMobileOrTablet ? 0 : (isHovered ? xAnimationValue : 0) }}
              transition={{ duration: 3, ease: "easeInOut", type: "spring" }}
            >
              <div className={"bottomCon"}>
                <div className={"bottomTextAndButton"}>
                  <p className={"bottomText"}>
                    Let's bring your vision to life
                  </p>
                  <span>-</span>

                  <Nav.Link
                    href="https://whatsform.com/LW55pG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={"planButton"}
                  >
                    Plan Your Event
                    <span>
                      <img src={icons.icon1} alt="icon" />
                    </span>
                  </Nav.Link>

                  <span className={"bottomText"}>
                    today to start planning your perfect event.{" "}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="hero-subtitle-wrapper">
        <div>
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: isMobileOrTablet ? 0 : (isHovered ? -xAnimationValue : 0) }}
              transition={{ duration: 3, ease: "easeInOut", type: "spring" }}
            >
              <h1 className="hero-subtitle text-green">{text1}</h1>
            </motion.div>
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: isMobileOrTablet ? 0 : (isHovered ? xAnimationValue : 0) }}
              transition={{ duration: 3, ease: "easeInOut", type: "spring" }}
            >
              <h1 className="hero-subtitle  text-green">{text2}</h1>
            </motion.div>

            <motion.div
              initial={{ x: 0 }}
              animate={{ x: isMobileOrTablet ? 0 : (isHovered ? -xAnimationValue : 0) }}
              transition={{ duration: 3, ease: "easeInOut", type: "spring" }}
            >
              <h1 className="hero-description text-green">{description}</h1>
            </motion.div>
        </div>
        <div>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: isMobileOrTablet ? 0 : (isHovered ? xAnimationValue : 0) }}
            transition={{ duration: 3, ease: "easeInOut", type: "spring" }}
          >
            <div className={"bottomCon"}>
              <div className={"bottomTextAndButton"}>
                <p className={"bottomText text-green"}>Let's bring your vision to life</p>
                <span>-</span>

                <Nav.Link
                  href="https://us.bigin.online/org868107012/forms/enquiry-form"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={"planButton"}
                >
                  Plan Your Event
                  <span>
                    <img src={icons.icon1} alt="icon" />
                  </span>
                </Nav.Link>

                <span className={"bottomText text-green"}>
                  today to start planning your perfect event.
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
