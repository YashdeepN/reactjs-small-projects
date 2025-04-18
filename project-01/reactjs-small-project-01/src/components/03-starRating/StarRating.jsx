import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ numOfStars }) => {
  let [strClr, setStrClr] = useState(null);
  const [currntSelectIndex, setCurrentSelectIndex] = useState(null);

  function handleClick(i) {
    setCurrentSelectIndex(i);
    setStrClr("yellow");
  }

  return (
    <div>
      {[...Array(numOfStars)].map((_, index) => (
        <FaStar
          key={index}
          size={50}
          onClick={() => handleClick(index)}
          color={index <= currntSelectIndex ? strClr : null}
        />
      ))}
    </div>
  );
};

export default StarRating;
