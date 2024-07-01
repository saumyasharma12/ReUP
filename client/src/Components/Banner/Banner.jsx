import React, { useState } from 'react';
import './Banner.css';

import image1 from '../../assets/banner/Banner1.jpg';
import image3 from '../../assets/banner/banner5.jfif';
import image4 from '../../assets/banner/banner4.jpg';

const images = [image1, image3, image4];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">
      <button onClick={prevImage} className="slider-button left">‹</button>
      <img src={images[currentIndex]} alt="banner" className="slider-image" />
      <button onClick={nextImage} className="slider-button right">›</button>
    </div>
  );
};

export default Banner;
