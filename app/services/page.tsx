'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ServicesMain } from '@/components/page_sections/ServicesMain';
import { CategoriesCards } from '@/components/page_sections/CategoriesCards';
import { LogoCarousel } from '@/components/page_sections/LogoCarousel';
import { ContactModal } from '@/components/ui/ContactModal'
import { ScrollToTopButton } from '@/components/layout/ScrollToTopButton';



export default function ServicesPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  return (
      
      <div >
      <Header 
        variant="transparent" 
        onContactClick={() => setIsContactModalOpen(true)} 
      />

      <main>
        <ServicesMain /> 
        <CategoriesCards/>
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
