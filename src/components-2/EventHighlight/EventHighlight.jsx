import React from "react";
import styles from "./EventHighlight.module.css";
import eventImage from "../../assets/Pop and Palm/Home/Home Page image 8.png";
// import avatar from "../../assets/Pop and Palm"; // replace with actual avatar

export default function EventHighlight() {
  return (
    <section className={styles.section}>
      {/* Top Header */}
      <div className={styles.topHeader}>
        <div>
          <span className={styles.label}>✨ Our Event Highlights</span>
          <h2 className={styles.title}>From Concept to Celebration.</h2>
        </div>
        <p className={styles.subTitle}>Proven Experiences. Trusted by Many.</p>
      </div>

      {/* Content */}
      <div className={styles.content}>
        {/* Left Image */}
        <div className={styles.imageWrapper}>
          <img src={eventImage} alt="Event" className={styles.image} />
        </div>

        {/* Right Card */}
        <div className={styles.card}>
          <span className={styles.smallLabel}>Product Reveal</span>
          <h3 className={styles.cardTitle}>A Launch That Lit Up the Skyline</h3>
          <div className={styles.subHeadingContainer}>
            <p className={styles.subHeading}>
              Product Launch – From Vision to Spotlight
            </p>
            <span className={styles.location}>Dubai</span>
          </div>
          <p className={styles.description}>
            A bold tech startup wanted their first product launch to be
            unforgettable. We transformed a rooftop into a branded stage under
            the Dubai sky, impressing investors, media, and partners alike.
          </p>

          <div className={styles.testimonial}>
            <img src={eventImage} alt="CEO" className={styles.avatar} />
            <div>
              <p className={styles.quote}>
                “They understood our vision instantly — and then exceeded it.
                Our guests still talk about that night.”
              </p>
              <span className={styles.person}>Rami K., CEO, Solvatech</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
