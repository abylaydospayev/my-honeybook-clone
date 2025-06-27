'use client';

import Image from 'next/image';

export function CategoriesCards() {
  const services = [
    {
      title: "Capacity Building Support",
      description: `An essential ingredient in capacity-building is transformation that is generated and sustained over time from within; strengthening internal infrastructures that help CBOs and SMEs scale effectively. By working closely with clients to understand their needs and providing contextual, continuous, and collective support, Bulle Consulting is a trusted partner that utilizes its equity-driven strategies that makes sure that all stakeholders thrive. When capacity building is successful, it strengthens a CBO or SMEs ability to fulfill its mission over time and to have a positive impact on lives and communities. Bulle Consulting posits that there are seven distinct dimensions of CBO or SME capacity—vision and impact, governance and leadership, project delivery, resource generation, internal operations and management, evaluation and learning, and strategic relationships.`,
      img: "/image/bs.jpg", // Replace with your image
      link: "#",
      btnText: "Learn More",
    },
    {
      title: "Assisting Small Businesses",
      description: `We are dedicated to assisting small businesses get off the ground, have a better growth trajectory and achieve their goals. Seattle is a very diverse city that has many opportunities for many immigrant and refugee individuals who want to open a business. Bulle Consulting uses a participatory approach in its outreach strategy, and aligns its focus with a pragmatic approach that strengthens small businesses. This approach is intended to improve delivery, get to know the needs of targeted populations, as well as making small business owners aware of new strategies that enhance growth. We always develop the best approach that serves your needs, while adhering to best practices that keep small businesses in good standing on all levels.`,
      img: "/image/bs.jpg", // Replace with your image
      link: "#",
      btnText: "Learn More",
    },
    {
      title: "RoR Framework Implementation",
      description: `Utilizing an authentic Return on Relationship process that builds solidarity – and doing – is at the core of our work. This isn’t the type of strategy that sits on a shelf in a binder. With our team’s depth of knowledge in building strong relationships, we provide a culturally congruent approach for incorporating external and internal assessments, design thinking methods, leadership strategy sessions, and marketing implementation plans so your strategy fits your objectives and benefits the entire community. Anyone can talk about relationship building, however, operationalizing it effectively is the challenge. Our approach goes far beyond talking about strategies, because we focus on proactively engaging our clients and communities by empowering them, and building a deeper connection. Authentic relationship-building sets the table for many projects, and nothing gets accomplished without an effective approach.`,
      img: "/image/bs.jpg", // Replace with your image
      link: "#",
      btnText: "Learn More",
    },
    {
      title: "International Trade Initiatives",
      description: `Bulle Consulting’s strategic partners and industry experts include numerous U.S. and internationally recognized trade associations, commercial firms, technology councils, universities, financial institutions, and private lenders. International decision makers meet regularly with our clients to exchange project information and create new relationships and collaborative opportunities.

Our areas of expertise include:
• Commodity Trade
• Investment and Privatization
• Renewable Energy
• Intermodal Technologies

Bulle Consulting has also developed close relations with several venture capital firms and regional partners, and is constantly working towards projects that mitigate SBLC challenges faced by companies in Africa.`,
      img: "/image/bs.jpg", // Replace with your image
      link: "#",
      btnText: "Learn More",
    },
  ];

  return (
    <div id="fh5co-course" className="bg-white py-16">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="row animate-box mb-12 text-center">
          <div className="col-md-6 col-md-offset-3">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.
            </p>
          </div>
        </div>
        <div className="row grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map(({ title, description, img, link, btnText }, idx) => (
            <div key={idx} className="course rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row animate-box bg-white">
              <a
                href={link}
                className="course-img flex-shrink-0 bg-cover bg-center w-full md:w-48 h-40 md:h-auto"
                style={{ backgroundImage: `url(${img})` }}
                aria-label={title}
              />
              <div className="desc p-6 flex flex-col justify-between">
                <h3 className="text-xl font-semibold mb-2">
                  <a href={link} className="hover:underline">
                    {title}
                  </a>
                </h3>
                <p className="mb-4 text-gray-700 whitespace-pre-line">{description}</p>
                <span>
                  <a
                    href={link}
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded text-sm transition"
                  >
                    {btnText}
                  </a>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
