'use client';

import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import Image from 'next/image';
import { teamMembers } from '@/lib/team-data';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export function TeamSection() {
  const carouselRef = useRef<HTMLUListElement>(null);
  const { scrollXProgress } = useScroll({ container: carouselRef });

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0].clientWidth;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="team" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-gray">
            Meet Our Team of Experts
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We provide all the advantage that can simplify your financial and banking support without any further issues.
          </p>
        </div>

        {/* Draggable Carousel */}
        <div className="mt-16">
          <ul 
            ref={carouselRef}
            className="flex gap-8 overflow-x-auto cursor-grab active:cursor-grabbing no-scrollbar snap-x snap-mandatory"
          >
            {teamMembers.map((member) => (
              <li key={member.id} className="flex-shrink-0 snap-center w-[calc(100%-2rem)] sm:w-auto">
                <motion.div
                  className="w-full sm:w-[340px] rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  {/* Image goes in the top part of the card */}
                  <div className="relative w-full h-80 bg-gray-200">
                    <Image
                      src={member.imageSrc}
                      alt={`Portrait of ${member.name}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Text goes in the bottom part of the card */}
                  <div className="p-6 bg-white">
                    <h3 className="font-bold text-xl text-dark-gray leading-tight">{member.name}</h3>
                    <p className="text-sm text-brand-blue font-semibold">{member.title}</p>
                    <p className="mt-4 text-sm text-gray-600 h-24">
                      {member.bio}
                    </p>
                    <div className="mt-4 flex items-center gap-4">
                      {member.socials?.map((social, index) => (
                        <a key={index} href={social.href} className="text-gray-400 hover:text-dark-gray">
                          <social.icon size={20} />
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Navigation Controls */}
        <div className="flex justify-between items-center max-w-sm mx-auto mt-12">
            <button onClick={() => scroll('left')} aria-label="Previous" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <ArrowLeft size={20} className="text-gray-500" />
            </button>
            <div className="w-full mx-4 h-1.5 bg-gray-200 rounded-full">
                <motion.div 
                    className="h-1.5 bg-brand-blue rounded-full"
                    style={{ scaleX: scrollXProgress, transformOrigin: 'left' }}
                />
            </div>
            <button onClick={() => scroll('right')} aria-label="Next" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <ArrowRight size={20} className="text-gray-500" />
            </button>
        </div>
      </div>
    </section>
  );
}