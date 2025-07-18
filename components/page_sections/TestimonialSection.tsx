'use client';

import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { PlayCircle, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    imageSrc: '/image/pic1.jpg',
    name: 'Marcus Allen',
    title: 'COO, TriloTech Solutions',
    videoUrl: '#',
  },
  {
    imageSrc: '/image/pic2.jpg',
    name: 'Elias Romero',
    title: 'Chief Marketing Officer, OrionLoop Media',
    videoUrl: '#',
  },
  {
    imageSrc: '/image/pic3.jpg',
    name: 'Nathaniel Brooks',
    title: 'Founder & CEO, VoltEdge Systems',
    videoUrl: '#',
  },
];

const parentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

export function TestimonialSection() {
  return (
    <motion.section
      className="py-24 bg-dark-gray"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={parentVariants}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white">
            700+ Business Owners Feel the Magic
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            See what our clients have to say about working with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="group relative rounded-2xl overflow-hidden"
              variants={cardVariants}
            >
              <Image
                src={testimonial.imageSrc}
                alt={`Portrait of ${testimonial.name}`}
                width={400}
                height={500}
                className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <a
                  href={testimonial.videoUrl}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label={`Play testimonial from ${testimonial.name}`}
                >
                  <PlayCircle size={64} className="text-white/80" />
                </a>
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-gray-300">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
