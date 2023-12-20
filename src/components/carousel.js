import React, { useState } from 'react';
import "./carousel.css"
const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClickPrev = () => {
    setCurrentImageIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
  };

  const handleClickNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel">
      <img className='images' src={images[currentImageIndex]} alt="carousel" />
      <div>
      <button onClick={handleClickPrev}>Previous</button>
      <button onClick={handleClickNext}>Next</button>
      </div>
      
    </div>
  );
};

export default Carousel;