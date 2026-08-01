'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  className?: string;
  showWhiteText?: boolean;
}

export function ThemeToggle({ className = '', showWhiteText = false }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-8 h-8 rounded-full border border-canvas-dark/10 opacity-0 ${className}`} />
    );
  }

  const isDark = resolvedTheme === 'dark' || theme === 'dark';

  return (
    <motion.button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`relative p-2 rounded-full border transition-all duration-300 flex items-center justify-center focus:outline-none ${
        showWhiteText && !isDark
          ? 'border-white/20 bg-white/10 text-white hover:bg-white/20'
          : isDark
            ? 'border-white/15 bg-white/5 text-bronze hover:bg-white/10'
            : 'border-canvas-dark/10 bg-canvas-dark/5 text-canvas-dark hover:bg-canvas-dark/10'
      } ${className}`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      whileTap={{ scale: 0.92 }}
    >
      <motion.div
        key={isDark ? 'dark' : 'light'}
        initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
        transition={{ duration: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
      >
        {isDark ? (
          <Sun className="w-4 h-4 text-bronze" />
        ) : (
          <Moon className={`w-4 h-4 ${showWhiteText ? 'text-white' : 'text-canvas-dark'}`} />
        )}
      </motion.div>
    </motion.button>
  );
}
