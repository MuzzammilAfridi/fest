import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-gray-800">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://www.iesonline.co.in/colleges-image/kns-institute-of-technology.jpg" // Replace with your own image URL
          alt="Hero"
        />
        <div className="bg-black opacity-50 inset-0 absolute"></div>
      </div>
      <div className="relative container mx-auto p-6 flex flex-col items-center justify-center min-h-screen text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Welcome to Our Site
        </h1>
        <p className="text-lg md:text-xl mb-8 text-center">
          Discover amazing content and connect with us.
        </p>
        <a
          href="#"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Hero;
