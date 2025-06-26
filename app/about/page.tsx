import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AboutUs } from '@/components/page_sections/AboutUs';
import { Hero } from '@/components/page_sections/Hero';
import { LogoCarousel } from '@/components/page_sections/LogoCarousel';

export default function AboutPage() {
  return (
      
      <div >
      <Header />

      <main>
        <Hero />
        <AboutUs /> 
        <LogoCarousel/>
      </main>

      <Footer />
    </div>
  );
}

