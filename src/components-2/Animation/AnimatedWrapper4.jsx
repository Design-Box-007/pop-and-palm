// components-animated/AnimatedText/AnimatedText.js
import React from "react";
import { motion } from "framer-motion";

const AnimatedText = ({ text, className = "", delay = 0, stagger = 0.03 }) => {
  const letters = text.split("");

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div className={className} variants={container} initial="hidden" animate="visible">
      {letters.map((char, i) => (
        <motion.span
          key={i}
          variants={child}
          style={{ display: char === " " ? "inline-block" : undefined }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
