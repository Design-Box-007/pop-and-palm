import { MessageCircle, MessageCircleCode } from "lucide-react";
import styles from "./AboutUs.module.css";

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
              10<span className={styles.plus}>+</span>
            </div>
            <div className={styles.statLabel}>Years of Experience</div>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.statItem}>
            <div className={styles.statNumber}>
              500<span className={styles.plus}>+</span>
            </div>
            <div className={styles.statLabel}>Events Delivered</div>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.statItem}>
            <div className={styles.statNumber}>
              200<span className={styles.plus}>+</span>
            </div>
            <div className={styles.statLabel}>Happy Clients</div>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.statItem}>
            <div className={styles.statNumber}>
              98<span className={styles.percent}>%</span>
            </div>
            <div className={styles.statLabel}>Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
