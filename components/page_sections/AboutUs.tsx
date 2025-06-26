import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import { CounterSection } from '@/components/page_sections/CounterSection';
import { Categories } from '@/components/page_sections/Categories';
import { useEffect, useState } from "react";
import { Signature } from '@/components/page_sections/Signature';


export function AboutUs() {
  const animationVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };
    return (

      <section className="about-section">
        <div className="bg-light-gray overflow-x-hidden">
        <main className="pt-24 px-6 md:px-12 py-16 space-y-14 text-gray-900 flex-grow bg-blue-50 rounded-xl shadow-md">
         {/* Hero Section */}
        <div
        style={{
          backgroundImage: "url('/image/hasan.pixels.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "650px",
        }}
        className="relative text-white text-center flex items-center justify-center"
      >
        <div className="overlay-gradient absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold">Your Consulting Company</h1>
        </div>
      </div>
                {/* About Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 mt-16">
          <div className="md:flex-1">
            <h1 className="text-4xl font-bold tracking-tight">About Us</h1>
            <p className="text-lg leading-relaxed">
              Our mission is to continually develop our services to meet and exceed expectations, while contributing to client success through a Return on Relationship (ROR) framework that boosts Return on Investment (ROI).
              Bulle Consulting is a specialist consultancy at the heart of helping CBOs and SMEs scale with a purpose. We work together with our clients and partners to take bold strategic ideas, and turn them into purposeful action.
            </p>
          </div>
          <div className="md:flex-1">
            <Image src="/image/officeGuy.jpg" width={700} height={300} alt="office Guy" className="rounded-lg shadow-lg object-cover" />
          </div>
          </section>

          <CounterSection />
  
          <Categories />
  
          <section
      className="relative h-[400px] md:h-[600px] flex items-center justify-center text-center px-6"
      style={{
        backgroundImage: "url('/image/stars.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Quote content */}
      <div className="relative z-10 max-w-3xl text-white">
        <blockquote className="text-2xl md:text-4xl font-semibold italic mb-6">
            Our core values are embedded in our team culture and day-to-day service delivery.
            We pride ourselves on providing a high-quality, user-friendly, knowledgeable, and professional experience.
        </blockquote>
        <p className="text-lg font-medium">Hassan Wardere – CEO</p>

      </div>
    </section>
        </main>
  
      </div>
      </section>
    );
  }
  
  