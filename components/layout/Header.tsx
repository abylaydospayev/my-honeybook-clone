
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { Button } from '../ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { navItems } from '@/lib/navigation-data';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showSolidHeader = isScrolled || isMenuOpen;
  
  // This variable now correctly controls the text color for the desktop links
  const linkClasses = showSolidHeader ? 'text-dark-gray' : 'text-white';

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${showSolidHeader ? 'bg-white/90 shadow-sm backdrop-blur-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          
          <Link href="/" aria-label="Bulle Consulting Home">
            <Image
              src={showSolidHeader ? '/logos/bulleconsulting-black.png' : '/logos/bulleconsulting-white.png'}
              alt="Bulle Consulting Logo"
              width={180}
              height={48}
              className="h-10 w-auto" 
            />
          </Link>

          {/* --- DESKTOP NAVIGATION -- FIX APPLIED HERE --- */}
          <NavigationMenu.Root className="hidden lg:flex justify-center">
            <NavigationMenu.List className="flex items-center space-x-2">
              {navItems.map((item) => (
                <NavigationMenu.Item key={item.title}>
                  {item.children ? (
                    <>
                      <NavigationMenu.Trigger className={`group inline-flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none ${linkClasses} ${showSolidHeader ? 'hover:bg-gray-100' : 'hover:bg-white/10'}`}>
                        <span>{item.title}</span>
                        <ChevronDownIcon />
                      </NavigationMenu.Trigger>
                      <NavigationMenu.Content className="absolute top-full mt-2 w-auto bg-white rounded-lg shadow-lg p-4">
                        <div className="grid grid-cols-2 gap-x-8 gap-y-4" style={{width: '32rem'}}>
                           {item.children.map((child) => (
                            <NavigationMenu.Link asChild key={child.title}>
                              <a href={child.href} className="flex items-start p-3 rounded-lg hover:bg-light-gray">
                                <child.icon className="h-6 w-6 text-brand-blue flex-shrink-0 mt-1" />
                                <div className="ml-4">
                                  <p className="text-sm font-semibold text-dark-gray">{child.title}</p>
                                  <p className="text-sm text-gray-500">{child.description}</p>
                                </div>
                              </a>
                            </NavigationMenu.Link>
                          ))}
                        </div>
                      </NavigationMenu.Content>
                    </>
                  ) : (
                    <NavigationMenu.Link asChild>
                      <a href={item.href} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${linkClasses} ${showSolidHeader ? 'hover:bg-gray-100' : 'hover:bg-white/10'}`}>
                        {item.title}
                      </a>
                    </NavigationMenu.Link>
                  )}
                </NavigationMenu.Item>
              ))}
            </NavigationMenu.List>
          </NavigationMenu.Root>
          
          <div className="hidden lg:flex items-center space-x-2">
             {/* The button's appearance is also updated */}
             <Button className={!showSolidHeader ? 'bg-white text-dark-gray hover:bg-gray-200' : ''}>Get started</Button>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" className={`transition-colors ${linkClasses}`}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4">
            <nav className="flex flex-col space-y-1 px-4">
              {navItems.map((item) => (
                <div key={item.title}>
                  {item.children ? (
                    <>
                      <button onClick={() => setIsServicesOpen(!isServicesOpen)} className="w-full flex justify-between items-center px-4 py-3 rounded-md text-base font-medium text-dark-gray hover:bg-light-gray">
                        <span>{item.title}</span>
                        <ChevronDown className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} size={20} />
                      </button>
                      {isServicesOpen && (
                        <div className="pl-4 mt-1 space-y-1 border-l-2 border-gray-100">
                          {item.children.map((child) => (
                             <a key={child.title} href={child.href} onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 rounded-md text-base font-medium text-gray-600 hover:bg-light-gray">
                               {child.title}
                             </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a href={item.href} onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 rounded-md text-base font-medium text-dark-gray hover:bg-light-gray">
                      {item.title}
                    </a>
                  )}
                </div>
              ))}
              <hr className="my-2" />
              <div className="px-4 py-2 space-y-2">
                 <Button className="w-full">Get started</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

const ChevronDownIcon = () => (
  <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1 transition-transform duration-200 group-data-[state=open]:-rotate-180">
    <path d="M11 1L6 6L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path>
  </svg>
);