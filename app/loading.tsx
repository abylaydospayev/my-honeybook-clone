// components/loading.tsx
'use client';

export default function Loading() {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-white z-50">
      <div className="cube animate-spin-3d"></div>
      <style jsx>{`
        .cube {
          width: 40px;
          height: 40px;
          background: #6366f1;
          transform-style: preserve-3d;
          animation: spin3d 2s infinite linear;
        }

        @keyframes spin3d {
          0% {
            transform: rotateX(0deg) rotateY(0deg);
          }
          100% {
            transform: rotateX(360deg) rotateY(360deg);
          }
        }
      `}</style>
    </div>
  );
}