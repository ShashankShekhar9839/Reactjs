import React, { useState } from "react";

const StarRating = ({ totalStars = 5, rating = 2, onChange = () => {} }) => {
  const [currentRating, setCurrentRating] = useState(rating);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleMouseEnter = (starNumber) => {
    setHoveredRating(starNumber);
  };

  const handleMouseLeave = () => {
    setHoveredRating(0); // Reset hover effect
  };

  const handleClick = (starNumber) => {
    setCurrentRating(starNumber); // Update rating
    onChange(starNumber); // Trigger callback
  };

  return (
    <div className="star-rating">
      {Array(totalStars)
        .fill("")
        .map((_, index) => {
          let starNumber = index + 1;
          let isHovered = starNumber <= hoveredRating;
          let isRated = starNumber <= currentRating;
          console.log(starNumber, hoveredRating);

          return (
            <span
              key={index}
              className={`star ${isHovered ? "hover" : ""} ${
                isRated ? "rated" : ""
              }`}
              onMouseEnter={() => {
                handleMouseEnter(starNumber);
              }}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(starNumber)}
            >
              &#9733;
            </span>
          );
        })}
    </div>
  );
};

export default StarRating;
