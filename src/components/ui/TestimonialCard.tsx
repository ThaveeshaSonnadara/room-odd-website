'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  client: string;
  role: string;
  project: string;
  dark?: boolean;
  className?: string;
}

export function TestimonialCard({
  quote,
  client,
  role,
  project,
  dark = false,
  className = '',
}: TestimonialCardProps) {
  const textColor = dark ? 'text-white' : 'text-canvas-dark';
  const mutedColor = dark ? 'text-white/50' : 'text-canvas-dark/50';
  const quoteColor = dark ? 'text-white/10' : 'text-canvas-dark/5';

  return (
    <motion.blockquote
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {/* Large decorative quote mark */}
      <span
        className={`absolute -top-6 -left-2 font-display text-8xl lg:text-[10rem] leading-none select-none ${quoteColor}`}
        aria-hidden="true"
      >
        &ldquo;
      </span>

      {/* Quote text */}
      <p className={`relative font-display text-xl lg:text-2xl font-light leading-relaxed ${textColor}`}>
        {quote}
      </p>

      {/* Attribution */}
      <footer className="mt-8">
        <p className={`font-body text-sm font-medium ${textColor}`}>
          {client}
        </p>
        <p className={`font-body text-xs ${mutedColor} mt-1`}>
          {role}
        </p>
        <p className={`editorial-label ${mutedColor} mt-2`}>
          Project: {project}
        </p>
      </footer>
    </motion.blockquote>
  );
}
