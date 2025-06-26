"use client";

import { useEffect, useState } from "react";

export function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 100);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className={`
        w-full bg-cover bg-center transition-all duration-500 ease-in-out
        ${scrolled ? "h-20 fixed top-0 left-0 right-0 z-50 shadow-md" : "h-screen relative"}
      `}
      style={{ backgroundImage: "url('/image/hasan.pixels.jpg')" }}
    >
      {/* Dark overlay */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-500
          ${scrolled ? "bg-opacity-80" : "bg-opacity-50"}`}
      ></div>

      {/* Content */}
      <div
        className={`
          relative z-10 flex items-center justify-center h-full px-4 text-white transition-all duration-500
          ${scrolled ? "text-xl justify-start pl-8" : "text-6xl"}
          font-bold
        `}
      >
        Your Consulting Company
      </div>
    </section>
  );
}
