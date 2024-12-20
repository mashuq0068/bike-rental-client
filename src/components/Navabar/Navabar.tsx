import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900/80 sticky top-0 z-50">
      <div className="container flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">BIKEASE.</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm uppercase">
          <a href="#" className="text-gray-200 hover:text-red-500 transition-colors duration-300">Home</a>
          <a href="#" className="text-gray-200 hover:text-red-500 transition-colors duration-300">About</a>
          <a href="#" className="text-gray-200 hover:text-red-500 transition-colors duration-300">Service</a>
          <a href="#" className="text-gray-200 hover:text-red-500 transition-colors duration-300">Pages</a>
          <a href="#" className="text-gray-200 hover:text-red-500 transition-colors duration-300">Contact</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-200 hover:text-red-500 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

        {/* Right Action Buttons */}
        <div className="hidden md:flex space-x-4 items-center">
          <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-all duration-300 shadow-lg">
            Rent a Bike
          </button>
          <div className="text-gray-200 hover:text-red-500 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a4 4 0 11-8 0 4 4 0 018 0zM2 20h20M4 20l1.5-4.5m13.5 4.5l-1.5-4.5"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-black bg-opacity-90 p-4 text-center">
          <a href="#" className="block text-gray-200 hover:text-red-500 transition-colors duration-300 mb-2">Home</a>
          <a href="#" className="block text-gray-200 hover:text-red-500 transition-colors duration-300 mb-2">About</a>
          <a href="#" className="block text-gray-200 hover:text-red-500 transition-colors duration-300 mb-2">Service</a>
          <a href="#" className="block text-gray-200 hover:text-red-500 transition-colors duration-300 mb-2">Pages</a>
          <a href="#" className="block text-gray-200 hover:text-red-500 transition-colors duration-300 mb-2">Contact</a>
          <button className="bg-red-500 text-white px-4 py-2 rounded-full mt-4 hover:bg-red-600 transition-all duration-300 shadow-lg">
            Rent a Bike
          </button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
