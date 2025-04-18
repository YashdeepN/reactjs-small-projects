import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import "./style.css";

const ImageSlider = ({ url, page, limit }) => {
  const [images, setImages] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchImages(url) {
    try {
      setIsLoading(true);
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const imageData = await response.json();

      if (imageData) {
        setImages(imageData);
        setIsLoading(false);
      }
    } catch (e) {
      setErrorMessage(e.message);
      setIsLoading(false);
    }
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  useEffect(() => {
    if (url) fetchImages(url);
  }, [url]);

  if (isLoading) return <div>Loading data!</div>;

  if (errorMessage) return <div>Error! {errorMessage}</div>;

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        className="arrow arrowLeft"
        onClick={handlePrevious}
      />
      {images
        ? images.map((image, index) => (
            <img
              className={
                currentSlide === index ? "currentImage" : "hideCurrentImage"
              }
              height={"200px"}
              width={"300px"}
              key={image.id}
              src={image.download_url}
              alt={image.download_url}
            />
          ))
        : null}
      <BsArrowRightCircleFill
        className="arrow arrowRight"
        onClick={handleNext}
      />
      <span className="circleIndicators">
        {images
          ? images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={
                  currentSlide === index
                    ? "curruntIndicator"
                    : "inactiveIndicator curruntIndicator"
                }
              ></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
