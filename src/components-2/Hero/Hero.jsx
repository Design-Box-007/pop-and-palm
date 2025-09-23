import React from "react";
import styles from "./Hero.module.css";
import icons from "../../Icon/Icon";
import defaultImage from "../../assets/Pop and Palm/Home/Home Page image 2.png";
import AnimatedWrapper from "../Animation/AnimatedWrapper1";

// Default hero data
const defaultData = {
  title: "Turning Moments into",
  tagline: "Unforgettable Experiences.",
  description:
    "Delivering flawless corporate events, weddings, and exhibitions across the UAE.",
  subDescription:
    "From corporate conferences to private celebrations, we design and execute events that leave a lasting impact.",
  image: defaultImage,
  buttonLink: "#",
};

export default function HeroSection({ title, image, section = {} }) {
  const finalData = {
    ...defaultData,
    ...section,
    ...(title && { title }),
    ...(image && { image }),
  };

  return (
    <section className={styles.heroSection}>
      {/* Background Image */}
      <AnimatedWrapper
        type="zoomIn"
        duration={2}
        className={styles.backgroundImage}
      >
        <div
          style={{ backgroundImage: `url(${finalData.image})` }}
          className={styles.backgroundImage}
        />
      </AnimatedWrapper>

      {/* Dark Overlay */}
      <div className={styles.overlay} />

      {/* Content */}
      <AnimatedWrapper type="fadeUp" delay={0.2} className={styles.content}>
        <h1 className={styles.title}>{finalData.title} </h1>

        <AnimatedWrapper type="fadeRight" delay={0.4}>
          <span className={styles.titleSpan}>{finalData.tagline}</span>
        </AnimatedWrapper>

        <AnimatedWrapper type="fadeUp" delay={0.6}>
          <p className={styles.subtitle}>{finalData.description}</p>
        </AnimatedWrapper>
      </AnimatedWrapper>

      {/* Bottom Section */}

      <div className={styles.bottomCon}>
        <AnimatedWrapper
          type="fadeup"
          delay={1.2}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={styles.bottom}
        >
          <div className={styles.bottomLeftText}>
            <p>{finalData.subDescription}</p>
          </div>
        </AnimatedWrapper>

        <AnimatedWrapper
          type="fadeUp"
          delay={1.2}
          className={styles.bottomRightButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href={finalData.buttonLink} className={styles.planButton}>
            Plan Your Event{" "}
            <span>
              <img src={icons.icon1} alt="icon" />
            </span>
          </a>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
