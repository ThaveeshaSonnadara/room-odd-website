'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Container } from '@/components/ui/Container';

const headlineWords = ['Crafting', 'Spaces'];
const subtitleWords = ['That', 'Define', 'Living'];

export function HeroSection() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 800], [0, 150]);
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const contentY = useTransform(scrollY, [0, 400], [0, -40]);

  return (
    <section className="relative h-[100dvh] min-h-[560px] max-h-[1200px] flex items-center overflow-hidden">
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
          alt="Contemporary architectural design by Room ODD"
          fill
          priority
          sizes="100vw"
          className="object-cover scale-110"
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-charcoal/60" />

      {/* Subtle dot grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-40" />

      {/* Content with scroll fade */}
      <motion.div
        className="relative z-10 w-full"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <Container>
          <div className="max-w-4xl">
            {/* Editorial label */}
            <motion.p
              className="editorial-label text-white/60 mb-6"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
            >
              Chartered Architectural Consultancy &nbsp;·&nbsp; Sri Lanka
            </motion.p>

            {/* Bronze rule that draws itself */}
            <motion.span
              className="block w-16 h-px bg-bronze/60 mb-8"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
              style={{ transformOrigin: 'left' }}
            />

            {/* Headline with staggered word reveal */}
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white tracking-tighter leading-[0.98] sm:leading-[0.95]">
              {headlineWords.map((word, i) => (
                <motion.span
                  key={word}
                  className="inline-block mr-[0.25em]"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5 + i * 0.12,
                    ease: [0.22, 0.61, 0.36, 1],
                  }}
                >
                  {word}
                </motion.span>
              ))}
              <br className="hidden sm:inline" />
              {subtitleWords.map((word, i) => (
                <motion.span
                  key={word}
                  className="inline-block mr-[0.25em] text-white/75"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.7 + i * 0.12,
                    ease: [0.22, 0.61, 0.36, 1],
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Subtitle */}
            <motion.p
              className="mt-10 font-body text-lg text-white/70 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1, ease: [0.22, 0.61, 0.36, 1] }}
            >
              We design architecture that is timeless, considered, and deeply
              connected to place. Residential, commercial, and interior projects
              crafted with precision.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <Link
                href="/contact#contact-form"
                className="inline-flex items-center justify-center text-center font-body text-xs uppercase tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 bg-bronze text-white hover:bg-bronze-dark transition-all duration-300 hover-track-wider"
              >
                Book a Consultation
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center text-center font-body text-xs uppercase tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 bg-transparent text-white border border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                View Projects
              </Link>
            </motion.div>
          </div>
        </Container>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.8 }}
      >
        <span className="editorial-label text-white/50">Scroll</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.div>
    </section>
  );
}
