'use client';

import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { LogoCarousel } from '@/components/page_sections/LogoCarousel';
import { TeamMain } from '@/components/page_sections/TeamMain';

export default function TeamPage() {
  return (
      
      <div >
      <Header />
      <main>
        <TeamMain />
        <LogoCarousel />
      </main>

      <Footer />
    </div>
  );
}
