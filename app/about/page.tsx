import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AboutUs } from '@/components/page_sections/AboutUs';

export default function AboutPage() {
  return (
      
      <div >
      <Header />

      <main>
        <AboutUs /> 

      </main>

      <Footer />
    </div>
  );
}

