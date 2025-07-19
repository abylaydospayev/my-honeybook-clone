"use client";

import { motion, type Variants } from "framer-motion";
import { MediaBackgroundSection } from "./MediaBackgroundSection"; // Adjust the import path as needed

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function ContactHero() {
  return (
    <MediaBackgroundSection
      mediaSrc="/video/background_pic.mp4" // Using the same video background
      mediaType="video"
      overlayClass="bg-black/70" // A slightly different overlay for this page
      fullHeight={false} // Set to false to control height, e.g., 'min-h-[50vh]'
      contentClass="text-white text-center px-6"
    >
      <motion.div
        className="relative z-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
          variants={itemVariants}
        >
          Contact Us
        </motion.h1>
        <motion.p
          className="mt-4 max-w-2xl mx-auto text-lg text-gray-300"
          variants={itemVariants}
        >
          Have a question or a project in mind? We'd love to hear from you.
        </motion.p>
      </motion.div>
    </MediaBackgroundSection>
  );
}