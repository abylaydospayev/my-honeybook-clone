import Image from 'next/image';
import React from 'react';

const logos = [
  { src: '/logos/hasan.acrs.png', alt: 'Arcs OG' /*, width: 240, height: 80 */},
  { src: '/logos/hasan.housing.png', alt: 'Seattle Housing Authority' /*, width: 240, height: 80 */},
  { src: '/logos/hasan.nba.png', alt: 'NBA'/*, width: 240, height: 80 */ },
  { src: '/logos/hasan.homesight.jpg', alt: 'Homesight'/*, width: 240, height: 80 */},
  { src: '/logos/hasan.seattle.png', alt: 'Hasan Seattle'/*, width: 240, height: 80 */ },
  { src: '/logos/hasan.harvard.png', alt: 'Hasan Harvard'/*, width: 240, height: 80 */ },
  { src: '/logos/hasan.foundationlogo.png', alt: 'Hasan Foundation'/*, width: 240, height: 80 */ },
  //{ src: '/logos/hasan2.defjam.png', alt: 'Hasan DefJam'/*, width: 240, height: 80 */ },
  { src: '/logos/hasan.googlelogo.png', alt: 'Hasan Google'/*, width: 240, height: 80 */},
  { src: '/logos/hasan.gambia.png', alt: 'Hasan Gambia'/*, width: 240, height: 80 */},
  { src: '/logos/hasan.union.png', alt: 'Hasan Union'/*, width: 240, height: 80 */ },
  { src: '/logos/hasan2.seed.png', alt: 'Hasan Seed'/*, width: 240, height: 80 */},
  { src: '/logos/hasan.panafric.png', alt: 'Hasan Panafric'/*, width: 240, height: 80 */ },
  { src: '/logos/hasan.urban.png', alt: 'Hasan Urban'/*, width: 240, height: 80 */ },
  { src: '/logos/hasan.county.png', alt: 'County'/*, width: 240, height: 80 */ },
  //{ src: '/logos/hasan.emerald.webp', alt: 'Emerald', width: 240, height: 80 },
  { src: '/logos/hasan.kaya.png', alt: 'Kaya'/*, width: 240, height: 80 */ },
  { src: '/logos/hasan.schools.png', alt: 'Schools'/*, width: 240, height: 80 */ },
  { src: '/logos/hasan.uwb.png', alt: 'Uwb'/*, width: 240, height: 80 */ },
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
