'use client';
//     image: '/image/pic1.jpg',
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO at BrightCorp',
    text: "This product transformed our business. We've never seen results this fast. The team went above and beyond.",
    image: '/image/pic1.jpg',
  },
  {
    name: 'David Kim',
    role: 'Product Manager at ZenTech',
    text: "Working with them was a breeze. The UI is gorgeous, and the UX is incredibly intuitive.",
    image: '/image/pic1.jpg',
  },
  {
    name: 'Amina Yusuf',
    role: 'Founder at Craftsy',
    text: "They delivered far more than we expected. Every detail was polished and thoughtful.",
    image: '/image/pic1.jpg',
  },
];

export function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const play = () => {
      timeoutRef.current = setTimeout(next, 6000);
    };
    play();
    return () => timeoutRef.current && clearTimeout(timeoutRef.current);
  }, [index]);

  return (
    <div className="relative w-full max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">What Our Clients Say</h2>

      <div className="relative bg-white shadow-2xl rounded-2xl p-8 transition-all duration-500">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col items-center text-center">
              <Quote className="w-10 h-10 text-blue-500 mb-4" />
              <p className="text-lg text-gray-700 italic max-w-2xl">{testimonials[index].text}</p>

              <div className="mt-6 flex flex-col items-center">
                <img
                  src={testimonials[index].image}
                  alt={testimonials[index].name}
                  className="w-16 h-16 rounded-full object-cover mb-2"
                />
                <p className="font-semibold text-gray-900">{testimonials[index].name}</p>
                <p className="text-sm text-gray-500">{testimonials[index].role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="absolute top-1/2 -translate-y-1/2 left-2 md:left-6">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full shadow-md transition"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 right-2 md:right-6">
        <button
          onClick={next}
          aria-label="Next testimonial"
          className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full shadow-md transition"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              index === i ? 'bg-blue-600 scale-110' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}