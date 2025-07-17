// for caterories listing with icons
'use client';
import { FaHandshake, FaTools, FaUsersCog, FaPeopleArrows, FaSyncAlt, FaSmile } from "react-icons/fa";

export function Categories() {
  const services = [
    {
      icon: <FaHandshake size={48} className="mx-auto text-brand-blue" />,
      title: "Proactive Service",
      description:
        "Delivering a proactive, knowledgeable, and reliable service at first point of contact.",
    },
    {
      icon: <FaTools size={48} className="mx-auto text-brand-blue" />,
      title: "Problem Solving",
      description:
        "Offering a variety of problem-solving methods that suit your needs.",
    },
    {
      icon: <FaUsersCog size={48} className="mx-auto text-brand-blue" />,
      title: "Consultant Support",
      description:
        "Supporting and developing consultants to ensure excellent service quality.",
    },
    {
      icon: <FaPeopleArrows size={48} className="mx-auto text-brand-blue" />,
      title: "Collaboration",
      description:
        "Collaborating with stakeholders to understand client needs.",
    },
    {
      icon: <FaSyncAlt size={48} className="mx-auto text-brand-blue" />,
      title: "Continuous Improvement",
      description:
        "Continually refining services and internal processes.",
    },
    {
      icon: <FaSmile size={48} className="mx-auto text-brand-blue" />,
      title: "Client Satisfaction",
      description:
        "Taking action to maintain high client satisfaction levels.",
    },
  ];

  return (
    <section className="py-20 bg-[#0a2540] text-white" id="service-grid">
  <div className="container mx-auto px-4 max-w-6xl">
    <div className="text-center mb-14">
      <h2 className="text-4xl font-bold leading-tight mb-4">
        Our Consulting Strengths
      </h2>
      <p className="text-white/80 text-lg max-w-2xl mx-auto">
        We deliver top-notch services that empower organizations to thrive.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      {services.map(({ icon, title, description }, i) => (
        <div
          key={i}
          className="bg-[#102c52] rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center"
        >
          <div className="mb-4">{icon}</div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-white/70 text-sm">{description}</p>
        </div>
      ))}
    </div>
  </div>
</section>


  );
}