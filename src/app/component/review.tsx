'use client'
import { FaSyncAlt,  FaDollyFlatbed ,FaShieldAlt  } from 'react-icons/fa';

import { useState } from 'react';

const testimonials = [
  {
    name: 'John Smith',
    date: '06 August, 2023',
    review: 'Lorem ipsum dolor sit amet consectetur Vitae nunc.',
    imgSrc: '/review/6a.jpg',
  },
  {
    name: 'Jane Doe',
    date: '13 August, 2023',
    review: 'Lorem ipsum dolor sit amet consectetur Vitae nunc.',
    imgSrc: '/review/2a.jpg',
  },
  {
    name: 'Mike Johnson',
    date: '19 August, 2023',
    review: 'Lorem ipsum dolor sit amet consectetur Vitae nunc.',
    imgSrc: '/review/3a.jpg',
  },
  {
    name: 'Emily Davis',
    date: '23 August, 2023',
    review: 'Lorem ipsum dolor sit amet consectetur Vitae nunc.',
    imgSrc: '/review/5a.jpg',
  },
  {
    name: 'David Wilson',
    date: '29 August, 2023',
    review: 'Lorem ipsum dolor sit amet consectetur Vitae nunc.',
    imgSrc: '/review/4a.jpg',
  },
  {
    name: 'Anna Brown',
    date: '01 September, 2023',
    review: 'Lorem ipsum dolor sit amet consectetur Vitae nunc.',
    imgSrc: '/review/1a.jpg',
  },
];

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div>
    <div className="relative bg-cover bg-center py-16">

        <div
            className="absolute inset-0 bg-white opacity-40 z-0"
            style={{ backgroundImage: `url('/re.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>

      <h2 className="text-center text-3xl font-bold mb-10 text-black">What Our Clients Say?</h2>

      <div className="flex justify-center items-center relative">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-20 z-10 p-2 rounded-full text-2xl text-black hover:text-gray-500 transition-all"
        >
          ❮
        </button>

        {/* Testimonials Container */}
        <div className="flex space-x-6 overflow-hidden w-3/4 max-w-6xl mx-auto">
          <div
            className="flex gap-10  transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 26.33}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="min-w-[26.33%] bg-white py-10 rounded-sm shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <img
                    className="w-16 h-16 rounded-full border-4 border-orange-500"
                    src={testimonial.imgSrc}
                    alt={`Testimonial from ${testimonial.name}`}
                  />
                </div>
                <h3 className="text-lg bg-orange-500 text-white font-semibold">{testimonial.name}</h3>
                <p className="text-yellow-500 text-sm">★★★★★</p>
                <p className="text-sm text-gray-500 mt-2">{testimonial.date}</p>
                <p className="text-gray-600 mt-4">{testimonial.review}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-20 z-10 p-2 rounded-full text-2xl text-black hover:text-gray-500 transition-all"
        >
          ❯
        </button>
      </div>
      </div>
      <div className='flex flex-col md:flex-row justify-center md:justify-around py-7 px-5 md:px-40 gap-12'>
    <div className='flex gap-3 mb-4 md:mb-0'>
        <span className='bg-orange-500 p-3 rounded-tl-3xl rounded-br-xl'>
            <FaSyncAlt className='text-white w-7 h-7' />
        </span>
        <p className='text-sm'>
            Easy 7 days replacement Only
            If the product is faulty
        </p>
    </div>
    <div className='flex gap-3 mb-4 md:mb-0'>
        <span className='bg-orange-500 p-3 rounded-tl-3xl rounded-br-xl'>
            <FaDollyFlatbed className='text-white w-7 h-7' />
        </span>
        <p className='text-sm'>
            Free Home Delivery
            We don't sell your info
        </p>
    </div>
    <div className='flex gap-3 mb-4 md:mb-0'>
        <span className='bg-orange-500 p-3 rounded-tl-3xl rounded-br-xl'>
            <FaShieldAlt className='text-white w-7 h-7' />
        </span>
        <p className='text-sm'>
            Quality Ensured
            Every product's quality is ensured
        </p>
    </div>
</div>


      </div>
  );
};

export default TestimonialSlider;
