'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { processSteps } from '@/lib/data';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 as const },
  transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] },
};

export default function ProcessPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
          alt="Architectural planning process"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/50" />
        <Container className="relative z-10 pb-16">
          <motion.p className="editorial-label text-white/50 mb-4" {...fadeUp}>
            How We Work
          </motion.p>
          <motion.h1
            className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tighter"
            {...fadeUp}
          >
            Our Process
          </motion.h1>
        </Container>
      </section>

      {/* Intro */}
      <section className="py-24 lg:py-32 bg-canvas">
        <Container>
          <div className="max-w-3xl">
            <motion.p
              className="font-display text-2xl lg:text-3xl font-light text-canvas-dark leading-relaxed"
              {...fadeUp}
            >
              Great architecture is the result of a disciplined, collaborative
              process. From the first conversation to the final walkthrough,
              we guide every project through five carefully considered phases.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Process steps */}
      <section className="pb-24 lg:pb-32 bg-canvas">
        <Container>
          {processSteps.map((step, i) => (
            <motion.div
              key={step.number}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 lg:py-16 border-t border-canvas-dark/8 last:border-b"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.5,
                delay: i * 0.05,
                ease: [0.22, 0.61, 0.36, 1],
              }}
            >
              {/* Step number */}
              <div className="lg:col-span-2">
                <span className="font-display text-5xl lg:text-6xl text-canvas-dark/10 font-light">
                  {step.number}
                </span>
              </div>

              {/* Title + Duration */}
              <div className="lg:col-span-3">
                <h3 className="font-display text-2xl lg:text-3xl text-canvas-dark">
                  {step.title}
                </h3>
                <p className="mt-3 editorial-label text-bronze">
                  {step.duration}
                </p>
              </div>

              {/* Description */}
              <div className="lg:col-span-7">
                <p className="font-body text-base text-canvas-dark/60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-olive-deep text-center">
        <Container>
          <motion.h2
            className="font-display text-4xl md:text-5xl font-light text-white tracking-tighter"
            {...fadeUp}
          >
            Begin Your Journey
          </motion.h2>
          <motion.p
            className="mt-4 font-body text-lg text-white/50 max-w-xl mx-auto"
            {...fadeUp}
          >
            The first step is a conversation. Tell us about your project and
            we&apos;ll outline how we can help.
          </motion.p>
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
