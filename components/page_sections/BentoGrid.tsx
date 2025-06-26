'use client';

import Image from 'next/image';
import { motion, type Variants } from 'framer-motion'; // 1. Import the 'Variants' type
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';

export function BentoGrid() {
  
  // 2. Apply the 'Variants' type to the constant
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      }
    },
  };

  return (
    <main className="p-4 md:p-8 bg-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        >
          <video src="/video/Video_Ready_Upward_Arrow.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <h3 className="font-semibold text-lg opacity-80"></h3>
            <p className="text-3xl font-extrabold mt-1">Scaling With</p>
            <p className="text-3xl font-extrabold mt-1">a Purpose</p>
          </div>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        >
          <video src="/video/Bar_Chart_Video_Generated.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <h2 className="font-semibold text-lg opacity-80"></h2>
            <p className="text-3xl font-extrabold mt-1">Relationship</p>
            <p className="text-3xl font-extrabold mt-1">Driven</p>
          </div>
        </motion.div>
        
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <Card className="border-gray-200/80 h-full">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold">Our Mission, Vision, and Team Values</h3>
              <p className="text-gray-600 mt-2">Bulle Consulting is a specialist consultancy at the heart of helping CBOs and SMEs scale with a purpose.</p>
            </CardContent>
          </Card>
        </motion.div>
        

        
        <motion.div 
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="lg:col-span-3"
        >
          <Card id="team" className="p-8 md:p-12 border-gray-200/80">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-10">Meet The Leadership</h2>
            
            {/* This grid should only contain the team members */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
              <div>
                <Image src="/image/hassan.png" width={128} height={128} alt="Hasan Warderem" className="w-32 h-32 mx-auto rounded-full object-cover bg-gray-200 mb-4" />
                <h3 className="text-xl font-semibold">Hasan Warderem MA, PM</h3>
                <p className="text-blue-600 font-medium">Founder &amp; Principal</p>
              </div>
              <div>
                <Image src="/image/laura.png" width={128} height={128} alt="Laura Southard" className="w-32 h-32 mx-auto rounded-full object-cover bg-gray-200 mb-4" />
                <h3 className="text-xl font-semibold">Laura Southard</h3>
                <p className="text-blue-600 font-medium">HR Lead</p>
              </div>
              <div>
                <Image src="/image/abdiwali.png" width={128} height={128} alt="Abdiwali Mohamed" className="w-32 h-32 mx-auto rounded-full object-cover bg-gray-200 mb-4" />
                <h3 className="text-xl font-semibold">Abdiwali Mohamed, CPA, MST</h3>
                <p className="text-blue-600 font-medium">Financial, Management &amp; Compliance Lead</p>
              </div>
            </div> {/* <-- The grid container now closes here */}

            {/* The button is moved outside the grid and wrapped for centering */}
            <div className="mt-12 flex justify-center">
              <Button variant="secondary" size="lg" className="w-full max-w-xs">
                Meet the Rest of Our Experts
              </Button>
            </div>
          </Card>
        </motion.div>
        
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="lg:col-span-2"
        >
          <Card className="p-8 md:p-12 bg-gray-900 text-white border-gray-700 h-full">
            <blockquote className="text-xl md:text-2xl font-medium text-white">
              “The clarity Bulle brought to our strategy was incredible. It felt like they were a founding member of the team, deeply invested in our success.”
            </blockquote>
            <p className="mt-4 font-semibold text-gray-300">— Samir, Founder of Fintrio</p>
          </Card>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <Card id="contact" className="p-8 flex flex-col justify-center items-center text-center border-gray-200/80 hover:-translate-y-1 h-full">
            <h3 className="text-2xl font-bold">Ready to Scale?</h3>
            <p className="text-gray-600 mt-2 mb-6">Let's discuss your next stage of growth.</p>
            <Button variant="secondary" size="lg" className="w-full max-w-xs">Contact Us</Button>
          </Card>
        </motion.div>

      </div>
    </main>
  );
}