'use client';

import { useState, useEffect } from 'react';
import Loading from './loading'; // Assuming you have a loading component

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time for your assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  // Simple keyframe animation for the fade-in effect
  const fadeInAnimation = {
    animation: `fadeIn 1s ease-in-out`,
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div
          className="bg-light-gray overflow-x-hidden"
          style={fadeInAnimation}
        >
          <Header />
          <main>
            <HeroSection />
            <IntroSection />
            <ServicesSection />
            <TeamSection />
            <TestimonialSection />
            <LogoCarousel />
            <ContactSection/>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}