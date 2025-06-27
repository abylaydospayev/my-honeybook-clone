'use client';

import { motion, type Variants } from 'framer-motion';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

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
      // FIX: Changed background to bg-gray-100
      className="py-24 sm:py-32 bg-gray-100"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={animationVariants}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-gray">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We're here to help and answer any question you might have. We look forward to hearing from you.
          </p>
        </div>

        {/* Main container with two columns */}
        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Contact Details */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              {/* FIX: Changed icon background to white to stand out on the gray */}
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <Mail className="w-6 h-6 text-brand-blue" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-dark-gray">Email</h3>
                <p className="text-gray-600 mt-1">Our team is here to help.</p>
                <a href="mailto:projects@bulleconsulting.com" className="mt-2 inline-block text-brand-blue font-semibold hover:underline">
                  projects@bulleconsulting.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
               <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <Phone className="w-6 h-6 text-brand-blue" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-dark-gray">Phone</h3>
                <p className="text-gray-600 mt-1">Mon-Fri from 9am to 5pm.</p>
                <a href="tel:+12063591603" className="mt-2 inline-block text-brand-blue font-semibold hover:underline">
                  +1 (206) 359-1603
                </a>
              </div>
            </div>
             <div className="flex items-start gap-4">
               <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <MapPin className="w-6 h-6 text-brand-blue" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-dark-gray">Office</h3>
                <p className="text-gray-600 mt-1">3815 S Othello St, Suite 100-179, Seattle, WA 98118</p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <Card className="p-8 border-gray-200/80">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark-gray">Full Name</label>
                <div className="mt-1">
                  <input type="text" name="name" id="name" autoComplete="name" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-blue focus:ring-brand-blue sm:text-sm p-3" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark-gray">Email Address</label>
                <div className="mt-1">
                  <input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-blue focus:ring-brand-blue sm:text-sm p-3" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-gray">Message</label>
                <div className="mt-1">
                  <textarea name="message" id="message" rows={4} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-blue focus:ring-brand-blue sm:text-sm p-3"></textarea>
                </div>
              </div>
              <div>
                <Button type="submit" size="lg" variant="secondary" className="w-full">
                  Send Message
                </Button>
              </div>
            </form>
          </Card>

        </div>
      </div>
    </motion.section>
  );
}