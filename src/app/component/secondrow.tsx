'use client'
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation'; // Import navigation styles
import { Navigation } from 'swiper/modules'; // Import Navigation module
import { useEffect, useState } from 'react';

// Define the Product type
interface Product {
  image: string;
  title: string;
  oldPrice: string;
  newPrice: string;
  rating: number;
  reviews: string;
}

// Define the SecondRow component
const SecondRow: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

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
    <div className="py-6 w-full h-full bg-slate-100">
            <h4 className="text-center text-2xl font-semibold mb-4">Just For You</h4>
      <div className="flex justify-center ">
        <ul className="flex flex-wrap justify-center md:justify-start ">
          {/* All */}
            <li className="m-1">
              <a href="" className="bg-orange-500 text-white px-2 py-1 rounded-md md:px-4 md:py-2">
                All
              </a>
            </li>

            {/* Tanks */}
            <li className="m-1">
              <a href="" className="bg-orange-500 text-white px-2 py-1 rounded-md md:px-4 md:py-2">
                Tanks
              </a>
            </li>

            {/* T-Shirts */}
            <li className="m-1">
              <a href="" className="bg-orange-500 text-white px-2 py-1 rounded-md md:px-4 md:py-2">
                T-Shirts
              </a>
            </li>

            {/* Polo Shirts */}
            <li className="m-1">
              <a href="" className="bg-orange-500 text-white px-2 py-1 rounded-md md:px-4 md:py-2">
                Polo Shirts
              </a>
            </li>

            {/* Casual Shirts */}
            <li className="m-1">
              <a href="" className="bg-orange-500 text-white px-2 py-1 rounded-md md:px-4 md:py-2">
                Casual Shirts
              </a>
            </li>
        </ul>
      </div>
    <div className="-px-3 py-10">
      {isMobile ? (
        // Mobile View
        <Swiper
          slidesPerView={1} // Show one slide at a time
          navigation // Enables navigation buttons
          modules={[Navigation]} // Include Navigation module
          spaceBetween={10} // Space between slides
        >
          {products.map((product, index) => (
            <SwiperSlide key={index} className="flex-shrink-0 w-72 rounded-lg text-center">
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={269}
                className=" rounded-lg mx-8 hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
              />
              <h3 className="text-xl font-semibold mt-4">{product.title}</h3>
              <div className="mt-2 text-lg">
                <span className="line-through text-gray-500">{product.oldPrice}</span>
                <span className="text-red-500 font-bold ml-2">{product.newPrice}</span>
              </div>
              <div className="flex items-center text-xs justify-center mt-2 text-yellow-500">
                {Array.from({ length: Math.floor(product.rating) }, (_, i) => (
                  <FaStar key={i} />
                ))}
                <span className="ml-1 text-gray-500">{product.reviews}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        // Desktop View
        <div className="grid grid-cols-4 px-5">
          {products.map((product, index) => (
            <div key={index} className="rounded-lg w-72 text-center">
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={269}
                className="rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
              />
              <h3 className="text-xl font-semibold mt-4">{product.title}</h3>
              <div className="mt-2 text-lg">
                <span className="line-through text-gray-500">{product.oldPrice}</span>
                <span className="text-red-500 font-bold ml-2">{product.newPrice}</span>
              </div>
              <div className="flex items-center text-xs justify-center mt-2 text-yellow-500">
                {Array.from({ length: Math.floor(product.rating) }, (_, i) => (
                  <FaStar key={i} />
                ))}
                <span className="ml-1 text-gray-500">{product.reviews}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

// Product data
const products: Product[] = [
  {
    image: '/foryou/1.png',
    title: 'Fashion Shirt',
    oldPrice: '$5.00',
    newPrice: '$5.00',
    rating: 4.5,
    reviews: '960',
  },
  {
    image: '/foryou/2.png',
    title: 'GYM Tank-Top',
    oldPrice: '$4.00',
    newPrice: '$3.00',
    rating: 4.5,
    reviews: '960',
  },
  {
    image: '/foryou/3.png',
    title: 'Fashion T-Shirt',
    oldPrice: '$5.00',
    newPrice: '$4.00',
    rating: 4.5,
    reviews: '1k',
  },
  {
    image: '/foryou/4.png',
    title: 'Casual T-Shirt',
    oldPrice: '$5.00',
    newPrice: '$4.00',
    rating: 4.5,
    reviews: '750',
  },
  {
    image: '/foryou/5.png',
    title: 'Check Shirt',
    oldPrice: '$5.00',
    newPrice: '$4.00',
    rating: 4.5,
    reviews: '960',
  },
  {
    image: '/foryou/6.png',
    title: 'Fashion Shirt',
    oldPrice: '$6.00',
    newPrice: '$5.00',
    rating: 4.5,
    reviews: '960',
  },
  {
    image: '/foryou/7.png',
    title: 'Fashion Polo Shirt',
    oldPrice: '$5.00',
    newPrice: '$3.99',
    rating: 4.5,
    reviews: '660',
  },
  {
    image: '/foryou/8.png',
    title: 'Casual Polo Shirt',
    oldPrice: '$6.00',
    newPrice: '$4.99',
    rating: 4.5,
    reviews: '2k',
  },
];

export default SecondRow;
