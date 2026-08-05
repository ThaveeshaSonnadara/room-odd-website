'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CustomSelectProps {
  id?: string;
  placeholder?: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  id,
  placeholder = 'Select an option',
  options,
  value,
  onChange,
  error,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  // Light/dark mode detection for proper contrast
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <div className="relative w-full" ref={containerRef}>
      {/* Trigger Button */}
      <button
        id={id}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`w-full bg-transparent font-body text-sm py-3.5 border-b-2 text-left flex items-center justify-between transition-colors duration-300 focus:outline-none ${
          isOpen
            ? 'border-bronze text-canvas-dark'
            : isDark
            ? 'border-white/15 hover:border-white/30 text-white'
            : 'border-canvas-dark/20 hover:border-canvas-dark/40 text-canvas-dark'
        }`}
      >
        <span
          className={
            value
              ? isDark
                ? 'text-white font-medium'
                : 'text-canvas-dark font-medium'
              : isDark
              ? 'text-white/45 font-normal'
              : 'text-canvas-dark/45 font-normal'
          }
        >
          {value || placeholder}
        </span>

        <motion.svg
          className={`w-4 h-4 ml-2 flex-shrink-0 ${
            isDark ? 'text-white/50' : 'text-canvas-dark/50'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 9l-7 7-7-7"
          />
        </motion.svg>
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -6, scaleY: 0.96 }}
            animate={{ opacity: 1, y: 4, scaleY: 1 }}
            exit={{ opacity: 0, y: -4, scaleY: 0.96 }}
            transition={{ duration: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
            style={{ transformOrigin: 'top' }}
            className={`absolute z-50 left-0 right-0 top-full max-h-60 overflow-y-auto py-1 my-1 shadow-2xl ${
              isDark
                ? 'bg-charcoal border border-white/10 shadow-charcoal/30'
                : 'bg-white border border-canvas-dark/15 shadow-charcoal/10'
            }`}
          >
            {options.map((option) => {
              const isSelected = option === value;
              return (
                <li
                  key={option}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => handleSelect(option)}
                  className={`px-4 py-3 text-xs md:text-sm font-body cursor-pointer flex items-center justify-between transition-all duration-200 ${
                    isSelected
                      ? 'bg-bronze/10 text-bronze font-medium'
                      : isDark
                      ? 'text-white/80 hover:bg-white/5 hover:text-white hover:pl-5'
                      : 'text-canvas-dark/80 hover:bg-canvas-hover hover:text-canvas-dark hover:pl-5'
                  }`}
                >
                  <span>{option}</span>
                  {isSelected && (
                    <motion.svg
                      className="w-3.5 h-3.5 text-bronze ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.15 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </motion.svg>
                  )}
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Error Message */}
      {error && <p className="mt-1.5 font-body text-xs text-error">{error}</p>}
    </div>
  );
};
