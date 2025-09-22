// components/AnimatedWrapper/AnimatedWrapper.js
import { motion } from "framer-motion";

export default function AnimatedWrapper({
  children,
  type = "fadeUp",
  delay = 0,
  duration = 0.8,
  once = true,
  className = "",
  whileHover,
  whileTap,
}) {
  const variants = {
    fadeUp: { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
    fadeDown: { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } },
    fadeLeft: { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
    fadeRight: { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } },
    zoomIn: {
      hidden: { opacity: 1, scale: 1.1 },
      visible: { opacity: 1, scale: 1 },
    },
    fade: { hidden: { opacity: 1 }, visible: { opacity: 1 } },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      variants={variants[type]}
      transition={{ duration, delay }}
      whileHover={whileHover}
      whileTap={whileTap}
    >
      {children}
    </motion.div>
  );
}
