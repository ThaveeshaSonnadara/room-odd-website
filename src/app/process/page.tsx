'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MessageSquare, Compass, Layers, Wrench, CheckCircle2, ArrowUpRight, Clock } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { processSteps } from '@/lib/data';

const stepIconMap: Record<string, React.ReactNode> = {
  '01': <MessageSquare className="w-4 h-4 text-bronze" />,
  '02': <Compass className="w-4 h-4 text-bronze" />,
  '03': <Layers className="w-4 h-4 text-bronze" />,
  '04': <Wrench className="w-4 h-4 text-bronze" />,
  '05': <CheckCircle2 className="w-4 h-4 text-bronze" />,
};

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
          <motion.span
            className="block w-12 h-px bg-bronze/40 mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] }}
            style={{ transformOrigin: 'left' }}
          />
          <motion.h1
            className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tighter"
            {...fadeUp}
          >
            Our Process
          </motion.h1>
        </Container>
      </section>

      {/* Intro */}
      <section className="py-28 lg:py-36 bg-canvas">
        <Container>
          <div className="max-w-3xl">
            <motion.p
              className="font-display text-2xl lg:text-3xl font-light text-canvas-dark leading-relaxed tracking-tight"
              {...fadeUp}
            >
              Great architecture is the result of a disciplined, collaborative
              process. From the first conversation to the final walkthrough,
              we guide every project through five carefully considered phases.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Process steps with vertical connector */}
      <section className="pb-28 lg:pb-36 bg-canvas">
        <Container>
          <div className="relative">
            {/* Vertical timeline connector */}
            <motion.div
              className="hidden lg:block absolute left-[8.33%] top-0 bottom-0 w-px bg-gradient-to-b from-bronze/20 via-bronze/10 to-transparent"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.5, ease: [0.22, 0.61, 0.36, 1] }}
              style={{ transformOrigin: 'top' }}
            />

            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-8 py-14 lg:py-18 border-t border-canvas-dark/6 last:border-b transition-colors duration-300 hover:bg-beige/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.04,
                  ease: [0.22, 0.61, 0.36, 1],
                }}
              >
                {/* Step number with dot */}
                <div className="lg:col-span-2 relative flex lg:block items-center justify-between">
                  {/* Timeline dot */}
                  <div className="hidden lg:block absolute left-0 top-3 w-2.5 h-2.5 rounded-full bg-bronze/60 -ml-[4px]" />
                  <span className="font-display text-5xl lg:text-6xl text-canvas-dark/12 dark:text-white/20 font-light lg:pl-6 group-hover:text-bronze/40 transition-colors duration-300">
                    {step.number}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-bronze/10 border border-bronze/20 flex items-center justify-center lg:mt-4 lg:ml-6 group-hover:bg-bronze transition-colors duration-300 [&_svg]:group-hover:text-white [&_svg]:transition-colors [&_svg]:duration-300">
                    {stepIconMap[step.number] || <Compass className="w-4 h-4 text-bronze" />}
                  </div>
                </div>

                {/* Title + Duration */}
                <div className="lg:col-span-3">
                  <h3 className="font-display text-2xl lg:text-3xl text-canvas-dark dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 editorial-label text-bronze flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-bronze/80 shrink-0" />
                    {step.duration}
                  </p>
                </div>

                {/* Description */}
                <div className="lg:col-span-7">
                  <p className="font-body text-base text-canvas-dark/55 dark:text-white/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-28 lg:py-36 bg-olive-deep text-center">
        <Container>
          <motion.p className="editorial-label text-white/35 mb-5" {...fadeUp}>
            The First Step
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
            Begin Your Journey
          </motion.h2>
          <motion.p
            className="mt-5 font-body text-lg text-white/45 max-w-xl mx-auto"
            {...fadeUp}
          >
            The first step is a conversation. Tell us about your project and
            we&apos;ll outline how we can help.
          </motion.p>
          <motion.div className="mt-12" {...fadeUp}>
            <Link
              href="/contact#contact-form"
              className="group inline-flex items-center gap-2 font-body text-xs uppercase tracking-wider px-8 py-4 bg-bronze text-white hover:bg-bronze-dark transition-colors duration-300"
            >
              <span>Book a Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
