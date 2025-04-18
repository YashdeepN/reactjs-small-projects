import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

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
    setCurrentHoverIndex(currntSelectIndex);
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
                ? "#fff700"
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
