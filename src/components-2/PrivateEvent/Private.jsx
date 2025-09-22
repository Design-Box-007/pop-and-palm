import React from "react";
import styles from "./Private.module.css";

// Default data
const defaultData = {
  title: "Why Private Events Matter",
  image: "/assets/Pop and Palm/About Us/About us 1.png",
  description:
    "Private events are more than just gatherings — they’re milestones that deserve to be remembered. Whether it’s a wedding, a birthday, or a family celebration, each event is an opportunity to tell your story. Our role is to transform your ideas into experiences filled with warmth, creativity, and seamless execution.",
};

// Reusable Private component
const Private = ({ data = defaultData }) => {
  const { title, image, description } = data;

  return (
    <div className={styles.main}>
      <h1>{title}</h1>
      <img src={image} alt="hero" />
      <p>{description}</p>
    </div>
  );
};

export default Private;
