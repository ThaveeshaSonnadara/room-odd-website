'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { testimonials } from '@/lib/data';

export function TestimonialsPreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  return (
    <section className="py-24 lg:py-32 bg-canvas">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <SectionHeading
            label="03 / Client Words"
            title="Trusted Relationships"
            className="mb-16"
          />

          {/* Active testimonial */}
          {active && (
            <TestimonialCard
              key={active.id}
              quote={active.quote}
              client={active.client}
              role={active.role}
              project={active.project}
            />
          )}

          {/* Navigation dots */}
          <div className="mt-12 flex items-center gap-3" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActiveIndex(i)}
                className={`h-px transition-all duration-300 ${
                  i === activeIndex
                    ? 'w-10 bg-bronze'
                    : 'w-6 bg-canvas-dark/20 hover:bg-canvas-dark/40'
                }`}
                role="tab"
                aria-selected={i === activeIndex}
                aria-label={`Testimonial from ${t.client}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
