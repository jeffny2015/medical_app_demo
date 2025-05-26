import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-white overflow-hidden">
      {/* Background SVG Icon */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <svg 
          className="w-4/5 h-4/5 text-blue-100 opacity-50" // Adjust size and opacity as needed
          fill="currentColor" 
          viewBox="0 0 20 20"
          aria-hidden="true" // Hide from screen readers as it's decorative
        >
          <path 
            fillRule="evenodd" 
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" 
            clipRule="evenodd" 
          />
        </svg>
      </div>

      <div className="z-10 flex flex-col items-center text-center">
        <span className="text-sm text-gray-500 mb-4">MedDeFi</span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
         Medical tourism now is{' '}
          <span className="inline-block align-middle">
            {/* Placeholder for lightbulb icon */}
            <svg 
              className="w-12 h-12 text-blue-600 opacity-100" // Changed size from w-16 h-16 to w-12 h-12
              fill="currentColor" 
              viewBox="0 0 20 20"
              aria-hidden="true" // Hide from screen readers as it's decorative
            >
              <path 
                fillRule="evenodd" 
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" 
                clipRule="evenodd" 
              />
            </svg>
          </span>{' '}
          secure and transparent
        </h1>
        <p className="text-gray-600 mb-10 max-w-2xl">
          MedDeFi is a <span className="font-semibold text-gray-700">space of trust</span>, where healthcare across borders is easy, safety and transparent.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg flex items-center space-x-2 transition duration-150 ease-in-out">
          <span>More about us</span>
          {/* Placeholder for user icon */}
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HeroSection; 