import React from "react";
import HeroSection from "../Hero/Hero";
import aboutHeroimage from "../../assets/Pop and Palm/About Us/about-hero.jpg";
import About2 from "./About2";
import FAQAccordion from "../FAQ/FAQ";

const MainAbout = () => {
  const aboutHero = {
    title: "Built on Passion",
    image: aboutHeroimage,
    HeroData: {
      tagline: "Driven by Vision",
      description:
        "What started as a dream to create meaningful gatherings has grown into a brand shaping private and corporate celebrations across the region.",
    },
  };
  return (
    <div id="top">
      <HeroSection
        title={aboutHero.title}
        image={aboutHero.image}
        section={aboutHero.HeroData}
      />
      <About2 />
      <FAQAccordion/>
    </div>
  );
};

export default MainAbout;
