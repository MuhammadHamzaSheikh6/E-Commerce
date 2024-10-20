"use client"
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useState, useEffect } from 'react';

function FirstRowProduct() {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Mobile if screen width is less than 1024px
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="py-10">
      {isMobile ? (
        // Mobile Layout: Product Slider
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            1024: {
              slidesPerView: 4, // For larger screens, it will show 4 products per row
            },
          }}
        >
          <div>
          <SwiperSlide className='px-20'>
            <ProductCard imageSrc="/product/shirtG.png" title="T-SHIRT" reviews="960" />
          </SwiperSlide>
          <SwiperSlide className='px-20'>
            <ProductCard imageSrc="/product/shirtY.png" title="T-SHIRT" reviews="2K+" />
          </SwiperSlide>
          <SwiperSlide className='px-20'>
            <ProductCard imageSrc="/product/pink.png" title="SHIRT" reviews="1K+" />
          </SwiperSlide>
          <SwiperSlide className='px-20'>
            <ProductCard imageSrc="/product/shirtY.png" title="SHIRT" reviews="1K+" />
          </SwiperSlide>
          <SwiperSlide className='px-20'>
            <ProductCard imageSrc="/product/pink.png" title="SHIRT" reviews="960" />
          </SwiperSlide>
          <SwiperSlide className='px-20'>
            <ProductCard imageSrc="/product/black.png" title="T-SHIRT" reviews="2K+" />
          </SwiperSlide>
          </div>
        </Swiper>
      ) : (
        // Desktop Layout: 2 Rows with 3 Products per Row
        <div className="grid grid-cols-3 gap-6 px-20">
          <ProductCard imageSrc="/product/shirtG.png" title="T-SHIRT" reviews="960" />
          <ProductCard imageSrc="/product/shirtY.png" title="T-SHIRT" reviews="2K+" />
          <ProductCard imageSrc="/product/pink.png" title="SHIRT" reviews="1K+" />
          <ProductCard imageSrc="/product/shirtY.png" title="SHIRT" reviews="1K+" />
          <ProductCard imageSrc="/product/pink.png" title="SHIRT" reviews="960" />
          <ProductCard imageSrc="/product/black.png" title="T-SHIRT" reviews="2K+" />
        </div>
      )}
    </div>
  );
}

// Product Card component
const ProductCard = ({ imageSrc, title, reviews }: { imageSrc: string; title: string; reviews: string }) => (
  <div className="rounded-2xl p-4">
    <Image
      src={imageSrc}
      alt={title}
      width={322}
      height={318}
      className="rounded-2xl hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
    />
    <ProductInfo title={title} reviews={reviews} />
  </div>
);

// Product Info component
const ProductInfo = ({ title, reviews }: { title: string; reviews: string }) => (
  <div className="flex justify-center gap-2 items-center p-4 rounded-md">
    <div>
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="flex items-center">
        <div className="flex text-yellow-500">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar className="half-star" />
        </div>
        <span className="text-gray-500 text-sm ml-2">({reviews})</span>
      </div>
    </div>
    <button className="bg-orange-500 text-white py-2 px-3 rounded-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
      Shop Now
    </button>
  </div>
);

export default FirstRowProduct;
