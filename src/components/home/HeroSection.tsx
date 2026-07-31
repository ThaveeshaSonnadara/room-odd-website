'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[1200px] flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
        alt="Contemporary architectural design by Room ODD"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-charcoal/60" />

      {/* Grid overlay — subtle architectural grid */}
      <div className="absolute inset-0 grid-overlay opacity-30" />

      {/* Content */}
      <Container className="relative z-10">
        <div className="max-w-4xl">
          {/* Editorial label */}
          <motion.p
            className="editorial-label text-white/50 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
          >
            Chartered Architectural Consultancy &nbsp;·&nbsp; Sri Lanka
          </motion.p>

          {/* Headline */}
          <motion.h1
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white tracking-tighter leading-[0.95]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
          >
            Crafting Spaces
            <br />
            <span className="text-white/60">That Define Living</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mt-8 font-body text-lg text-white/60 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
          >
            We design architecture that is timeless, considered, and deeply
            connected to place. Residential, commercial, and interior projects
            crafted with precision.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center font-body text-xs uppercase tracking-wider px-8 py-4 bg-bronze text-white hover:bg-bronze-dark transition-colors duration-300"
            >
              Book a Consultation
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center font-body text-xs uppercase tracking-wider px-8 py-4 bg-transparent text-white border border-white/30 hover:bg-white/10 transition-all duration-300"
            >
              View Projects
            </Link>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <span className="editorial-label text-white/30">Scroll</span>
        <motion.div
          className="w-px h-8 bg-white/30"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
