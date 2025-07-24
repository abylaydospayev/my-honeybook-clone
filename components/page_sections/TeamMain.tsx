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
    <section className="relative overflow-hidden bg-gradient-to-br from-white to-blue-50 px-4 py-20 max-w-7xl mx-auto">
      {/* Decorative floating background shapes */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-blue-100 opacity-30 rounded-full blur-3xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 0.3, y: 0 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute bottom-[-4rem] right-[-2rem] w-96 h-96 bg-blue-200 opacity-20 rounded-full blur-3xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.2, y: 0 }}
        transition={{ duration: 1.2 }}
      />

      {/* Featured Team Members */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mb-24 relative z-10">
        {team.slice(0, 3).map((member, idx) => (
          <motion.div
            key={idx}
            className="group space-y-5 rounded-xl bg-white/90 p-5 shadow-md border border-gray-100 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
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
                className="rounded-lg object-cover w-full h-100 filter grayscale group-hover:grayscale-0 transition duration-500 ease-in-out"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sm text-brand-blue font-semibold">{member.title}</p>
              <p className="text-gray-600 text-sm whitespace-pre-line">{member.description}</p>
              <a
                href={`mailto:${member.email}`}
                className="inline-block mt-2 text-blue-600 font-medium hover:underline text-sm"
              >
                {member.email}
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Full Team */}
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 relative z-10">
        {team.slice(3).map((member, idx) => (
          <motion.div
            key={idx}
            className="group space-y-4 rounded-xl bg-white p-4 border border-gray-100 shadow hover:shadow-md hover:scale-[1.015] transition-all"
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
              <h4 className="text-lg font-bold text-gray-900">{member.name}</h4>
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
