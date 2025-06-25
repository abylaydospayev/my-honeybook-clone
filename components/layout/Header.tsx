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
          <div className="flex items-center space-x-3">
            <Image
              src={isScrolled ? '/logos/bulleconsulting-black.png' : '/logos/bulleconsulting-white.png'}
              alt="Bulle Consulting Logo"
              width={100}
              height={100}
              className="h w-auto transition-all duration-300"
            />
            <span
              className={`font-bold text-xl tracking-wide transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
            </span>
          </div>

          <nav
            className={`hidden md:flex items-center space-x-8 text-sm font-semibold transition-colors ${
              isScrolled ? 'text-gray-600' : 'text-white'
            }`}
          >
            <a href="#team" className="hover:text-blue-600">Home</a>
            <a href="#team" className="hover:text-blue-600">Careers</a>
            <a href="#team" className="hover:text-blue-600">About us</a>
            <a href="#team" className="hover:text-blue-600">Team</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>

          <Button>Get In Touch</Button>
        </div>
      </div>
    </header>
  );
}
