// App.js
import React from "react";

import styles from "./Diaries.module.css"; // Global App styles if needed, or specific for this section

// Import your images (replace with actual paths or placeholder URLs)
import corporateEventsImg from "../../assets/Pop and Palm/Home/Home Page image 14.png";
import weddingsImg from "../../assets/Pop and Palm/Home/Home Page image 15.png";
import exhibitionsImg from "../../assets/Pop and Palm/Home/Home Page image 16.png";
import DiariesHeader from "./DiariesHeader";
import DiariesCard from "./DiariesCard";
import { blogData } from "../../data/blogsData";
import { BlogCard } from "./BlogCard1";
import TopToBottomReveal from "../../components/TopToBottomReveal";
import AnimatedWrapper from "../Animation/AnimatedWrapper1";

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
    <AnimatedWrapper type="fadeUp" delay={0.2}>
      <div className={styles.servicesSection}>
        <DiariesHeader title={"Event Diaries"} />

        <div className={styles.cardGrid}>
          {/* {diaries.map((dia) => (
          <DiariesCard key={dia.id} diaries={dia} />
        ))} */}

          {[...blogData]
            .reverse()
            .slice(0, 3)
            .map((blog, index) => (
              <BlogCard
                key={index}
                imgSrc={blog.imgSrc}
                title={blog.title}
                description={blog.description}
              />
            ))}
        </div>
      </div>
    </AnimatedWrapper>
  );
}

export default Diaries;
