"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import { Button } from "../ui/button";
// --- FIX IS HERE: Added 'Users' to the import list ---
import { Award, Briefcase, Users } from "lucide-react"; 

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
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={targetRef} className="relative bg-[#1c1c1e]">
      {/* Main Hero Section */}
      <div className="relative min-h-[90vh] flex items-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/image/hasan.pixels.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            y,
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            className="max-w-xl"
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
            <motion.div variants={itemVariants} className="mt-8">
              <Button size="lg" variant="secondary">
                Get Started
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section Below Hero */}
      
    </section>
  );
}