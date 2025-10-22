import React from "react";
import styles from "./Hero.module.css";
import icons from "../../Icon/Icon";
import defaultImage from "../../assets/hero.png";
import AnimatedWrapper from "../Animation/AnimatedWrapper1";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

// Default hero data
const defaultData = {
  title: "Turning Moments into",
  tagline: "Unforgettable Experiences.",
  description:
    "From Corporate Excellence to Wedding Elegance – We Make It Happen.",
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
      

      {/* Dark Overlay */}
      <div className={styles.overlay} />
      </AnimatedWrapper>

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
      <AnimatedWrapper type="fadeUp" delay={1.2} className={styles.bottomCon}>
        <div className={styles.bottomTextAndButton}>
          <p className={styles.bottomText}>Let’s bring your vision to life</p>
          <span>-</span>

          <Nav.Link
            href="https://us.bigin.online/org868107012/forms/enquiry-form"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.planButton}
          >
            Plan Your Event
            <span>
              <img src={icons.icon1} alt="icon" />
            </span>
          </Nav.Link>

          <span className={styles.bottomText}>
            today to start planning your perfect event.{" "}
          </span>
         </div>
      </AnimatedWrapper>
    </section>
  );
}
