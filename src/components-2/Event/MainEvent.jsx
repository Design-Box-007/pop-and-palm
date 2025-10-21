import React from "react";
import styles from "./MainEvent.module.css";
 
import image1 from "../../assets/Pop and Palm/Home/Home Page image 9.png";
import image2 from "../../assets/Pop and Palm/Home/Home Page image 10.png";
import image3 from "../../assets/Pop and Palm/Home/Home Page image 11.png";
import image4 from "../../assets/Pop and Palm/Home/Home Page image 12.png";
import AnimatedWrapper3 from "../Animation/AnimatedWrapper3";
import icons from "../../Icon/Icon";

const events = [
  {
    title: "Corporate Innovation Summit",
    img: image1,
    tags: ["Corporate Event", "500+ Attendees"],
    wide: true,
  },
  {
    title: "Luxury Beach Wedding",
    img: image2,
    tags: ["Destination Wedding", "Ras Al Khaimah"],
    wide: false,
  },
  {
    title: "Global Tech Expo",
    img: image3,
    tags: ["Exhibition", "Dubai World Trade Centre"],
    wide: false,
  },
  {
    title: "Fashion Brand Launch",
    img: image4,
    tags: ["Brand Activation", "Dubai Mall"],
    wide: true,
  },
];

const EventCard = ({ title, img, tags }) => (
  <div className={styles.card}>
    <img src={img} alt={title} className={styles.cardImage} />
    <div className={styles.cardOverlay}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <div className={styles.tags}>
        <div className={styles.subTags}>
          {tags.map((tag, i) => (
            <span key={i} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <span>
          <img src={icons.icon4} alt="icon" />
        </span>
      </div>
    </div>
  </div>
);

export default function EventsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>Events That Made an Impact</h2>
        <p className="subtitle">
          A glimpse of the unforgettable experiences we’ve created for brands
          and individuals.
        </p>
      </div>

      <div className={styles.grid}>
        <div className={styles.div1}>
          <AnimatedWrapper3 direction="left">
            <EventCard {...events[0]} />
          </AnimatedWrapper3>
        </div>
        <div className={styles.div2}>
          <AnimatedWrapper3 direction="right">
            <EventCard {...events[1]} />
          </AnimatedWrapper3>
        </div>
        <div className={styles.div3}>
          <AnimatedWrapper3 direction="left">
            <EventCard {...events[2]} />
          </AnimatedWrapper3>
        </div>
        <div className={styles.div4}>
          <AnimatedWrapper3 direction="right">
            <EventCard {...events[3]} />
          </AnimatedWrapper3>
        </div>
      </div>
    </section>
  );
}
