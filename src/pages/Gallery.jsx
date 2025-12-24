import React, { useEffect, useRef } from "react";
import galleryPageLeftBottom from "../assets/galleryPageLeftBottom.png";
import galleryPageRightTop from "../assets/galleryPageRightTop.png";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate, useParams } from "react-router-dom";
import VisibleReveal from "../components/VisibleReveal";
import LeftToRightReveal from "../components/LeftToRightReveal";
// import { HashLink } from "react-router-hash-link";
import { categories, galleryItems } from "../data/galleryData";

const Gallery = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const topRef = useRef(null);

  const selectedCategory = categories.includes(category) ? category : "All";

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="top" className="gallerytop" ref={topRef}>
      <Helmet>
        {/* Title */}
        <title>Event & Celebration Gallery | Pop & Palm Events UAE</title>

        {/* Meta */}
        <meta
          name="description"
          content="Browse Pop & Palm Events’ gallery of private celebrations, corporate events, birthday décor, luxury wedding setups, exhibitions, and themed experiences across the UAE."
        />
        <meta name="robots" content="index, follow" />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.popandpalmevents.com/gallery"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Pop & Palm Events" />
        <meta
          property="og:title"
          content="Event & Celebration Gallery | Pop & Palm Events UAE"
        />
        <meta
          property="og:description"
          content="Explore Pop & Palm Events’ gallery featuring beautifully styled private celebrations, weddings, corporate events, exhibitions, and more across the UAE."
        />
        <meta
          property="og:url"
          content="https://www.popandpalmevents.com/gallery"
        />
        <meta
          property="og:image"
          content="https://www.popandpalmevents.com/assets/images/gallery-og.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Event & Celebration Gallery | Pop & Palm Events UAE"
        />
        <meta
          name="twitter:description"
          content="Browse Pop & Palm Events’ gallery of beautifully crafted events and celebrations across the UAE."
        />
        <meta
          name="twitter:image"
          content="https://www.popandpalmevents.com/assets/images/gallery-og.webp"
        />

        {/* Hreflang */}
        <link
          rel="alternate"
          href="https://www.popandpalmevents.com/gallery"
          hreflang="en-ae"
        />
        <link
          rel="alternate"
          href="https://www.popandpalmevents.com/gallery"
          hreflang="x-default"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: "Event & Celebration Gallery",
            url: "https://www.popandpalmevents.com/gallery",
            description:
              "Gallery of Pop & Palm Events showcasing private parties, weddings, corporate events, exhibitions and themed celebrations across the UAE.",
          })}
        </script>
      </Helmet>

      {/* Decorative Images */}
      <div className="gallerypage" style={{ position: "relative" }}>
        <div className="left-bottom">
          <img
            src={galleryPageLeftBottom}
            alt="Event decoration design element by Pop & Palm Events"
            width="100%"
            loading="lazy"
          />
        </div>
        <div className="right-top">
          <img
            src={galleryPageRightTop}
            alt="Luxury event styling visual by Pop & Palm Events UAE"
            width="100%"
            loading="lazy"
          />
        </div>

        {/* Gallery Intro */}
        <section id="gallery">
          <div className="d-flex flex-column justify-content-center align-items-center">
            {/* Breadcrumb */}
            <nav aria-label="breadcrumb" className="mb-3 text-center">
              <Link to="/">Home</Link> › <span>Gallery</span>
            </nav>

            <LeftToRightReveal>
              <h1 className="gallerypage-title text-center">
                Event & Celebration Gallery
              </h1>
            </LeftToRightReveal>

            <div className="gallerypage-description text-center w-75">
              Explore a curated collection of Pop & Palm Events’ finest work,
              showcasing luxury weddings, private celebrations, corporate
              events, exhibitions, and themed experiences across the UAE.
            </div>
          </div>
        </section>
      </div>

      {/* Categories */}
      <div className="my-5 mx-4">
        <div className="gallerypage-categories">
          {categories.map((categoryName) => (
            <Link
              key={categoryName}
              to={`/gallery/${categoryName === "All" ? "" : categoryName}`}
              className={`gallerypage-category ${selectedCategory === categoryName ? "active" : ""
                }`}
            >
              {categoryName}
            </Link>
          ))}
        </div>

        {/* Gallery Cards */}
        <div className="row my-5">
          {filteredItems.map((item, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <VisibleReveal>
                <div className="gallerypage-card">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="gallerypage-double-quote mt-4">"</div>
                    <Link to={`${item.link}#top`}>
                      <button className="button-gallery">
                        View Images &rarr;
                      </button>
                    </Link>

                  </div>

                  <div className="gallerypage-image-title">
                    {item.name}
                  </div>

                  <div className="gallerypage-image-description">
                    {item.description}
                  </div>
                </div>
              </VisibleReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
