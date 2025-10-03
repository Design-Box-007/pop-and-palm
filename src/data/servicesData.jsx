import { aboutImages, HomeImages } from "../components-2/Images/Image";
import KidsBirthdayPartiesServiceImage from "../assets/ServicePageImages/KidsBirthdayPartiesServiceImage.jpg";
import CorporateEventsServiceImage from "../assets/ServicePageImages/CorporateEventsServiceImage.jpg";
import RentalServiceImage from "../assets/ServicePageImages/RentalServiceImage.jpg";
import QuizzyBeezServiceImage from "../assets/ServicePageImages/QuizzyBeez.svg";
const servicePageData = [
  {
    title: "Private Events",
    tags: ["Conferences", "Seminars", "Product Launches", "Award Nights"],
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
      image: aboutImages.about1,
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
          imagePlaceholder: HomeImages.image3,
          backSideContent: [
            "Weddings & Engagement Parties",
            "Anniversary Celebrations",
            "Milestone Birthdays",
            "Proposal Setups & Romantic Dinners",
            "Graduation Parties & Achievement Celebrations",
          ],
        },
        {
          title: "Family & Kids’ Events",
          imagePlaceholder: HomeImages.image4,
          backSideContent: [
            "Themed Kids’ Birthday Parties",
            "Baby Showers & Gender Reveal Events",
            "Family Gatherings & Reunions",
            "End-of-School / Back-to-School Celebrations",
          ],
        },
        {
          title: "Home & Intimate Gatherings",
          imagePlaceholder: HomeImages.image5,
          backSideContent: [
            "Housewarming Parties",
            "Private Dinner Parties",
            "Garden / Poolside Events",
            "Seasonal Get-Togethers",
          ],
        },
        {
          title: "Festive & Cultural Celebrations",
          imagePlaceholder: HomeImages.image6,
          backSideContent: [
            "Diwali, Eid, and Christmas Parties",
            "Cultural & Traditional Gatherings",
            "Festival-Themed Décor & Entertainment",
          ],
        },
        {
          title: "Luxury & Bespoke Experiences",
          imagePlaceholder: HomeImages.image7,
          backSideContent: [
            "Luxury Picnics & Styled Setups",
            "Destination Events",
            "Exclusive Private Gatherings",
            "VIP Experiences with Custom Décor",
          ],
        },
        {
          title: "Modern & Themed Events",
          imagePlaceholder: HomeImages.image8,
          backSideContent: [
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
    tags: ["Conferences", "Seminars", "Product Launches", "Award Nights"],
    image: CorporateEventsServiceImage,
    HeroData: {
      tagline: "We Bring to Life",
      tags: ["Conferences", "Seminars", "Product Launches", "Award Nights"],
      description:
        "Making Every Corporate Event in UAE a Memorable Experience – Expert Event Management & Customized Décor",
      subDescription: "Your Celebration, Our Expertise",
      buttonLink: "#", // default link
    },

    aboutContent: {
      title: "Why Private Events Matter",
      image: aboutImages.about1,
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
          imagePlaceholder: HomeImages.image3,
          backSideContent: [
            "Company Anniversaries",
            "Employee Appreciation Events",
            "Milestone Achievements & Celebrations",
          ],
        },
        {
          title: "Awards & Recognition Events",
          imagePlaceholder: HomeImages.image4,
          backSideContent: [
            "Employee Awards Nights",
            "Performance Recognition Ceremonies",
            "Industry or Partner Awards Events",
          ],
        },
        {
          title: "Product Launches & Brand Promotions",
          imagePlaceholder: HomeImages.image5,
          backSideContent: [
            "Product Launch Parties",
            "Brand Activation Events",
            "Press Conferences & Media Launches",
          ],
        },
        {
          title: "Team Building & Corporate Retreats",
          imagePlaceholder: HomeImages.image6,
          backSideContent: [
            "Outdoor Adventure Retreats",
            "Indoor Team-Building Workshops",
            "Strategy & Leadership Retreats",
          ],
        },
        {
          title: "Corporate Meetings & Conferences",
          imagePlaceholder: HomeImages.image7,
          backSideContent: [
            "Annual General Meetings (AGMs)",
            "Corporate Conferences & Seminars",
            "Board Meetings & Executive Summits",
          ],
        },
        {
          title: "Client & VIP Events",
          imagePlaceholder: HomeImages.image8,
          backSideContent: [
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
    tags: ["Conferences", "Seminars", "Product Launches", "Award Nights"],
    image: RentalServiceImage,
    HeroData: {
      tagline: "We Bring to Life",
      description:
        "We provide a wide range of stylish, high-quality furniture rentals to elevate your events. From comfortable seating and elegant tables to unique decorative items, our selection ensures that you have everything you need to create a memorable atmosphere. Enjoy the convenience of renting without the hassle of purchasing, allowing you to focus on what matters most—your guests and your occasion.",
      subDescription: "Your Celebration, Our Expertise",
      buttonLink: "#", // default link
    },

    aboutContent: {
      title: "Why Private Events Matter",
      image: aboutImages.about1,
      description:
        "Private events are more than just gatherings — they’re milestones that deserve to be remembered. Whether it’s a wedding, a birthday, or a family celebration, each event is an opportunity to tell your story. Our role is to transform your ideas into experiences filled with warmth, creativity, and seamless execution.",
    },

    EventSection: {
      tagline: "Services We Offer",
      title: "Tailored Event Solutions for Every Occasion",
      description:
        "Comprehensive solutions designed to make every event unforgettable.",
      categories: [
        {
          image: HomeImages.image4,
          title: "Corporate Events",
          tags: ["Conferences", "Seminars", "Product Launches", "Award Nights"],
        },
        {
          image: HomeImages.image4,
          title: "Weddings & Private Parties",
          tags: ["Weddings", "Engagements", "Birthday", "Anniversaries"],
        },
        {
          image: HomeImages.image4,
          title: "Exhibitions & Trade Shows",
          tags: [
            "Booth Design",
            "Exhibition Setup",
            "Trade Shows",
            "Brand Showcases",
          ],
        },
        {
          image: HomeImages.image4,
          title: "Luxury Experiences",
          tags: [
            "VIP Events",
            "High-end Galas",
            "Exclusive Launches",
            "Private Dinners",
          ],
        },
        {
          image: HomeImages.image4,
          title: "Brand Activations",
          tags: [
            "Pop-up Events",
            "Product Demos",
            "Street Marketing",
            "Experience Zones",
          ],
        },
        {
          image: HomeImages.image4,
          title: "Destination Events",
          tags: [
            "Destination Weddings",
            "Corporate Retreats",
            "Travel Planning",
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
    tags: ["Conferences", "Seminars", "Product Launches", "Award Nights"],
    HeroData: {
      tagline: "We Bring to Life",
      description:
        "Dive into an exciting world of trivia with our Quizzy Beez events! These engaging trivia nights are designed to challenge participants' knowledge across a wide range of topics, ensuring fun for everyone involved. We create a lively atmosphere with themed decorations that transport you to different worlds, and offer fun prizes to heighten the competition. Ideal for friends, families, or colleagues, our interactive activities foster camaraderie and spark friendly rivalry, making every event a unique experience.",
      subDescription: "Your Celebration, Our Expertise",
      buttonLink: "#", // default link
    },

    aboutContent: {
      title: "Why Private Events Matter",
      image: aboutImages.about1,
      description:
        "Private events are more than just gatherings — they’re milestones that deserve to be remembered. Whether it’s a wedding, a birthday, or a family celebration, each event is an opportunity to tell your story. Our role is to transform your ideas into experiences filled with warmth, creativity, and seamless execution.",
    },

    EventSection: {
      tagline: "Services We Offer",
      title: "Tailored Event Solutions for Every Occasion",
      description:
        "Comprehensive solutions designed to make every event unforgettable.",
      categories: [
        {
          image: HomeImages.image4,
          title: "Corporate Events",
          tags: ["Conferences", "Seminars", "Product Launches", "Award Nights"],
        },
        {
          image: HomeImages.image4,
          title: "Weddings & Private Parties",
          tags: ["Weddings", "Engagements", "Birthday", "Anniversaries"],
        },
        {
          image: HomeImages.image4,
          title: "Exhibitions & Trade Shows",
          tags: [
            "Booth Design",
            "Exhibition Setup",
            "Trade Shows",
            "Brand Showcases",
          ],
        },
        {
          image: HomeImages.image4,
          title: "Luxury Experiences",
          tags: [
            "VIP Events",
            "High-end Galas",
            "Exclusive Launches",
            "Private Dinners",
          ],
        },
        {
          image: HomeImages.image4,
          title: "Brand Activations",
          tags: [
            "Pop-up Events",
            "Product Demos",
            "Street Marketing",
            "Experience Zones",
          ],
        },
        {
          image: HomeImages.image4,
          title: "Destination Events",
          tags: [
            "Destination Weddings",
            "Corporate Retreats",
            "Travel Planning",
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
