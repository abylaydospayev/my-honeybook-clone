'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/page_sections/HeroSection';
import { LogoCarousel } from '@/components/page_sections/LogoCarousel';
import { ServicesSection } from '@/components/page_sections/ServicesSection';
import { TeamSection } from '@/components/page_sections/TeamSection';
import { TestimonialSection } from '@/components/page_sections/TestimonialSection';
import { ContactSection } from '@/components/page_sections/ContactSection';
import { ContactModal } from '@/components/ui/ContactModal';

export default function HomePage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="bg-light-gray overflow-x-hidden">
      <Header 
        variant="transparent" 
        onContactClick={() => setIsContactModalOpen(true)} 
      />

      <main>
        <HeroSection />
        <LogoCarousel />
        <ServicesSection />
        <TeamSection />
        <TestimonialSection />
        <ContactSection />
      </main>
      
      <Footer />

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}