import React, { useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useParams, useNavigate } from 'react-router-dom';
import VisibleReveal from '../components/VisibleReveal'
import { galleryImages as images } from '../data/galleryData';

const GalleryImages = () => {
    const { category } = useParams();
    const navigate = useNavigate(); // Hook to navigate programmatically
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when this component mounts
    }, []);


    const selectedImages = images[category] || []; // Fallback to an empty array if category not found

    const openLightbox = useCallback((index) => {
        setCurrentIndex(index);
        setIsLightboxOpen(true);
        document.body.style.overflow = 'hidden';
    }, []);

    const closeLightbox = useCallback(() => {
        setIsLightboxOpen(false);
        document.body.style.overflow = '';
    }, []);

    const showPrev = useCallback(() => {
        if (!selectedImages.length) return;
        setCurrentIndex((prev) => (prev - 1 + selectedImages.length) % selectedImages.length);
    }, [selectedImages.length]);

    const showNext = useCallback(() => {
        if (!selectedImages.length) return;
        setCurrentIndex((prev) => (prev + 1) % selectedImages.length);
    }, [selectedImages.length]);

    // Keyboard controls when lightbox is open
    useEffect(() => {
        if (!isLightboxOpen) return;
        const onKeyDown = (e) => {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') showPrev();
            if (e.key === 'ArrowRight') showNext();
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [isLightboxOpen, closeLightbox, showPrev, showNext]);

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
                                <img
                                    src={image.imgSrc}
                                    alt={image.alt}
                                    className='gallery-image'
                                    width="100%"
                                    onClick={() => openLightbox(index)}
                                    style={{ cursor: 'zoom-in' }}
                                />
                            </div>
                        </VisibleReveal>
                    </div>
                ))}
            </div>

            {isLightboxOpen && selectedImages[currentIndex] && createPortal(
                <div className='lightbox-overlay' role='dialog' aria-modal='true' onClick={closeLightbox}>
                    <button
                        type='button'
                        aria-label='Previous image'
                        className='lightbox-nav lightbox-prev'
                        onClick={(e) => { e.stopPropagation(); showPrev(); }}
                    >
                        &#10094;
                    </button>

                    <div className='lightbox-content' onClick={(e) => e.stopPropagation()}>
                        <img
                            key={currentIndex}
                            src={selectedImages[currentIndex].imgSrc}
                            alt={selectedImages[currentIndex].alt}
                            className='lightbox-image'
                        />
                    </div>

                    <button
                        type='button'
                        aria-label='Next image'
                        className='lightbox-nav lightbox-next'
                        onClick={(e) => { e.stopPropagation(); showNext(); }}
                    >
                        &#10095;
                    </button>

                    <button
                        type='button'
                        aria-label='Close'
                        className='lightbox-close'
                        onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
                    >
                        &times;
                    </button>
                </div>,
                document.body
            )}
        </section>
    );
}

export default GalleryImages;
