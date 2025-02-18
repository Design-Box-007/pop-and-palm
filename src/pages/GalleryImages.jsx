import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import BirthdayParties1 from "../assets/Website photos/Private events/Birthday Parties/Birthday Parties (1).jpg";
import BirthdayParties2 from "../assets/Website photos/Private events/Birthday Parties/Birthday Parties (2).jpg";
import BirthdayParties3 from "../assets/Website photos/Private events/Birthday Parties/Birthday Parties (3).jpg";
import BirthdayParties4 from "../assets/Website photos/Private events/Birthday Parties/Birthday Parties (4).jpg";
import BirthdayParties5 from "../assets/Website photos/Private events/Birthday Parties/Birthday Parties (5).jpg";
import BirthdayParties6 from "../assets/Website photos/Private events/Birthday Parties/Birthday Parties (6).jpg";
import BirthdayParties7 from "../assets/Website photos/Private events/Birthday Parties/Birthday Parties (7).jpg";
import BirthdayParties8 from "../assets/Website photos/Private events/Birthday Parties/Birthday Parties (8).jpg";
import BirthdayParties9 from "../assets/Website photos/Private events/Birthday Parties/Birthday Parties (9).jpg";
import BirthdayParties10 from "../assets/Website photos/Private events/Birthday Parties/Birthday Parties (10).jpg";
import BirthdayParties11 from "../assets/Website photos/Private events/Birthday Parties/Birthday Parties (11).jpg";
import BirthdayParties12 from "../assets/Website photos/Private events/Birthday Parties/Birthday Parties (12).jpg";
import BirthdayParties13 from "../assets/Website photos/Private events/Birthday Parties/Birthday Parties (13).jpg";
import BirthdayParties14 from "../assets/Website photos/Private events/Birthday Parties/Birthday Parties (14).jpg";


// import Festivaldecor1 from "../assets/Website photos/Private events/Festival decor/Festival decor (1).jpg";
import Festivaldecor1 from "../assets/TestimonialVanusha.jpg";

import Festivaldecor2 from "../assets/Website photos/Private events/Festival decor/Festival decor (2).jpg";
import Festivaldecor3 from "../assets/Website photos/Private events/Festival decor/Festival decor (3).jpg";
import Festivaldecor4 from "../assets/Website photos/Private events/Festival decor/Festival decor (4).jpg";
import Festivaldecor5 from "../assets/Website photos/Private events/Festival decor/Festival decor (5).jpg";
import Festivaldecor6 from "../assets/Website photos/Private events/Festival decor/Festival decor (6).jpg";
import Festivaldecor7 from "../assets/Website photos/Private events/Festival decor/Festival decor (7).jpg";
import Festivaldecor8 from "../assets/Website photos/Private events/Festival decor/Festival decor (8).jpg";
import Festivaldecor9 from "../assets/Website photos/Private events/Festival decor/Festival decor (9).jpg";
import Festivaldecor10 from "../assets/Website photos/Private events/Festival decor/Festival decor (10).jpg";
import Festivaldecor11 from "../assets/Website photos/Private events/Festival decor/Festival decor (11).jpg";
import Festivaldecor12 from "../assets/Website photos/Private events/Festival decor/Festival decor (12).jpg";
import Festivaldecor13 from "../assets/Website photos/Private events/Festival decor/Festival decor (13).jpg";
import Festivaldecor14 from "../assets/Website photos/Private events/Festival decor/Festival decor (14).jpg";
import Festivaldecor15 from "../assets/Website photos/Private events/Festival decor/Festival decor (15).jpg";
import Festivaldecor16 from "../assets/Website photos/Private events/Festival decor/Festival decor (16).jpg";
import Festivaldecor17 from "../assets/Website photos/Private events/Festival decor/Festival decor (17).jpg";
import Festivaldecor18 from "../assets/Website photos/Private events/Festival decor/Festival decor (18).jpg";
import Festivaldecor19 from "../assets/Website photos/Private events/Festival decor/Festival decor (19).jpg";
import Festivaldecor20 from "../assets/Website photos/Private events/Festival decor/Festival decor (20).jpg";
import Festivaldecor21 from "../assets/Website photos/Private events/Festival decor/Festival decor (21).jpg";
import Festivaldecor22 from "../assets/Website photos/Private events/Festival decor/Festival decor (22).jpg";
import Festivaldecor23 from "../assets/Website photos/Private events/Festival decor/Festival decor (23).jpg";
import Festivaldecor24 from "../assets/Website photos/Private events/Festival decor/Festival decor (24).jpg";
import Festivaldecor25 from "../assets/Website photos/Private events/Festival decor/Festival decor (25).jpg";
import Festivaldecor26 from "../assets/Website photos/Private events/Festival decor/Festival decor (26).jpg";
import Festivaldecor27 from "../assets/Website photos/Private events/Festival decor/Festival decor (27).jpg";
import Festivaldecor28 from "../assets/Website photos/Private events/Festival decor/Festival decor (28).jpg";
import Festivaldecor29 from "../assets/Website photos/Private events/Festival decor/Festival decor (29).jpg";
import Festivaldecor30 from "../assets/Website photos/Private events/Festival decor/Festival decor (30).jpg";

