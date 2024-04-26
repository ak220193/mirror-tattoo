import React, { useState, useEffect } from 'react';
import img1 from "../assets/img2.avif";
import img2 from "../assets/photo-1558430373-5ff2b47eb71d.avif";
import img3 from "../assets/free-photo-of-close-up-of-tattooing.jpeg";
import img4 from "../assets/girl-2615021_1280.jpg";
import img5 from "../assets/kristian-angelo-xyJZvUL4_TY-unsplash.jpg";
import img6 from "../assets/pexels-photo-2768618.webp";
import img7 from "../assets/pexels-photo-3163994.webp";
import img8 from "../assets/wallpaperflare.com_wallpaper (1).jpg";
import img9 from "../assets/wallpaperflare.com_wallpaper.jpg";
import img10 from "../assets/wallpaperflare.com_wallpaper.jpg";
import Logo from "../assets/mirrorlogo.jpg";

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  const [carouselHeight, setCarouselHeight] = useState("700px"); // Initial height

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        (prevIndex + 1) % images.length
      );
    }, 3000);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative">
      <nav className="bg-transparent p-4 absolute top-0 left-0 right-0 z-10 flex justify-around items-center">
        <div className="flex space-x-20 ml-20 mt-5">
          <a href="#" className="text-white hover:text-gray-300">Home</a>
          <a href="#" className="text-white hover:text-gray-300">About</a>
          <a href="#" className="text-white hover:text-gray-300">Services</a>
          <a href="/" className="flex items-center">
            <img src={Logo} alt="Logo" className="h-8" />
          </a>
          <a href="#" className="text-white hover:text-gray-300">Portfolio</a>
          <a href="#" className="text-white hover:text-gray-300">Get Appointment</a>
          <a href="#" className="text-white hover:text-gray-300">After Care</a>
        </div>
      </nav>
      <div className="w-full overflow-hidden relative" style={{ height: carouselHeight }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-3000 ${
              index === currentImageIndex ? 'opacity-60' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-white text-4xl font-bold">
          <div className='w-full bg-transparent'> 
          <h1 className='font-dancingscript'> Tattoo & Piercing</h1>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
