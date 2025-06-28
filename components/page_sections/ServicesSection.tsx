'use client';

import { motion, type Variants } from 'framer-motion';
import { Card } from '../ui/card';
import { ArrowRight, Briefcase, Users, BarChart, Globe } from 'lucide-react';

export function ServicesSection() {
  const animationVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  return (
    <motion.section 
      id="services" 
      className="py-24"
      variants={animationVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Main dark container card */}
        <div className="rounded-3xl bg-dark-gray p-8 md:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Left Column: Main Headline & Description */}
            <div className="flex flex-col justify-center">
              <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
                A Framework for Growth and Scalability
              </h2>
              <p className="mt-6 text-lg text-gray-400">
                Our services are designed to strengthen your internal infrastructures, create authentic connections, and provide the strategic support needed to scale with purpose.
              </p>
            </div>

            {/* Right Column: Grid of All Four Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Card 1: Capacity Building */}
              <Card className="bg-slate-800/50 border-slate-700 p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="w-6 h-6 text-brand-blue" />
                    <h3 className="font-semibold text-lg">Capacity Building Support</h3>
                  </div>
                  <p className="text-sm text-gray-400">
                    Strengthening internal infrastructures that help CBOs and SMEs scale effectively, using equity-driven strategies to ensure all stakeholders thrive.
                  </p>
                </div>
                <a href="#" className="mt-6 inline-flex items-center text-sm font-semibold text-brand-blue hover:text-blue-400">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Card>

              {/* Card 2: Small Businesses */}
              <Card className="bg-slate-800/50 border-slate-700 p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="w-6 h-6 text-brand-blue" />
                    <h3 className="font-semibold text-lg">Assisting Small Businesses</h3>
                  </div>
                  <p className="text-sm text-gray-400">
                    We use a participatory and pragmatic approach to strengthen small businesses, improve delivery, and enhance growth trajectories.
                  </p>
                </div>
                 <a href="#" className="mt-6 inline-flex items-center text-sm font-semibold text-brand-blue hover:text-blue-400">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Card>

              {/* Card 3: ROR Framework */}
              <Card className="bg-slate-800/50 border-slate-700 p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <BarChart className="w-6 h-6 text-brand-blue" />
                    <h3 className="font-semibold text-lg">RoR Framework Implementation</h3>
                  </div>
                  <p className="text-sm text-gray-400">
                    Our authentic Return on Relationship process goes beyond talk, focusing on proactively engaging clients and communities to build deep connections.
                  </p>
                </div>
                 <a href="#" className="mt-6 inline-flex items-center text-sm font-semibold text-brand-blue hover:text-blue-400">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Card>

              {/* Card 4: International Trade */}
              <Card className="bg-slate-800/50 border-slate-700 p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Globe className="w-6 h-6 text-brand-blue" />
                    <h3 className="font-semibold text-lg">International Trade Initiatives</h3>
                  </div>
                  <p className="text-sm text-gray-400">
                    Our partners include trade associations, universities, and financial institutions, helping clients create new relationships and collaborative opportunities.
                  </p>
                </div>
                 <a href="#" className="mt-6 inline-flex items-center text-sm font-semibold text-brand-blue hover:text-blue-400">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Card>
            </div>

          </div>
        </div>
      </div>
    </motion.section>
  );
}