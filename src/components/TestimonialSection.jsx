import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import TestimonialDesignLeft from "../assets/TestimonialDesignLeft.png";
import TestimonialDesignRight from "../assets/TestimonialDesignRight.png";
import TestimonialSheliza from "../assets/TestimonialSheliza.jpeg";
import TestimonialStephanie from "../assets/TestimonialStephanie.jpeg";
import TestimonialNikitha from "../assets/TestimonialNikitha.jpeg";
import TestimonialVanusha from "../assets/TestimonialVanusha.jpg";
import TestimonialNilofar from "../assets/TestimonialNilofar.jpeg";

import TestimonialUserLine from "../assets/testimonialUserLine.png";
import LeftToRightReveal from './LeftToRightReveal';
import VisibleReveal from './VisibleReveal';

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
    }, {
        image: TestimonialVanusha,
        description: `“I cannot be grateful of how my Ganpati decor looked. It was the best ever decor and we all were surprised how it was all made with fresh flowers and it stayed for 7 days looking exactly the same🥰 the team was quick and so so so nice. It’s totally value for money. I strongly recommend supporting them and am sure they would be doing all types of event”`,
        username: "Vanusha Tengry",
    }, {
        image: TestimonialNilofar,
        description: `“Very talented and innovative. Always ready with new ideas and the whole team is well organised and hard working. I have booked 4 to 5 events with them and I must say everytime there was something new and exciting. I would highly recommend them for all occasions and celebrations.
Thanku Pop & Palm Events Management Team.”`,
        username: "Nilofar Merchant ",
    },
    // Add more testimonials here
];

const TestimonialSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const controls = useAnimation();

    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                controls.start({ opacity: 0 })
                    .then(() => {
                        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
                        controls.start({ opacity: 1 });
                    });
            }, 10000); // Change every 15 seconds

            return () => clearInterval(interval);
        }
    }, [controls, isPaused]);

    const testimonial = testimonials[currentIndex];

    const handleIndicatorClick = (index) => {
        setCurrentIndex(index);
        controls.start({ opacity: 0 }).then(() => controls.start({ opacity: 1 }));
    };

    return (
        <div
            className='testimonial-section my-5'

        >
            <div className='testimonial-design-left'>
                <img src={TestimonialDesignLeft} alt="TestimonialDesignLeft" />
            </div>
            <div className='testimonial-design-right'>
                <img src={TestimonialDesignRight} alt="TestimonialDesignRight" />
            </div>
            <LeftToRightReveal>
                <div className='d-flex align-items-center'>
                    <h1 className='title '>Testimonials </h1>&nbsp;&nbsp;
                    <div className='subtitle mt-5'> Hear from our Clients</div>
                </div>
            </LeftToRightReveal>
            <VisibleReveal>
                <div className='testimonial-container' onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}>
                    <motion.div
                        initial={{ opacity: 1 }}
                        animate={controls}
                        transition={{ duration: 1 }} // Fade duration
                        className='row'
                    >
                        <div className='col-md-5'>
                            <div className='testimonial-image-container'>
                                <img src={testimonial.image} alt="Testimonial" className='testimonial-image' width="100%" />
                            </div>
                        </div>
                        <div className='col-md-7 py-4'>
                            <div className='testimonial-content'>
                                <div>
                                    <h1 className='testimonial-title'>{testimonial.title}</h1>
                                    <div className='testimonial-description'>
                                        {testimonial.description}
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-2'>
                                    <img src={TestimonialUserLine} alt='TestimonialUserLine' height='8px' />
                                    <div className='testimonial-username'>
                                        {testimonial.username}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className='indicators'>
                    {testimonials.map((_, index) => (
                        <div
                            key={index}
                            className={`indicator ${currentIndex === index ? 'active' : ''}`}
                            onClick={() => handleIndicatorClick(index)}
                        />
                    ))}
                </div>
            </VisibleReveal>
        </div>
    );
}

export default TestimonialSection;
