'use client';
import { Mail } from 'lucide-react';
import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

export function Careers() {
  return (
    <div className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 min-h-screen px-6 py-24 text-white overflow-hidden">
      {/* Decorative Blurs */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#20BAD1]/30 rounded-full blur-3xl z-0 animate-pulse" />
      <div className="absolute bottom-[-120px] right-[-100px] w-[350px] h-[350px] bg-[#20BAD1]/20 rounded-full blur-2xl z-0 animate-pulse" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-[#20BAD1] to-cyan-400 text-transparent bg-clip-text">
          Good Firm
        </h1>
        <h2 className="text-4xl md:text-5xl font-semibold mb-2 text-white/90">
          Great People
        </h2>
        <p className="text-2xl text-gray-300 mb-12 italic">
          Our Values Define Us!
        </p>

        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          Welcome to <span className="text-[#20BAD1] font-semibold">Bulle Consulting</span>. We’re excited that you are exploring employment
          opportunities with our firm. All qualified applicants will receive consideration for employment
          without regard to race, color, religion, gender, national origin, disability or protected veteran status,
          or any other legally protected basis.
        </p>

        <p className="text-lg text-gray-300 mb-10">
          There’s no opening at the moment. However, you can always leave us a message so we can add you to our contact
          list and notify you when a position is available.
        </p>

        <a
          href="mailto:careers@bulleconsulting.com"
          className="inline-flex items-center gap-3 bg-[#20BAD1] text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:scale-105 hover:bg-cyan-500 transition-transform duration-300"
        >
          <Mail className="w-5 h-5" /> Leave Us a Message
        </a>
      </div>

      {/* Subtle animated wave bottom divider */}
      <svg
        className="absolute bottom-0 left-0 w-full text-slate-900"
        viewBox="0 0 1440 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M0,96L80,106.7C160,117,320,139,480,133.3C640,128,800,96,960,85.3C1120,75,1280,85,1360,90.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        />
      </svg>
    </div>
  );
}
