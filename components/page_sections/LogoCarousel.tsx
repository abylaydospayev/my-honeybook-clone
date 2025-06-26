import Image from 'next/image';
import React from 'react';

const logos = [
  { src: '/logos/hasan.acrs.png', alt: 'Arcs OG' },
  { src: '/logos/hasan.housing.png', alt: 'Seattle Housing Authority' },
  { src: '/logos/hasan.nba.png', alt: 'NBA' },
  { src: '/logos/hasan.homesight.jpg', alt: 'Homesight'},
  { src: '/logos/hasan.seattle.png', alt: 'Hasan Seattle' },
  { src: '/logos/hasan.harvard.png', alt: 'Hasan Harvard' },
  { src: '/logos/hasan.foundationlogo.png', alt: 'Hasan Foundation' },
  { src: '/logos/hasan.googlelogo.png', alt: 'Hasan Google'},
  { src: '/logos/hasan.gambia.png', alt: 'Hasan Gambia'},
  { src: '/logos/hasan.union.png', alt: 'Hasan Union' },
  { src: '/logos/hasan2.seed.png', alt: 'Hasan Seed'},
  { src: '/logos/hasan.panafric.png', alt: 'Hasan Panafric' },
  { src: '/logos/hasan.urban.png', alt: 'Hasan Urban' },
  { src: '/logos/hasan.county.png', alt: 'County' },
  { src: '/logos/hasan.kaya.png', alt: 'Kaya' },
  { src: '/logos/hasan.schools.png', alt: 'Schools' },
  { src: '/logos/hasan.uwb.png', alt: 'Uwb' },
];


export function LogoCarousel() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center font-medium text-sm text-gray-500 tracking-widest uppercase mb-12">
          Trusted By Our Partners
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
              
              // --- THE FIX IS HERE ---
              // Each logo container is now a fixed size and uses flexbox to center its content.
              <div
                key={index}
                className="mx-10 flex-shrink-0 w-48 h-24 flex items-center justify-center" 
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={240} // The intrinsic width of the image file
                  height={80} // The intrinsic height of the image file
                  // The logo is now contained within the parent div, ensuring consistent perceived size.
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