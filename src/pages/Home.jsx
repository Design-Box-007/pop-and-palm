import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import AboutUSSection from '../components/AboutUSSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialSection from '../components/TestimonialSection';
import ContactSection from '../components/ContactSection';
import { Helmet } from 'react-helmet-async';
import GallerySection from '../components/GallerySection';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash; // Get the hash from the URL
    if (hash) {
      // Clean the hash and extract the section id
      const sectionId = hash.replace(/^#/, '').split('/')[0];
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  return (
    <>
      <Helmet>
        <title>Pop & Palm</title>
        <meta name='description' content='Exceptional event planning services with vibrant themed decorations. Turn your special occasion into unforgettable memories with Pop & Palm.' />
      </Helmet>
      <section id="home">
        <HeroSection />
      </section>

      <section id="about">
        <AboutUSSection />
      </section>

      <section>
        <ServicesSection />
      </section>

      <section>
        <GallerySection />
      </section>

      <TestimonialSection />

      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
}

export default Home;
