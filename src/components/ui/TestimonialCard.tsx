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
  const textColor = dark ? 'text-white' : 'text-canvas-dark dark:text-white';
  const mutedColor = dark ? 'text-white/50' : 'text-canvas-dark/50 dark:text-white/50';
  const quoteColor = dark ? 'text-white/10' : 'text-canvas-dark/[0.04] dark:text-bronze/20';
  const borderColor = dark ? 'bg-bronze/30' : 'bg-bronze/40 dark:bg-bronze/60';

  return (
    <motion.blockquote
      className={`relative pl-8 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {/* Bronze left border accent */}
      <motion.span
        className={`absolute left-0 top-0 bottom-0 w-px ${borderColor}`}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
        style={{ transformOrigin: 'top' }}
      />

      {/* Large decorative quote mark */}
      <span
        className={`absolute -top-4 left-4 font-display text-7xl lg:text-8xl leading-none select-none ${quoteColor}`}
        aria-hidden="true"
      >
        &ldquo;
      </span>

      {/* Quote text */}
      <p className={`relative font-display text-xl lg:text-2xl font-light leading-relaxed tracking-tight ${textColor}`}>
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
        <p className={`editorial-label ${mutedColor} mt-3`}>
          Project: {project}
        </p>
      </footer>
    </motion.blockquote>
  );
}
