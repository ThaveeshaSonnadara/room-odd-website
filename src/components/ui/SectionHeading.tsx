import React from 'react';

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

  return (
    <div className={`${alignment} ${className}`}>
      {label && (
        <p
          className={`editorial-label mb-4 ${labelColor}`}
        >
          {label}
        </p>
      )}
      <h2
        className={`font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter ${textColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl font-body text-lg ${subtitleColor} ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
