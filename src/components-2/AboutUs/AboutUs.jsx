import { MessageCircle, MessageCircleCode } from "lucide-react";
import styles from "./AboutUs.module.css";
import Counter from "../Counter/Counter";

export default function AboutUs() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.badge}>About Us</div>

        <h1 className={styles.heading}>
          Turning Ideas into Extraordinary Experiences
        </h1>

        <p className={styles.description}>
          We are a UAE-based event planning company passionate about creating
          events that connect, inspire, and leave lasting memories. From
          corporate conferences and exhibitions to weddings, private
          celebrations, and brand activations, our team blends creativity with
          flawless execution. With years of expertise in the events industry, we
          design customized experiences that reflect your vision and deliver
          impact at every stage.
        </p>

        <div className={styles.statsContainer}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>
              <Counter end={10} suffix="+" />
            </div>
            <div className={styles.statLabel}>Years of Experience</div>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.statItem}>
            <div className={styles.statNumber}>
              <Counter end={500} suffix="+" />
            </div>
            <div className={styles.statLabel}>Events Delivered</div>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.statItem}>
            <div className={styles.statNumber}>
              <Counter end={200} suffix="+" />
            </div>
            <div className={styles.statLabel}>Happy Clients</div>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.statItem}>
            <div className={styles.statNumber}>
              <Counter end={98} suffix="%" />
            </div>
            <div className={styles.statLabel}>Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
