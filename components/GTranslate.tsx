'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export function GTranslate() {
  useEffect(() => {
    // Define GTranslate settings on the window object
    (window as any).gtranslateSettings = {
      default_language: 'en',
      languages: ['en', 'fr', 'it', 'es', 'zh-CN'],
      globe_color: '#66aaff',
      wrapper_selector: '.gtranslate_wrapper',
    };
  }, []);

  return (
    <>
      <div className="gtranslate_wrapper"></div>
      <Script 
        src="https://cdn.gtranslate.net/widgets/latest/globe.js" 
        strategy="afterInteractive" 
      />
    </>
  );
}