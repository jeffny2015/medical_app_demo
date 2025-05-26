"use client";
import Link from 'next/link';
import Image from 'next/image';
import ProjectDetails from '@/components/ui/Main Page/ProjectDetails';
import OurServices from '@/components/ui/Main Page/OurServices';
import HeroSection from '@/components/ui/Main Page/HeroSection';
import ProfessionalsSection from '@/components/ui/Main Page/ProfessionalsSection';
import PatientReview from '@/components/ui/Main Page/PatientReview';
import PartnerSection from '@/components/ui/Main Page/PartnerSection';
import ParternSection2 from '@/components/ui/Main Page/ParternSection2';
import Footer from '@/components/ui/Main Page/Footer';
import { useState, useEffect, CSSProperties } from 'react';

export default function Home() {
  

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Main Page Content */}
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
            <div className="my-6"> {/* Added margin for spacing */}
            <button 
              className="w-full bg-zinc-900 hover:bg-zinc-800 text-white font-semibold py-3 px-1 rounded-3xl shadow-md hover:shadow-lg transition duration-300 ease-in-out flex items-center justify-center"
              onClick={() => alert('Download initiated!')} // Placeholder action
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Download App
            </button>
          </div>
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

        {/* Right Column Content (Blue Background) */}
        <div className="w-full bg-zinc-800 p-48 flex flex-col justify-center items-center rounded-3xl relative ">
        
          {/* Adjusted height for better scroll testing - ensure this section has enough height */}
          
          {/* Placeholder for Doctor Image - centered and large */}
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
      
      {/* ProjectDetails component now in normal document flow */}
      <div className="mt-80 mr-12 ml-12"> {/* Changed mt-80 to mt-20 */}
        <ProjectDetails />
      </div>
      <div className="mt-20 mr-12 ml-12"> {/* Changed mt-80 to mt-20 */}
        <OurServices />
      </div>
      <div className="mt-4 mr-12 ml-12"> {/* Added ProfessionalsSection */}
        <ProfessionalsSection />
      </div>
      <div className="mt-20 mr-12 ml-12"> {/* Changed mt-80 to mt-20 */}
        <HeroSection />
      </div>
      
      <div className="mt-20 mr-12 ml-12"> {/* Added PatientReview section */}
        <PatientReview />
      </div>
      
      <div className="mt-20 mr-12 ml-12"> {/* Added ParternSection2 */}
        <ParternSection2 />
      </div>
      <div className="mt-20 mr-12 ml-12"> {/* Added Footer */}
        <Footer />
      </div>
    </div>
    
    
    

  );
}
