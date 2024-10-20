"use client";
import { FaArrowCircleRight } from 'react-icons/fa';
import Image from 'next/image';
import { useState } from 'react';

const TrendyProductsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample product images (replace with actual images)
  const products = [
    '/product/shirtB.png',
    '/product/shirtY.png',
    '/product/shirtG.png',
    '/product/black.png',
    '/product/pink.png',
  ];

  const nextSlide = () => {
    if (currentSlide < products.length - 1) { // Change to show all 5 products
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div
      className="relative h-[660px] w-full bg-cover bg-center flex flex-col md:flex-row items-center"
      style={{ backgroundImage: `url('/bg/bg.png')` }} // Background image here
    >
      {/* Left Section */}
      <div className="w-full md:w-1/3 py-20 text-black pl-4 md:pl-36 space-y-4 md:space-y-6"> {/* Adjusted spacing */}
        <h5 className="text-xs md:text-sm">BEST SELL</h5> {/* Reduced font size */}
        <h2 className="text-3xl md:text-4xl font-bold">Trendy Products</h2> {/* Reduced font size */}

        <ul className="space-y-3"> {/* Adjusted spacing */}
          <li className="flex items-center gap-2">
            <FaArrowCircleRight className="text-lg md:text-xl" /> {/* Adjusted icon size */}
            <span className="text-sm md:text-base">Free Shipping</span> {/* Reduced text size */}
          </li>
          <li className="flex items-center gap-2">
            <FaArrowCircleRight className="text-lg md:text-xl" />
            <span className="text-sm md:text-base">100% Secure Checkout</span>
          </li>
          <li className="flex items-center gap-2">
            <FaArrowCircleRight className="text-lg md:text-xl" />
            <span className="text-sm md:text-base">Quality Ensured</span>
          </li>
        </ul>

        {/* Button and Arrows Container */}
        <div className="flex items-center space-x-4">
          <button className="bg-orange-500 text-white px-6 py-2 rounded-md text-sm md:text-base"> {/* Adjusted button size */}
            Read more
          </button>

          {/* Previous Button (Arrow Left) */}
          <button
            onClick={prevSlide}
            className="text-black hover:text-gray-400 text-2xl p-2 md:p-3" 
          >
            ❮
          </button>

          {/* Next Button (Arrow Right) */}
          <button
            onClick={nextSlide}
            className="text-black hover:text-gray-400 text-2xl p-2 md:p-3" 
          >
            ❯
          </button>
        </div>
      </div>

      {/* Right Section: Product Image Slider */}
      <div className="relative flex items-center w-full md:w-2/3 justify-end md:justify-center mt-6 md:mt-0">
        {/* Image Slider with Smooth Transition */}
        <div className="overflow-hidden w-full md:w-[700px]">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100 / (products.length - 1)}%)` }} // Update to handle 5 products
          >
            {products.map((src, index) => (
              <div
                key={index}
                className="relative w-44 h-44 md:w-60 md:h-60 border-4 border-orange-500 mx-2 flex-shrink-0" 
              >
                <Image src={src} alt={`Product ${index}`} layout="fill" objectFit="cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendyProductsSection;
