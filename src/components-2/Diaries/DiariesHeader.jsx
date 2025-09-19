// components/ServicesHeader.js
import React from "react";
import styles from "./DiariesHeader.module.css";
import { ArrowRightCircleIcon } from "lucide-react";

function DiariesHeader({ title }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <button>
        View All
        <span>
          <ArrowRightCircleIcon />
        </span>
      </button>
    </header>
  );
}

export default DiariesHeader;
