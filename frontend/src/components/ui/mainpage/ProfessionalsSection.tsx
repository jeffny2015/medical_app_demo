import React from 'react';

const ProfessionalsSection = () => {
  // Placeholder data for professionals
  const professionals = [
    {
      name: 'Dr. Jenny Doe',
      specialty: 'MBBS / Dip in Psychology',
      imageUrl: '/images/2148884880.jpg',
    },
    {
      name: 'Dr. John Smith', // Placeholder, will be Dr. Jenny Doe in the final version
      specialty: 'MBBS / Dip in Cardiology', // Placeholder
      imageUrl: '/images/2148984296.jpg',
    },
    {
      name: 'Dr. Jane Roe', // Placeholder
      specialty: 'MBBS / Dip in Neurology', // Placeholder
      imageUrl: '/images/2149152536.jpg',
    },
    {
      name: 'Dr. Richard Roe', // Placeholder
      specialty: 'MBBS / Dip in Pediatrics', // Placeholder
      imageUrl: '/images/2149355015.jpg',
    },
  ];

  return (
    <section className="py-12 bg-gray-100 rounded-3xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Top <span className="text-blue-600">Professionals.</span>
        </h2>
        <div className="relative">
          {/* Professional Cards - Implement carousel later */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {professionals.map((prof, index) => (
              <div key={index} className="bg-gray-200 rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
                <img
                  src={prof.imageUrl}
                  alt={prof.name}
                  className="w-32 h-32 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">{prof.name}</h3>
                <p className="text-gray-600">{prof.specialty}</p>
                <button className="mt-4 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Navigation Arrows - Placeholder */}
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none -ml-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none -mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>
        {/* Dots for carousel - Placeholder */}
        <div className="flex justify-center mt-8 space-x-2">
          <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalsSection;
