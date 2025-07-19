'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/page_sections/HeroSection';
import { LogoCarousel } from '@/components/page_sections/LogoCarousel';
import { ServicesSection } from '@/components/page_sections/ServicesSection';
import { TeamSection } from '@/components/page_sections/TeamSection';
import { TestimonialSection } from '@/components/page_sections/TestimonialSection';
import { ContactModal } from '@/components/ui/ContactModal';
import { ScrollToTopButton } from '@/components/layout/ScrollToTopButton';
import { AnimatedTestimonials } from '@/components/ui/AnimatedTestimonials';



export default function HomePage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="bg-light-gray overflow-x-hidden">
      <Header 
        variant="transparent"
        onContactClick={() => setIsContactModalOpen(true)} 
      />

      <main>
        <HeroSection 
  title="FIND THAT MISSING PIECE" 
  description="We Can Find What's Missing In Your Business And Address Your Needs" 
/>
        <ServicesSection />
        <TeamSection />

        <TestimonialSection/>
        
        <LogoCarousel />
      </main>
        <ScrollToTopButton />
      <Footer />

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}