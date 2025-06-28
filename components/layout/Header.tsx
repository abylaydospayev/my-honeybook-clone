'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { navItems } from '@/lib/navigation-data';
import { Menu, X } from 'lucide-react';

// Define the props for our component
type HeaderProps = {
  variant?: 'solid' | 'transparent';
  onContactClick?: () => void;
};

export function Header({ variant = 'solid', onContactClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showSolidHeader = variant === 'solid' || isScrolled || isMenuOpen;
  const linkClasses = showSolidHeader ? 'text-dark-gray' : 'text-white';

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${showSolidHeader ? 'bg-white/90 shadow-sm backdrop-blur-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" aria-label="Bulle Consulting Home">
            <Image
              src={showSolidHeader ? '/logos/bulleconsulting-black.png' : '/logos/bulleconsulting-white.png'}
              alt="Bulle Consulting Logo"
              width={180}
              height={48}
              className="h-10 w-auto"
              priority 
            />
          </Link>

          <nav className={`hidden lg:flex items-center space-x-6 text-sm font-semibold transition-colors ${linkClasses}`}>
            {navItems.map((item) => (
              <a key={item.title} href={item.href} className="px-3 py-2 rounded-md hover:text-brand-blue">
                {item.title}
              </a>
            ))}
          </nav>
          
          <div className="hidden lg:flex items-center space-x-2">
             <Button onClick={onContactClick} className={!showSolidHeader ? 'bg-white text-dark-gray hover:bg-gray-200' : ''}>
                Let's talk
             </Button>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" className={`transition-colors ${linkClasses}`}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4">
            <nav className="flex flex-col space-y-2 px-4">
              {navItems.map((item) => (
                <a key={item.title} href={item.href} onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 rounded-md text-base font-medium text-dark-gray hover:bg-light-gray">
                  {item.title}
                </a>
              ))}
              <hr className="my-2" />
              <div className="px-4 py-2">
                 <Button onClick={onContactClick} className="w-full">Let's talk</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}