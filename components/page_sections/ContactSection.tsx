'use client';

import { motion, type Variants } from 'framer-motion';
import { Button } from '../ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

// 1. Define an interface for the component's props
interface ContactSectionProps {
  onContactClick: () => void;
}

// 2. Accept the props in your component
export function ContactSection({ onContactClick }: ContactSectionProps) {
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
      className="py-24 sm:py-32 bg-gray-100"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={animationVariants}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-gray">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We're here to help and answer any question you might have. We look forward to hearing from you.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Contact Details */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
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

          {/* Right Column: Call to Action to open the modal */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200/80 flex flex-col items-center justify-center text-center h-full">
            <h3 className="text-2xl font-bold text-dark-gray">Have a project in mind?</h3>
            <p className="mt-4 text-gray-600">
              Click the button below to fill out our contact form, and we'll get back to you shortly.
            </p>
            {/* 3. Use the onContactClick prop on the button */}
            <Button 
              size="lg" 
              variant="secondary" 
              className="mt-8 w-full"
              onClick={onContactClick}
            >
              Open Contact Form
            </Button>
          </div>

        </div>
      </div>
    </motion.section>
  );
}