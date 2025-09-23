// App.js
import React from "react";

import styles from "./Diaries.module.css"; // Global App styles if needed, or specific for this section

// Import your images (replace with actual paths or placeholder URLs)
import corporateEventsImg from "../../assets/Pop and Palm/Home/Home Page image 14.png";
import weddingsImg from "../../assets/Pop and Palm/Home/Home Page image 15.png";
import exhibitionsImg from "../../assets/Pop and Palm/Home/Home Page image 16.png";
import DiariesHeader from "./DiariesHeader";
import DiariesCard from "./DiariesCard";

function Diaries() {
  const diaries = [
    {
      id: 1,
      image: corporateEventsImg,
      title: "Top 5 Event Trends for 2025",
      description:
        "Discover what’s shaping corporate and private events this year.",
    },
    {
      id: 2,
      image: weddingsImg,
      title: "How to Plan a Seamless Conference",
      description:
        "Tips for organizing professional events that impress every attendee.",
    },
    {
      id: 3,
      image: exhibitionsImg,
      title: "Luxury Wedding Planning Essentials",
      description:
        "Must-have details that make high-end weddings truly unforgettable",
    },
  ];

  return (
    <div className={styles.servicesSection}>
      <DiariesHeader
        title={"Event Diaries"}
      />

      <div className={styles.cardGrid}>
        {diaries.map((dia) => (
          <DiariesCard key={dia.id} diaries={dia} />
        ))}
      </div>
    </div>
  );
}

export default Diaries;
