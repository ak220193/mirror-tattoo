import React, { useState, useEffect } from 'react';
import img1 from "../assets/img2.avif";
import img2 from "../assets/photo-1558430373-5ff2b47eb71d.avif";

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [img1, img2];
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        (prevIndex + 1) % images.length
      );
    }, 3000);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full h-500px overflow-hidden">
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex}`}
        className="w-full h-[600px] object-cover"
      />
    </div>
  );
}

export default Carousel;
