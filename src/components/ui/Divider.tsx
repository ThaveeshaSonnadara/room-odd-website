import React from 'react';

interface DividerProps {
  className?: string;
  dark?: boolean;
}

export function Divider({ className = '', dark = false }: DividerProps) {
  return (
    <hr
      className={`border-0 h-px ${
        dark ? 'bg-white/10' : 'bg-canvas-dark/8'
      } ${className}`}
      aria-hidden="true"
    />
  );
}
