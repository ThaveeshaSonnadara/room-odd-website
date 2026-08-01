'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = 'left',
  dark = false,
  className = '',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center' : 'text-left';
  const textColor = dark ? 'text-white' : 'text-canvas-dark';
  const labelColor = dark ? 'text-white/50' : 'text-canvas-dark/40';
  const subtitleColor = dark ? 'text-white/70' : 'text-canvas-dark/60';
  const ruleColor = dark ? 'bg-bronze/40' : 'bg-bronze/60';

  return (
    <motion.div
      className={`${alignment} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {label && (
        <p className={`editorial-label mb-4 ${labelColor}`}>
          {label}
        </p>
      )}

      {/* Bronze accent rule below label */}
      {label && (
        <motion.span
          className={`${align === 'center' ? 'mx-auto' : ''} block w-10 h-px ${ruleColor} mb-6`}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
          style={{ transformOrigin: align === 'center' ? 'center' : 'left' }}
        />
      )}

      <h2
        className={`font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter leading-[1.05] ${textColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 max-w-2xl font-body text-lg leading-relaxed ${subtitleColor} ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
