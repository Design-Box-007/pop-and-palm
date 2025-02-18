import React from 'react';
// import HeroSection from '../components/HeroSection';
import KidsBirthdayPartiesServiceImage from "../assets/ServicePageImages/KidsBirthdayPartiesServiceImage.jpg";
import CorporateEventsServiceImage from "../assets/ServicePageImages/CorporateEventsServiceImage.jpg";
import RentalServiceImage from "../assets/ServicePageImages/RentalServiceImage.jpg";
import QuizzyBeezServiceImage from "../assets/ServicePageImages/QuizzyBeez.svg";
import galleryPageLeftBottom from "../assets/galleryPageLeftBottom.png";
import galleryPageRightTop from "../assets/galleryPageRightTop.png";
import { Link } from 'react-router-dom';
import VisibleReveal from '../components/VisibleReveal';
import LeftToRightReveal from '../components/LeftToRightReveal';
import { HashLink } from 'react-router-hash-link';
const services = [
  {
    title: "Private Events",
    description: "From whimsical themed decorations to mouth-watering cakes, we tailor each event to your needs. Enjoy entertainment options like clowns, magicians, and interactive games that will keep everyone engaged and laughing. Whether it’s a birthday party, a family gathering, or a special occasion, we ensure every detail is perfect for a memorable day.",
    image: KidsBirthdayPartiesServiceImage, 
    link: "/gallery/Private Events"    // Replace with actual image reference
  },
  {
    title: "Corporate Events",
    description: "Our corporate events are meticulously crafted to foster connections, encourage collaboration, and celebrate company achievements. We provide customized solutions that include elegant decor, gourmet catering, and engaging activities tailored to enhance your corporate culture. Whether you’re hosting a networking event, a team-building retreat, or a milestone celebration, we focus on creating a professional yet enjoyable atmosphere that leaves a lasting impression on your attendees.",
    image: CorporateEventsServiceImage, 
    link: "/gallery/Corporate Events"    // Replace with actual image reference
    // Replace with actual image reference
  },
  {
    title: "Rentals",
    description: "We provide a wide range of stylish, high-quality furniture rentals to elevate your events. From comfortable seating and elegant tables to unique decorative items, our selection ensures that you have everything you need to create a memorable atmosphere. Enjoy the convenience of renting without the hassle of purchasing, allowing you to focus on what matters most—your guests and your occasion.",
    image: RentalServiceImage,
    link: "/gallery/Rentals"    // Replace with actual image reference
     // Replace with actual image reference
  },
  {
    title: "Quizzy Beez",
    description: "Dive into an exciting world of trivia with our Quizzy Beez events! These engaging trivia nights are designed to challenge participants' knowledge across a wide range of topics, ensuring fun for everyone involved. We create a lively atmosphere with themed decorations that transport you to different worlds, and offer fun prizes to heighten the competition. Ideal for friends, families, or colleagues, our interactive activities foster camaraderie and spark friendly rivalry, making every event a unique experience.",
    image: QuizzyBeezServiceImage,
    link: "/gallery/Quizzy Beez"    // Replace with actual image reference
     // Replace with actual image reference
  }
];


const Services = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
    console.log("Scrolled to top"); // Log a message to confirm the function is called
  };


  return (
    <section id="top" >
      <section className='gallerypage' id="gallery">
        <div className='left-bottom'>
          <img src={galleryPageLeftBottom} alt="LeftBottom" width="100%" />
        </div>
        <div className='right-top'>
          <img src={galleryPageRightTop} alt="RightTop" width="100%" />
        </div>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <LeftToRightReveal>
            <h1 className='gallerypage-title text-center'>Services</h1></LeftToRightReveal>
          <div className='gallerypage-description text-center w-75'>
            At Pop & Palm, we offer a comprehensive range of services to bring your vision to life. Whether you’re planning an intimate gathering or a grand celebration, our dedicated team is here to ensure every detail is perfect.
          </div>
        </div>
      </section>

      <div className='servicespage-section'>
        <div className='row my-3  h-100'>
          {services.map((service, index) => (
            <div className='col-md-12 col-lg-12 my-3' key={index}>
              <VisibleReveal>
                <div className='servicepage-card'>
                  <div className='row'>
                    {index % 2 === 0 ? (
                      <>
                        <div className='col-md-6'>
                          <div className='servicepage-card-image-container'>
                            <img src={service.image} width='100%' alt={service.title} className='servicepage-card-image' />
                          </div>
                        </div>
                        <div className='col-md-6 my-3 d-flex flex-column justify-content-evenly'>
                          <h2 className='servicepage-card-title'>{service.title}</h2>
                          <p className='servicepage-card-description'>{service.description}</p>
                          <div className='d-sm-flex'>
                          <HashLink smooth to={`${service.link}#top`} onClick={scrollToTop}>
                              <button className='button-primary'>View Gallery &rarr;</button>
                            </HashLink>
                            <a href='https://us.bigin.online/org868107012/forms/enquiry-form'  target='_blank' rel="noopener noreferrer" onClick={scrollToTop}>
                              <button className='button-secondary'>Book Event &rarr;</button>
                            </a>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className='col-md-6 my-3 d-flex flex-column justify-content-evenly'>
                          <h2 className='servicepage-card-title'>{service.title}</h2>
                          <p className='servicepage-card-description'>{service.description}</p>
                          <div className='d-sm-flex '>
                            <HashLink smooth   to={`${service.link}#top`}  onClick={scrollToTop}>
                              <button className='button-primary'>View Gallery &rarr;</button>
                            </HashLink>
                            <a href='https://us.bigin.online/org868107012/forms/enquiry-form'  target='_blank' rel="noopener noreferrer" onClick={scrollToTop}>
                              <button className='button-secondary'>Book Event &rarr;</button>
                            </a>
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='servicepage-card-image-container'>
                            <img src={service.image} width='100%' alt={service.title} className='servicepage-card-image' />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </VisibleReveal>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;
