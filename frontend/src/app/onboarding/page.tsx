"use client";
import Link from 'next/link';
import Image from 'next/image';
import ProjectDetails from '@/components/ui/mainpage/ProjectDetails';
import OurServices from '@/components/ui/mainpage/OurServices';
import HeroSection from '@/components/ui/mainpage/HeroSection';
import AboutUsSection from '@/components/ui/mainpage/AboutUsSection';
import ProfessionalsSection from '@/components/ui/mainpage/ProfessionalsSection';
import PatientReview from '@/components/ui/mainpage/PatientReview';
import PartnerSection from '@/components/ui/mainpage/PartnerSection';
import ParternSection2 from '@/components/ui/mainpage/ParternSection2';
import Footer from '@/components/ui/mainpage/Footer';
import { useState, useEffect, CSSProperties } from 'react';

export default function Home() {
  

  return (
    <div className="flex flex-col w-full min-h-screen">
      
      <div className="mr-12 ml-12"> {/* Changed mt-80 to mt-20 */}
        <HeroSection />
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
        <AboutUsSection />
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
