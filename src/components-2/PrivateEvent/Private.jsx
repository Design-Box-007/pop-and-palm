import React from "react";
import styles from "./Private.module.css";

// Default data
const defaultData = {
  title: "Why Private Events Matter",
  image: "/assets/Pop and Palm/About Us/About us 1.png",
  description:
    "Private events are more than just gatherings — they’re milestones that deserve to be remembered. Whether it’s a wedding, a birthday, or a family celebration, each event is an opportunity to tell your story. Our role is to transform your ideas into experiences filled with warmth, creativity, and seamless execution.",
  description2:
    "We don’t just plan events — we design experiences. Explore our core services tailored to meet your every celebration need.",
};

// Reusable Private component
const Private = ({ data = defaultData }) => {
  const { title, image, description, description2 } = data;

  return (
    <section className={styles.servicesAtAGlance}>
      <div className={styles.imageContainer}>
        <img
          src={image}
          alt="A busy outdoor market or festival with many people and stalls."
          className={styles.image}
          loading="lazy"
        />
      </div>
      <div className={styles.contentContainer}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.divider}></div>
        <div className={styles.para}>
          <p>{description}</p>
          <p>{description2}</p>
        </div>
      </div>
    </section>
  );
};

export default Private;
