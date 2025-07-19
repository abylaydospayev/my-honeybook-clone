// components/page_sections/HeroSection.tsx
'use client'; 

import React from 'react';
import { MediaBackgroundSection } from './MediaBackgroundSection'; // Adjust the import path as needed

interface HeroSectionProps {
  title: string;
  description: string;
}

export function HeroSection({ title, description }: HeroSectionProps) {
  return (
    <MediaBackgroundSection
      mediaSrc="/video/background_pic.mp4" // The specific video URL for this particular HeroSection instance
      mediaType="video"
      overlayClass="bg-black/60"
      fullHeight={true}
      contentClass="text-white text-center px-6"
    >
      {/* The animate-fade-in-up class would need to be defined in your global CSS */}
      <div className="animate-fade-in-up">
        <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-white">
          {title}
        </h1>
        <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </MediaBackgroundSection>
  );
}