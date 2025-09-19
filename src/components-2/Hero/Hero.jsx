import { ArrowRightCircle } from "lucide-react";
import styles from "./Hero.module.css";
import image from "../../assets/Pop and Palm/Home/Home Page image 2.png"

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      {/* Background Image */}
      <div className={styles.backgroundImage} />

      {/* Dark Overlay */}
      <div className={styles.overlay} />

      {/* Content */}
      <div className={styles.content}>
        <h1 className={styles.title}>
          Turning Moments into{" "}
          <span className={styles.titleSpan}>Unforgettable Experiences.</span>
        </h1>

        <p className={styles.subtitle}>
          Delivering flawless corporate events, weddings, and exhibitions across
          the UAE.
        </p>
      </div>

      {/* Bottom Left Text */}
      <div className={styles.bottom}>
        <div className={styles.bottomLeftText}>
          <p>
            From corporate conferences to private celebrations, we design and
            execute events that leave a lasting impact.
          </p>
        </div>

        {/* Bottom Right Button */}
        <div className={styles.bottomRightButton}>
          <button className={styles.planButton}>
            Plan Your Event <ArrowRightCircle className={styles.arrow} />
          </button>
        </div>
      </div>
    </section>
  );
}
