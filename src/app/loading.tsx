import React from 'react';

export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-canvas-dark text-white"
      role="status"
      aria-label="Loading page content"
    >
      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-6 text-center">
        {/* Brand logo monogram */}
        <div className="flex items-baseline gap-1.5">
          <span className="font-display text-3xl lg:text-4xl tracking-tight text-white">
            Room
          </span>
          <span className="font-body text-xs font-semibold uppercase tracking-widest text-bronze">
            ODD
          </span>
        </div>

        {/* Minimal architectural progress bar */}
        <div className="relative w-36 h-0.5 bg-white/10 overflow-hidden">
          <div className="absolute inset-0 bg-bronze animate-loading-bar" />
        </div>

        {/* Subtitle */}
        <p className="editorial-label text-white/30 text-2xs tracking-widest uppercase">
          Architectural Consultancy
        </p>
      </div>
    </div>
  );
}
