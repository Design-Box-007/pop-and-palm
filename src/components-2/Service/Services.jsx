// App.js
import React from "react";

import styles from "./Services.module.css"; // Global App styles if needed, or specific for this section

// Import your images (replace with actual paths or placeholder URLs)
import corporateEventsImg from "../../assets/Pop and Palm/Home/Home Page image 3.png";
import weddingsImg from "../../assets/Pop and Palm/Home/Home Page image 4.png";
import exhibitionsImg from "../../assets/Pop and Palm/Home/Home Page image 5.png";
import luxuryExperiencesImg from "../../assets/Pop and Palm/Home/Home Page image 6.png";
import brandActivationsImg from "../../assets/Pop and Palm/Home/Home Page image 7.png";
import destinationEventsImg from "../../assets/Pop and Palm/Home/Home Page image 8.png";
import ServicesHeader from "./ServicesHeader";
import ServiceCard from "./ServicesCard"
 

function MainService() {
  const services = [
    {
      id: 1,
      image: corporateEventsImg,
      title: "Corporate Events",
      tags: ["Conferences", "Seminars", "Product Launches", "Award Nights"],
    },
    {
      id: 2,
      image: weddingsImg,
      title: "Weddings & Private Parties",
      tags: ["Weddings", "Engagements", "Birthday", "Anniversaries"],
    },
    {
      id: 3,
      image: exhibitionsImg,
      title: "Exhibitions & Trade Shows",
      tags: [
        "Booth Design",
        "Exhibition Setup",
        "Trade Shows",
        "Brand Showcases",
      ],
    },
    {
      id: 4,
      image: luxuryExperiencesImg,
      title: "Luxury Experiences",
      tags: [
        "VIP Events",
        "High-end Galas",
        "Exclusive Launches",
        "Private Dinners",
      ],
    },
    {
      id: 5,
      image: brandActivationsImg,
      title: "Brand Activations",
      tags: [
        "Pop-up Events",
        "Product Demos",
        "Street Marketing",
        "Experience Zones",
      ],
    },
    {
      id: 6,
      image: destinationEventsImg,
      title: "Destination Events",
      tags: [
        "Destination Weddings",
        "Corporate Retreats",
        "Corporate Retreats",
        "Travel Planning",
      ],
    },
  ];

  return (
    <div className={styles.servicesSection}>
      <ServicesHeader
        preTitle="Services We Offer"
        title="Tailored Event Solutions for Every Occasion"
        subtitle="Comprehensive solutions designed to make every event unforgettable."
      />

      <div className={styles.cardGrid}>
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}

export default MainService;
