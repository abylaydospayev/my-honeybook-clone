'use client';

import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { LogoCarousel } from '@/components/page_sections/LogoCarousel';
import { TeamMain } from '@/components/page_sections/TeamMain';
import { ScrollToTopButton } from '@/components/layout/ScrollToTopButton';
import { ContactModal } from '@/components/ui/ContactModal';
import { useState } from 'react';

export default function TeamPage() {
     const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  return (
      <div >
      <Header />
      <main>
        <TeamMain />
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
