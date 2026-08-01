'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export function CTASection() {
  return (
    <section className="relative py-28 lg:py-36 bg-olive-deep overflow-hidden">
      {/* Subtle dot grid pattern */}
      <div className="absolute inset-0 dot-grid opacity-30" />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Label */}
          <motion.p
            className="editorial-label text-white/35 mb-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
          >
            Start Your Project
          </motion.p>

          {/* Horizontal rule that draws from center */}
          <motion.span
            className="block w-16 h-px bg-bronze/40 mx-auto mb-10"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] }}
            style={{ transformOrigin: 'center' }}
          />

          {/* Headline */}
          <motion.h2
            className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tighter leading-[1.05]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 0.61, 0.36, 1] }}
          >
            Ready to Transform{' '}
            <br className="hidden sm:inline" />
            Your Space?
          </motion.h2>

          {/* Description */}
          <motion.p
            className="mt-7 font-body text-lg text-white/45 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
          >
            Whether you&apos;re planning a new home, renovating an existing
            space, or developing a commercial project — we&apos;d love to hear
            from you.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="mt-10 sm:mt-12 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <Link
              href="/contact#contact-form"
              className="group inline-flex items-center justify-center gap-2 font-body text-xs uppercase tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 bg-bronze text-white hover:bg-bronze-dark transition-all duration-300 hover-track-wider"
            >
              <span>Book a Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/projects"
              className="group inline-flex items-center justify-center gap-2 font-body text-xs uppercase tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 bg-transparent text-white border border-white/15 hover:bg-white/8 hover:border-white/30 transition-all duration-300"
            >
              <span>View Our Work</span>
              <ArrowRight className="w-3.5 h-3.5 text-white/70 transition-transform group-hover:translate-x-1 group-hover:text-white" />
            </Link>
          </motion.div>

          {/* Contact info */}
          <motion.div
            className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a
              href="tel:+94112694200"
              className="font-body text-sm text-white/30 hover:text-white/60 transition-colors duration-300"
            >
              +94 11 269 4200
            </a>
            <span className="hidden sm:inline text-white/15">·</span>
            <a
              href="mailto:studio@roomodd.lk"
              className="font-body text-sm text-white/30 hover:text-white/60 transition-colors duration-300"
            >
              studio@roomodd.lk
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
