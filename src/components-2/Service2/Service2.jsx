import React, { useState } from "react";
import "./Service2.css";

const FlipCard = ({ title, image, flipData }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    // For mobile/tablet only → click to flip
    if (window.innerWidth <= 1024) {
      setFlipped(!flipped);
    }
  };

  return (
    <div
      className={`flip-card ${flipped ? "flipped" : ""}`}
      onClick={handleFlip}
    >
      <div className="flip-card-inner">
        {/* FRONT */}
        <div
          className="flip-card-front"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="overlay">
            <h2>{title}</h2>
          </div>
        </div>

        {/* BACK */}
        <div className="flip-card-back">
          <h3>{title}</h3>
          <ul>
            {flipData.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
