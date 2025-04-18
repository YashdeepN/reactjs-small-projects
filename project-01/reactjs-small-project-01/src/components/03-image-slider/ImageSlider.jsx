import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const ImageSlider = ({ url, page, limit }) => {
  const [images, setImages] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

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

  useEffect(() => {
    if (url) fetchImages(url);
  }, [url]);

  if (isLoading) return <div>Loading data!</div>;

  if (errorMessage) return <div>Error! {errorMessage}</div>;

  return (
    <div className="container">
      <BsArrowLeftCircleFill className="arrow arrowLeft" />
      {images
        ? images.map((image) => (
            <img
              height={"200px"}
              width={"300px"}
              key={image.id}
              src={image.download_url}
              alt={image.download_url}
            />
          ))
        : null}
      <BsArrowRightCircleFill className="arrow arrowRight" />
      <span className="circleIndicators">
        {images
          ? images.map((_, index) => (
              <button key={index} className="curruntIndicator"></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
