'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { teamMembers } from '@/lib/team-data';
import { ChevronDown } from 'lucide-react';

export function TeamSection() {
  // State to track the ID of the currently open/active member
  // We'll default to showing the first member's bio
  const [activeMemberId, setActiveMemberId] = useState<number | null>(teamMembers[0].id);

  const toggleMember = (id: number) => {
    // If the clicked member is already active, close it. Otherwise, open it.
    setActiveMemberId(activeMemberId === id ? null : id);
  };

  return (
    <section id="team" className="py-24 sm:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-gray">
            Meet Our Team of Experts
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our team is composed of seasoned operators, strategists, and former founders. We have been in your shoes.
          </p>
        </div>

        {/* The Accordion List - now used for all screen sizes */}
        <div className="mt-16 border-t border-gray-200">
          {teamMembers.map((member) => (
            <div key={member.id} className="border-b border-gray-200">
              <button 
                onClick={() => toggleMember(member.id)}
                className="w-full flex justify-between items-center text-left py-6 transition-colors hover:bg-gray-50"
                aria-expanded={activeMemberId === member.id}
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={member.imageSrc}
                    alt={member.name}
                    width={56}
                    height={56}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-dark-gray">{member.name}</h3>
                    <p className="text-sm text-brand-blue">{member.title}</p>
                  </div>
                </div>
                <ChevronDown 
                  size={24} 
                  className={`text-gray-400 transition-transform duration-300 ${activeMemberId === member.id ? 'rotate-180' : ''}`} 
                />
              </button>
              
              {/* The expandable bio section with animation */}
              <AnimatePresence>
                {activeMemberId === member.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 pr-12 pl-20">
                      <p className="text-gray-700 leading-relaxed">{member.bio}</p>
                      <div className="mt-4 flex items-center gap-4">
                        {member.socials?.map((social, index) => (
                          <a key={index} href={social.href} className="text-gray-400 hover:text-dark-gray">
                            <social.icon size={20} />
                          </a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}