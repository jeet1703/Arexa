import React from 'react';

const Company = () => {
  return (
    <div
      className="text-white py-8 md:px-10"
      style={{ background: 'linear-gradient(90deg, #15073A 0%, #7256BD 52%, #201148 100%)' }}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-8">
        <div className="flex flex-wrap justify-center md:justify-between items-center">
          <div className="text-center px-8 mb-4 md:mb-0">
            <span className="block text-2xl md:text-4xl font-bold">100+</span>
            <span className="block">Brands</span>
          </div>
          <div className="text-center px-8 mb-4 md:mb-0">
            <span className="block text-2xl md:text-4xl font-bold">4B+</span>
            <span className="block">Impressions</span>
          </div>
          <div className="text-center px-8 mb-4 md:mb-0">
            <span className="block text-2xl md:text-4xl font-bold">80%</span>
            <span className="block">Engagement</span>
          </div>
          <div className="text-center px-8 mb-4 md:mb-0">
            <span className="block text-2xl md:text-4xl font-bold">500K+</span>
            <span className="block">Saves</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;
