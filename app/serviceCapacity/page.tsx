'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { LogoCarousel } from '@/components/page_sections/LogoCarousel';
import { ContactModal } from '@/components/ui/ContactModal'
import { ScrollToTopButton } from '@/components/layout/ScrollToTopButton';
import { ServicesCapacity } from '@/components/page_sections/ServicesCapacity';

export default function ServicesCapacityPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  return (
      
      <div >
      <Header 
        variant="transparent" 
        onContactClick={() => setIsContactModalOpen(true)} 
      />

      <main>
        <ServicesCapacity /> 
        <LogoCarousel />
      </main>
        <ScrollToTopButton />
      <ContactModal 
              isOpen={isContactModalOpen} 
              onClose={() => setIsContactModalOpen(false)} 
            />
      <Footer />
    </div>
  );
}
