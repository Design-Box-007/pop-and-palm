import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import LeafRight from "../assets/heroLeftDesign.png";
import LeafLeft from "../assets/heroRightDesign.png";
import hero from '../assets/hero.png';

// Custom hook to detect if an element is in view
const useInView = (options) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      options
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return { ref, isInView };
};

const HeroSection = () => {
  const { ref: heroRef, isInView: isHeroInView } = useInView({ threshold: 0.1 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth <= 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isHeroInView) {
      setIsHovered(true);
    } else {
      setIsHovered(false);
    }
  }, [isHeroInView]);

  const xAnimationValue = isMobileOrTablet ? 80 : 200;

  return (
    <motion.div
      className='hero-section'
      ref={heroRef}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className='leaf-right'>
        <img src={LeafRight} alt="leaf right" width={383} height={384} />
      </div>
      <div className='leaf-left'>
        <img src={LeafLeft} alt="leaf left" width={378} height={395} />
      </div>
      <motion.div 
        className='hero-image-container' 
        animate={{ width: isHovered ? "60dvw" : '100dvw', height: isHovered ? "70dvh" : '100dvh' }}
        transition={{ duration: 3, ease: "easeInOut", type: "spring" }}
      >
        <motion.img
          src={hero}
          alt="hero"
          className='overlay-image'
          width={1920}
          height={1080}
        />
        <div className='image-overlay' />
        <div className='hero-subtitle-wrapper'>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: isHovered ? -xAnimationValue : 0 }}
            transition={{ duration: 3, ease: "easeInOut", type: "spring" }}
          >
            <h1 className='hero-subtitle'>
              Crafting Memories <b className='and-symbol'> &</b>
            </h1>
          </motion.div>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: isHovered ? xAnimationValue : 0 }}
            transition={{ duration: 3, ease: "easeInOut", type: "spring" }}
          >
            <h1 className='hero-subtitle top-left'>Celebrating Moments</h1>
          </motion.div>
        </div>
      </motion.div>
      <div className='hero-titles'>
        <motion.div
          className='hero-title-wrapper'
          initial={{ x: 0 }}
          animate={{ x: isHovered ? -xAnimationValue : 0 }}
          transition={{ duration: 2, ease: "easeInOut", type: "spring" }}
        >
          <h2 className='hero-title'>
            Crafting Memories <b className='and-symbol'> &</b>
          </h2>
        </motion.div>
        <motion.div
          className='hero-title-wrapper'
          initial={{ x: 0 }}
          animate={{ x: isHovered ? xAnimationValue : 0 }}
          transition={{ duration: 2, ease: "easeInOut", type: "spring" }}
        >
          <h2 className='hero-title'>
            Celebrating Moments
          </h2>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default HeroSection;
