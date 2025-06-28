'use client';

import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/page_sections/HeroSection';
import { LogoCarousel } from '@/components/page_sections/LogoCarousel';
import { IntroSection } from '@/components/page_sections/IntroSection';
import { ServicesSection } from '@/components/page_sections/ServicesSection';
import { TeamSection } from '@/components/page_sections/TeamSection';
import { TestimonialSection } from '@/components/page_sections/TestimonialSection';
import { ContactSection } from '@/components/page_sections/ContactSection';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <div className="bg-light-gray overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <IntroSection />
        <ServicesSection />
        <TeamSection />
        <TestimonialSection />
        <LogoCarousel />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
