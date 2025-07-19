"use client";

import { motion, type Variants } from "framer-motion";
import { useRef } from "react";
import { Award, Briefcase, Users, BarChart2, MessageCircle, Settings } from "lucide-react";
// Import the component that handles the video background
import { MediaBackgroundSection } from "./MediaBackgroundSection"; // Adjust the import path if needed

// Animation variants for the text content
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function ServicesMain() {
  const targetRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={targetRef} className="relative bg-[#1c1c1e]">
      {/* MODIFIED HERO SECTION TO USE VIDEO */}
      <MediaBackgroundSection
        mediaSrc="/video/background_pic.mp4" // The video file path
        mediaType="video"
        overlayClass="bg-black/70"
        fullHeight={false} // Uses min-h-[80vh]
        contentClass="max-w-7xl mx-auto px-6 w-full" // Container classes
      >
        {/* All the original animated text content goes here */}
        <motion.div
          className="max-w-xl text-left" // Align text to the left
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.span
            className="text-sm uppercase tracking-wide text-brand-blue font-semibold"
            variants={itemVariants}
          >
            Our Services
          </motion.span>
          <motion.h1
            className="mt-4 text-4xl md:text-5xl font-bold leading-tight text-white"
            variants={itemVariants}
          >
            Making Strategy Simple & Purposeful
          </motion.h1>
          <motion.p
            className="mt-6 text-lg text-gray-300"
            variants={itemVariants}
          >
            We help businesses and community organizations grow sustainably by offering data-driven strategy, stakeholder engagement, and operational clarity. At Bulle Consulting, we don’t just provide services—we build futures.
          </motion.p>
        </motion.div>
      </MediaBackgroundSection>

      {/* Stats Section Below Hero (No changes needed here) */}
      <motion.div
        className="bg-gray-900/50 py-16 sm:py-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* Stat 1: Data-Driven Strategy */}
          <motion.div variants={itemVariants} className="flex flex-col items-center">
            <Award className="w-10 h-10 text-brand-blue mb-4" />
            <h3 className="text-2xl font-bold text-white">Data-Driven Strategy</h3>
            <p className="mt-2 text-gray-400">
              Leveraging analytics to provide actionable insights for sustainable growth.
            </p>
          </motion.div>

          {/* Stat 2: Stakeholder Engagement */}
          <motion.div variants={itemVariants} className="flex flex-col items-center">
            <Users className="w-10 h-10 text-brand-blue mb-4" />
            <h3 className="text-2xl font-bold text-white">Stakeholder Engagement</h3>
            <p className="mt-2 text-gray-400">
              Building consensus and aligning stakeholders with your organization's goals.
            </p>
          </motion.div>

          {/* Stat 3: Operational Clarity */}
          <motion.div variants={itemVariants} className="flex flex-col items-center">
            <Briefcase className="w-10 h-10 text-brand-blue mb-4" />
            <h3 className="text-2xl font-bold text-white">Operational Clarity</h3>
            <p className="mt-2 text-gray-400">
              Streamlining processes to improve efficiency and drive execution.
            </p>
          </motion.div>
        </div>
      </motion.div>

      
    </section>
  );
}