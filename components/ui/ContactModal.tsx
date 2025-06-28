'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { X, ArrowUpRight } from 'lucide-react';

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-4xl m-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Card className="max-h-[90vh] overflow-y-auto">
              <button 
                onClick={onClose} 
                className="sticky top-4 right-4 ml-auto mr-4 block text-gray-500 hover:text-dark-gray z-10"
                aria-label="Close contact form"
              >
                <X size={24} />
              </button>
              
              <div className="grid lg:grid-cols-2 p-8 md:p-12 pt-0">
                {/* Left Column */}
                <div className="flex flex-col justify-center pr-8">
                    <h2 className="text-4xl font-bold text-dark-gray leading-tight">
                        Let's talk about your next big project.
                    </h2>
                    <p className="mt-6 text-gray-600">
                        Looking for a new career? 
                        <a href="/careers" className="ml-1 font-semibold text-brand-blue hover:underline inline-flex items-center">
                            View job openings <ArrowUpRight className="ml-1 w-4 h-4" />
                        </a>
                    </p>
                </div>

                {/* Right Column (Form) */}
                <div className="mt-8 lg:mt-0">
                    <form action="#" method="POST" className="space-y-6">
                      
                      <div>
                        <label htmlFor="full-name" className="text-sm font-medium text-gray-700">
                          Full name <span className="text-gray-500">(required)</span>
                        </label>
                        <input type="text" name="full-name" id="full-name" required placeholder="Full name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3" />
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className="text-sm font-medium text-gray-700">
                            Email <span className="text-gray-500">(required)</span>
                          </label>
                          <input type="email" name="email" id="email" required placeholder="name@company.com" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3" />
                        </div>
                        <div>
                           <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                            Phone
                          </label>
                          <input type="tel" name="phone" id="phone" placeholder="(555) 555-5555" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                         <div>
                            <label htmlFor="company" className="text-sm font-medium text-gray-700">
                                Company
                            </label>
                            <input type="text" name="company" id="company" placeholder="Company name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3" />
                        </div>
                        <div>
                            <label htmlFor="job-title" className="text-sm font-medium text-gray-700">
                                Job title
                            </label>
                            <input type="text" name="job-title" id="job-title" placeholder="IT Manager" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3" />
                        </div>
                      </div>

                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                         <div>
                            <label htmlFor="country" className="text-sm font-medium text-gray-700">
                                Country
                            </label>
                            <input type="text" name="country" id="country" placeholder="United States" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3" />
                        </div>
                        <div>
                            <label htmlFor="city" className="text-sm font-medium text-gray-700">
                                City
                            </label>
                            <input type="text" name="city" id="city" placeholder="City name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3" />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="text-sm font-medium text-gray-700">
                          Message
                        </label>
                        <textarea name="message" id="message" placeholder="Add details about your project..." rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3"></textarea>
                      </div>
                      
                      <div>
                        <Button type="submit" size="lg" variant="secondary" className="w-full">
                          Submit
                        </Button>
                      </div>
                    </form>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}