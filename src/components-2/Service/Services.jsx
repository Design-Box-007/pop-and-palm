import React from "react";
import KidsBirthdayPartiesServiceImage from "../../assets/ServicePageImages/KidsBirthdayPartiesServiceImage.jpg";
import CorporateEventsServiceImage from "../../assets/ServicePageImages/CorporateEventsServiceImage.jpg";
import RentalServiceImage from "../../assets/ServicePageImages/RentalServiceImage.jpg";
import QuizzyBeezServiceImage from "../../assets/ServicePageImages/QuizzyBeez.svg";

const servicesData = {
  tagline: "Services We Offer",
  title: "Tailored Event Solutions for Every Occasion",
  description:
    "Comprehensive solutions designed to make every event unforgettable.",
  categories: [
    {
      title: "Private Events",
      description:
        "From whimsical themed decorations to mouth-watering cakes, we tailor each event to your needs. Enjoy entertainment options like clowns, magicians, and interactive games that will keep everyone engaged and laughing. Whether it’s a birthday party, a family gathering, or a special occasion, we ensure every detail is perfect for a memorable day.",
      image: KidsBirthdayPartiesServiceImage,
      link: "/services/Private Events", // Replace with actual image reference
      tags: ["Conferences", "Seminars", "Product Launches", "Award Nights"],
    },
    {
      title: "Corporate Events",
      description:
        "Our corporate events are meticulously crafted to foster connections, encourage collaboration, and celebrate company achievements. We provide customized solutions that include elegant decor, gourmet catering, and engaging activities tailored to enhance your corporate culture. Whether you’re hosting a networking event, a team-building retreat, or a milestone celebration, we focus on creating a professional yet enjoyable atmosphere that leaves a lasting impression on your attendees.",
      image: CorporateEventsServiceImage,
      link: "/services/Corporate Events", // Replace with actual image reference
      tags: ["Conferences", "Seminars", "Product Launches", "Award Nights"],
      // Replace with actual image reference
    },
    {
      title: "Rentals",
      description:
        "We provide a wide range of stylish, high-quality furniture rentals to elevate your events. From comfortable seating and elegant tables to unique decorative items, our selection ensures that you have everything you need to create a memorable atmosphere. Enjoy the convenience of renting without the hassle of purchasing, allowing you to focus on what matters most—your guests and your occasion.",
      image: RentalServiceImage,
      link: "/services/Rentals", // Replace with actual image reference
      tags: ["Conferences", "Seminars", "Product Launches", "Award Nights"],
      // Replace with actual image reference
    },
    {
      title: "Quizzy Beez",
      description:
        "Dive into an exciting world of trivia with our Quizzy Beez events! These engaging trivia nights are designed to challenge participants' knowledge across a wide range of topics, ensuring fun for everyone involved. We create a lively atmosphere with themed decorations that transport you to different worlds, and offer fun prizes to heighten the competition. Ideal for friends, families, or colleagues, our interactive activities foster camaraderie and spark friendly rivalry, making every event a unique experience.",
      image: QuizzyBeezServiceImage,
      link: "/services/Quizzy Beez", // Replace with actual image reference
      tags: ["Conferences", "Seminars", "Product Launches", "Award Nights"],
      // Replace with actual image reference
    },
  ],
};

export default servicesData;
