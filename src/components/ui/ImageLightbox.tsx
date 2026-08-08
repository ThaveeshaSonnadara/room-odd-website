'use client';

import React, { useEffect, useCallback, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { useTheme } from 'next-themes';

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
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  // ── Theme tokens ────────────────────────────────────────────────
  const bg        = isDark ? '#0d0d0d'         : '#f5f0e8';
  const border    = isDark ? 'rgba(255,255,255,0.09)' : 'rgba(0,0,0,0.10)';
  const textPri   = isDark ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.55)';
  const textSec   = isDark ? 'rgba(255,255,255,0.30)' : 'rgba(0,0,0,0.35)';
  const textHint  = isDark ? 'rgba(255,255,255,0.38)' : 'rgba(0,0,0,0.40)';
  const btnBg     = isDark ? 'rgba(0,0,0,0.25)'       : 'rgba(255,255,255,0.50)';
  const btnBorder = isDark ? 'rgba(255,255,255,0.14)' : 'rgba(0,0,0,0.14)';
  const btnColor  = isDark ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.45)';
  const thumbRing = isDark ? '#B38051'                : '#96693F'; // bronze

  const goTo = useCallback(
    (index: number, dir: 1 | -1) => {
      setDirection(dir);
      setCurrent((index + images.length) % images.length);
    },
    [images.length]
  );

  const goPrev = useCallback(() => goTo(current - 1, -1), [current, goTo]);
  const goNext = useCallback(() => goTo(current + 1, 1), [current, goTo]);

  // Keyboard
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose, goNext, goPrev]);

  // Body scroll lock
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = original; };
  }, []);

  // Prevent image drag globally while open
  useEffect(() => {
    const prevent = (e: DragEvent) => e.preventDefault();
    window.addEventListener('dragstart', prevent);
    return () => window.removeEventListener('dragstart', prevent);
  }, []);

  const slideVariants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 36 : -36 }),
    center: { opacity: 1, x: 0 },
    exit:  (d: number) => ({ opacity: 0, x: d > 0 ? -36 : 36 }),
  };

  // Shared no-select style
  const noSelect: React.CSSProperties = {
    userSelect: 'none',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
  };

  return (
    <div
      style={{ position: 'fixed', inset: 0, zIndex: 99999, ...noSelect }}
      className="flex flex-col"
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* Backdrop */}
      <div
        style={{ position: 'absolute', inset: 0, backgroundColor: bg }}
        onClick={onClose}
      />

      {/* ── Top bar ─────────────────────────────────────────────── */}
      <div
        style={{ position: 'relative', zIndex: 1, borderBottom: `1px solid ${border}` }}
        className="flex items-center justify-between px-6 md:px-10 h-16 flex-shrink-0"
      >
        <div className="flex items-center gap-4">
          <span
            style={{ color: textSec }}
            className="font-body text-[11px] uppercase tracking-[0.2em]"
          >
            {projectTitle}
          </span>
          <span style={{ backgroundColor: border }} className="w-px h-3" />
          <span style={{ color: textPri }} className="font-body text-[11px]">
            {current + 1}&thinsp;/&thinsp;{images.length}
          </span>
        </div>

        <button
          onClick={onClose}
          aria-label="Close"
          style={{ border: `1px solid ${btnBorder}`, color: btnColor, background: btnBg }}
          className="flex items-center justify-center w-9 h-9 transition-opacity duration-200 hover:opacity-100 opacity-75"
        >
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
            <line x1="1" y1="1" x2="10" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="10" y1="1" x2="1" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* ── Main image area ──────────────────────────────────────── */}
      <div
        style={{ position: 'relative', zIndex: 1, flex: 1, minHeight: 0 }}
        className="flex items-center justify-center"
      >
        <div className="flex items-center w-full h-full max-w-6xl mx-auto">

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            aria-label="Previous image"
            style={{ border: `1px solid ${btnBorder}`, color: btnColor, background: btnBg }}
            className="flex-shrink-0 flex items-center justify-center w-11 h-11 mx-3 md:mx-5 transition-opacity duration-200 opacity-60 hover:opacity-100"
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M8.5 1.5L3.5 6.5L8.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Image */}
          <div
            style={{ position: 'relative', flex: 1, height: '100%', minWidth: 0, ...noSelect }}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: [0.22, 0.61, 0.36, 1] }}
                style={{ position: 'absolute', inset: '10px 0', ...noSelect }}
              >
                <Image
                  src={images[current]}
                  alt={`${projectTitle} — ${current + 1}`}
                  fill
                  draggable={false}
                  sizes="(max-width: 768px) calc(100vw - 120px), calc(100vw - 160px)"
                  className="object-contain pointer-events-none"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            aria-label="Next image"
            style={{ border: `1px solid ${btnBorder}`, color: btnColor, background: btnBg }}
            className="flex-shrink-0 flex items-center justify-center w-11 h-11 mx-3 md:mx-5 transition-opacity duration-200 opacity-60 hover:opacity-100"
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M4.5 1.5L9.5 6.5L4.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

        </div>
      </div>

      {/* ── Thumbnail strip ─────────────────────────────────────── */}
      {images.length > 1 && (
        <div
          style={{ position: 'relative', zIndex: 1, borderTop: `1px solid ${border}` }}
          className="flex-shrink-0 py-3 px-6"
        >
          <div className="flex items-center justify-center gap-2 overflow-x-auto">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? 1 : -1)}
                aria-label={`Image ${i + 1}`}
                style={{
                  outline: i === current ? `1.5px solid ${thumbRing}` : 'none',
                  outlineOffset: '2px',
                  opacity: i === current ? 1 : 0.38,
                  transition: 'opacity 0.2s, outline 0.2s',
                }}
                className="relative flex-shrink-0 h-12 w-[72px] overflow-hidden hover:opacity-70"
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  fill
                  draggable={false}
                  sizes="72px"
                  className="object-cover pointer-events-none"
                />
              </button>
            ))}
          </div>

          {/* Keyboard hint */}
          <p
            style={{ color: textHint }}
            className="hidden md:block text-center font-body text-[10px] tracking-[0.16em] mt-2 uppercase"
          >
            ← → to navigate &nbsp;·&nbsp; esc to close
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
