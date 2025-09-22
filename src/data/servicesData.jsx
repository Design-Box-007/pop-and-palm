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
      title: "Why Private Events Matter",
      image: aboutImages.about1,
      description:
        "Private events are more than just gatherings — they’re milestones that deserve to be remembered. Whether it’s a wedding, a birthday, or a family celebration, each event is an opportunity to tell your story. Our role is to transform your ideas into experiences filled with warmth, creativity, and seamless execution.",
    },

    EventSection: {
      tagline: "Events We Specalize",
      title: "Private Events Tailored to Your Story",
      categories: [
        {
          image: HomeImages.image3,
          title: "Weddings & Engagements",
          tags: ["Romantic, timeless celebrations crafted to your vision."],
        },
        {
          image: HomeImages.image4,
          title: "Birthdays & Anniversaries",
          tags: [
            "From milestone birthdays to golden anniversaries, we make it special.",
          ],
        },
        {
          image: HomeImages.image5,
          title: "Family Gatherings",
          tags: ["Reunions, festive celebrations, or intimate dinners."],
        },
        {
          image: HomeImages.image6,
          title: "Baby Showers",
          tags: ["Heartwarming setups for life’s precious beginnings."],
        },
        {
          image: HomeImages.image7,
          title: "Naming Ceremonies",
          tags: ["Heartwarming setups for life’s precious beginnings."],
        },
        {
          image: HomeImages.image8,
          title: "Themed Parties",
          tags: [
            "Creative, fun-filled experiences with custom décor and entertainment.",
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
    title: "Corporate Events",
    tags: ["Conferences", "Seminars", "Product Launches", "Award Nights"],
    image: CorporateEventsServiceImage,
    HeroData: {
      tagline: "We Bring to Life",
      tags: ["Conferences", "Seminars", "Product Launches", "Award Nights"],
      description:
        "Our corporate events are meticulously crafted to foster connections, encourage collaboration, and celebrate company achievements. We provide customized solutions that include elegant decor, gourmet catering, and engaging activities tailored to enhance your corporate culture. Whether you’re hosting a networking event, a team-building retreat, or a milestone celebration, we focus on creating a professional yet enjoyable atmosphere that leaves a lasting impression on your attendees.",
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
    title: "Rentals",
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
