import React from 'react';

const PatientReview: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-blue-500 p-8 flex flex-col items-center justify-center min-h-screen relative overflow-hidden font-sans rounded-3xl">
      <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-blue-200 opacity-60 pointer-events-none">
        <h1 className="text-[150px] font-thin leading-none -ml-10">Review</h1>
      </div>
      <div className="absolute top-1/2 right-32 transform -translate-y-1/2 text-blue-200 opacity-60 pointer-events-none">
        <h1 className="text-[150px] font-thin leading-none -mr-40">Patient/</h1>
      </div>

      <div className="text-left mb-10 self-start pl-20 md:pl-32 lg:pl-48 xl:pl-60 2xl:pl-80 w-full">
        <h2 className="text-5xl font-medium text-gray-700">What our</h2>
        <h2 className="text-5xl font-medium text-gray-700">customers say</h2>
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-2xl max-w-md sm:max-w-lg z-10 w-full">
        <div className="flex items-center mb-5">
          {/* Placeholder for patient image - replace with actual image */}
          <div className="w-14 h-14 rounded-full bg-slate-200 mr-4 flex-shrink-0"></div>
          <div className="flex-grow">
            <p className="font-semibold text-lg text-gray-800">Anna</p>
            <div className="flex text-yellow-500 text-xl">
              {/* Placeholder for stars */}
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
            </div>
          </div>
          <p className="ml-auto text-sm text-gray-600 whitespace-nowrap">20.04.2025</p>
        </div>

        {/* Placeholder for main image - replace with actual image */}
        <div className="w-full h-56 sm:h-64 bg-slate-200 rounded-lg mb-6">
           {/* In a real scenario, you'd use an <img src="path/to/your/image.jpg" alt="Patient care" className="w-full h-full object-cover rounded-lg" /> tag here */}
        </div>

        <p className="text-gray-700 text-base mb-8 leading-relaxed">
          "I felt calm and cared for from the first step inside. The doctor
          took time to explain everything clearly and the whole process was very smooth and professional."
        </p>

        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">— MedDeFi</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full transition-colors duration-150">
            {/* Using a simple arrow, replace with an SVG icon for better quality */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
      <div className="absolute bottom-5 right-5 text-xs text-gray-400">
        &#123; Review &#125;
      </div>
    </div>
  );
};

export default PatientReview; 