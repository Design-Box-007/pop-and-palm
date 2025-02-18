import React from 'react'
import ServicesCrown from "../assets/servicesCrown.png";
import LeftToRightReveal from './LeftToRightReveal';
import TopToBottomReveal from './TopToBottomReveal';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const ServicesSection = () => {
  return (
    <div className='services-section my-5'>
      <div className='d-flex flex-column mt-5'>
        <img src={ServicesCrown} className='services-crown' width="300px" alt="ServicesCrown" />
        <div className='service-header'>
          <LeftToRightReveal> <div className='d-flex align-items-end'>

            <h1 className='title'>Our Services </h1>
            &nbsp;&nbsp;
            <div className='subtitle mb-1'> Expertise</div>

          </div></LeftToRightReveal>
          <HashLink smooth to="/services#top"><button className='button-primary ' style={{ width: "200px" }}>Learn more &rarr;</button></HashLink>

        </div>
      </div>

      <div className='row'>
        <div className='col-md-12 col-lg-3 my-3'>
          <TopToBottomReveal>
            <div className='d-flex align-items-center gap-3'>
              <h1 className='service-number'>01</h1>
              <div className='service-title'>Private Events</div>
            </div>

            <div className='service-subtitle '>
              Create unforgettable themed experiences for birthdays and events with personalized decor.</div>

            <div className='service-hr' />

            {/* <div className='my-5'>
            <div className='service-item-title'>
              Ceremony Decor:
            </div>
            <div className='service-item-descrition'>
              Customizing altar arrangements, aisle runners, and seating layouts to match the wedding theme.
            </div>
            <div className='service-item-hr'/>
          </div> */}

            <div className='my-5'>

              <div className='service-description-  iner'>
                <div className='service-item-title'>
                  Event Decor :
                </div>
                <div className='service-item-descrition'>
                  We create unforgettable experiences for kids' and adult birthday parties, surprise events, festivals, anniversaries, and family functions. With magical themes, sophisticated decor, and personalized designs, we enhance the spirit of each celebration and bring everyone together in joy.
                </div>
              </div>
              <div className='service-item-hr' />
            </div>
          </TopToBottomReveal>
        </div>
        <div className='col-md-12 col-lg-3 my-3'>
          <TopToBottomReveal>
            <div className='d-flex align-items-center gap-3'>
              <h1 className='service-number'>02</h1>
              <div className='service-title'>Corporate Events</div>
            </div>
            <div className='service-subtitle '>
              Specialized planning for high-end executive meetings, client dinners and small corporate events.
            </div>
            <div className='service-hr' />
            <div className='my-5'>

              <div className='service-description-container'>
                <div className='service-item-title'>
                  Seamless Event Management:
                </div>
                <div className='service-item-descrition'>
                  We provide comprehensive event management services tailored to corporate needs, ensuring every detail aligns with your goals. From planning and logistics to execution and follow-up, we create professional and engaging experiences that leave a lasting impression on your attendees.
                </div>
              </div>
              <div className='service-item-hr' />
            </div>
            {/* <div className='my-5'>
            <div className='service-item-title'>
            Cake and Dessert Table Styling:
            </div>
            <div className='service-item-descrition'>
            Styling cake and dessert tables with coordinated linens, stands, and decor.
             </div>
            <div className='service-item-hr'/>
          </div> */}
          </TopToBottomReveal>
        </div>
        <div className='col-md-12 col-lg-3 my-3'>
          <TopToBottomReveal>
            <div className='d-flex align-items-center gap-3'>
              <h1 className='service-number'>03</h1>
              <div className='service-title'>Rentals</div>
            </div>
            <div className='service-subtitle '>
              Stylish and comfortable furniture options for private and corporate events.
            </div>

            <div className='service-hr' />
            <div className='my-5'>

              <div className='service-description-container'>
                <div className='service-item-title'>
                  Event Furniture Rentals:
                </div>
                <div className='service-item-descrition'>
                  We offer a wide selection of high-quality furniture rentals for clients seeking stylish and functional pieces for their events. Whether you need seating, tables, or decorative items, we provide the perfect solutions to enhance your occasion without the hassle of purchasing.
                </div>
              </div>
              <div className='service-item-hr' />
            </div>
            {/* <div className='my-5'>
            <div className='service-item-title'>
            Stage and Presentation Design:
            </div>
            <div className='service-item-descrition'>
            Creating attractive and functional stage setups for speakers, awards, and performances.
            </div>
            <div className='service-item-hr'/>
          </div> */}
          </TopToBottomReveal>
        </div>
        <div className='col-md-12 col-lg-3 my-3'>
          <TopToBottomReveal>
            <div className='d-flex align-items-center gap-3'>
              <h1 className='service-number'>04</h1>
              <div className='service-title'>Quizzy Beez</div>
            </div>
            <div className='service-subtitle '>

              Quizzy Beez creates unforgettable, interactive quiz events for any gathering.
            </div>

            <div className='service-hr' />

            <div className='my-5'>
              <div className='service-description-container'>
                <div className='service-item-title'>
                  Engaging Quiz Events:
                </div>
                <div className='service-item-descrition'>
                  At Quizzy Beez, we organize exciting quiz events that transform any gathering into a lively and interactive experience. Our curated quizzes cover a range of topics, ensuring fun and engagement for everyone, making your event unforgettable!
                </div>
              </div>
              <div className='service-item-hr' />
            </div>

            {/* <div className='my-5'>
            <div className='service-item-title'>
              Ceremony Decor:
            </div>
            <div className='service-item-descrition'>
              Customizing altar arrangements, aisle runners, and seating layouts to match the wedding theme.
            </div>
            <div className='service-item-hr'/>
          </div> */}
          </TopToBottomReveal>
        </div>

      </div>

    </div>
  )
}

export default ServicesSection