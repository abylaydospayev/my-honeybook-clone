'use client';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContactSection } from '@/components/page_sections/ContactSection';
import { LogoCarousel } from '@/components/page_sections/LogoCarousel';

// A simple hero component for the top of the contact page
const ContactHero = () => (
  <section className="relative h-[50vh] min-h-[300px] flex items-center justify-center text-center bg-dark-gray">
    <video
      src="/video/background_pic.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover z-0"
    />
    <div className="absolute inset-0 bg-black/70" />
    <div className="relative z-10 px-6">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
        Contact Us
      </h1>
      <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
        Have a question or a project in mind? We'd love to hear from you.
      </p>
    </div>
  </section>
);


export default function ContactUsPage() {
  return (
    <div className="bg-light-gray overflow-x-hidden">
      <Header />
      <main>
        <ContactHero />
        <ContactSection onContactClick={() => { console.log('Contact clicked'); }} />
        <LogoCarousel />
      </main>
      <Footer />
    </div>
  );
}
