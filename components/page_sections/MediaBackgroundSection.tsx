// components/common/MediaBackgroundSection.tsx (or wherever you prefer to place generic components)
'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion'; // Assuming you might want Framer Motion for content inside

interface MediaBackgroundSectionProps {
  mediaSrc: string; // The URL for the video or image
  mediaType: 'video' | 'image'; // 'video' to render <video>, 'image' to render <img> or background-image
  overlayClass?: string; // Tailwind class for the overlay (e.g., 'bg-black/60', 'bg-blue-900/70')
  contentClass?: string; // Tailwind class for the div wrapping title/description/children
  fullHeight?: boolean; // If the section should take full viewport height (h-screen)
  children: React.ReactNode; // Content to be displayed over the media
}

export function MediaBackgroundSection({
  mediaSrc,
  mediaType,
  overlayClass = 'bg-black/60', // Default dark overlay
  contentClass = 'text-white text-center px-6', // Default text styling
  fullHeight = true, // Default to full viewport height
  children,
}: MediaBackgroundSectionProps) {
  const sectionHeightClass = fullHeight ? 'h-screen' : 'min-h-[80vh]'; // Or whatever min-height you need

  return (
    <section className={`relative flex items-center justify-center ${sectionHeightClass}`}>
      {mediaType === 'video' ? (
        <video
          src={mediaSrc}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      ) : ( // Assuming mediaType is 'image'
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('${mediaSrc}')` }}
        />
      )}

      {/* Background Overlay */}
      <div className={`absolute top-0 left-0 w-full h-full ${overlayClass}`}></div>

      {/* Content Layer */}
      <div className={`relative z-10 ${contentClass}`}>
        {children} {/* This is where your custom text, buttons, etc., will go */}
      </div>
    </section>
  );
}