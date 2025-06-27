import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ServicesMain } from '@/components/page_sections/ServicesMain';
import { CategoriesCards } from '@/components/page_sections/CategoriesCards';


export default function ServicesPage() {
  return (
      
      <div >
      <Header />

      <main>
        <ServicesMain /> 
        <CategoriesCards/>

      </main>

      <Footer />
    </div>
  );
}
