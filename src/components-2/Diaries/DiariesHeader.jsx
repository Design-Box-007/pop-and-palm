// components/ServicesHeader.js
import React from "react";
import styles from "./DiariesHeader.module.css";
import { ArrowRight, ArrowRightCircleIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function DiariesHeader({ title }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <HashLink smooth to={"/blog"} className={"button-primary"}>
        
          View All &rarr;
        
      
      </HashLink>
    </header>
  );
}

export default DiariesHeader;
