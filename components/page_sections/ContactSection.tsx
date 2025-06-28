'use client';

import { motion, type Variants } from 'framer-motion';
import { Button } from '../ui/button';
import { ArrowUpRight } from 'lucide-react';

export function ContactSection() {
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
      id="contact"
      className="py-24 sm:py-32 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={animationVariants}
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* New Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Headline and Info */}
          <div className="lg:sticky lg:top-24">
            <h2 className="text-4xl md:text-6xl font-bold text-dark-gray leading-tight">
              Let's talk about your next big project.
            </h2>
            <p className="mt-8 text-gray-600">
              Looking for a new career? 
              <a href="/careers" className="ml-2 font-semibold text-brand-blue hover:underline inline-flex items-center">
                View job openings <ArrowUpRight className="ml-1 w-4 h-4" />
              </a>
            </p>
          </div>

          {/* Right Column: The New Contact Form */}
          <div>
            <form action="#" method="POST" className="space-y-6">
              
              {/* Full Name */}
              <div>
                <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">
                  Full name <span className="text-gray-500">(required)</span>
                </label>
                <div className="mt-1">
                  <input type="text" name="full-name" id="full-name" required className="block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-blue focus:ring-brand-blue sm:text-sm p-3" />
                </div>
              </div>
              
              {/* Email and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email <span className="text-gray-500">(required)</span>
                  </label>
                  <div className="mt-1">
                    <input type="email" name="email" id="email" required autoComplete="email" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-blue focus:ring-brand-blue sm:text-sm p-3" />
                  </div>
                </div>
                <div>
                   <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone <span className="text-gray-500">(required)</span>
                  </label>
                  <div className="mt-1">
                    <input type="tel" name="phone" id="phone" required autoComplete="tel" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-blue focus:ring-brand-blue sm:text-sm p-3" />
                  </div>
                </div>
              </div>

              {/* Company and Job Title */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                        Company <span className="text-gray-500">(required)</span>
                    </label>
                    <div className="mt-1">
                        <input type="text" name="company" id="company" required autoComplete="organization" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-blue focus:ring-brand-blue sm:text-sm p-3" />
                    </div>
                </div>
                <div>
                    <label htmlFor="job-title" className="block text-sm font-medium text-gray-700">
                        Job title <span className="text-gray-500">(required)</span>
                    </label>
                    <div className="mt-1">
                        <input type="text" name="job-title" id="job-title" required autoComplete="organization-title" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-blue focus:ring-brand-blue sm:text-sm p-3" />
                    </div>
                </div>
              </div>
              
              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <div className="mt-1">
                  <textarea name="message" id="message" placeholder="Add details about your project..." rows={5} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-blue focus:ring-brand-blue sm:text-sm p-3"></textarea>
                </div>
              </div>
              
              <div>
                <Button type="submit" size="lg" variant="secondary" className="w-full sm:w-auto">
                  Submit
                </Button>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </motion.section>
  );
}