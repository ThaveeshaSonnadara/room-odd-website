'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';

export function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 bg-olive-deep overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-overlay opacity-20" />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Label */}
          <motion.p
            className="editorial-label text-white/40 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
          >
            Start Your Project
          </motion.p>

          {/* Headline */}
          <motion.h2
            className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tighter"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] }}
          >
            Ready to Transform{' '}
            <br className="hidden sm:inline" />
            Your Space?
          </motion.h2>

          {/* Description */}
          <motion.p
            className="mt-6 font-body text-lg text-white/50 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
          >
            Whether you&apos;re planning a new home, renovating an existing
            space, or developing a commercial project — we&apos;d love to hear
            from you.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="mt-10 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center font-body text-xs uppercase tracking-wider px-8 py-4 bg-bronze text-white hover:bg-bronze-dark transition-colors duration-300"
            >
              Book a Consultation
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center font-body text-xs uppercase tracking-wider px-8 py-4 bg-transparent text-white border border-white/20 hover:bg-white/10 transition-all duration-300"
            >
              View Our Work
            </Link>
          </motion.div>

          {/* Contact info */}
          <motion.div
            className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a
              href="tel:+94112694200"
              className="font-body text-sm text-white/40 hover:text-white/70 transition-colors duration-300"
            >
              +94 11 269 4200
            </a>
            <span className="hidden sm:inline text-white/20">·</span>
            <a
              href="mailto:studio@roomodd.lk"
              className="font-body text-sm text-white/40 hover:text-white/70 transition-colors duration-300"
            >
              studio@roomodd.lk
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
