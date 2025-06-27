'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Check } from 'lucide-react';

// A single, unified data structure for all services
const allServices = [
  {
    title: "Capacity Building Support",
    description: "We strengthen internal infrastructures to help CBOs and SMEs scale effectively.",
    img: "/image/bs.jpg",
    features: [], // No special features for this card
  },
  {
    title: "Assisting Small Businesses",
    description: "Our participatory approach strengthens small businesses and enhances their growth trajectories.",
    img: "/image/bs.jpg",
    features: [],
  },
  {
    title: "RoR Framework Implementation",
    description: "Our Return on Relationship (RoR) process focuses on proactively engaging clients to build deep, valuable connections.",
    img: "/image/bs.jpg",
    features: [],
  },
  {
    title: "International Trade Initiatives",
    description: "We connect you with strategic partners to create new global opportunities.",
    img: "/image/bs.jpg",
    features: [ // The features are now part of the main data structure
      "Commodity Trade",
      "Investment and Privatization",
      "Renewable Energy",
      "Intermodal Technologies",
    ]
  },
];

export function CategoriesCards() {
  return (
    <section className="py-24 bg-light-gray">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-gray">
            Our Core Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We provide a focused suite of services designed to address the core challenges faced by growing organizations and communities.
          </p>
        </div>

        {/* New 2x2 Responsive Grid for Service Cards */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {allServices.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Image Container */}
              <div className="relative w-full h-56">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-dark-gray">{service.title}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Conditionally render the features list */}
                {service.features.length > 0 && (
                   <ul className="mt-4 space-y-2">
                      {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                              <Check className="w-5 h-5 text-brand-blue flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                      ))}
                  </ul>
                )}

                <div className="mt-6">
                    <Button variant="secondary">Learn More</Button>
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}