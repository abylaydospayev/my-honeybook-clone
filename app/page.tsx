'use client'; // This must be a client component to manage the modal state

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/page_sections/HeroSection';
import { LogoCarousel } from '@/components/page_sections/LogoCarousel';
import { IntroSection } from '@/components/page_sections/IntroSection';
import { ServicesSection } from '@/components/page_sections/ServicesSection';
import { TeamSection } from '@/components/page_sections/TeamSection';
import { TestimonialSection } from '@/components/page_sections/TestimonialSection';
import { ContactSection } from '@/components/page_sections/ContactSection';
import { ContactModal } from '@/components/ui/ContactModal'; // Import the new modal

export default function HomePage() {
  // State to control the visibility of the contact modal
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="bg-light-gray overflow-x-hidden">
      
      {/* Pass the function to open the modal to the Header */}
      <Header 
        variant="transparent" 
        onContactClick={() => setIsContactModalOpen(true)} 
      />

      <main>
        <HeroSection />
        <LogoCarousel />
        <IntroSection />
        <ServicesSection />
        <TeamSection />
        <TestimonialSection />
        <ContactSection />
      </main>
      
      <Footer />

      {/* The modal component is here, ready to be shown when the state changes */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}