import Newbeginnings1 from "../assets/Website photos/Private events/New beginnings/New beginnings (1).jpg";
import Newbeginnings2 from "../assets/Website photos/Private events/New beginnings/New beginnings (2).jpg";
import Newbeginnings3 from "../assets/Website photos/Private events/New beginnings/New beginnings (3).jpg";
import Newbeginnings4 from "../assets/Website photos/Private events/New beginnings/New beginnings (4).jpg";
import Newbeginnings5 from "../assets/Website photos/Private events/New beginnings/New beginnings (5).jpg";
import Newbeginnings6 from "../assets/Website photos/Private events/New beginnings/New beginnings (6).jpg";
import Newbeginnings7 from "../assets/Website photos/Private events/New beginnings/New beginnings (7).jpg";
import Newbeginnings8 from "../assets/Website photos/Private events/New beginnings/New beginnings (8).jpg";
import Newbeginnings9 from "../assets/Website photos/Private events/New beginnings/New beginnings (9).jpg";
import Newbeginnings10 from "../assets/Website photos/Private events/New beginnings/New beginnings (10).jpg";
import Newbeginnings11 from "../assets/Website photos/Private events/New beginnings/New beginnings (11).jpg";
import Newbeginnings12 from "../assets/Website photos/Private events/New beginnings/New beginnings.jpeg";


import WeddingsandReception1 from "../assets/Website photos/Private events/Weddings and Reception/Weddings and Reception (1).jpg";
import WeddingsandReception2 from "../assets/Website photos/Private events/Weddings and Reception/Weddings and Reception (2).jpg";
import WeddingsandReception3 from "../assets/Website photos/Private events/Weddings and Reception/Weddings and Reception (3).jpg";
import WeddingsandReception4 from "../assets/Website photos/Private events/Weddings and Reception/Weddings and Reception (4).jpg";
import WeddingsandReception5 from "../assets/Website photos/Private events/Weddings and Reception/Weddings and Reception (5).jpg";

import CorporateRetreats1 from "../assets/Website photos/Corporate Events/CorporateRetreats/CorporateRetreats (1).jpg";
import CorporateRetreats2 from "../assets/Website photos/Corporate Events/CorporateRetreats/CorporateRetreats (2).jpg";
import CorporateRetreats3 from "../assets/Website photos/Corporate Events/CorporateRetreats/CorporateRetreats (3).jpg";
import CorporateRetreats4 from "../assets/Website photos/Corporate Events/CorporateRetreats/CorporateRetreats (4).jpg";
import CorporateRetreats5 from "../assets/Website photos/Corporate Events/CorporateRetreats/CorporateRetreats (5).jpg";
import CorporateRetreats6 from "../assets/Website photos/Corporate Events/CorporateRetreats/CorporateRetreats (6).jpg";
import CorporateRetreats7 from "../assets/Website photos/Corporate Events/CorporateRetreats/CorporateRetreats (7).jpg";
import CorporateRetreats8 from "../assets/Website photos/Corporate Events/CorporateRetreats/CorporateRetreats (8).jpg";
import CorporateRetreats9 from "../assets/Website photos/Corporate Events/CorporateRetreats/CorporateRetreats (9).jpg";

