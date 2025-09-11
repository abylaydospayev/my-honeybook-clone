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
export function ServicesRor() {
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
            {/* <motion.span
              className="text-sm uppercase tracking-wide text-brand-blue font-semibold"
              variants={itemVariants}
            >
              Our Services
            </motion.span> */}
            <motion.h1
              className="mt-4 text-4xl md:text-5xl font-bold leading-tight text-white"
              variants={itemVariants}
            >
RoR Framework Implementation

            </motion.h1>
          </motion.div>
        </MediaBackgroundSection>
        <div className="md:w-1/2 space-y-6 max-w-3xl">
              <p className="mt-2 text-white">
  Waiting for text form Hassan            </p>
            </div>
     </section>
    );
  }