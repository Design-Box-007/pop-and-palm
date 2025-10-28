import { aboutImages, corporateEventsImages, eventRentalsImages, HomeImages, privateEventsImages, quizzyBeezImages } from "../components-2/Images/Image";
import KidsBirthdayPartiesServiceImage from "../assets/ServicePageImages/KidsBirthdayPartiesServiceImage.jpg";
import CorporateEventsServiceImage from "../assets/ServicePageImages/CorporateEventsServiceImage.jpg";
import RentalServiceImage from "../assets/ServicePageImages/RentalServiceImage.jpg";
import QuizzyBeezServiceImage from "../assets/ServicePageImages/QuizzyBeez.svg";
const servicePageData = [
  {
    title: "Private Events",
    tags: ["Weddings", "Birthdays", "Anniversaries", "Parties"],
    image: KidsBirthdayPartiesServiceImage,
    HeroData: {
      tagline: "We Bring to Life",
      description:
        "From whimsical themed decorations to mouth-watering cakes, we tailor each event to your needs. Enjoy entertainment options like clowns, magicians, and interactive games that will keep everyone engaged and laughing. Whether it’s a birthday party, a family gathering, or a special occasion, we ensure every detail is perfect for a memorable day.",
      subDescription: "Your Celebration, Our Expertise",
      buttonLink: "#", // default link
    },

    aboutContent: {
      title: "Our Services at a Glance",
      image: privateEventsImages.whyPrivateEventsMatter,
      description:
        "Private events in the UAE are all about creating unforgettable moments — from intimate family gatherings to grand celebrations that reflect style, culture, and personality. At Pop & Palm Events, we transform ordinary occasions into extraordinary experiences with creative décor, thoughtful details, and seamless execution. Whether it’s a romantic proposal, a themed birthday, a baby shower, or a festive celebration at home or in a venue, our team handles every element from concept to setup. We specialize in bringing your vision to life with customized themes, stunning backdrops, and beautifully styled spaces. With a passion for design and a focus on flawless coordination, Pop & Palm ensures that every event is stress-free, memorable, and truly one of a kind.",
    },

    EventSection: {
      tagline: "Events We Specalize",
      title: "Private Events Tailored to Your Story",
      description:
        "Comprehensive solutions designed to make every event unforgettable.",
      section: [
        {
          title: "Life’s Milestones & Celebrations",
          image: privateEventsImages.privateImage1,
          flipData: [
            "Weddings & Engagement Parties",
            "Anniversary Celebrations",
            "Milestone Birthdays",
            "Proposal Setups & Romantic Dinners",
            "Graduation Parties & Achievement Celebrations",
          ],
        },
        {
          title: "Family & Kids’ Events",
          image: privateEventsImages.privateImage2,
          flipData: [
            "Themed Kids’ Birthday Parties",
            "Baby Showers & Gender Reveal Events",
            "Family Gatherings & Reunions",
            "End-of-School / Back-to-School Celebrations",
          ],
        },
        {
          title: "Home & Intimate Gatherings",
          image: privateEventsImages.homeIntimateGatherings,
          flipData: [
            "Housewarming Parties",
            "Private Dinner Parties",
            "Garden / Poolside Events",
            "Seasonal Get-Togethers",
          ],
        },
        {
          title: "Festive & Cultural Celebrations",
          image: privateEventsImages.festivalCulturalCelebrations,
          flipData: [
            "Diwali, Eid, and Christmas Parties",
            "Cultural & Traditional Gatherings",
            "Festival-Themed Décor & Entertainment",
          ],
        },
        {
          title: "Luxury & Bespoke Experiences",
          image: privateEventsImages.luxuryBespoke,
          flipData: [
            "Luxury Picnics & Styled Setups",
            "Destination Events",
            "Exclusive Private Gatherings",
            "VIP Experiences with Custom Décor",
          ],
        },
        {
          title: "Modern & Themed Events",
          image: privateEventsImages.modernThemedEvents,
          flipData: [
            "Corporate & Private Theme Parties",
            "Movie Night or Game Night Setups",
            "Trendy Experiential Events",
            "Customized Themed Décor & Styling",
          ],
        },
      ],
    },

    faq: [
      {
        question: "What types of private events do you organize?",
        answer:
          "We plan and style weddings, proposals, birthdays, baby showers, engagements, housewarmings, yacht parties, and more.",
      },
      {
        question: "How early should I book my event?",
        answer:
          "We recommend booking 3–4 weeks in advance to ensure availability and smooth planning.",
      },
      {
        question: "Can the décor and theme be customized?",
        answer:
          "Yes! All themes, colours, and styling details are fully tailored to your vision and preferences.",
      },
      {
        question: "Do you provide décor for home events too?",
        answer:
          "Absolutely. We set up events at villas, gardens, rooftops, private homes, or any venue you choose.",
      },
      {
        question: "Do you manage the setup and coordination on the event day?",
        answer:
          "Yes, our team handles everything — from setup to final touches — so you can relax and enjoy the celebration.",
      },
    ],
  },
  {
    title: "Corporate Events",
    tags: ["Conferences", "Team Building", "Office Opening", "Award Ceremony"],
    image: corporateEventsImages.corporateLandingPageImage,
    HeroData: {
      tagline: "We Bring to Life",
      description:
        "Making Every Corporate Event in UAE a Memorable Experience – Expert Event Management & Customized Décor",
      subDescription: "Your Celebration, Our Expertise",
      buttonLink: "#", // default link
    },

    aboutContent: {
      title: "Why Corporate events Matter",
      image: corporateEventsImages.whyCorporateEventsMatterImage,
      description:
        "Corporate events in the UAE are more than just gatherings - they’re powerful opportunities to strengthen relationships, celebrate success, and elevate your brand. At Pop & Palm Events, we design and manage corporate occasions with creativity, precision, and professionalism. From product launches and award ceremonies to team-building retreats and annual gala dinners, our team handles every detail to reflect your company’s vision and goals. We craft sophisticated themes, impactful stage designs, and seamless guest experiences that leave a lasting impression. With end-to-end planning and flawless execution, Pop & Palm ensures your corporate event is engaging, memorable, and perfectly aligned with your brand identity.",
    },

    EventSection: {
      tagline: "Services We Offer",
      title: "Tailored Event Solutions for Every Occasion",
      description:
        "Comprehensive solutions designed to make every event unforgettable.",
      section: [
        {
          title: "Corporate Celebrations & Milestones",
          image: corporateEventsImages.corporateLandingPageImage,
          flipData: [
            "Company Anniversaries",
            "Employee Appreciation Events",
            "Milestone Achievements & Celebrations",
          ],
        },
        {
          title: "Awards & Recognition Events",
          image: corporateEventsImages.awardsRecognitionEvents,
          flipData: [
            "Employee Awards Nights",
            "Performance Recognition Ceremonies",
            "Industry or Partner Awards Events",
          ],
        },
        {
          title: "Product Launches & Brand Promotions",
          image: corporateEventsImages.productLaunchesBrandPromotions,
          flipData: [
            "Product Launch Parties",
            "Brand Activation Events",
            "Press Conferences & Media Launches",
          ],
        },
        {
          title: "Team Building & Corporate Retreats",
          image: corporateEventsImages.teamBuildingCorporateRetreats,
          flipData: [
            "Outdoor Adventure Retreats",
            "Indoor Team-Building Workshops",
            "Strategy & Leadership Retreats",
          ],
        },
        {
          title: "Corporate Meetings & Conferences",
          image: corporateEventsImages.corporateMeetingsConferences,
          flipData: [
            "Annual General Meetings (AGMs)",
            "Corporate Conferences & Seminars",
            "Board Meetings & Executive Summits",
          ],
        },
        {
          title: "Client & VIP Events",
          image: corporateEventsImages.clientVipEvents,
          flipData: [
            "VIP Dinners & Networking Events",
            "Client Appreciation Nights",
            "Exclusive Gala & Hospitality Events",
          ],
        },
      ],
    },

    faq: [
      {
        question: "What types of corporate events do you organize?",
        answer:
          "We handle a wide range of corporate events including product launches, awards ceremonies, client dinners, team-building retreats, conferences, and company milestone celebrations.",
      },
      {
        question: "Can the event décor and theme be customized?",
        answer:
          "Yes, every event is fully customizable. We tailor themes, stage setups, and décor to reflect your brand and vision.",
      },
      {
        question: "Do you manage the setup and coordination on the event day?",
        answer:
          "Absolutely. Our team takes care of everything from setup to execution, ensuring a smooth and professional event.",
      },
      {
        question: "Can you organize events at our office or external venues?",
        answer:
          "Yes, we provide services at offices, hotels, resorts, conference halls, or any venue of your choice.",
      },
      {
        question:
          "Do you handle large-scale corporate events as well as small gatherings?",
        answer:
          "Yes, we manage events of all sizes – from intimate VIP dinners to large-scale conferences and gala events.",
      },
    ],
  },
  {
    title: "Event Rentals",
    tags: ["Chairs", "Tables", "Lighting", "Décor"],
    image: RentalServiceImage,
    HeroData: {
      tagline: "Premium Event Rentals for Every Occasion",
      description:
        "From elegant chairs and tables to complete décor setups, Pop & Palm Events provides stylish, high-quality rentals to make your event unforgettable",
      subDescription: "Your Celebration, Our Expertise",
      buttonLink: "#", // default link
    },

    aboutContent: {
      title: "Why Event Rentals Matter",
      image: eventRentalsImages.whyEventRentalsMatter,
      description:
        "At Pop & Palm Events, we offer a wide range of premium event rentals to elevate any occasion. From elegant chairs and tables to stylish décor, linens, and accessories, we provide everything you need for a seamless setup. Our rental items are carefully selected for quality, comfort, and style, ensuring your event looks flawless. Whether it’s a wedding, private celebration, or corporate gathering, we make it easy to create a stunning and functional event space. With timely delivery, professional setup, and flexible options, Pop & Palm Events ensures every detail is perfectly in place.",
    },

    EventSection: {
      tagline: "Services We Offer",
      title: "Tailored Event Solutions for Every Occasion",
      description:
        "Comprehensive solutions designed to make every event unforgettable.",
      section: [
        {
          title: "Seating Rentals",
          image: eventRentalsImages.seatingRentals,
          flipData: [
            "Banquet Chairs",
            "Chiavari Chairs",
            "Lounge Sofas & Ottomans",
            "Bar Stools & High Chairs",
            "Benches & Outdoor Seating",
          ],
        },
        {
          title: "Table Rentals",
          image: eventRentalsImages.tablesRentals,
          flipData: [
            "Round & Rectangular Dining Tables",
            "Cocktail & High Tables",
            "Coffee Tables",
            "Display Tables (for gifts, desserts, etc.)",
            "Folding or Adjustable Tables",
          ],
        },
        {
          title: "Stage & Structure Rentals",
          image: eventRentalsImages.stageStructureRentals,
          flipData: [
            "Event Stages & Platforms",
            "Backdrops & Frames",
            "Podiums & Lecterns",
            "Catwalk/Runway Stages",
            "DJ Booth Platforms",
          ],
        },
        {
          title: "Decor & Styling Rentals",
          image: eventRentalsImages.decorStylingRentals,
          flipData: [
            "Flower Walls & Greenery Panels",
            "Arches & Entrance Gates",
            "Drapery & Fabric Backdrops",
            "Centerpieces & Table Decor",
            "Themed Props & Decorative Accents",
          ],
        },
        {
          title: "Lighting & Audio-Visual Rentals",
          image: eventRentalsImages.lightingAudioVisualRentals,
          flipData: [
            "LED Uplighting & Fairy Lights",
            "Chandeliers & Hanging Lights",
            "Stage Spotlights",
            "Sound Systems & Speakers",
            "Projectors, LED Screens & Displays",
          ],
        },
        {
          title: "Outdoor & Utility Rentals",
          image: eventRentalsImages.outdoorUtilityRentals,
          flipData: [
            "Tents, Marquees & Gazebos",
            "Outdoor Heaters & Fans",
            "Flooring, Carpets & Dance Floors",
            "Fencing & Barriers",
            "Portable Stages & Booth Structures",
          ],
        },
      ],
    },
    faq: [
      {
        question: "Do you offer customized event planning packages?",
        answer:
          "Yes! We tailor our services to meet your specific needs, whether it’s a small gathering or a large-scale celebration.",
      },
      {
        question: "Can you handle international destination events?",
        answer:
          "Absolutely. Our team has experience organizing events in various locations worldwide.",
      },
      {
        question: "Do you provide end-to-end event management?",
        answer:
          "Yes, from concept creation and venue selection to logistics and on-site coordination, we handle everything.",
      },
      {
        question: "How far in advance should I book your services?",
        answer:
          "We recommend booking at least 3–6 months in advance to ensure availability and smooth planning.",
      },
    ],
  },
  {
    title: "Quizzy Beez",
    image: QuizzyBeezServiceImage,
    tags: ["Trivia", "Challenges", "Competitions", "Workshops"],
    HeroData: {
      tagline: "We Bring to Life",
      description: "Engage. Entertain. Educate — The Quizzy Beeez Way!",
      subDescription: "Your Celebration, Our Expertise",
      buttonLink: "#", // default link
    },

    aboutContent: {
      title: "Why Quizzy Beez Matter",
      image: quizzyBeezImages.whyQuizzyBeezMatter,
      description:
        "Quizzy Beeez brings a fresh wave of interactive entertainment to events across the UAE, turning ordinary gatherings into unforgettable experiences. We design engaging, themed quiz sessions that captivate audiences — whether it’s a corporate team-building event, private celebration, mall activation, or community festival. Each quiz is fully customizable to suit your theme, audience, and occasion, creating a perfect blend of fun, learning, and friendly competition. With Quizzy Beeez, every event becomes a buzzing hub of energy, conversation, and connection — leaving your guests talking long after the final question.",
    },

    EventSection: {
      tagline: "Services We Offer",
      title: "Tailored Event Solutions for Every Occasion",
      description:
        "Comprehensive solutions designed to make every event unforgettable.",
      section: [
        {
          title: "Corporate Quiz Events",
          image: HomeImages.image3,
          flipData: [
            "Team-Building Quizzes",
            "Employee Engagement Sessions",
            "Product & Brand Knowledge Quizzes",
            "Annual Meet & Conference Quizzes",
            "Training & Workshop Gamified Quizzes",
          ],
        },
        // {
        //   title: "Private & Social Gatherings",
        //   image: HomeImages.image4,
        //   flipData: [
        //     "Birthday Party Quizzes",
        //     "Family Gatherings & Reunions",
        //     "Wedding or Engagement Quizzes",
        //     "Themed House Party Quizzes",
        //     "Festive Celebration Quizzes",
        //   ],
        // },
        // {
        //   title: "Public & Community Events",
        //   image: HomeImages.image5,
        //   flipData: [
        //     "Mall & Retail Activation Quizzes",
        //     "Festival & Fair Quizzes",
        //     "Community & Cultural Event Quizzes",
        //     "School & College Fair Quizzes",
        //     "Citywide Quiz Competitions",
        //   ],
        // },
        {
          title: "Themed & Special Interest Quizzes",
          image: quizzyBeezImages.themedSpecialInterestQuizzes,
          flipData: [
            "Travel & Geography",
            "Movies, Music & Pop Culture",
            "Sports & Entertainment",
            "History & General Knowledge",
            "Science, Innovation & Tech",
          ],
        },
        // {
        //   title: "Brand & Marketing Activations",
        //   image: HomeImages.image7,
        //   flipData: [
        //     "Product Launch Quizzes",
        //     "Store Opening / Promotional Quizzes",
        //     "Customer Engagement Kiosks",
        //     "Roadshow & Outdoor Event Quizzes",
        //     "Loyalty Program & Giveaway Quizzes",
        //   ],
        // },
        {
          title: "Educational & Edutainment Quizzes",
          image: quizzyBeezImages.educationalEdutainmentQuizzes,
          flipData: [
            "School Quiz Competitions",
            "College & University Events",
            "Subject-Focused Quizzes (STEM, History, etc.)",
            "Inter-School / Inter-College Quiz Battles",
            "Educational Festival Quizzes",
          ],
        },
      ],
    },
    faq: [
      {
        question: "Do you offer customized event planning packages?",
        answer:
          "Yes! We tailor our services to meet your specific needs, whether it’s a small gathering or a large-scale celebration.",
      },
      {
        question: "Can you handle international destination events?",
        answer:
          "Absolutely. Our team has experience organizing events in various locations worldwide.",
      },
      {
        question: "Do you provide end-to-end event management?",
        answer:
          "Yes, from concept creation and venue selection to logistics and on-site coordination, we handle everything.",
      },
      {
        question: "How far in advance should I book your services?",
        answer:
          "We recommend booking at least 3–6 months in advance to ensure availability and smooth planning.",
      },
    ],
  },
];

export default servicePageData;
