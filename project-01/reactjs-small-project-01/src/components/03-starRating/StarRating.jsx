import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ numOfStars }) => {
  const [currentHoverIndex, setCurrentHoverIndex] = useState(null);
  const [currntSelectIndex, setCurrentSelectIndex] = useState(null);

  function handleClick(i) {
    setCurrentSelectIndex(i);
  }

  function handleMouseEnter(i) {
    setCurrentHoverIndex(i);
  }

  function handleMouseLeave(i) {
    setCurrentHoverIndex(null);
  }

  return (
    <div>
      {[...Array(numOfStars)].map((_, index) => (
        <FaStar
          key={index}
          size={50}
          onMouseEnter={() => handleMouseEnter(index + 1)}
          onMouseLeave={() => handleMouseLeave(index + 1)}
          onClick={() => handleClick(index + 1)}
          color={
            currentHoverIndex
              ? index < currentHoverIndex
                ? "yellow"
                : null
              : index < currntSelectIndex
              ? "yellow"
              : null
          }
        />
      ))}
    </div>
  );
};

export default StarRating;
