'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { Button } from '../ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { navItems, ChildNavItem } from '@/lib/navigation-data';

type HeaderProps = {
  variant?: 'solid' | 'transparent';
  onContactClick?: () => void;
};

export function Header({ variant = 'solid', onContactClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showSolidHeader = variant === 'solid' || isScrolled || isMenuOpen;
  const linkClasses = showSolidHeader ? 'text-dark-gray' : 'text-white';

  const renderDropdownContent = (children: ChildNavItem[], isMobile = false) => {
    const columns: ChildNavItem[][] = [];
    let currentColumn: ChildNavItem[] = [];

    children.forEach(child => {
      if (child.type === 'heading') {
        if (currentColumn.length > 0) columns.push(currentColumn);
        currentColumn = [child];
      } else {
        currentColumn.push(child);
      }
    });
    if (currentColumn.length > 0) columns.push(currentColumn);

    if (isMobile) {
      return (
        <div className="flex flex-col space-y-4">
          {columns.map((col, colIndex) => (
            <div key={colIndex} className="flex flex-col">
              {col.map(child =>
                child.type === 'heading' ? (
                  <h4 key={child.title} className="font-bold text-sm text-gray-400 uppercase tracking-wider pt-2 pb-1 px-3">{child.title}</h4>
                ) : (
                  <Link href={child.href} key={child.title} onClick={() => setIsMenuOpen(false)} className="flex items-center p-3 rounded-lg hover:bg-light-gray">
                    {child.icon && <child.icon className="h-5 w-5 text-brand-blue flex-shrink-0 mr-3" />}
                    <div className="flex flex-col">
                      <p className="text-base font-medium text-dark-gray">{child.title}</p>
                      {child.description && <p className="text-xs text-gray-500">{child.description}</p>}
                    </div>
                  </Link>
                )
              )}
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="flex gap-x-12">
        {columns.map((columnItems, colIndex) => (
          <div key={colIndex} className="flex flex-col space-y-2 w-64">
            {columnItems.map(child =>
              child.type === 'heading' ? (
                <h4 key={child.title} className="font-bold text-sm text-gray-400 uppercase tracking-wider pt-2 pb-1 px-3">{child.title}</h4>
              ) : (
                <NavigationMenu.Link asChild key={child.title}>
                  <a href={child.href} className="flex items-start p-3 rounded-lg hover:bg-light-gray">
                    {child.icon && <child.icon className="h-6 w-6 text-brand-blue flex-shrink-0 mt-1" />}
                    <div className="ml-4">
                      <p className="text-sm font-semibold text-dark-gray">{child.title}</p>
                      {child.description && <p className="text-sm text-gray-500">{child.description}</p>}
                    </div>
                  </a>
                </NavigationMenu.Link>
              )
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${showSolidHeader ? 'bg-white/90 shadow-sm backdrop-blur-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-4">

          {/* Left: Logo */}
          <div className="flex-1">
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
          </div>

          {/* Center: Nav */}
          <div className="hidden lg:flex justify-center flex-1">
            <NavigationMenu.Root>
              <NavigationMenu.List className="flex items-center space-x-2">
                {navItems.map(item => {
                  const isActive = !!(item.href && pathname.startsWith(item.href));
                  return (
                    <NavigationMenu.Item key={item.title}>
                      {item.children ? (
                        <>
                          <NavigationMenu.Trigger asChild>
                            <a href={item.href} className={`group relative inline-flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none ${linkClasses} ${showSolidHeader ? 'hover:bg-gray-100' : 'hover:bg-white/10'}`}>
                              <span>{item.title}</span>
                              <ChevronDownIcon className="opacity-0 group-hover:opacity-100 transform translate-y-0 group-hover:translate-y-1 transition-all duration-200" />
                              {isActive && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#20bad1]"></span>}
                            </a>
                          </NavigationMenu.Trigger>
                          <NavigationMenu.Content className="absolute top-full mt-2 w-auto bg-white rounded-lg shadow-lg p-6">
                            {renderDropdownContent(item.children)}
                          </NavigationMenu.Content>
                        </>
                      ) : (
                        <NavigationMenu.Link asChild active={isActive}>
                          <a href={item.href} className={`relative px-4 py-2 rounded-md text-sm font-medium transition-colors ${linkClasses} ${showSolidHeader ? 'hover:bg-gray-100' : 'hover:bg-white/10'}`}>
                            {item.title}
                            {isActive && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#20bad1]"></span>}
                          </a>
                        </NavigationMenu.Link>
                      )}
                    </NavigationMenu.Item>
                  );
                })}
              </NavigationMenu.List>
            </NavigationMenu.Root>
          </div>

          {/* Right: Buttons */}
          <div className="hidden lg:flex items-center space-x-4 justify-end flex-1">
            <Button asChild variant="secondary">
              <a href="https://projects.bulleconsulting.com/" target="_blank" rel="noopener noreferrer">
                Login
              </a>
            </Button>
            <Button onClick={onContactClick} className={!showSolidHeader ? 'bg-white text-dark-gray hover:bg-gray-200' : 'bg-dark-gray text-white'}>
              Let's talk
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" className={`transition-colors ${linkClasses}`}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4">
            <nav className="flex flex-col space-y-1 px-4">
              {navItems.map(item => {
                const isActive = !!(item.href && pathname.startsWith(item.href));
                return (
                  <div key={item.title}>
                    {item.children ? (
                      <>
                        <button onClick={() => setIsServicesOpen(!isServicesOpen)} className={`w-full flex justify-between items-center px-4 py-3 rounded-md text-base font-medium hover:bg-light-gray ${isActive ? 'text-[#20bad1]' : 'text-dark-gray'}`}>
                          <span>{item.title}</span>
                          <ChevronDown className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} size={20} />
                        </button>
                        {isServicesOpen && (
                          <div className="pl-4 mt-1 space-y-1 border-l-2 border-gray-100">
                            {renderDropdownContent(item.children, true)}
                          </div>
                        )}
                      </>
                    ) : (
                      <a href={item.href} onClick={() => setIsMenuOpen(false)} className={`block px-4 py-3 rounded-md text-base font-medium hover:bg-light-gray ${isActive ? 'text-[#20bad1] font-bold' : 'text-dark-gray'}`}>
                        {item.title}
                      </a>
                    )}
                  </div>
                );
              })}
              <hr className="my-2" />
              <div className="px-4 py-2 flex items-center gap-2">
                <Button asChild variant="secondary" className="w-full">
                  <a href="https://projects.bulleconsulting.com/" target="_blank" rel="noopener noreferrer">
                    Login
                  </a>
                </Button>
                <Button onClick={onContactClick} className="w-full">Let's talk</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" className={`ml-1 transition-transform duration-200 group-data-[state=open]:-rotate-180 ${className || ''}`}>
    <path d="M11 1L6 6L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path>
  </svg>
);
