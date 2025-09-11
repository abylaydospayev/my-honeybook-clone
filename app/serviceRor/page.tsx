'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { LogoCarousel } from '@/components/page_sections/LogoCarousel';
import { ContactModal } from '@/components/ui/ContactModal'
import { ScrollToTopButton } from '@/components/layout/ScrollToTopButton';
import { ServicesRor } from '@/components/page_sections/ServicesRor';

export default function ServicesRorPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  return (
      
      <div >
      <Header 
        variant="transparent" 
        onContactClick={() => setIsContactModalOpen(true)} 
      />

      <main>
        <ServicesRor /> 
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
