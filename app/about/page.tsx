'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AboutUs } from '@/components/page_sections/AboutUs';
import { Hero } from '@/components/page_sections/Hero';
import { LogoCarousel } from '@/components/page_sections/LogoCarousel';

import { ContactModal } from '@/components/ui/ContactModal';


export default function AboutPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  return (
      <div >
      <Header 
        variant="transparent" 
        onContactClick={() => setIsContactModalOpen(true)} 
      />

      <main>
        <Hero />
        <AboutUs /> 
        <LogoCarousel/>
      </main>

      <Footer />
            <ContactModal 
              isOpen={isContactModalOpen} 
              onClose={() => setIsContactModalOpen(false)} 
            />
    </div>
  );
}

