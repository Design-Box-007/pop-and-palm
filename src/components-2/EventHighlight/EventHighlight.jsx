import React, { useState, useEffect } from "react";
import styles from "./EventHighlight.module.css";
import TestimonialSheliza from "../../assets/TestimonialSheliza.jpeg";
import TestimonialStephanie from "../../assets/TestimonialStephanie.jpeg";
import TestimonialNikitha from "../../assets/TestimonialNikitha.jpeg";
import TestimonialVanusha from "../../assets/TestimonialVanusha.jpg";
import TestimonialNilofar from "../../assets/TestimonialNilofar.jpeg";
import VisibleReveal from "../../components/VisibleReveal";
import TestimonialUserLine from "../../assets/testimonialUserLine.png";

export default function EventHighlight() {
  const testimonials = [
    {
      image: TestimonialSheliza,
      description: `“I recently did my daughter’s 3rd birthday at home, I reached out to Pop & Palm and they did such a wonderful set up. It was beautiful and very clean.
      I appreciate the time and effort it took for them to set it up and the real test was the balloons which didn’t pop at all despite the humidity being quite awful that particular day.
      I appreciate the small details taken into consideration and the honesty and transparency.
      The owners could have sold many services but they were honest about what should be done etc which I respected immensely.
      I would recommend them again and have some plans for some future events.”`,
      username: " Sheliza Mohammed ",
    },
    {
      image: TestimonialStephanie,
      description: `“Their services were top notch from first contact through execution to the very end of our function. I am so happy with how everything turned out and highly recommend them to anyone who doesn't enjoy planning and DIYing things or simply just doesn't have the time to do it and would rather leave it to the professionals. It truly allowed for our family to enjoy our baby's birthday and be present.”`,
      username: "Stephanie Gnanaskandan",
    },
    {
      image: TestimonialNikitha,
      description: `“Our event couldn’t have got any better without pop and palm events organising it fabulously and seamlessly for us. Their meticulous planning along with exquisite ideation made it a perfect execution.Aishwarya’s commitment towards our tailor made requirements is appreciated.Kani and Aishwarya’s valuable contribution made an impressive decor for our special occasion. We highly recommend Pop and Palm for organising your events.”`,
      username: "Nikitha Ramachandra",
    },
    {
      image: TestimonialVanusha,
      description: `“I cannot be grateful of how my Ganpati decor looked. It was the best ever decor and we all were surprised how it was all made with fresh flowers and it stayed for 7 days looking exactly the same🥰 the team was quick and so so so nice. It’s totally value for money. I strongly recommend supporting them and am sure they would be doing all types of event”`,
      username: "Vanusha Tengry",
    },
    {
      image: TestimonialNilofar,
      description: `“Very talented and innovative. Always ready with new ideas and the whole team is well organised and hard working. I have booked 4 to 5 events with them and I must say everytime there was something new and exciting. I would highly recommend them for all occasions and celebrations.
      Thanku Pop & Palm Events Management Team.”`,
      username: "Nilofar Merchant ",
    },
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 20000); // 10 seconds

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleNext = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentSlideIndex];

  return (
    <VisibleReveal>
      <section className={styles.section}>
        {/* Top Header */}
        <div className={styles.topHeader}>
          <div>
            <span className={styles.label}>✨ Our Event Highlights</span>
            <div className={styles.testdiv}>
              <h1 className={styles.title}>Testimonials </h1>
              <div className="subtitle">
                Proven Experiences. Trusted by Many.
              </div>
            </div>
          </div>
        </div>

        <div className={styles.mainContainer}>
          {/* Content for the current slide */}
          <div className={styles.content}>
            {/* Left Image */}
            <div className={styles.imageWrapper}>
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.username}
                className={styles.image}
              />
            </div>

            {/* Right Card */}
            <div className={styles.card}>
              <p className={styles.quote}>{currentTestimonial.description}</p>

              <div className="d-flex align-items-center gap-2">
                <img
                  src={TestimonialUserLine}
                  alt="TestimonialUserLine"
                  height="8px"
                />
                <div className="testimonial-username">
                  {currentTestimonial.username}
                </div>
              </div>
            </div>
          </div>

          {/* Slider Controls and Progress Bar at the bottom */}
          <div className={styles.sliderControls}>
            <div className={styles.progressBars}>
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`${styles.progressBar} ${
                    index === currentSlideIndex ? styles.active : ""
                  }`}
                  onClick={() => setCurrentSlideIndex(index)}
                ></div>
              ))}
            </div>
            <div className={styles.navigationButtons}>
              <button className={styles.navButton} onClick={handlePrev}>
                &larr; Prev
              </button>
              <button className={styles.navButton} onClick={handleNext}>
                Next &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>
    </VisibleReveal>
  );
}
