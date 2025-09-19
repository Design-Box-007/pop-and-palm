// components/ServiceCard.js

import { ArrowBigRightDash, ArrowRightCircleIcon } from "lucide-react";
import styles from "./DiariesCard.module.css";

function DiariesCard({ diaries }) {
  const { image, title, description } = diaries;

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <div>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>

        <button className={styles.button}>
          Learn More{" "}
          <span>
            <ArrowRightCircleIcon />
          </span>
        </button>
        
      </div>
    </div>
  );
}

export default DiariesCard;
