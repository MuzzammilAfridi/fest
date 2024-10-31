import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Logo</div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:underline">Home</Link>
          <Link to="#" className="text-white hover:underline">About</Link>
          <Link to="/event" className="text-white hover:underline">Events</Link>
          <Link to="#" className="text-white hover:underline">Contact</Link>
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-blue-700 p-4">
          <a href="#" className="block text-white hover:underline">Home</a>
          <a href="#" className="block text-white hover:underline">About</a>
          <a href="#" className="block text-white hover:underline">Services</a>
          <a href="#" className="block text-white hover:underline">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
