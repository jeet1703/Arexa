import React from 'react';

const services = [
  {
    title: 'AR Filters & Social Experienced',
    description: 'A community for VR and novices alike, regular and friendly chat.',
    image: 'path/to/image1.jpg', // Replace with actual path to your image
  },
  {
    title: 'AR Print & Packaging',
    description: 'A community for VR and novices alike, regular and friendly chat.',
    image: 'path/to/image2.jpg',
  },
  {
    title: 'AR e-Commerce',
    description: 'A community for VR and novices alike, regular and friendly chat.',
    image: 'path/to/image3.jpg',
  },
  {
    title: 'AR Out-of-Home Advertising',
    description: 'A community for VR and novices alike, regular and friendly chat.',
    image: 'path/to/image4.jpg',
  },
  {
    title: 'AR Filters & Social Experienced',
    description: 'A community for VR and novices alike, regular and friendly chat.',
    image: 'path/to/image5.jpg',
  },
  {
    title: 'AR Filters & Social Experienced',
    description: 'A community for VR and novices alike, regular and friendly chat.',
    image: 'path/to/image6.jpg',
  },
];

const ServicesSection = () => (
  <section className="bg-black text-white py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-center text-3xl font-bold mb-12">
        Transform your business with our leading Augmented Reality (AR) Agency
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src={service.image} alt={service.title} />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="flex justify-center items-center bg-purple-700 text-white py-8 mt-16">
      <div className="text-center px-4">
        <span className="block text-2xl font-bold">100+</span>
        <span>Brands</span>
      </div>
      <div className="text-center px-4">
        <span className="block text-2xl font-bold">4B+</span>
        <span>Impressions</span>
      </div>
      <div className="text-center px-4">
        <span className="block text-2xl font-bold">80%</span>
        <span>Engagement</span>
      </div>
      <div className="text-center px-4">
        <span className="block text-2xl font-bold">500K+</span>
        <span>Saves</span>
      </div>
    </div>
  </section>
);

export default ServicesSection;
