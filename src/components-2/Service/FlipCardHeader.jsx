import React from "react";
import styles from "./ServicesHeader.module.css";

const FlipCardHeader = ({ title, subtitle }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <p className={"subtitle"}>{subtitle}</p>
    </header>
  );
};

export default FlipCardHeader;
