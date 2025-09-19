// components/ServicesHeader.js
import React from "react";
import styles from "./ServicesHeader.module.css";

function ServicesHeader({ preTitle, title, subtitle }) {
  return (
    <header className={styles.header}>
      <p className={styles.preTitle}>{preTitle}</p>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
    </header>
  );
}

export default ServicesHeader;
