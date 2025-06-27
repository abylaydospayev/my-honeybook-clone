"use client";

import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";

// A single, reusable variant for the text items
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
  // A ref to track the section element for scroll calculations
  const targetRef = useRef<HTMLDivElement>(null);

  // Framer Motion hook to track scroll progress within this section
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Create the parallax effect by transforming scroll progress into vertical movement
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={targetRef} className="relative h-[50vh] min-h-[350px] bg-dark-gray flex items-center justify-center text-center text-white overflow-hidden">
      
      {/* The background image now moves with a parallax effect */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/image/hasan.pixels.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          y, // The parallax effect is applied here
        }}
      />
      
      <div className="absolute inset-0 bg-black/70 z-10"></div>

      {/* This container will stagger the animation of its children */}
      <motion.div
        className="relative z-20 px-6"
        initial="hidden"
        whileInView="visible" // Animate when the component is in view
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.2 }} // Animate children one by one
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
    </section>
  );
}