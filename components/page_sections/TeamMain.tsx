'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Image from 'next/image';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

export const team = [
    {
      name: 'Hassan Wardere, MA, PMP',
      title: 'PRINCIPAL',
      email: 'hassan@bulleconsulting.com',
      image: '/image/abdiwali.png',
      description:
        "Hassan is a policy strategist and organizational scaling expert... [rest of Hassan's bio]",
    },
    {
      name: 'Laura Southard, MA',
      title: 'HUMAN RESOURCES MANAGEMENT LEAD',
      email: 'laura@bulleconsulting.com',
      image: '/image/abdiwali.png',
      description: "Laura Southard has been an adjunct instructor... [rest of Laura's bio]",
    },
    {
      name: 'Abdiwali Mohamed, CPA, MST',
      title: 'FINANCIAL MANAGEMENT & COMPLIANCE LEAD',
      email: 'abdiwali@bulleconsulting.com',
      image: '/image/abdiwali.png',
      description: "Abdiwali Mohamed, CPA, MST, is in charge of Bulle Consulting’s... [rest of Abdiwali's bio]",
    },
    {
      name: 'Jenn Charoni, MA',
      title: 'PROJECT ASSOCIATE',
      email: 'jenn@bulleconsulting.com',
      image: '/image/abdiwali.png',
      description: "Jenn has a background in organizational management... [rest of Jenn's bio]",
    },
    {
      name: 'Aisha Ahmed',
      title: 'HUMAN RESOURCES ASSOCIATE',
      email: 'aisha@bulleconsulting.com',
      image: '/image/abdiwali.png',
      description: "Aisha is an experienced HR professional... [rest of Aisha's bio]",
    },
    {
      name: 'David Bushnell, MA',
      title: 'DATA MANAGEMENT & GOVERNANCE ASSOCIATE',
      email: 'david@bulleconsulting.com',
      image: '/image/abdiwali.png',
      description: "David earned his master’s degree in Public Policy... [rest of David's bio]",
    },
    {
      name: 'Abiodun Odeleye, MBA',
      title: 'DATA ANALYST',
      email: 'abiodun@bulleconsulting.com',
      image: '/image/abdiwali.png',
      description: "Abiodun Odeleye has created and managed 600+ Power BI... [rest of Abiodun's bio]",
    },
  ];
  export function TeamMain() {
   return (
    <div className="bg-white px-4 py-16 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
        {team.slice(0, 3).map((member, idx) => (
          <div key={idx} className="space-y-4">
            <Image
              src={member.image}
              alt={member.name}
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-auto"
            />
            <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
            <p className="text-sm text-blue-600 font-semibold">{member.title}</p>
            <p className="text-gray-700 text-sm whitespace-pre-line">{member.description}</p>
            <a href={`mailto:${member.email}`} className="text-blue-500 hover:underline text-sm">
              {member.email}
            </a>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {team.slice(3).map((member, idx) => (
          <div key={idx} className="space-y-3">
            <Image
              src={member.image}
              alt={member.name}
              width={400}
              height={300}
              className="rounded-md object-cover w-full h-auto"
            />
            <h4 className="text-lg font-semibold text-gray-800">{member.name}</h4>
            <p className="text-xs text-blue-600 font-medium">{member.title}</p>
            <p className="text-sm text-gray-600 line-clamp-5">{member.description}</p>
            <a href={`mailto:${member.email}`} className="text-blue-500 hover:underline text-xs">
              {member.email}
            </a>
          </div>
        ))}
      </div>
    </div>
   );
  }
