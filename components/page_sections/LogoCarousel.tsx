import Image from 'next/image';
import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

const logos = [
  { src: '/logos/hasan.acrs.png', alt: 'Arcs OG' },
  { src: '/logos/hasan.housing.png', alt: 'Seattle Housing Authority' },
  { src: '/logos/hasan.nba.png', alt: 'NBA' },
  { src: '/logos/hasan.homesight.jpg', alt: 'Homesight' },
  { src: '/logos/hasan.seattle.png', alt: 'Hasan Seattle' },
  { src: '/logos/hasan.harvard.png', alt: 'Hasan Harvard' },
  { src: '/logos/hasan.foundationlogo.png', alt: 'Hasan Foundation' },
  { src: '/logos/hasan.googlelogo.png', alt: 'Hasan Google' },
  { src: '/logos/hasan.gambia.png', alt: 'Hasan Gambia' },
  { src: '/logos/hasan.union.png', alt: 'Hasan Union' },
  { src: '/logos/hasan2.seed.png', alt: 'Hasan Seed' },
  { src: '/logos/hasan.panafric.png', alt: 'Hasan Panafric' },
  { src: '/logos/hasan.urban.png', alt: 'Hasan Urban' },
  { src: '/logos/hasan.county.png', alt: 'County' },
  { src: '/logos/hasan.kaya.png', alt: 'Kaya' },
  { src: '/logos/hasan.schools.png', alt: 'Schools' },
  { src: '/logos/hasan.uwb.png', alt: 'Uwb' },
];

export function LogoCarousel() {
  return (
    <section className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center font-semibold text-sm text-gray-600 tracking-widest uppercase mb-0">
          Trusted By Our Partners
        </h2>
        <div className="w-full border-t border-gray-200 my-8" />
        <div
          className="w-full overflow-hidden group"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
          <div className="flex w-max animate-infinite-scroll group-hover:pause">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-44 h-24 mx-3 flex items-center justify-center transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={200}
                  height={100}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
