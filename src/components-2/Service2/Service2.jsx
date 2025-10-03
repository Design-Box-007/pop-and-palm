import React, { useState, useEffect } from "react"; // Import useState and useEffect
import icons from "../../Icon/Icon";
import styles from "./Service2.module.css";
import { HashLink } from "react-router-hash-link";
import formatToHyphenated from "../../utils/nameFormat";

const handleBlogRedirect = () => {
  window.scrollTo(0, 0);
  console.log("Scrolled to top");
};

// Custom hook to detect screen size (optional but clean)
const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, [breakpoint]);

  return isMobile;
};

function ServiceCard({ service, showAsDescription = false }) {
  const { imagePlaceholder, title, tags, backSideContent } = service;
  const [isFlipped, setIsFlipped] = useState(false);
  const isMobile = useIsMobile(768); // Use the same breakpoint as your CSS

  const handleCardClick = () => {
    // Only flip the card on click if it's a mobile/tablet view
    if (isMobile) {
      setIsFlipped((prev) => !prev);
    } else {
      // On desktop, prevent click-flip, let hover handle it
      // But we still want to redirect on inner image/icon click, so we do nothing here.
    }
  }; // The flipCardInner class is conditionally set based on state for mobile view

  const innerClass = `${styles.flipCardInner} ${
    isMobile && isFlipped ? styles.flipped : ""
  }`;

  return (
    // Add onClick handler to the outermost element
    <div className={styles.flipCard} onClick={handleCardClick}>
      <div className={innerClass}>
        {/* The Front of the Card (Current Content) */}
        <div className={`${styles.card} ${styles.flipCardFront}`}>
          <div className={styles.imageWrapper}>
            <HashLink smooth to={`/services/${formatToHyphenated(title)}#top`}>
              <img
                src={imagePlaceholder}
                alt={title}
                className={styles.image}
                onClick={
                  !isMobile ? handleBlogRedirect : (e) => e.stopPropagation()
                } // Redirect on desktop, stop propagation on mobile click
              />
            </HashLink>
          </div>
          <div className={styles.content}>
            <div className={styles.titleArrow}>
              <h3 className={styles.title}>{title}</h3>
              <span>
                <HashLink
                  smooth
                  to={`/services/${formatToHyphenated(title)}#top`}
                >
                  <img
                    src={icons.icon1}
                    alt="icon"
                    className={styles.icon}
                    onClick={
                      !isMobile
                        ? handleBlogRedirect
                        : (e) => e.stopPropagation()
                    } // Redirect on desktop, stop propagation on mobile click
                  />
                </HashLink>
              </span>
            </div>
            {/* Tags/Description rendering remains the same */}
            {tags &&
              tags.length > 0 && // ... (tags rendering logic)
              (showAsDescription ? (
                <div className={styles.description}>{tags.join(", ")}</div>
              ) : (
                <div className={styles.tagsContainer}>
                  <div className={styles.tags}>
                    {tags.map((tag, index) => (
                      <span key={index} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
        {/* The Back of the Card (New Content) */}
        <div className={`${styles.card} ${styles.flipCardBack}`}>
          <div className={styles.backContent}>
            <h3 className={styles.backTitle}>{title} - Services</h3>
            {/* ... (back content rendering logic) */}
            {backSideContent && backSideContent.length > 0 ? (
              <ul className={styles.backList}>
                {backSideContent.map((item, index) => (
                  <li key={index} className={styles.backListItem}>
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No specific services listed.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
