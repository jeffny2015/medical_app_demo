import React from 'react';
import { UserIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
  
const HeroSection = () => {
  return (
    <div className="bg-blue-600 text-white rounded-3xl flex flex-1 items-center relative ml-12 mr-12">
      {/* Left Column Content */}
      <div className="flex-1 h-full mt-24 mb-24 ml-16 mr-24 flex flex-col justify-between relative z-10">
        <div className="flex-1 pl-12">
          <div className="mt-16 sm:mt-20 md:mt-24">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              MedDeFi
            </h1>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-6xl font-thin leading-tight text-gray-300 -mt-2 sm:-mt-3 md:-mt-4">
              Across Borders
            </h2>
          </div>
          <p className="mt-6 sm:mt-8 md:mt-10 text-base sm:text-lg text-gray-300 max-w-md">
            Medical tourism has never been so easy. Make and receive payments across borders with no delays. No more risks of scams, no more hidden costs.
          </p>
          <Link href="/accounttypeselection">
          <div className="my-6 flex flex-col gap-4 md:flex-row">
          <button className="w-full bg-zinc-900 hover:bg-zinc-800 text-white font-semibold py-3 px-1 rounded-3xl shadow-md hover:shadow-lg transition duration-300 ease-in-out flex items-center justify-center">
           <UserIcon className="text-white h-5 w-5 mr-4" />
              Sign Up Free
          </button>
          
          </div>
          </Link> 
        </div>

        {/* Placeholder for Mobile App Preview */}
        <div className="absolute top-[32rem] left-24 z-40">
          <div className="w-40 h-80 sm:w-48 sm:h-96 bg-gray-700 rounded-xl p-2 shadow-2xl">
            <div className="w-full h-full bg-gray-800 rounded-lg flex flex-col items-center justify-center">
              <p className="text-xs text-gray-400">Mobile App</p>
              <p className="text-xs text-gray-400">Preview</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column Content */}
      <div className="w-full bg-zinc-800 p-48 flex flex-col justify-center items-center rounded-3xl relative">
        <div className="w-full flex-grow flex items-center justify-center">
          <div className="w-40 h-80 sm:w-48 sm:h-96 bg-gray-700 rounded-xl p-2 shadow-2xl">
            <div className="w-full h-full bg-gray-800 rounded-lg flex flex-col items-center justify-center">
              <p className="text-xs text-gray-400">Mobile App</p>
              <p className="text-xs text-gray-400">Preview</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 right-8 text-sm text-white">8888</div>
      </div>
    </div>
  );
};

export default HeroSection;