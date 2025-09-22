import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash; // Get the hash from the URL
    if (hash) {
      // Clean the hash and extract the section id
      const sectionId = hash.replace(/^#/, "").split("/")[0];
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);
};

export default ScrollToTop;
