'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { team } from '@/lib/data';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 as const },
  transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] },
};

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-canvas">
        <Container>
          <SectionHeading
            label="Our People"
            title="The Team"
            subtitle="A collective of architects, designers, and project leaders united by a shared commitment to design excellence."
          />
        </Container>
      </section>

      {/* Team grid */}
      <section className="pb-28 lg:pb-36 bg-canvas">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20 lg:gap-x-14 lg:gap-y-24">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                className="group"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.22, 0.61, 0.36, 1],
                }}
              >
                {/* Photo */}
                <div className="relative aspect-[3/4] overflow-hidden bg-stone mb-7">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-800 ease-architectural group-hover:scale-[1.02]"
                  />
                  {/* Subtle overlay that fades on hover */}
                  <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-charcoal/0 transition-colors duration-600" />
                </div>

                {/* Info */}
                <h3 className="font-display text-2xl text-canvas-dark group-hover:text-bronze transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="mt-1.5 editorial-label text-bronze">
                  {member.role}
                </p>
                <p className="mt-4 font-body text-sm text-canvas-dark/55 leading-relaxed">
                  {member.bio}
                </p>

                {/* Qualifications */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {member.qualifications.map((q) => (
                    <span
                      key={q}
                      className="font-body text-2xs px-3 py-1 structural-border text-canvas-dark/35 uppercase tracking-wider"
                    >
                      {q}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Join section */}
      <section className="py-28 lg:py-36 bg-beige">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <motion.div {...fadeUp}>
              <p className="editorial-label text-canvas-dark/35 mb-5">Careers</p>
              <motion.span
                className="block w-12 h-px bg-bronze/40 mx-auto mb-8"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
                style={{ transformOrigin: 'center' }}
              />
            </motion.div>
            <motion.h2
              className="font-display text-4xl md:text-5xl font-light text-canvas-dark tracking-tighter"
              {...fadeUp}
            >
              Join Our Studio
            </motion.h2>
            <motion.p
              className="mt-6 font-body text-base text-canvas-dark/55 leading-relaxed"
              {...fadeUp}
            >
              We&apos;re always looking for talented architects and designers
              who share our passion for exceptional spatial design. If you
              believe in the power of architecture to change lives, we&apos;d
              love to hear from you.
            </motion.p>
            <motion.div className="mt-12" {...fadeUp}>
              <Link
                href="/contact"
                className="inline-flex items-center font-body text-xs uppercase tracking-wider px-8 py-4 bg-canvas-dark text-white hover:bg-olive-deep transition-colors duration-300"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}
