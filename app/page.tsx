import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/page_sections/HeroSection';
import { BentoGrid } from '@/components/page_sections/BentoGrid';
import { LogoCarousel } from '@/components/page_sections/LogoCarousel';
import { IntroSection } from '@/components/page_sections/IntroSection';
import { TestimonialSection } from '@/components/page_sections/TestimonialSection';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
  return (
    // Use the custom light-gray for the main page background
    <div className="bg-light-gray">
      <Header />
      <HeroSection />
      <IntroSection />
      <LogoCarousel />
      <BentoGrid />
      <TestimonialSection/>
      <Footer />
    </div>
  );
}