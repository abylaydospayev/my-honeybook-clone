// this is the animated counting numbers 
"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaCheckCircle, FaUsers, FaCalendarAlt, FaUserTie } from "react-icons/fa";

export function CounterSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,  // Animation triggers only once
        threshold: 0.3,     // 30% of element visible triggers inView
      });
  return (
    <section
        ref = {ref}
      className="relative w-full bg-cover bg-center py-20 text-white"
      style={{ backgroundImage: "url('/image/mountains.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {/* Foreign Followers */}
          <div className="flex flex-col items-center">
            <FaCheckCircle className="text-6xl mb-4" />
            <span className="text-5xl font-bold">
            { inView ? <CountUp end={152} duration={4} /> : 0}
            </span>
            <p className="mt-2 text-lg">Successful Projects</p>
          </div>

          {/* Students Enrolled */}
          <div className="flex flex-col items-center">
            <FaUsers className="text-6xl mb-4" />
            <span className="text-5xl font-bold">
            { inView ? <CountUp end={89} duration={4} /> : 0}
            </span>
            <p className="mt-2 text-lg">	Satisfied Clients </p>
          </div>

          {/* Classes Complete */}
          <div className="flex flex-col items-center">
            <FaCalendarAlt className="text-6xl mb-4" />
            <span className="text-5xl font-bold">
            { inView ?   <CountUp end={30} duration={4} /> : 0}
            </span>
            <p className="mt-2 text-lg">Years of experience</p>
          </div>

          {/* Certified Teachers */}
          <div className="flex flex-col items-center">
            <FaUserTie className="text-6xl mb-4" />
            <span className="text-5xl font-bold">
            { inView ? <CountUp end={13} duration={4} /> : 0}
            </span>
            <p className="mt-2 text-lg">Expert Consultants</p>
          </div>
        </div>
      </div>
    </section>
  );
}