'use client'
import React from 'react';
import { MedDeFiLogo } from '@/components/ui/mainpage/Components';
import Button from '@/components/ui/mainpage/Button';
import PatientReview from '@/components/ui/mainpage/PatientReview';

export default function SignupPage() {
  return (
    <div className="flex min-h-[80vh] w-4/5 bg-gray-100 rounded-3xl shadow-xl overflow-hidden">
      {/* Left: Signup Form */}
      <div className="flex flex-col justify-center px-12 py-16 bg-white w-full max-w-lg min-w-[350px]">
        <div className="mb-8 flex items-center">
          <MedDeFiLogo />
        </div>
        <h1 className="text-3xl font-bold mb-2 text-gray-800">Sign up for free</h1>
        <p className="mb-6 text-gray-600 text-sm">
          We recommend using your <span className="font-semibold">work email</span> – it keeps work and life separate
        </p>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Work email"
            className="rounded-xl border border-gray-300 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
          />
          <Button variant="primary" size="md" className="w-full mb-2">Continue with email</Button>
        </form>
        <div className="flex flex-col gap-2 mt-4">
          <Button 
            variant="secondary" 
            size="md" 
            className="w-full flex items-center justify-center gap-2"
            onClick={() => window.location.href = '/loading'}
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" className="w-5 h-5" />
            Sign up with Google
          </Button>
          <Button 
            variant="secondary" 
            size="md" 
            className="w-full flex items-center justify-center gap-2"
            onClick={() => window.location.href = '/loading'}
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoft/microsoft-original.svg" alt="Microsoft" className="w-5 h-5" />
            Sign up with Microsoft
          </Button>
        </div>
      </div>
      {/* Right: Testimonial & Stats */}
      <div className="flex-1 flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-blue-500 relative p-12">
        <div className="w-full max-w-lg">
          <div className="bg-white/90 rounded-2xl shadow-xl p-8 mb-10">
            <div className="flex items-center mb-4">
              <svg className="w-8 h-8 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6" />
              </svg>
              <span className="text-2xl font-bold text-blue-600">Testimonial</span>
            </div>
            <p className="text-xl text-gray-800 mb-4">
              "The actual process of implementing MedDeFi was straightforward, and it took almost no time."
            </p>
            <div className="mt-4">
              <span className="font-semibold text-gray-700">Dr. John Smith</span>
              <div className="text-gray-500 text-sm">Head of Cardiology @MedDeFi</div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-8 text-white">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">100,000+</span>
              <span className="text-sm">Verified Users</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">500+</span>
              <span className="text-sm">Verified Doctors</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">20+</span>
              <span className="text-sm">Medical Institutions</span>
            </div>
          </div>
        </div>
        {/* Decorative arrows or graphics can be added here if desired */}
      </div>
    </div>
  );
}
