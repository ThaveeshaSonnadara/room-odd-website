'use client';

import React, { useEffect, useCallback, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageLightboxProps {
  images: string[];
  initialIndex: number;
  projectTitle: string;
  onClose: () => void;
}

export function ImageLightbox({
  images,
  initialIndex,
  projectTitle,
  onClose,
}: ImageLightboxProps) {
  const [current, setCurrent] = useState(initialIndex);
  const [direction, setDirection] = useState<1 | -1>(1);

  const goTo = useCallback(
    (index: number, dir: 1 | -1) => {
      setDirection(dir);
      setCurrent((index + images.length) % images.length);
    },
    [images.length]
  );

  const goPrev = useCallback(() => goTo(current - 1, -1), [current, goTo]);
  const goNext = useCallback(() => goTo(current + 1, 1), [current, goTo]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose, goNext, goPrev]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d * 60 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d * -60 }),
  };

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-charcoal/96 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Top bar */}
      <div className="relative z-10 flex items-center justify-between px-6 py-5 border-b border-white/8">
        <div>
          <p className="font-body text-xs uppercase tracking-[0.18em] text-white/40">
            {projectTitle}
          </p>
          <p className="font-display text-sm text-white/70 mt-0.5">
            {current + 1} / {images.length}
          </p>
        </div>
        <button
          onClick={onClose}
          aria-label="Close lightbox"
          className="group flex items-center gap-2 font-body text-xs uppercase tracking-wider text-white/40 hover:text-white transition-colors duration-200"
        >
          <span>Close</span>
          <span className="flex h-8 w-8 items-center justify-center border border-white/20 group-hover:border-white/50 transition-colors duration-200">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </span>
        </button>
      </div>

      {/* Main image area */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 md:px-16 py-6 overflow-hidden">

        {/* Prev button */}
        <button
          onClick={goPrev}
          aria-label="Previous image"
          className="absolute left-4 md:left-8 z-20 group flex items-center justify-center h-12 w-12 border border-white/20 hover:border-white/60 transition-all duration-200 bg-charcoal/40 hover:bg-charcoal/70 backdrop-blur-sm"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white/60 group-hover:text-white transition-colors duration-200">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Image */}
        <div className="relative w-full h-full max-w-6xl mx-auto overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={images[current]}
                alt={`${projectTitle} — View ${current + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 90vw"
                className="object-contain"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next button */}
        <button
          onClick={goNext}
          aria-label="Next image"
          className="absolute right-4 md:right-8 z-20 group flex items-center justify-center h-12 w-12 border border-white/20 hover:border-white/60 transition-all duration-200 bg-charcoal/40 hover:bg-charcoal/70 backdrop-blur-sm"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white/60 group-hover:text-white transition-colors duration-200">
            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="relative z-10 flex items-center justify-center gap-3 px-6 pb-6 pt-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              aria-label={`View image ${i + 1}`}
              className={`relative h-14 w-20 flex-shrink-0 overflow-hidden transition-all duration-200 ${
                i === current
                  ? 'ring-1 ring-bronze opacity-100'
                  : 'opacity-40 hover:opacity-70'
              }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${i + 1}`}
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Keyboard hint */}
      <div className="relative z-10 flex justify-center pb-4">
        <p className="font-body text-[10px] uppercase tracking-widest text-white/20">
          ← → to navigate &nbsp;·&nbsp; esc to close
        </p>
      </div>
    </motion.div>
  );
}
