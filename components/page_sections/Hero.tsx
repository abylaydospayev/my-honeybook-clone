"use client";

import { motion, Variants } from "framer-motion";

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
    <section className="about-section bg-[#f9fafb]">
      {/* Hero Section with dark gradient and 2-line animated title */}
      <div
        className="relative min-h-[80vh] flex flex-col items-center justify-center text-white text-center px-4"
        style={{
          backgroundImage: "url('/image/hasan.pixels.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/40" />

        <motion.h1
          className="relative z-10 text-4xl md:text-6xl font-extrabold drop-shadow-md"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          BUILT ON RELATIONSHIPS
        </motion.h1>

        <motion.p
          className="relative z-10 mt-4 text-2xl md:text-4xl font-light text-white/80"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.3 }}
        >
          DRIVEN BY RESULTS
        </motion.p>

        {/* Call to Action Button */}
        <motion.a
          href="#about"
          className="relative z-10 mt-8 inline-block px-8 py-4 text-sm md:text-base font-semibold bg-white text-black rounded-md shadow-lg transition hover:bg-gray-200"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.6 }}
        >
          Discover More
        </motion.a>
      </div>
    </section>
  );
}
