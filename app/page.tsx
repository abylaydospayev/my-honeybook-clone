import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/page_sections/HeroSection';
import { BentoGrid } from '@/components/page_sections/BentoGrid';
import { Footer } from '@/components/layout/Footer';
import { LogoCarousel } from '@/components/page_sections/LogoCarousel';
import { TestimonialSection } from '@/components/page_sections/TestimonialSection';

export default function HomePage() {
  return (
    // Use the custom light-gray for the main page background
    <div className="bg-light-gray">
      <Header />
      <HeroSection />
      <TestimonialSection />
      <LogoCarousel />
      <BentoGrid />
      <Footer />
    </div>
  );
}