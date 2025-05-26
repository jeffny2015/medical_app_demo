'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// SVG Icons (simple placeholders)
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);


const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
  </svg>
);

const BellIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
  </svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
);

const SalvaMedicLogo = () => (
  // Placeholder for a more complex logo, e.g. an <Image> component from Next.js
  // For now, a simple SVG circle with a plus sign
  <div className="flex items-center space-x-2">
    <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
    </svg>
    <span className="font-bold text-xl text-blue-600">MedDeFi</span>
  </div>
);

const DownloadAppButton = () => (
  <button className="hidden md:flex items-center bg-blue-600 hover:bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-full transition-colors">
    <DownloadIcon />
    Download App
  </button>
);


const Header = () => {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Users', href: '/users' },
    { name: 'Wallets', href: '/wallets' },
    { name: 'Contracts', href: '/contracts' },
    { name: 'Services', href: '/health' },
    { name: 'Doctors', href: '/search' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className="bg-white shadow-md py-3 px-4 md:px-6 lg:px-8 rounded-3xl sticky top-4 z-50 ml-12 mr-12">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Section: Logo and Nav */}
        <div className="flex items-center space-x-8">
          <Link href="/">
            <SalvaMedicLogo />
          </Link>
          <nav className="hidden md:flex items-center space-x-3 lg:space-x-5">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right Section: Location, CTA, and Icons */}
        <div className="flex items-center space-x-4">
          
          <DownloadAppButton />
          <div className="flex items-center space-x-1">
            <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
              <PhoneIcon />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
              <BellIcon />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
              <UserIcon />
            </button>
          </div>
           {/* Hamburger Menu for Mobile */}
          <div className="md:hidden flex items-center">
            {/* You might want a smaller DownloadAppButton version for mobile, or move it to the mobile menu */}
            <button className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 ml-2">
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
