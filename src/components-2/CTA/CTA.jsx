import styles from "./CTA.module.css";
import React from "react";

import CTAImage from "../../assets/Pop and Palm/Home/Home Page image 1.png";
import { ArrowRightCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className={styles.hero}>
      {/* Background Image */}
      <img src={CTAImage} alt="Event background" className={styles.bgImage} />

      {/* Dark Overlay + Content */}
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            Let’s Make Your <br />
            Event Unforgettable
          </h1>

          <p className={styles.description}>
            Whether it’s a wedding, a corporate gathering, or a private
            celebration — we’re here to make planning simple and stress-free.
          </p>
        </div>

        <div className={styles.bottomContent}>
          <p className={styles.subText}>
            We’ll handle the details, you enjoy the moments.
          </p>

          <button className={styles.cta}>Start Planning Today <ArrowRightCircle/> </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
