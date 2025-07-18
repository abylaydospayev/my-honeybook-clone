import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { LogoCarousel } from '@/components/page_sections/LogoCarousel';
import { TeamMain } from '@/components/page_sections/TeamMain';

export default function TeamPage() {
  return (
    <div>
      <Header />
      
      {/* Add padding here to create space below the fixed header */}
      <main className="pt-32 pb-24 px-6 bg-light-gray">
        <TeamMain />
        <LogoCarousel />
      </main>

      <Footer />
    </div>
  );
}