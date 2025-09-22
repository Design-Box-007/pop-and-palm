import React from "react";
import styles from "./NotFound.module.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.glitch} data-text="404">404</h1>
      <p className={styles.message}>Oops! The page you're looking for doesn’t exist.</p>
      <Link to="/" className={styles.homeBtn}>
        Go Home
      </Link>
    </div>
  );
}
