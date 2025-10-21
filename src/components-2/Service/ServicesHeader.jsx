// components/ServicesHeader.js
import React from "react";
import styles from "./ServicesHeader.module.css";
import icons from "../../Icon/Icon";

function ServicesHeader({ title, subtitle }) {
  return (
    <header className={styles.header}>
      {/* <p className={styles.preTitle}><span><img src={icons.icon3} alt="icon" /></span> {preTitle}</p> */}
      <h1 className={styles.title}>{title}</h1>
      <p className={"subtitle"}>{subtitle}</p>
    </header>
  );
}

export default ServicesHeader;
