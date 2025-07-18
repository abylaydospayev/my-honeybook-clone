'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Image from 'next/image';
import { team } from '@/lib/team-full-data';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

export function TeamMain() {
  return (
    <section className="bg-white px-4 py-20 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold tracking-tight text-gray-900 mb-4">Meet Our Experts</h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Passionate professionals driving innovation and impact.
        </p>
      </div>

      {/* Top 3: Executives or Featured */}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 mb-24">
        {team.slice(0, 3).map((member, idx) => (
          <motion.div
            key={idx}
            className="group space-y-5 rounded-xl bg-gray-50 p-5 hover:shadow-xl transition"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={idx}
          >
            <div className="overflow-hidden rounded-lg">
              <Image
                src={member.image}
                alt={`Photo of ${member.name}`}
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-100 filter grayscale group-hover:grayscale-0 transition duration-300"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sm text-brand-blue font-medium">{member.title}</p>
              <p className="text-gray-600 text-sm whitespace-pre-line">{member.description}</p>
              <a
                href={`mailto:${member.email}`}
                className="inline-block mt-2 text-blue-500 hover:underline text-sm"
              >
                {member.email}
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Rest of the Team */}
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {team.slice(3).map((member, idx) => (
          <motion.div
            key={idx}
            className="group space-y-4 rounded-lg bg-white p-4 border border-gray-100 shadow-sm hover:shadow-md transition"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={idx}
          >
            <div className="overflow-hidden rounded-md">
              <Image
                src={member.image}
                alt={`Photo of ${member.name}`}
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-100 filter grayscale group-hover:grayscale-0 transition duration-300"              
            />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">{member.name}</h4>
              <p className="text-sm text-brand-blue font-medium">{member.title}</p>
              <p className="text-sm text-gray-600 whitespace-pre-line">{member.description}</p>
              <a
                href={`mailto:${member.email}`}
                className="inline-block mt-1 text-blue-500 hover:underline text-xs"
              >
                {member.email}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}