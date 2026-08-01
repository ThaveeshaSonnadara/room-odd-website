'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { testimonials } from '@/lib/data';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 as const },
  transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] },
};

export default function TestimonialsPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-canvas">
        <Container>
          <SectionHeading
            label="Client Words"
            title="Testimonials"
            subtitle="Our clients entrust us with their most significant investments. Here's what they have to say about the experience."
          />
        </Container>
      </section>

      {/* Testimonials */}
      <section className="pb-28 lg:pb-36 bg-canvas">
        <Container>
          <div className="max-w-4xl mx-auto space-y-24">
            {testimonials.map((t, i) => (
              <div
                key={t.id}
                className={`${i > 0 ? 'pt-24 border-t border-canvas-dark/6' : ''} ${
                  i % 2 !== 0 ? 'lg:pl-16' : ''
                }`}
              >
                <TestimonialCard
                  quote={t.quote}
                  client={t.client}
                  role={t.role}
                  project={t.project}
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-28 lg:py-36 bg-olive-deep text-center">
        <Container>
          <motion.p className="editorial-label text-white/35 mb-5" {...fadeUp}>
            Your Turn
          </motion.p>
          <motion.span
            className="block w-12 h-px bg-bronze/40 mx-auto mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            style={{ transformOrigin: 'center' }}
          />
          <motion.h2
            className="font-display text-4xl md:text-5xl font-light text-white tracking-tighter"
            {...fadeUp}
          >
            Ready to Begin?
          </motion.h2>
          <motion.div className="mt-12" {...fadeUp}>
            <Link
              href="/contact"
              className="inline-flex items-center font-body text-xs uppercase tracking-wider px-8 py-4 bg-bronze text-white hover:bg-bronze-dark transition-colors duration-300"
            >
              Book a Consultation
            </Link>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
