'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';

export function FloatingTranslateButton() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // This effect runs only on the client, preventing server-side rendering issues.
    setIsMounted(true);

    // This function is called by the Google script to initialize the widget.
    const googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,es,fr,zh-CN,ru',
        layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
      }, 'google_translate_element');
    };

    (window as any).googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  // Return null if we're on the server or before the component has mounted.
  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
      {/* This div will be positioned by CSS and populated by Google's script. */}
      <div id="google_translate_element" className="fixed bottom-6 right-6 z-50"></div>
    </>
  );
}