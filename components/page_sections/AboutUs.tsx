'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Image from 'next/image';
import { Categories } from '@/components/page_sections/Categories';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

export function AboutUs() {
  return (
    <section className="about-section bg-[#f9fafb]">
      

      
      {/* Main content */}
      <main className="pt-24 px-6 md:px-20 pb-24 space-y-28 text-gray-800">
        {/* About Section */}
        <motion.section
          className="flex flex-col md:flex-row items-center gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="md:w-1/2 space-y-6 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 relative w-fit after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-full after:bg-brand-blue after:rounded-md after:content-['']">
              About Us
            </h2>
            <p className="text-md md:text-lg leading-relaxed text-gray-700">
              Our mission is to continually develop our services to meet and exceed expectations,
              while contributing to client success through a Return on Relationship (ROR) framework that boosts ROI.
            </p>
            <p className="text-md md:text-lg leading-relaxed text-gray-700">
              Bulle Consulting is a specialist consultancy at the heart of helping CBOs and SMEs scale with a purpose.
              We work closely with our clients and partners to transform bold strategic ideas into impactful action.
            </p>
          </div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="/image/officeGuy.jpg"
              alt="Office team working"
              width={700}
              height={500}
              className="rounded-2xl shadow-2xl object-cover w-full h-full"
            />
          </motion.div>
        </motion.section>

        {/* Counters and Categories */}
        {/* <CounterSection /> */}
        <Categories />

        {/* CTA Banner Section */}
        <section className="bg-[#1bbcd3] text-white py-14 px-6 md:px-24 flex flex-col md:flex-row items-center justify-between gap-8 rounded-xl shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-center md:text-left">
            We’re Delivering the Best<br className="hidden md:block" /> Customer Experience
          </h3>
          <a
            href="#services"
            className="bg-[#13111A] text-white font-semibold px-8 py-4 text-sm tracking-wide rounded-md transition duration-300 hover:bg-[#1f1c2a]"
          >
            DISCOVER MORE
          </a>
        </section>

        {/* Quote Section */}
        <section
          className="relative h-[420px] md:h-[550px] flex items-center justify-center text-center px-6 md:px-12"
          style={{
            backgroundImage: "url('/image/stars.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <div className="relative z-10 max-w-3xl text-white space-y-6">
            <blockquote className="text-2xl md:text-4xl font-light italic leading-snug">
              “Our core values are embedded in our team culture and day-to-day service delivery.
              We pride ourselves on providing a high-quality, user-friendly, knowledgeable, and professional experience.”
            </blockquote>
            <div>
              <p className="text-lg font-medium">Hassan Wardere – CEO</p>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}
