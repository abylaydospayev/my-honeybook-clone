'use client';

import { useState, useEffect } from 'react';
import Loading from './loading';

import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/page_sections/HeroSection';
import { BentoGrid } from '@/components/page_sections/BentoGrid';
import { TeamSection } from '@/components/page_sections/TeamSection';
import { IntroSection } from '@/components/page_sections/IntroSection';
import { TestimonialSection } from '@/components/page_sections/TestimonialSection';
import { LogoCarousel } from '@/components/page_sections/LogoCarousel';
import { ServicesSection } from '@/components/page_sections/ServicesSection';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1500); // Simulated delay
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div
          className="bg-light-gray overflow-x-hidden animate-fade-in"
          style={{ animation: 'fadeIn 0.5s ease-out forwards' }}
        >
          <Header />
          <main>
            <HeroSection />
            <IntroSection />
            <BentoGrid />
            <ServicesSection />
            <TeamSection />
            <TestimonialSection />
            <LogoCarousel />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
