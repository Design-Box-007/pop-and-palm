import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import AboutUSSection from "../components/AboutUSSection";
import ServicesSection from "../components/ServicesSection";
import TestimonialSection from "../components/TestimonialSection";
import ContactSection from "../components/ContactSection";
import { Helmet } from "react-helmet-async";
import GallerySection from "../components/GallerySection";
import FAQAccordion from "../components-2/FAQ/FAQ";
import faqs from "../data/FAQ/data";
// import HeroSection from "../components-2/Hero/Hero";
import HeroSection from "../components/HeroSection";
import EventHighlight from "../components-2/EventHighlight/EventHighlight";
import MainEvent from "../components-2/Event/MainEvent";
import AboutUs from "../components-2/AboutUs/AboutUs";
import CTA from "../components-2/CTA/CTA";
import Diaries from "../components-2/Diaries/Diaries";
import Private from "../components-2/PrivateEvent/Private";
import ProcessSection from "../components-2/Process/Process";
import icons from "../Icon/Icon";
import heroImage from "../assets/Pop and Palm/Home/Home Page image 2.png";
import MainService from "../components-2/Commen/Services";
import serviceData from "../components-2/Service/Services";
import servicePageData from "../data/servicesData";
import Hero from "../components-2/Commen/NewHero";
import MainHeroImage from "../assets/hero.png";
const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash; // Get the hash from the URL
    if (hash) {
      // Clean the hash and extract the section id
      const sectionId = hash.replace(/^#/, "").split("/")[0];
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  return (
    <>
      <Helmet>
        <title>Pop & Palm</title>
        <meta
          name="description"
          content="Exceptional event planning services with vibrant themed decorations. Turn your special occasion into unforgettable memories with Pop & Palm."
        />
      </Helmet>
      <section id="home">
        {/* <HeroSection /> */}
        <Hero
          heroImage={MainHeroImage}
          text1={"Turning Moments into"}
          text2={"Unforgettable Experiences."}
          description={"From Corporate Excellence to Wedding Elegance – We Make It Happen."}
        />
      </section>

      <section id="about">
        {/* <AboutUSSection /> */}
        <AboutUs />
      </section>

      <section>
        {/* <ServicesSection /> */}
        <MainService
          title="Our Services"
          description="Expertise"
          section={servicePageData}
        />
      </section>

      <section>
        {/* <GallerySection /> */}
        <MainEvent />
      </section>

      <EventHighlight />

      {/* <CTA /> */}

      <FAQAccordion faqs={faqs} />

      <Diaries />

      {/* <TestimonialSection /> */}

      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
};

export default Home;
