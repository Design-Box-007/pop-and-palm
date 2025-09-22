// ScrollToTop.js
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const scrollPositions = {};

export default function ScrollToTop() {
  const location = useLocation();
  const prevLocation = useRef(location);

  useEffect(() => {
    const key = location.key || location.pathname;

    // If user is coming back, restore previous scroll
    if (scrollPositions[key]) {
      window.scrollTo(0, scrollPositions[key]);
    } else {
      // Otherwise scroll to top
      window.scrollTo(0, 0);
    }

    return () => {
      // Save scroll position of current page before leaving
      const prevKey = prevLocation.current.key || prevLocation.current.pathname;
      scrollPositions[prevKey] = window.scrollY;
      prevLocation.current = location;
    };
  }, [location]);

  return null;
}
