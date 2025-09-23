import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import VisibleReveal from '../components/VisibleReveal'
import { galleryImages as images } from '../data/galleryData';

const GalleryImages = () => {
    const { category } = useParams();
    const navigate = useNavigate(); // Hook to navigate programmatically

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when this component mounts
    }, []);


    const selectedImages = images[category] || []; // Fallback to an empty array if category not found

    return (
        <section id="top" style={{ margin: "100px 20px" }}>
            <button
                onClick={() => navigate(-1)} // Navigate back to the previous page
                className='button-primary'
            >
                &larr; Back
            </button>
            <div className='row'>
                {selectedImages.map((image, index) => (
                    <div className='col-lg-4 col-md-6 col-12 my-2' key={index}>
                        <VisibleReveal>
                            <div className='gallery-image-container shadow'>
                                <img src={image.imgSrc} alt={image.alt} className='gallery-image' width="100%" />
                            </div>
                        </VisibleReveal>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default GalleryImages;
