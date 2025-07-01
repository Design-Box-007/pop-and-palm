import React, { useState, useEffect, useRef } from 'react';
import galleryPageLeftBottom from "../assets/galleryPageLeftBottom.png";
import galleryPageRightTop from "../assets/galleryPageRightTop.png";
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate, useParams } from 'react-router-dom';
import VisibleReveal from '../components/VisibleReveal';
import TopToBottomReveal from '../components/TopToBottomReveal';
import LeftToRightReveal from '../components/LeftToRightReveal';
import { HashLink } from 'react-router-hash-link';
import { categories, galleryItems } from '../data/galleryData';

const Gallery = () => {

  const { category } = useParams();
  //   const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();
  const topRef = useRef(null);

  const selectedCategory = categories.includes(category) ? category : 'All';
  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  //   const handleViewImagesClick = (link) => {
  //       navigate(`${link}#top`);
  //       window.scrollTo(0, 0); // Scroll to the top of the page
  //   };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="top">
      <div className='gallerypage' style={{
        position: "relative"
      }} ref={topRef}>
        <Helmet>
          <title>Gallery | Pop & Palm</title>
          <meta name='description' content='Explore our gallery showcasing vibrant themed decorations and memorable moments from past events.' />
        </Helmet>
        <div className='left-bottom'>
          <img src={galleryPageLeftBottom} alt="LeftBottom" width="100%" />
        </div>
        <div className='right-top'>
          <img src={galleryPageRightTop} alt="RightTop" width="100%" />
        </div>
        <section id="gallery">
          <div className='d-flex flex-column justify-content-center align-items-center'>
            <LeftToRightReveal>
              <h1 className='gallerypage-title text-center'>Welcome to Our Storyline</h1></LeftToRightReveal>
            <div className='gallerypage-description text-center w-75'>
              The Gallery section is a visually rich area showcasing a curated collection of images from past events. Each image captures the essence of the event, whether it's a beautifully decorated venue, a lively birthday party, or a sophisticated corporate gathering.
            </div>
          </div>
        </section>
      </div>
      <div className='my-3 mx-4'>
        <div className='gallerypage-categories'>
          {categories.map(categoryName => (
            <Link
              key={categoryName}
              to={`/gallery/${categoryName === 'All' ? '' : categoryName}`}  // Adjust link for "All"
              className={`gallerypage-category ${selectedCategory === categoryName ? 'active' : ''}`}
            >
              {categoryName}
            </Link>
          ))}
        </div>

        <div className='row my-5'>
          {filteredItems.map((item, index) => (
            <div className='col-md-4 mb-3' key={index}>
              <VisibleReveal>
                <div className='gallerypage-card'>
                  <div className='row'>
                    <div className={`col-md-12`}>
                      <div className="">
                        <div className='d-flex align-items-center justify-content-between mb-3'>
                          <div className='gallerypage-double-quote mt-4'>"</div>
                          <HashLink smooth to={`${item.link}#top`} >
                            <button
                              className='button-gallery'
                            //   onClick={() => handleViewImagesClick(item.link)}
                            >
                              View Images &rarr;
                            </button>
                          </HashLink>
                        </div>
                        <div className='gallerypage-image-title'>{item.name}</div>
                      </div>
                      <div className='gallerypage-image-description'>
                        {item.description}
                      </div>
                    </div>
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

export default Gallery;
