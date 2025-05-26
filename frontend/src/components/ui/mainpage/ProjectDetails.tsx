"use client";
import React from 'react';

const ProjectDetails: React.FC = () => {
  return (
    <div className="p-12 md:p-12 bg-gradient-to-br rounded-3xl from-slate-50 to-sky-100 text-gray-900 font-sans">
      <header className="m-4">
        <h1 className="text-6xl md:text-7xl font-bold mb-3 leading-tight">
        About
          <span className="text-blue-600">MedDeFi</span>
          <span className="text-gray-400 font-light text-4xl md:text-5xl align-baseline ml-1">{"{Innovation}"}</span>
        </h1>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500 tracking-wide">MedDeFi</span>
          <span className="bg-white px-4 py-2 rounded-full text-xs font-semibold shadow-md text-gray-700">Decentralized medical payments</span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Task Card */}
        <div className="bg-blue-600 backdrop-blur-md p-8 rounded-2xl shadow-xl relative flex flex-col">
          <div className="flex items-center mb-4">
            <span className="text-blue-600 text-3xl mr-3 drop-shadow-lg"> {/* Placeholder for Task icon */}
              💡
            </span>
            <h2 className="text-3xl font-semibold text-white">For Patients and Healthcare Professionals</h2>
            <span className="text-white/80 ml-auto text-sm tracking-wide">MedDeFi</span>
          </div>
          <div className="flex items-center mb-4">
          <p className="text-white leading-relaxed flex-grow">
          MedDeFi is a decentralized medical payments platform enabling seamless cross-border transactions between patients and healthcare professionals. The platform's core mission is to build a trusted environment where patients feel secure and at ease throughout their treatment journey.
          </p>
          </div>
          <div className="illustration">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-auto text-blue-500" style={{maxWidth: '200px', margin: 'auto'}}>
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="mt-auto flex items-center justify-between">
            <div className="flex items-center text-white hover:text-white/80 cursor-pointer group">
              <span className="font-medium tracking-wide">Learn more</span>
              <span className="ml-2 transform transition-transform group-hover:translate-x-1">&#8594;</span> {/* Right arrow */}
            </div>
            {/* Placeholder for another lightbulb icon at the bottom right */}
            <div className="text-blue-400 text-4xl drop-shadow-lg">
              💡
            </div>
          </div>
        </div>

        {/* Right Column Cards */}
        <div>
          {/* SalvaMedic Description Card */}
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl mb-8 relative">
            <p className="text-gray-700 leading-relaxed">
            Connecting with your healthcare provider and pay for your treatment has never been easier and secure. We are reducing frictions and increasing transparency in the healthcare industry. A solution for patients and healthcare professionals.
            </p>
            {/* Placeholder for a lightbulb icon at the bottom right */}
            <div className="absolute bottom-6 right-8 text-blue-400 text-4xl drop-shadow-lg">
                💡
            </div>
          </div>

          {/* Image Card */}
          <div className="bg-gray-700 rounded-2xl shadow-xl overflow-hidden h-72 md:h-80 relative group">
            <img 
              src="/images/2148984296.jpg" 
              alt="Clinic Interior" 
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end justify-start p-6">
              <h3 className="text-white text-3xl md:text-4xl font-semibold leading-tight">
                Take a look <br/> inside
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails; 