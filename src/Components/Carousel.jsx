import React, { useState, useEffect } from 'react';
import img1 from "../assets/img2.avif";
import img2 from "../assets/photo-1558430373-5ff2b47eb71d.avif";
import img3 from "../assets/free-photo-of-close-up-of-tattooing.jpeg"
import img4 from "../assets/girl-2615021_1280.jpg"
import img5 from "../assets/kristian-angelo-xyJZvUL4_TY-unsplash.jpg"
import img6 from "../assets/pexels-photo-2768618.webp"
import img7 from "../assets/pexels-photo-3163994.webp"
import img8 from "../assets/wallpaperflare.com_wallpaper (1).jpg"
import img9 from "../assets/wallpaperflare.com_wallpaper.jpg"
import img10 from "../assets/wallpaperflare.com_wallpaper.jpg"

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  const [carouselHeight, setCarouselHeight] = useState("600px"); // Initial height

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        (prevIndex + 1) % images.length
      );
    }, 3000);
    
    // Dynamically adjust the carousel height based on the window width
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      // Adjust height based on window width
      if (windowWidth <= 320) {
        setCarouselHeight("300px"); // Adjust height for smaller screens like iPhone SE
      } else {
        setCarouselHeight("600px"); // Default height for larger screens
      }
    };

    // Call handleResize initially and add event listener for window resize
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full overflow-hidden" style={{ height: carouselHeight }}>
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex}`}
        className="w-full h-[600px] object-cover"
      />
    </div>
  );
}

export default Carousel;
