import React from 'react';

const Footer = () => (
  <footer className="bg-black text-white py-8">
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
      <p className="text-center md:text-left mb-4 md:mb-0">
        We growing up your business with personal AI manager.<br />
        &copy; 2023 Arexa. All rights reserved.
      </p>
      <nav className="text-center">
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <li><a href="#" className="hover:underline">Plans & Pricing</a></li>
          <li><a href="#" className="hover:underline">Personal AI Manager</a></li>
          <li><a href="#" className="hover:underline">AI Business Writer</a></li>
          <li><a href="#" className="hover:underline">Company</a></li>
          <li><a href="#" className="hover:underline">Blog</a></li>
          <li><a href="#" className="hover:underline">Careers</a></li>
          <li><a href="#" className="hover:underline">Documentation</a></li>
        </ul>
      </nav>
    </div>
  </footer>
);

export default Footer;
