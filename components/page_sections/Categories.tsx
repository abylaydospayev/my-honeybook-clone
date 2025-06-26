// for caterories listing with icons
'use client';
import { FaHandshake, FaTools, FaUsersCog, FaPeopleArrows, FaSyncAlt, FaSmile } from "react-icons/fa";

export function Categories() {
  const services = [
    {
      icon: <FaHandshake size={48} className="mx-auto text-blue-600" />,
      title: "Proactive Service",
      description:
        "Delivering a proactive, knowledgeable, and reliable service at first point of contact.",
    },
    {
      icon: <FaTools size={48} className="mx-auto text-blue-600" />,
      title: "Problem Solving",
      description:
        "Offering a variety of problem-solving methods that suit your needs.",
    },
    {
      icon: <FaUsersCog size={48} className="mx-auto text-blue-600" />,
      title: "Consultant Support",
      description:
        "Supporting and developing consultants to ensure excellent service quality.",
    },
    {
      icon: <FaPeopleArrows size={48} className="mx-auto text-blue-600" />,
      title: "Collaboration",
      description:
        "Collaborating with stakeholders to understand client needs.",
    },
    {
      icon: <FaSyncAlt size={48} className="mx-auto text-blue-600" />,
      title: "Continuous Improvement",
      description:
        "Continually refining services and internal processes.",
    },
    {
      icon: <FaSmile size={48} className="mx-auto text-blue-600" />,
      title: "Client Satisfaction",
      description:
        "Taking action to maintain high client satisfaction levels.",
    },
  ];

  return (
    <section className="py-16 bg-white" id="service-grid">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">We deliver top-notch consulting services designed to help you succeed.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {services.map(({ icon, title, description }, i) => (
            <div key={i} className="text-center animate-fadeInUp">
              <div className="mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-700">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}