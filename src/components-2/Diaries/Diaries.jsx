// App.js
import React from "react";

import styles from "./Diaries.module.css"; // Global App styles if needed, or specific for this section

// Import your images (replace with actual paths or placeholder URLs)
import corporateEventsImg from "../../assets/Pop and Palm/Home/Home Page image 3.png";
import weddingsImg from "../../assets/Pop and Palm/Home/Home Page image 4.png";
import exhibitionsImg from "../../assets/Pop and Palm/Home/Home Page image 5.png";
import luxuryExperiencesImg from "../../assets/Pop and Palm/Home/Home Page image 6.png";
import brandActivationsImg from "../../assets/Pop and Palm/Home/Home Page image 7.png";
import destinationEventsImg from "../../assets/Pop and Palm/Home/Home Page image 8.png";
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
