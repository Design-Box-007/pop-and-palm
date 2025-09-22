import React from "react";
import styles from "./Hero.module.css";
import icons from "../../Icon/Icon";
import defaultImage from "../../assets/Pop and Palm/Home/Home Page image 2.png";

// Default hero data
const defaultData = {
  title: "Turning Moments into",
  tagline: "We Bring to Life",
  description:
    "Delivering flawless corporate events, weddings, and exhibitions across the UAE.",
  subDescription:
    "From corporate conferences to private celebrations, we design and execute events that leave a lasting impact.",
  image: defaultImage,
  buttonLink: "#",
};

export default function HeroSection({ title, image, section = {} }) {
  // Merge in this order → defaults < section < direct props
  const finalData = {
    ...defaultData,
    ...section,
    ...(title && { title }),
    ...(image && { image }),
  };

  return (
    <section className={styles.heroSection}>
      {/* Background Image */}
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${finalData.image})` }}
      />

      {/* Dark Overlay */}
      <div className={styles.overlay} />

      {/* Content */}
      <div className={styles.content}>
        <h1 className={styles.title}>
          {finalData.title}{" "}
          <span className={styles.titleSpan}>{finalData.tagline}</span>
        </h1>
        <p className={styles.subtitle}>{finalData.description}</p>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottom}>
        <div className={styles.bottomLeftText}>
          <p>{finalData.subDescription}</p>
        </div>
        <div className={styles.bottomRightButton}>
          <a href={finalData.buttonLink} className={styles.planButton}>
            Plan Your Event{" "}
            <span>
              <img src={icons.icon1} alt="icon" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
