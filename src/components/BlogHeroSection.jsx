import React from 'react'
import LeftToRightReveal from './LeftToRightReveal';
import galleryPageLeftBottom from "../assets/galleryPageLeftBottom.png";
import galleryPageRightTop from "../assets/galleryPageRightTop.png";


const BlogHeroSection = () => {
    return (
        <section className='gallerypage' style={{ position: "relative" }}>
            <div className='left-bottom'>
                <img src={galleryPageLeftBottom} alt="LeftBottom" width="100%" />
            </div>
            <div className='right-top'>
                <img src={galleryPageRightTop} alt="RightTop" width="100%" />
            </div>
            <section id="gallery">
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <LeftToRightReveal>
                        <h1 className='gallerypage-title text-center'>
                            Welcome to Our Blogs
                        </h1>
                    </LeftToRightReveal>
                    <div className='gallerypage-description text-center w-75'>
                        Discover inspiration and expert insights in our blog to make your next event unforgettable. From design trends to planning tips, we’ve got everything you need to create a seamless experience.
                    </div>
                </div>
            </section>
        </section>
    )
}

export default BlogHeroSection