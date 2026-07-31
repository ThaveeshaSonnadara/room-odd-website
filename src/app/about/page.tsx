'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { companyInfo, stats } from '@/lib/data';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 as const },
  transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80"
          alt="Room ODD studio workspace"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/50" />
        <Container className="relative z-10 pb-16">
          <motion.p className="editorial-label text-white/50 mb-4" {...fadeUp}>
            About
          </motion.p>
          <motion.h1
            className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tighter"
            {...fadeUp}
          >
            Our Studio
          </motion.h1>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="py-24 lg:py-32 bg-canvas">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div {...fadeUp}>
              <SectionHeading
                label="Philosophy"
                title="Architecture Is an Act of Optimism"
              />
              <div className="mt-8 space-y-6 font-body text-base text-canvas-dark/70 leading-relaxed">
                <p>
                  Room ODD was founded on a simple conviction: that architecture
                  has the power to elevate the human experience. Every project we
                  undertake begins not with a brief, but with a question —{' '}
                  <em>how should this space make you feel?</em>
                </p>
                <p>
                  Based in Colombo, Sri Lanka, we are a chartered architectural
                  consultancy with over {new Date().getFullYear() - companyInfo.founded} years
                  of practice across residential, commercial, hospitality, and
                  interior architecture. Our work is grounded in the belief that
                  great design is invisible — it doesn&apos;t demand attention,
                  it simply makes life better.
                </p>
                <p>
                  We design for permanence, not fashion. For people, not
                  portfolios. For the way light moves through a room at four
                  in the afternoon.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative aspect-[4/5] overflow-hidden bg-stone"
              {...fadeUp}
            >
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Architectural detail"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-beige">
        <Container>
          <SectionHeading
            label="Our Values"
            title="What We Stand For"
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-canvas-dark/8">
            {[
              {
                title: 'Craftsmanship',
                text: 'Every detail matters. From the joinery to the junction, we pursue excellence in execution — because architecture is experienced at the scale of a hand on a doorknob.',
              },
              {
                title: 'Contextual Sensitivity',
                text: 'We design with place, not against it. Climate, culture, landscape, and heritage inform every spatial decision. Architecture should feel inevitable in its setting.',
              },
              {
                title: 'Honest Materials',
                text: 'We let materials speak truthfully — exposing concrete, celebrating timber grain, allowing patina to become part of the design narrative.',
              },
              {
                title: 'Client Partnership',
                text: 'Architecture is a collaborative act. We listen before we draw, and we maintain transparent communication through every phase of the project.',
              },
              {
                title: 'Environmental Responsibility',
                text: 'Sustainable design is not an add-on — it is fundamental. Every project is designed to minimise environmental impact and maximise natural resource utilisation.',
              },
              {
                title: 'Timeless Design',
                text: 'We resist trends. Our buildings are designed to age gracefully, gaining character and relevance over decades, not losing it.',
              },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                className="bg-beige p-8 lg:p-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.22, 0.61, 0.36, 1],
                }}
              >
                <h3 className="font-display text-2xl text-canvas-dark mb-4">
                  {value.title}
                </h3>
                <p className="font-body text-sm text-canvas-dark/60 leading-relaxed">
                  {value.text}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="bg-olive-deep">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className={`py-12 lg:py-16 text-center ${
                  i < stats.length - 1 ? 'border-r border-white/10' : ''
                }`}
                {...fadeUp}
              >
                <p className="font-display text-4xl lg:text-5xl text-white font-light">
                  {stat.value}
                </p>
                <p className="mt-3 editorial-label text-white/40">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-canvas text-center">
        <Container>
          <motion.h2
            className="font-display text-4xl md:text-5xl font-light text-canvas-dark tracking-tighter"
            {...fadeUp}
          >
            Let&apos;s Design Something Exceptional
          </motion.h2>
          <motion.div className="mt-10" {...fadeUp}>
            <Link
              href="/contact"
              className="inline-flex items-center font-body text-xs uppercase tracking-wider px-8 py-4 bg-canvas-dark text-white hover:bg-olive-deep transition-colors duration-300"
            >
              Book a Consultation
            </Link>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
