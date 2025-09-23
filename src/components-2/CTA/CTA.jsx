import styles from "./CTA.module.css";
import React from "react";

import CTAImage from "../../assets/Pop and Palm/Home/Home Page image 1.png";
import { ArrowRightCircle } from "lucide-react";
import { Link } from "react-router-dom";
import BlurText from "../Animation/AnimatedWrapper4";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const CTA = () => {
  return (
    <section className={styles.hero}>
      {/* Background Image */}
      <img src={CTAImage} alt="Event background" className={styles.bgImage} />

      {/* Dark Overlay + Content */}
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            <BlurText
              text={`Let’s Make Your Event Unforgettable`}
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
            />
            {/* Let’s Make Your <br />
            Event Unforgettable */}
          </h1>

          <p className={styles.description}>
            <BlurText
              text="Whether it’s a wedding, a corporate gathering, or a private celebration — we’re here to make planning simple and stress-free."
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
            />
            {/* ; Whether it’s a wedding, a corporate gathering, or a private
            celebration — we’re here to make planning simple and stress-free. */}
          </p>
        </div>

        <div className={styles.bottomContent}>
          <p className={styles.subText}>
            We’ll handle the details, you enjoy the moments.
          </p>

          <Link to={"#"}>
            <button className={styles.cta}>
              Start Planning Today <ArrowRightCircle />{" "}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