import TeamBuilding1 from "../assets/Website photos/Corporate Events/TeamBuilding/TeamBuilding (1).jpg";
import TeamBuilding2 from "../assets/Website photos/Corporate Events/TeamBuilding/TeamBuilding (2).jpg";
import TeamBuilding3 from "../assets/Website photos/Corporate Events/TeamBuilding/TeamBuilding (3).jpg";
import TeamBuilding4 from "../assets/Website photos/Corporate Events/TeamBuilding/TeamBuilding (4).jpg";
import TeamBuilding5 from "../assets/Website photos/Corporate Events/TeamBuilding/TeamBuilding (5).jpg";
import TeamBuilding6 from "../assets/Website photos/Corporate Events/TeamBuilding/TeamBuilding (6).jpg";
import TeamBuilding7 from "../assets/Website photos/Corporate Events/TeamBuilding/TeamBuilding (7).jpg";
import TeamBuilding8 from "../assets/Website photos/Corporate Events/TeamBuilding/TeamBuilding (8).jpg";
import TeamBuilding9 from "../assets/Website photos/Corporate Events/TeamBuilding/TeamBuilding (9).jpg";

import QuizzyBeez1 from "../assets/Website photos/QuizzyBeez/QuizzyBeez (1).jpg";
import QuizzyBeez2 from "../assets/Website photos/QuizzyBeez/QuizzyBeez (2).jpg";
import QuizzyBeez3 from "../assets/Website photos/QuizzyBeez/QuizzyBeez (3).jpg";
import QuizzyBeez4 from "../assets/Website photos/QuizzyBeez/QuizzyBeez (4).jpg";
import QuizzyBeez5 from "../assets/Website photos/QuizzyBeez/QuizzyBeez (5).jpg";
import QuizzyBeez6 from "../assets/Website photos/QuizzyBeez/QuizzyBeez (6).jpg";


import Rentals1 from "../assets/Website photos/Rentals/Rentals (1).jpg";
import Rentals2 from "../assets/Website photos/Rentals/Rentals (2).jpg";
import Rentals3 from "../assets/Website photos/Rentals/Rentals (3).jpg";
import Rentals4 from "../assets/Website photos/Rentals/Rentals (4).jpg";
import Rentals5 from "../assets/Website photos/Rentals/Rentals (5).jpg";
import Rentals6 from "../assets/Website photos/Rentals/Rentals (6).jpg";
import Rentals7 from "../assets/Website photos/Rentals/Rentals (7).jpg";
import Rentals8 from "../assets/Website photos/Rentals/Rentals (8).jpg";
import Rentals9 from "../assets/Website photos/Rentals/Rentals (9).jpg";
import Rentals10 from "../assets/Website photos/Rentals/Rentals (10).jpg";
import Rentals11 from "../assets/Website photos/Rentals/Rentals (11).jpg";
import Rentals12 from "../assets/Website photos/Rentals/Rentals (12).jpg";
import Rentals13 from "../assets/Website photos/Rentals/Rentals (13).jpg";
import Rentals14 from "../assets/Website photos/Rentals/Rentals (14).jpg";
import Rentals15 from "../assets/Website photos/Rentals/Rentals (15).jpg";
import Rentals16 from "../assets/Website photos/Rentals/Rentals (16).jpg";















import VisibleReveal from '../components/VisibleReveal'

