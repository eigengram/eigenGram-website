"use client"
import Image from "next/image";
import React, { useState } from "react";

const images = [
  "image/hospital.png",
  "/image2.jpg",
  "/image3.jpg",
  "/image4.jpg",
];

export function ImageCarouselFold() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden  ">
      {/* Images */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-in-out ${
              index === currentIndex ? "translate-x-0" : "translate-x-full"
            }`}
            style={{
              transform: `translateX(${(index - currentIndex) * 100}%)`,
            }}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-300"
      >
        &#8249; {/* Left Arrow */}
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-300"
      >
        &#8250; {/* Right Arrow */}
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
