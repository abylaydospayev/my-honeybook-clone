import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ServicesMain } from '@/components/page_sections/ServicesMain';
import { CategoriesCards } from '@/components/page_sections/CategoriesCards';
import { LogoCarousel } from '@/components/page_sections/LogoCarousel';


export default function ServicesPage() {
  return (
      
      <div >
      <Header />

      <main>
        <ServicesMain /> 
        <CategoriesCards/>
        <LogoCarousel />
      </main>

      <Footer />
    </div>
  );
}
