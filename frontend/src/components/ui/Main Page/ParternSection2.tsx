import React from 'react';

const ParternSection2: React.FC = () => {
  return (
    <section className="bg-gray-100 rounded-3xl py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl h-auto mx-auto items-center justify-center">
        {/* Top Section: Why Choose Us & Image */}
        <div className="bg-blue-600 rounded-3xl overflow-hidden mb-4 items-center justify-center">        
          
          <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center pt-16 pb-12 pl-24 pr-8 min-h-[200px]">
            <div className="text-white z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-2">PARTNER WITH US
              TO <span className="font-thin">ADVANCE HEALTHCARE</span></h2>  
              <div className="absolute bottom-4 left-4 bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white">
                DeFi Medical Care
              </div>
            </div>
            <div className="col-span-1 relative bottom-4 left-24 items-center justify-center">
      <img src="/images/2149152536.jpg" alt="Doctor" className="w-4/5 h-full object-cover rounded-3xl" />
    </div>
            
            {/* Placeholder for the image of doctors - will be part of the background or an img tag if more control is needed */}
            {/* For now, this side is empty, relying on the main background image */}

            
          </div>
        </div>

        <div className="bg-gray-100 rounded-3xl p-12">
        {/* Advantages Section */}
        <div className="mb-12 p-8 relative">      
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-blue-600">100%</p>
              <p className="text-gray-700 font-semibold mt-1">Increased patient satisfaction</p>
              <p className="text-xs text-gray-500 mt-1">We have been working since 2012, improving the quality of services every day.</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-blue-600">100%</p>
              <p className="text-gray-700 font-semibold mt-1">Reduce transaction frictions</p>
              <p className="text-xs text-gray-500 mt-1">From family medicine to cardiology and laboratory diagnostics.</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-blue-600">100%</p>
              <p className="text-gray-700 font-semibold mt-1">Trackable results</p>
              <p className="text-xs text-gray-500 mt-1">According to internal surveys over the past year.</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-blue-600">100%</p>
              <p className="text-gray-700 font-semibold mt-1">Secure and reliable</p>
              <p className="text-xs text-gray-500 mt-1">Thanks to modern equipment and experienced specialists.</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center bg-zinc-800 rounded-3xl p-12">
          <h3 className="text-3xl md:text-4xl font-semibold text-white/90 mb-4">
            Medicine starts with <span className="font-bold">science</span> – but true <br />
            healing begins with <span className="font-bold">trust</span>
          </h3>
          <p className="text-white/80 text-sm mb-8">— MedDeFi</p>
          <button className="bg-blue-700 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-3xl shadow-md transition duration-300 flex items-center justify-center mx-auto">
            Join Us
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          
            
          
        </div>
        </div>
      </div>
    </section>
  );
};

export default ParternSection2;
