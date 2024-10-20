"use client";
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

import { useState, useEffect } from 'react';
import FirstRowProduct from './firstproduct';
import SecondRow from './secondrow';

const images = [
  { src: '/banner/1banner.png', alt: 'Image 1' }, // Update with actual image paths
  { src: '/banner/2banner.png', alt: 'Image 2' },
  { src: '/banner/3banner.png', alt: 'Image 3' },
];

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000);
    return () => clearInterval(slideInterval);
  }, []);

  return (

    <div className="mt-[70px] relative w-full h-full overflow-hiddenn">
      {/* Images */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="min-w-full h-full bg-cover bg-center"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-contain"  // Use 'object-contain' for full image display without cropping
            />
          </div>
        ))}
      </div>

      {/* Next and Previous Buttons
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        Next
      </button> */}

      {/* Dots for navigation */}
      <div className="absolute bottom-4 w-full flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-500'}`}
          ></button>
        ))}
      </div>
    </div>
  )
}
