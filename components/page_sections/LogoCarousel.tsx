import Image from 'next/image';
import React from 'react';

const logos = [
  { src: '/logos/housing.png', alt: 'Seattle Housing Authority', width: 240, height: 80 },
  { src: '/logos/nba.png', alt: 'NBA', width: 220, height: 80 },
  { src: '/logos/homesight.png', alt: 'Homesight', width: 300, height: 90 },
  { src: '/logos/hasan2.seattle.png', alt: 'Hasan Seattle', width: 280, height: 80 },
  { src: '/logos/hasan2.harvard.png', alt: 'Hasan Harvard', width: 280, height: 80 },
  { src: '/logos/hasan2.foundationlogo.png', alt: 'Hasan Foundation', width: 280, height: 80 },
  { src: '/logos/hasan2.defjam.png', alt: 'Hasan DefJam', width: 260, height: 80 },
  { src: '/logos/hasan2.googlelogo.png', alt: 'Hasan Google', width: 260, height: 80 },
  { src: '/logos/hasan2.gambia.png', alt: 'Hasan Gambia', width: 260, height: 80 },
  { src: '/logos/hasan2.union.png', alt: 'Hasan Union', width: 260, height: 80 },
  { src: '/logos/hasan2.seed.png', alt: 'Hasan Seed', width: 260, height: 80 },
  { src: '/logos/hasan2.panafric.png', alt: 'Hasan Panafric', width: 260, height: 80 },
  { src: '/logos/hasan2.urban.png', alt: 'Hasan Urban', width: 260, height: 80 },
  { src: '/logos/arcs.png', alt: 'ARCS', width: 240, height: 80 },
  { src: '/logos/county.png', alt: 'County', width: 240, height: 80 },
  { src: '/logos/emerald.png', alt: 'Emerald', width: 240, height: 80 },
];


export function LogoCarousel() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center font-medium text-sm text-gray-500 tracking-widest uppercase mb-12">
          Trusted By
        </h2>
        <div
          className="w-full overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
          <div className="flex w-max animate-infinite-scroll">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="mx-4 flex-shrink-0 flex items-center" // reduced mx for tighter spacing
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="h-auto w-auto max-h-28" // increased visual cap
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
