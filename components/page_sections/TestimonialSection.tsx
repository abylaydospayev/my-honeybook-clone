'use client';

import { motion, type Variants } from 'framer-motion';
import { Card } from '../ui/card';

export function TestimonialSection() {
  const animationVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  return (
    <motion.section 
      className="py-24 bg-white" // Give it a distinct white background
      variants={animationVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-dark-gray">What Our Partners Say</h2>
        <Card className="mt-12 p-8 md:p-12 text-left border-gray-200/80">
          <blockquote className="text-xl md:text-2xl font-medium text-dark-gray">
            “The clarity Bulle brought to our strategy was incredible. It felt like they were a founding member of the team, deeply invested in our success. We moved faster and with more confidence than ever before.”
          </blockquote>
          <p className="mt-6 font-semibold text-gray-900">— Samir, Founder of Fintrio</p>
        </Card>
      </div>
    </motion.section>
  );
}