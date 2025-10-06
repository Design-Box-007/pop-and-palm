import { MessageCircle, MessageCircleCode } from "lucide-react";
import styles from "./AboutUs.module.css";
import Counter from "../Counter/Counter";
import icons from "../../Icon/Icon";
import vector1 from "../../assets/Pop and Palm/Home Page Vector/Vector 6.svg";
import vector2 from "../../assets/Pop and Palm/Home Page Vector/Vector 7.svg";
import AnimatedWrapper from "../Animation/AnimatedWrapper1";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function AboutUs() {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        <AnimatedWrapper type="fadeUp" delay={0.2}>
          <HashLink smooth to={"/about#top"} className={styles.aboutlink}>
            <div className={styles.badge}>
              <span>
                <img src={icons.icon2} alt="icon" />
              </span>{" "}
              About Us
            </div>
          </HashLink>

          <h1 className={styles.heading}>
            Turning Ideas into Extraordinary Experiences
          </h1>

          <p className={styles.description}>
            We are a UAE-based event planning company passionate about creating
            events that connect, inspire, and leave lasting memories. From
            corporate conferences and exhibitions to weddings, private
            celebrations, and brand activations, our team blends creativity with
            flawless execution. With years of expertise in the events industry,
            we design customized experiences that reflect your vision and
            deliver impact at every stage.
          </p>
        </AnimatedWrapper>

        <div className={styles.vector}>
          <img src={vector1} alt="vector1" />
          <img src={vector2} alt="vector2" />
        </div>
        <AnimatedWrapper type="fadeUp" delay={0.2}>
          <div className={styles.statsContainer}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>
                <Counter end={5} suffix="+" />
              </div>
              <div className={styles.statLabel}>Years of Experience</div>
            </div>

            <div className={styles.divider}></div>

            <div className={styles.statItem}>
              <div className={styles.statNumber}>
                <Counter end={100} suffix="+" />
              </div>
              <div className={styles.statLabel}>Events Delivered</div>
            </div>

            <div className={styles.divider}></div>

            <div className={styles.statItem}>
              <div className={styles.statNumber}>
                <Counter end={90} suffix="+" />
              </div>
              <div className={styles.statLabel}>Long Term Partnerships</div>
            </div>

            {/* <div className={styles.divider}></div>

            <div className={styles.statItem}>
              <div className={styles.statNumber}>
                <Counter end={98} suffix="%" />
              </div>
              <div className={styles.statLabel}>Client Satisfaction</div>
            </div> */}
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
