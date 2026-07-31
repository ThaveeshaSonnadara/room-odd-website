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
      <section className="pb-24 lg:pb-32 bg-canvas">
        <Container>
          <div className="max-w-4xl mx-auto space-y-20">
            {testimonials.map((t, i) => (
              <div
                key={t.id}
                className={`${i > 0 ? 'pt-20 border-t border-canvas-dark/8' : ''}`}
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
      <section className="py-24 lg:py-32 bg-olive-deep text-center">
        <Container>
          <motion.h2
            className="font-display text-4xl md:text-5xl font-light text-white tracking-tighter"
            {...fadeUp}
          >
            Ready to Begin?
          </motion.h2>
          <motion.div className="mt-10" {...fadeUp}>
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
