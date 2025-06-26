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
  return (
    // FIX: Re-added 'overflow-x-hidden' to the main page container
    <div className="bg-light-gray overflow-x-hidden">
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
  );
}