const GalleryImages = () => {
    const { category } = useParams();
    const navigate = useNavigate(); // Hook to navigate programmatically

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when this component mounts
    }, []);
    const images = {
        "birthdayparties": [
            BirthdayParties1,
            // BirthdayParties2,
            BirthdayParties3,
            BirthdayParties4,
            BirthdayParties5,
            // BirthdayParties6,
            BirthdayParties7,
            BirthdayParties8,
            // BirthdayParties9,
            BirthdayParties10,
            BirthdayParties11,
            // BirthdayParties12,
            BirthdayParties13,
            BirthdayParties14,
        ],
        "newbeginnings": [
            Newbeginnings1,
            Newbeginnings2,
            Newbeginnings3,
            Newbeginnings4,
            Newbeginnings5,
            Newbeginnings6,
            Newbeginnings7,
            Newbeginnings8,
            Newbeginnings9,
            Newbeginnings10,
            Newbeginnings11,
            Newbeginnings12,
        ],
        "weddingsandreception": [
            WeddingsandReception1,
            WeddingsandReception2,
            WeddingsandReception3,
            WeddingsandReception4,
            WeddingsandReception5,

        ],"festivaldecors": [
            Festivaldecor1,
            Festivaldecor2,
            Festivaldecor3,
            Festivaldecor4,
            Festivaldecor5,
            Festivaldecor6,
            Festivaldecor7,
            // Festivaldecor8,
            Festivaldecor9,
            Festivaldecor10,
            Festivaldecor11,
            Festivaldecor12,
            Festivaldecor13,
            Festivaldecor14,
            Festivaldecor15,
            Festivaldecor16,
            Festivaldecor17,
            Festivaldecor18,
            Festivaldecor19,
            Festivaldecor20,
            // Festivaldecor21,
            Festivaldecor22,
            Festivaldecor23,
            Festivaldecor24,
            Festivaldecor25,
            Festivaldecor26,
            Festivaldecor27,
            Festivaldecor28,
            // Festivaldecor29,
            // Festivaldecor30,

        ],
        // "productlaunchdecor": [
        //     GalleryPageImageOne,
        //     GalleryPageImageTwo,
        //     GalleryPageImageThree,
        //     GalleryPageImageSix,
        //     GalleryPageImageSeven,
        //     GalleryPageImageEight,
        //     GalleryPageImageFour,
        //     GalleryPageImageFive,
        // ],
        "corporateretreats": [
            CorporateRetreats1,
            CorporateRetreats2,
            CorporateRetreats3,
            CorporateRetreats4,
            // CorporateRetreats5,
            CorporateRetreats6,
            CorporateRetreats7,
            CorporateRetreats8,
            // CorporateRetreats9,


        ],"teambuildingevents": [
            TeamBuilding1,
            TeamBuilding2,
            TeamBuilding3,
            TeamBuilding4,
            TeamBuilding5,
            TeamBuilding6,
            TeamBuilding7,
            TeamBuilding8,
            TeamBuilding9


        ],
        // "awardceremonies": [
        //     GalleryPageImageOne,
        //     GalleryPageImageTwo,
        //     GalleryPageImageThree,
        //     GalleryPageImageSix,
        //     GalleryPageImageSeven,
        //     GalleryPageImageEight,
        //     GalleryPageImageFour,
        //     GalleryPageImageFive,
        // ],
        "cozyspots": [
            QuizzyBeez1,
            QuizzyBeez2,
            QuizzyBeez3,
            QuizzyBeez4,
            QuizzyBeez5,
            QuizzyBeez6,

        ],"rentals": [
            Rentals1,
            Rentals2,
            Rentals3,
            Rentals4,
            Rentals5,
            Rentals6,
            Rentals7,
            Rentals8,
            Rentals9,
            Rentals10,
            Rentals11,
            Rentals12,
            Rentals13,
            Rentals14,
            Rentals15,
            Rentals16,
        ],
    };

    const selectedImages = images[category] || []; // Fallback to an empty array if category not found

    return (
        <section  id="top" style={{ margin: "10px 20px" }}>
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
                            <img src={image} alt={`gallery${index + 1}`} className='gallery-image' width="100%" />
                        </div>
                    </VisibleReveal>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default GalleryImages;
