import React from 'react';
import Header from './Header';
import background from '../assets/Background.png';
import Person from '../assets/person.png';
import Button from './Button';

const Hero = () => {
  return (
    <div
      id='hero'
      className="relative h-screen bg-cover bg-center overflow-hidden border-4 object-cover "
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="absolute inset-0  from-[#140639] via-[#7961BA] to-[#15073A] opacity-90 z-0"></div>
      <Header />
      <div className=" container relative mx-auto  h-full flex flex-col lg:flex-row items-center z-10">
        <div className="w-full lg:w-1/2 p-8 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-6xl  text-white mt-20 lg:mt-0  ">
            Design Revolution Through AR Innovation
          </h1>
          <Button className="mt-8 px-6 py-3 bg-blue-600 text-white text-base md:text-lg font-semibold">
            Learn More
          </Button>
        </div>
        <div className="w-full lg:w-5/12  flex justify-center lg:justify-end">
          <img
            src={Person}
            alt="Description of image"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
