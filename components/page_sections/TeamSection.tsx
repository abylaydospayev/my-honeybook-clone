'use client';

import { motion, type Variants } from 'framer-motion';
import { Card } from '../ui/card';
import Image from 'next/image';
import { teamMembers } from '@/lib/team-data';
import { Button } from '../ui/button';

export function TeamSection() {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      }
    },
  };

  return (
    <motion.section 
      className="p-4 md:p-8 bg-light-gray"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* This container ensures consistent width and padding */}
      <div className="max-w-7xl mx-auto px-6">
        <Card id="team" className="p-8 md:p-12 border-gray-200/80 bg-white">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-10 text-dark-gray">Meet The Leadership</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
            {/* Team member content... */}
            {teamMembers.map((member) => (
              <div key={member.id}>
                <Image src={member.imageSrc} width={128} height={128} alt={member.name} className="w-32 h-32 mx-auto rounded-full object-cover bg-gray-200 mb-4" />
                <h3 className="text-xl font-semibold text-dark-gray">{member.name}</h3>
                <p className="text-brand-blue font-medium">{member.title}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Button variant="secondary" size="lg" className="w-full max-w-xs">
              Meet the Rest of Our Experts
            </Button>
          </div>
        </Card>
      </div>
    </motion.section>
  );
}