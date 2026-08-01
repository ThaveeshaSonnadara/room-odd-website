'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Sparkles,
  Compass,
  Layers,
  Users,
  Leaf,
  Clock,
  Calendar,
  Building2,
  Award,
  ArrowUpRight,
  Quote,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { companyInfo, stats } from '@/lib/data';

const valueIconMap: Record<string, React.ReactNode> = {
  Craftsmanship: <Sparkles className="w-5 h-5 text-bronze" />,
  'Contextual Sensitivity': <Compass className="w-5 h-5 text-bronze" />,
  'Honest Materials': <Layers className="w-5 h-5 text-bronze" />,
  'Client Partnership': <Users className="w-5 h-5 text-bronze" />,
  'Environmental Responsibility': <Leaf className="w-5 h-5 text-bronze" />,
  'Timeless Design': <Clock className="w-5 h-5 text-bronze" />,
};

const statIconMap: Record<number, React.ReactNode> = {
  0: <Calendar className="w-4 h-4 text-bronze mb-2.5 mx-auto opacity-75" />,
  1: <Building2 className="w-4 h-4 text-bronze mb-2.5 mx-auto opacity-75" />,
  2: <Compass className="w-4 h-4 text-bronze mb-2.5 mx-auto opacity-75" />,
  3: <Award className="w-4 h-4 text-bronze mb-2.5 mx-auto opacity-75" />,
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 as const },
  transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] },
};

export default function AboutPage() {
  const { scrollY } = useScroll();
  const heroImageY = useTransform(scrollY, [0, 500], [0, 80]);

  return (
    <>
      {/* Hero with parallax */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroImageY }}>
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80"
            alt="Room ODD studio workspace"
            fill
            priority
            sizes="100vw"
            className="object-cover scale-110"
          />
        </motion.div>
        <div className="absolute inset-0 bg-charcoal/50" />
        <Container className="relative z-10 pb-16">
          <motion.p className="editorial-label text-white/50 mb-4" {...fadeUp}>
            About
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
            Our Studio
          </motion.h1>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="py-28 lg:py-36 bg-canvas">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div {...fadeUp}>
              <SectionHeading
                label="Philosophy"
                title="Architecture Is an Act of Optimism"
              />
              <div className="mt-8 space-y-6 font-body text-base text-canvas-dark/65 leading-relaxed">
                <p className="flex items-start gap-3">
                  <Quote className="w-5 h-5 text-bronze shrink-0 mt-1 opacity-60" />
                  <span>
                    Room ODD was founded on a simple conviction: that architecture
                    has the power to elevate the human experience. Every project we
                    undertake begins not with a brief, but with a question —{' '}
                    <em className="text-canvas-dark/80">how should this space make you feel?</em>
                  </span>
                </p>
                <p>
                  Based in Colombo, Sri Lanka, we are a chartered architectural
                  consultancy with over 25 years of practice across residential,
                  commercial, hospitality, and interior architecture. Our work is
                  grounded in the belief that great design is invisible — it
                  doesn&apos;t demand attention, it simply makes life better.
                </p>
                <p>
                  We design for permanence, not fashion. For people, not
                  portfolios. For the way light moves through a room at four
                  in the afternoon.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative aspect-[4/5] overflow-hidden bg-stone group"
              {...fadeUp}
            >
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Architectural detail"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-charcoal/80 backdrop-blur-md p-4 border border-white/10 flex items-center gap-3">
                <Building2 className="w-5 h-5 text-bronze shrink-0" />
                <p className="font-body text-xs text-white/80">
                  Chartered Architectural Consultancy · Est. {companyInfo.founded}
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-28 lg:py-36 bg-beige">
        <Container>
          <SectionHeading
            label="Our Values"
            title="What We Stand For"
            className="mb-20"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-canvas-dark/6">
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
                className="bg-beige p-8 lg:p-10 group hover:bg-stone/40 transition-colors duration-400"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.06,
                  ease: [0.22, 0.61, 0.36, 1],
                }}
              >
                <div className="w-10 h-10 rounded-full bg-bronze/10 border border-bronze/20 flex items-center justify-center mb-6 group-hover:bg-bronze transition-colors duration-300 [&_svg]:group-hover:text-white [&_svg]:transition-colors [&_svg]:duration-300">
                  {valueIconMap[value.title] || <Compass className="w-5 h-5 text-bronze" />}
                </div>
                <h3 className="font-display text-2xl text-canvas-dark mb-4 group-hover:text-bronze transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="font-body text-sm text-canvas-dark/55 leading-relaxed">
                  {value.text}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="bg-olive-deep py-0">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className={`py-12 lg:py-16 text-center ${
                  i < stats.length - 1 ? 'border-r border-white/8' : ''
                }`}
                {...fadeUp}
              >
                {statIconMap[i]}
                <p className="font-display text-4xl lg:text-5xl text-white font-light tabular-nums">
                  {stat.value}
                </p>
                <p className="mt-2 editorial-label text-white/35">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-28 lg:py-36 bg-canvas text-center">
        <Container>
          <motion.div {...fadeUp}>
            <p className="editorial-label text-canvas-dark/35 mb-5">
              Let&apos;s Collaborate
            </p>
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
            Let&apos;s Design Something Exceptional
          </motion.h2>
          <motion.div className="mt-12" {...fadeUp}>
            <Link
              href="/contact#contact-form"
              className="group inline-flex items-center gap-2 font-body text-xs uppercase tracking-wider px-8 py-4 bg-canvas-dark text-white hover:bg-olive-deep transition-colors duration-300"
            >
              <span>Book a Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-bronze transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
