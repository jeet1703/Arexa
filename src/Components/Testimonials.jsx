import React from 'react';
import Slider from 'react-slick';
import { testimonials } from "../Constants";
import background from '../assets/testbg.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    arrows: false,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000, // Set autoplay speed to 5 seconds (5000 ms)
    appendDots: dots => (
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-4">
        <ul className="m-0">{dots}</ul>
      </div>
    )
  };

  return (
    <div className="bg-black text-white py-20" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
      <div className="container mx-auto text-center">
        <h2 className=" text-4xl md:text-7xl  font-bold mb-10 text-gradient mt-20">Testimonial</h2>
        {/* Mobile View */}
        <div className="block md:hidden relative">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-transparent border-gradient p-6 rounded-lg shadow-lg max-w-xs mx-auto my-4 mb-20">
                <p className="mb-4">"{testimonial.text}"</p>
                <div className="flex items-center justify-center mb-4">
                  {/* Stars */}
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-400'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.34 4.122a1 1 0 00.95.69h4.337c.969 0 1.371 1.24.588 1.81l-3.51 2.55a1 1 0 00-.364 1.118l1.34 4.122c.3.922-.755 1.688-1.54 1.118l-3.51-2.55a1 1 0 00-1.175 0l-3.51 2.55c-.785.57-1.84-.196-1.54-1.118l1.34-4.122a1 1 0 00-.364-1.118l-3.51-2.55c-.783-.57-.38-1.81.588-1.81h4.337a1 1 0 00.95-.69l1.34-4.122z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                  <div className="text-left">
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <p className="text-sm text-gray-300 mt-4">Swipe left or right to navigate</p> {/* Instruction added */}
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex justify-center space-x-4 flex-wrap">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-transparent border-gradient p-6 rounded-lg shadow-lg max-w-xs mx-2 my-4 mb-20">
              <p className="mb-4">"{testimonial.text}"</p>
              <div className="flex items-center justify-center mb-4">
                {/* Stars */}
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-400'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.34 4.122a1 1 0 00.95.69h4.337c.969 0 1.371 1.24.588 1.81l-3.51 2.55a1 1 0 00-.364 1.118l1.34 4.122c.3.922-.755 1.688-1.54 1.118l-3.51-2.55a1 1 0 00-1.175 0l-3.51 2.55c-.785.57-1.84-.196-1.54-1.118l1.34-4.122a1 1 0 00-.364-1.118l-3.51-2.55c-.783-.57-.38-1.81.588-1.81h4.337a1 1 0 00.95-.69l1.34-4.122z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                <div className="text-left">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
          <p className="md:hidden text-sm text-gray-300 mt-4">Use arrows to navigate</p> {/* Instruction added */}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
