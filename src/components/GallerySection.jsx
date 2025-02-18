import React from 'react'
import GalleryPop from "../assets/galleryPop.png";
import GalleryBalloons from "../assets/galleryBalloons.png";
import GalleryImageOne from "../assets/galleryImageOne.png";
import GalleryImageTwo from "../assets/galleryImageTwo.png";
import GalleryImageThree from "../assets/galleryImageThree.png";
import GalleryImageFour from "../assets/galleryImageFour.png";
import GalleryImageFive from "../assets/galleryImageFive.png";
import GalleryImageSix from "../assets/galleryImageSix.png";
import GalleryDesignRight from "../assets/galleryDesignRight.png";
import LeftToRightReveal from './LeftToRightReveal';
import TopToBottomReveal from './TopToBottomReveal';

const GallerySection = () => {
    return (
        <div className='gallery-section'>
             <div className='gallery-design-right'>
        <img src={GalleryDesignRight}  alt="leaf left" />
      </div>
            <div>
                <LeftToRightReveal>
                <div className='subtitle'>We Create & Craft <img src={GalleryPop} alt="GalleryPop" /></div></LeftToRightReveal>
                <div className=' d-flex align-items-center position-relative'><h1 className='title'> The Experience </h1><div className='gallery-hr' /><img src={GalleryBalloons} style={{ position: "absolute", right: 0 }} alt="GalleryBalloons" /></div>
            </div>
            <div className='row'>
                <div className='col-md-6 my-3'>
                    <TopToBottomReveal>                    <div className='d-flex flex-column gap-3' >
                        <img src={GalleryImageOne} style={{position:"relative"}} alt="GalleryImageOne" width="100%" />
                        <img src={GalleryImageTwo} style={{position:"relative"}} alt="GalleryImageTwo" width="100%" />
                        <img src={GalleryImageThree} style={{position:"relative"}} alt="GalleryImageThree" width="100%" />
                    </div>
                    </TopToBottomReveal>

                </div>
                <div className='col-md-6 my-3'>
                <TopToBottomReveal>
                    <div className='d-flex flex-column gap-3'>
                        <img src={GalleryImageFour} style={{position:"relative"}} alt="GalleryImageFour" width="100%" />
                        <img src={GalleryImageFive} style={{position:"relative"}} alt="GalleryImageFive" width="100%" />
                        <img src={GalleryImageSix} style={{position:"relative"}} alt="GalleryImageSix" width="100%" />
                    </div>
                    </TopToBottomReveal>
                </div>

            </div>

        </div>
    )
}

export default GallerySection