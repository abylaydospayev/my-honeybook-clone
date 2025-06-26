'use client';

import { motion, type Variants } from 'framer-motion';
import { Card, CardContent } from '../ui/card';

export function IntroSection() {
  
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
      className="py-24 bg-white"
      variants={animationVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-6 ">
        <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">Real Results, Real Partnerships</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Our success is measured by the success of our clients.
            </p>
        </div>
        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
            {/* Video Player Column */}
            <div className="rounded-2xl overflow-hidden shadow-xl bg-black">
                <video
                    src="/video/Video_Testimonial.mp4"
                    autoPlay  // <-- ADDED
                    loop      // <-- ADDED: makes the video loop
                    muted     // <-- ADDED: essential for autoplay to work
                    controls  // Kept so users can unmute and control playback
                    className="w-full h-full object-cover"
                >
                    Your browser does not support the video tag.
                </video>
            </div>
            
            {/* Quote Column */}
            <div className="text-left">
                <blockquote className="text-2xl font-medium text-gray-800 border-l-4 border-blue-600 pl-6">
                    "Working with Bulle Consulting has been a game-changer for our business. Their strategic insights and dedicated support helped us navigate complex challenges."
                </blockquote>
                <p className="mt-6 font-semibold text-gray-900">— Samir, Founder of Fintrio</p>
            </div>
        </div>
      </div>
    </motion.section>
  );
}