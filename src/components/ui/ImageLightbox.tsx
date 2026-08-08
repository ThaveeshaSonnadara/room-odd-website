'use client';

import React, { useEffect, useCallback, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

interface ImageLightboxProps {
  images: string[];
  initialIndex: number;
  projectTitle: string;
  onClose: () => void;
}

function LightboxInner({
  images,
  initialIndex,
  projectTitle,
  onClose,
}: ImageLightboxProps) {
  const [current, setCurrent] = useState(initialIndex);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const goTo = useCallback(
    (index: number, dir: 1 | -1) => {
      setDirection(dir);
      setCurrent((index + images.length) % images.length);
    },
    [images.length]
  );

  const goPrev = useCallback(() => goTo(current - 1, -1), [current, goTo]);
  const goNext = useCallback(() => goTo(current + 1, 1), [current, goTo]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose, goNext, goPrev]);

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = original; };
  }, []);

  const slideVariants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 40 : -40 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -40 : 40 }),
  };

  if (!mounted) return null;

  return (
    <div
      style={{ position: 'fixed', inset: 0, zIndex: 99999 }}
      className="flex flex-col"
    >
      {/* Pure black backdrop — no transparency */}
      <div
        style={{ position: 'absolute', inset: 0, backgroundColor: '#0d0d0d' }}
        onClick={onClose}
      />

      {/* ── Top bar ─────────────────────────────────────────────── */}
      <div
        style={{ position: 'relative', zIndex: 1 }}
        className="flex items-center justify-between px-6 md:px-10 h-16 border-b border-white/10 flex-shrink-0"
      >
        <div className="flex items-center gap-4">
          <span className="font-body text-[11px] uppercase tracking-[0.2em] text-white/30">
            {projectTitle}
          </span>
          <span className="w-px h-3 bg-white/20" />
          <span className="font-body text-[11px] text-white/50">
            {current + 1}&thinsp;/&thinsp;{images.length}
          </span>
        </div>

        <button
          onClick={onClose}
          aria-label="Close"
          className="flex items-center justify-center w-9 h-9 border border-white/20 text-white/50 hover:text-white hover:border-white/50 transition-colors duration-200"
        >
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
            <line x1="1" y1="1" x2="10" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="10" y1="1" x2="1" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* ── Main image ──────────────────────────────────────────── */}
      <div
        style={{ position: 'relative', zIndex: 1, flex: 1, minHeight: 0 }}
        className="flex items-center justify-center"
      >
        <div className="flex items-center w-full h-full max-w-6xl mx-auto">
        {/* Prev */}
        <button
          onClick={(e) => { e.stopPropagation(); goPrev(); }}
          aria-label="Previous image"
          className="flex-shrink-0 flex items-center justify-center w-12 h-12 mx-3 md:mx-5 border border-white/15 text-white/40 hover:text-white hover:border-white/50 transition-colors duration-200 bg-black/20 hover:bg-black/40"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Image container — fills remaining space */}
        <div style={{ position: 'relative', flex: 1, height: '100%', minWidth: 0 }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
              style={{ position: 'absolute', inset: '12px 0' }}
            >
              <Image
                src={images[current]}
                alt={`${projectTitle} — ${current + 1}`}
                fill
                sizes="(max-width: 768px) calc(100vw - 120px), calc(100vw - 160px)"
                className="object-contain"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next */}
        <button
          onClick={(e) => { e.stopPropagation(); goNext(); }}
          aria-label="Next image"
          className="flex-shrink-0 flex items-center justify-center w-12 h-12 mx-3 md:mx-5 border border-white/15 text-white/40 hover:text-white hover:border-white/50 transition-colors duration-200 bg-black/20 hover:bg-black/40"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        </div>{/* end max-w-6xl wrapper */}
      </div>

      {/* ── Thumbnail strip ─────────────────────────────────────── */}
      {images.length > 1 && (
        <div
          style={{ position: 'relative', zIndex: 1 }}
          className="flex-shrink-0 border-t border-white/10 py-3 px-6"
        >
          <div className="flex items-center justify-center gap-2 overflow-x-auto scrollbar-none">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? 1 : -1)}
                aria-label={`Image ${i + 1}`}
                className={`relative flex-shrink-0 h-12 w-[72px] overflow-hidden transition-all duration-200 ${
                  i === current
                    ? 'ring-1 ring-offset-1 ring-offset-[#0d0d0d] ring-amber-600/80 opacity-100'
                    : 'opacity-35 hover:opacity-65'
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  fill
                  sizes="72px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>

          {/* Keyboard hint — desktop only */}
          <p className="hidden md:block text-center font-body text-[10px] tracking-widest text-white/18 mt-2 uppercase">
            ← → navigate &nbsp;·&nbsp; esc close
          </p>
        </div>
      )}
    </div>
  );
}

export function ImageLightbox(props: ImageLightboxProps) {
  const [portalRoot, setPortalRoot] = useState<Element | null>(null);

  useEffect(() => {
    setPortalRoot(document.body);
  }, []);

  if (!portalRoot) return null;
  return createPortal(<LightboxInner {...props} />, portalRoot);
}
