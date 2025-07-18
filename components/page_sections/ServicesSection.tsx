'use client';

import { useEffect, useRef } from 'react';
import { Card } from '../ui/card';
import Link from 'next/link';

const serviceData = [
  {
    title: 'Capacity Building Support',
    description: 'Strengthening internal infrastructures that help CBOs and SMEs scale effectively, using equity-driven strategies to ensure all stakeholders thrive.',
    videoSrc: '/video/growth_curve.mp4',
    bgColor: 'bg-[#20bad1]',
    textColor: 'text-white',
    isFeatured: false,
    href: '/services',
  },
  {
    title: 'Assisting Small Businesses',
    description: 'We use a participatory and pragmatic approach to strengthen small businesses, improve delivery, and enhance growth trajectories.',
    videoSrc: '/video/business_plan.mp4',
    bgColor: 'bg-[#20bad1]',
    textColor: 'text-white',
    isFeatured: true,
    href: '/services',
  },
  {
    title: 'RoR Framework Implementation',
    description: 'Our authentic Return on Relationship process goes beyond talk, focusing on proactively engaging clients and communities to build deep connections.',
    videoSrc: '/video/business_deal.mp4',
    bgColor: 'bg-[#20bad1]',
    textColor: 'text-white',
    isFeatured: false,
    href: '/services',
  },
  {
    title: 'International Trade Initiatives',
    description: 'Our partners include trade associations, universities, and financial institutions, helping clients create new relationships and collaborative opportunities.',
    videoSrc: '/video/international_trade.mp4', 
    bgColor: 'bg-[#20bad1]',
    textColor: 'text-white',
    isFeatured: false,
    href: '/services',
  },
];

// Helper component updated to remove poster
function VideoPlayer({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    const containerElement = containerRef.current;

    if (!videoElement || !containerElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          videoElement.play();
          observer.unobserve(containerElement); 
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(containerElement);

    return () => {
      if (containerElement) {
        observer.unobserve(containerElement);
      }
    };
  }, [src]);

  return (
    <div ref={containerRef} className="relative h-64 w-full mt-auto">
      <video
        ref={videoRef}
        muted
        playsInline
        preload="metadata"
        // poster attribute removed
        aria-hidden="true"
        className="w-full h-full object-contain object-bottom p-4"
        key={src}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            A Framework for Growth and Scalability
          </h2>
          <p className="mt-6 text-lg text-gray-300">
            Our services are designed to strengthen your internal infrastructures, create authentic connections, and provide the strategic support needed to scale with purpose.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {serviceData.map((service) => (
            <div key={service.title} className="lg:col-span-1 h-full">
              <Link href={service.href} className="h-full block group">
                <Card
                  className={`
                    flex flex-col h-full rounded-3xl overflow-hidden transition-all duration-300 group-hover:shadow-2xl
                    ${service.bgColor}
                    ${service.isFeatured ? 'ring-4 ring-blue-500/50 shadow-2xl shadow-blue-500/30' : 'group-hover:-translate-y-2'}
                  `}
                >
                  <div className={`p-8 pb-0 flex-grow ${service.textColor}`}>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <p className="mt-4 text-base opacity-90 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Call to VideoPlayer updated to remove poster */}
                  <VideoPlayer src={service.videoSrc} />

                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}