'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Safely log error object
    if (error) {
      console.error('Unhandled runtime error:', error.message || error);
    }
  }, [error]);

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-canvas-dark text-white relative overflow-hidden pt-20">
      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />

      <Container className="relative z-10 text-center py-20">
        <p className="editorial-label text-bronze mb-6">
          System Notice &nbsp;·&nbsp; Temporary Disruption
        </p>

        <h1 className="font-display text-5xl md:text-7xl font-light tracking-tighter text-white/90 mb-6">
          Unexpected Anomaly
        </h1>

        <p className="font-body text-base text-white/50 max-w-md mx-auto mb-12 leading-relaxed">
          An unexpected interruption occurred while rendering this spatial view. Our system has logged the anomaly.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => reset()}
            className="inline-flex items-center font-body text-xs uppercase tracking-wider px-8 py-4 bg-bronze text-white hover:bg-bronze-dark transition-colors duration-300"
          >
            Re-render View
          </button>
          <Link
            href="/"
            className="inline-flex items-center font-body text-xs uppercase tracking-wider px-8 py-4 bg-transparent text-white border border-white/20 hover:bg-white/10 transition-all duration-300"
          >
            Return to Studio
          </Link>
        </div>
      </Container>
    </section>
  );
}
