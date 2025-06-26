'use client';

import { useRef } from 'react';
import { motion, useScroll, type Variants } from 'framer-motion';
import Image from 'next/image';
import { teamMembers } from '@/lib/team-data';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const cardHoverVariants: Variants = {
  initial: { y: 0 },
  hover: { y: -10, transition: { duration: 0.4, ease: 'easeInOut' } },
};

const imageVariants: Variants = {
  initial: { opacity: 1 },
  hover: { opacity: 0.15, transition: { duration: 0.5, ease: 'easeOut' } },
};

const detailsVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  hover: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut', delay: 0.15 },
  },
};

const bioVariants: Variants = {
  initial: { opacity: 0, y: 30 },
  hover: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut', delay: 0.25 },
  },
};

export function TeamSection() {
  const carouselRef = useRef<HTMLUListElement>(null);
  const { scrollXProgress } = useScroll({ container: carouselRef });

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="team" className="py-24 sm:py-32 bg-dark-gray text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white">
              Powering Growth with Elite Talent
            </h2>
            <p className="mt-4 text-base md:text-lg text-slate-300 max-w-2xl">
              Our work thrives because of the minds behind it. These are the visionaries and builders who make the impossible happen — every day.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              aria-label="Previous"
              className="p-2 rounded-full bg-slate-800/60 hover:bg-slate-700 transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Next"
              className="p-2 rounded-full bg-slate-800/60 hover:bg-slate-700 transition-colors"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* TEAM CARDS */}
        <ul
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar"
        >
          {teamMembers.map((member) => (
            <li key={member.id} className="flex-shrink-0 snap-start">
              <motion.div
                className="w-[300px] h-[420px]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <motion.div
                  className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 p-5 flex flex-col justify-end group"
                  variants={cardHoverVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  {/* IMAGE */}
                  <motion.div
                    variants={imageVariants}
                    className="absolute inset-0 transition-opacity duration-300"
                  >
                    <Image
                      src={member.imageSrc}
                      alt={member.name}
                      fill
                      sizes="300px"
                      className="object-cover"
                    />
                  </motion.div>

                  {/* BIO */}
                  <motion.div
                    variants={bioVariants}
                    className="absolute inset-0 p-6 bg-black/50 backdrop-blur-sm flex items-center opacity-0 group-hover:opacity-100"
                  >
                    <p className="text-white text-sm leading-relaxed">{member.bio}</p>
                  </motion.div>

                  {/* NAME & TITLE */}
                  <motion.div
                    variants={detailsVariants}
                    className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 z-10"
                  >
                    <div className="w-full h-20 bg-gradient-to-t from-black/80 to-transparent absolute bottom-0 left-0 rounded-b-2xl" />
                    <div className="relative z-10">
                      <h3 className="font-bold text-lg text-white">{member.name}</h3>
                      <p className="text-sm text-gray-300">{member.title}</p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </li>
          ))}
        </ul>

        {/* PROGRESS BAR */}
        <div className="w-full max-w-sm mx-auto mt-12 h-1.5 bg-slate-700 rounded-full">
          <motion.div
            className="h-1.5 bg-brand-blue rounded-full origin-left"
            style={{ scaleX: scrollXProgress }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          />
        </div>
      </div>
    </section>
  );
}
