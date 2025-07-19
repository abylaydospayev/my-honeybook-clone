"use client";

import { motion, Variants } from "framer-motion";
import { MediaBackgroundSection } from "./MediaBackgroundSection"; // Adjust the import path as needed

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeInOut" },
  },
};

export function Hero() {
  return (
    <MediaBackgroundSection
      mediaSrc="/video/background_pic.mp4" // Path to your background video
      mediaType="video"
      overlayClass="bg-gradient-to-b from-black/90 via-black/80 to-black/40" // Custom gradient overlay
      fullHeight={false} // Setting to false to use min-h-[80vh]
      contentClass="text-white text-center px-4"
    >
      <motion.h1
        className="relative z-10 text-4xl md:text-6xl font-extrabold drop-shadow-md"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        BUILT ON RELATIONSHIPS
      </motion.h1>

      <motion.p
        className="relative mt-2 z-10 text-4xl md:text-4xl font-extrabold drop-shadow-md"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ delay: 0.3 }} // Correctly typed the transition prop
      >
        DRIVEN BY RESULTS
      </motion.p>

    </MediaBackgroundSection>
  );
}