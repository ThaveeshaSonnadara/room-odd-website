'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { services } from '@/lib/data';

export function ServicesOverview() {
  return (
    <section className="py-24 lg:py-32 bg-canvas">
      <Container>
        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <SectionHeading
            label="01 / Our Expertise"
            title="Design Disciplines"
            subtitle="Six specialist areas of practice, unified by a commitment to architectural excellence and spatial intelligence."
          />
          <Link
            href="/services"
            className="mt-8 lg:mt-0 inline-flex items-center font-body text-xs uppercase tracking-wider text-canvas-dark/50 hover:text-bronze transition-colors duration-300 group"
          >
            All Services
            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-canvas-dark/8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              index={service.index}
              title={service.title}
              description={service.description}
              image={service.image}
              className="bg-canvas"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
