'use client';

import { motion, type Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function BentoGrid() {
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
      className="py-24" // The dark background comes from the parent now
      variants={animationVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* This container ensures consistent width and padding */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl bg-dark-gray p-8 md:p-12 text-white">
          
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                A Framework for Actionable, Data-Driven Insights
              </h2>
              <p className="mt-6 text-lg text-gray-400">
                We move beyond traditional consulting. We provide the tools, frameworks, and hands-on support to build high-growth, defensible businesses from the ground up.
              </p>
              <a href="#" className="mt-8 inline-flex items-center font-semibold text-brand-blue hover:text-blue-400 transition-colors">
                Discover Our Framework <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
            
            <div className="lg:col-span-2 rounded-lg overflow-hidden shadow-2xl">
              <video
                src="/video/Bar_Chart_Video_Generated.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <hr className="my-12 border-gray-700/50" />

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl h-full hover:bg-slate-800 transition-colors">
              <h3 className="font-semibold text-xl">Our Mission</h3>
              <p className="mt-2 text-gray-400">
                To continually develop our services to meet and exceed client expectations through our Return on Relationship (ROR) framework.
              </p>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl h-full hover:bg-slate-800 transition-colors">
              <h3 className="font-semibold text-xl">Our Vision</h3>
              <p className="mt-2 text-gray-400">
                To be the single point of contact for support and be recognized as an excellent service provider by all stakeholders.
              </p>
            </div>

            <div className="relative bg-slate-800/50 rounded-xl overflow-hidden h-full">
               <video
                src="/video/Video_Ready_Upward_Arrow.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
               <div className="absolute inset-0 bg-black/30"></div>
               <div className="relative z-10 p-6 flex flex-col justify-center items-center text-center h-full">
                  <p className="text-6xl font-extrabold text-white">3x</p>
                  <p className="mt-2 font-semibold text-gray-200">Average YoY portfolio growth for our clients.</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}