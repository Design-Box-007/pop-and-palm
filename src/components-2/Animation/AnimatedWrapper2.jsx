// components/AnimatedWrapper.js
import { motion } from "framer-motion";

const AnimatedWrapper2 = ({
  children,
  animationType = "fadeInUp",
  delay = 0,
  className = "",
}) => {
  const variants = {
    fadeInUp: {
      hidden: { opacity: 0, y: 30, scale: 0.95 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, delay },
      },
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.8, delay } },
    },
    scaleUp: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay } },
    },
    rotateIn: {
      hidden: { opacity: 0, rotate: -15, scale: 0.9 },
      visible: {
        opacity: 1,
        rotate: 0,
        scale: 1,
        transition: { duration: 0.6, delay },
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants[animationType]}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedWrapper2;
