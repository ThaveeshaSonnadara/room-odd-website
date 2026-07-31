'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { services } from '@/lib/data';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 as const },
  transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt="Commercial architecture"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/50" />
        <Container className="relative z-10 pb-16">
          <motion.p className="editorial-label text-white/50 mb-4" {...fadeUp}>
            What We Do
          </motion.p>
          <motion.h1
            className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tighter"
            {...fadeUp}
          >
            Our Services
          </motion.h1>
        </Container>
      </section>

      {/* Services list */}
      <section className="py-24 lg:py-32 bg-canvas">
        <Container>
          <SectionHeading
            label="Design Disciplines"
            title="Six Areas of Expertise"
            subtitle="Each discipline is led by specialists who bring deep domain knowledge and a shared commitment to design excellence."
            className="mb-20"
          />

          <div className="space-y-0">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-12 lg:py-16 border-t border-canvas-dark/8 last:border-b"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                  ease: [0.22, 0.61, 0.36, 1],
                }}
              >
                {/* Index */}
                <div className="lg:col-span-1">
                  <span className="editorial-label text-canvas-dark/30">
                    {service.index}
                  </span>
                </div>

                {/* Title + subtitle */}
                <div className="lg:col-span-3">
                  <h3 className="font-display text-2xl lg:text-3xl text-canvas-dark">
                    {service.title}
                  </h3>
                  <p className="mt-2 editorial-label text-bronze">
                    {service.subtitle}
                  </p>
                </div>

                {/* Description */}
                <div className="lg:col-span-4">
                  <p className="font-body text-sm text-canvas-dark/60 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Image */}
                <div className="lg:col-span-4">
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-600 ease-architectural group-hover:scale-105"
                    />
                  </div>
                </div>
              </motion.div>
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
            Have a Project in Mind?
          </motion.h2>
          <motion.p
            className="mt-4 font-body text-lg text-white/50 max-w-xl mx-auto"
            {...fadeUp}
          >
            We&apos;d love to discuss how our expertise can bring your vision to
            life.
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
