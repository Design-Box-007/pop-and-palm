import React from "react";
import aboutHeroimage from "../../assets/Pop and Palm/About Us/about-hero.jpg";
import styles from "./About2.module.css";
const About2 = () => {
  return (
    <div className={styles.about2}>
      <div className={styles.aboutimg}>
        <img src={aboutHeroimage} alt="img" />
      </div>
      <div className={styles.para}>
        <h1>Meet the Founder</h1>
        <p>
          Pop & Palm was founded by [Founder’s Name] with a simple yet powerful
          vision — to create celebrations that feel personal, meaningful, and
          unforgettable. What started as a passion project organizing intimate
          gatherings for family and friends quickly transformed into a
          professional venture. With an eye for detail, creativity, and a
          commitment to excellence, [Founder’s Name] laid the foundation of Pop
          & Palm, building it into a brand that blends artistry with flawless
          execution.
        </p>
      </div>
      <hr />
      <div className={styles.container}>
        <div className={styles.card}>
          <h3>The Vision That Drives Us</h3>
          <p>
            Our goal is to make Pop & Palm a leading name in the events industry
            — known for innovation, quality, and creating lasting memories. We
            strive to go beyond managing events, delivering experiences that
            truly connect with people.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Growing Beyond Boundaries</h3>
          <p>
            From private celebrations to corporate events, rentals, and
            interactive experiences like Quizzy Beez, Pop & Palm continues to
            expand across every sector of event management — becoming a one-stop
            destination for all kinds of celebrations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About2;
