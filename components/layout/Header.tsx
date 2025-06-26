'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 shadow-md backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" aria-label="Bulle Consulting Home">
            <Image
              src={isScrolled ? '/logos/bulleconsulting-black.png' : '/logos/bulleconsulting-white.png'}
              alt="Bulle Consulting Logo"
              width={180} // A good size for a larger logo
              height={48}
              // --- THE FIX IS HERE ---
              // Removed the 'h-10' class to allow the component props to work.
              className="w-auto transition-all duration-300" 
            />
          </a>

          <nav
            className={`hidden md:flex items-center space-x-8 text-sm font-semibold transition-colors ${
              isScrolled ? 'text-dark-gray' : 'text-white'
            }`}
          >
            <a href="#about-us" className="hover:text-brand-blue">About Us</a>
            <a href="#careers" className="hover:text-brand-blue">Careers</a>
            <a href="#team" className="hover:text-brand-blue">Team Experts</a>
            <a href="#services" className="hover:text-brand-blue">Services</a>
          </nav>

          <Button>Get In Touch</Button>
        </div>
      </div>
    </header>
  );
}