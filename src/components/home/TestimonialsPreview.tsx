'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { testimonials } from '@/lib/data';

const AUTO_ROTATE_INTERVAL = 6000; // 6 seconds normal cycle
const USER_CLICK_PAUSE_DURATION = 12000; // 12 seconds when user clicks a specific review

export function TestimonialsPreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const userInteractedTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [userPauseActive, setUserPauseActive] = useState(false);

  // Auto-rotation timer
  useEffect(() => {
    // Do not rotate if user is hovering or clicked a specific review recently
    if (isHovered || userPauseActive) return;

    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, AUTO_ROTATE_INTERVAL);

    return () => clearInterval(timer);
  }, [isHovered, userPauseActive]);

  // Handle user clicking a specific indicator dot
  const handleSelectTestimonial = (index: number) => {
    setActiveIndex(index);
    setUserPauseActive(true);

    // Clear existing timeout if any
    if (userInteractedTimeoutRef.current) {
      clearTimeout(userInteractedTimeoutRef.current);
    }

    // Pause auto-rotation for extended duration (12s) to allow reading
    userInteractedTimeoutRef.current = setTimeout(() => {
      setUserPauseActive(false);
    }, USER_CLICK_PAUSE_DURATION);
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (userInteractedTimeoutRef.current) {
        clearTimeout(userInteractedTimeoutRef.current);
      }
    };
  }, []);

  const active = testimonials[activeIndex];

  return (
    <section className="py-28 lg:py-36 bg-canvas">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <SectionHeading
            label="03 / Client Words"
            title="Trusted Relationships"
            className="mb-20"
          />

          {/* Testimonial container with hover pause listener */}
          <div
            className="relative min-h-[260px] md:min-h-[220px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AnimatePresence mode="wait">
              {active && (
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
                >
                  <TestimonialCard
                    quote={active.quote}
                    client={active.client}
                    role={active.role}
                    project={active.project}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Navigation indicators with refined progress */}
          <div
            className="mt-14 flex items-center justify-between border-t border-canvas-dark/6 dark:border-white/10 pt-8"
            role="tablist"
            aria-label="Testimonial navigation"
          >
            <div className="flex items-center gap-3">
              {testimonials.map((t, i) => {
                const isActive = i === activeIndex;
                return (
                  <button
                    key={t.id}
                    onClick={() => handleSelectTestimonial(i)}
                    className="relative h-6 flex items-center group focus-visible:outline-none cursor-pointer"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Testimonial ${i + 1} from ${t.client}`}
                  >
                    <span
                      className={`h-[1.5px] transition-all duration-500 block ${
                        isActive
                          ? 'w-14 bg-bronze'
                          : 'w-6 bg-canvas-dark/20 dark:bg-white/25 group-hover:bg-canvas-dark/40 dark:group-hover:bg-white/50'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Subtle counter & status indicator */}
            <div className="flex items-center gap-3 editorial-label text-canvas-dark/35 dark:text-white/40">
              <span>
                0{activeIndex + 1} / 0{testimonials.length}
              </span>
              {(isHovered || userPauseActive) && (
                <motion.span
                  className="text-bronze text-2xs uppercase tracking-widest"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  • Paused
                </motion.span>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
