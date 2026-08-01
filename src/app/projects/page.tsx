'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { projects, type ProjectCategory } from '@/lib/data';

const categories: { label: string; value: 'all' | ProjectCategory }[] = [
  { label: 'All', value: 'all' },
  { label: 'Residential', value: 'residential' },
  { label: 'Commercial', value: 'commercial' },
  { label: 'Interior', value: 'interior' },
  { label: 'Renovation', value: 'renovation' },
  { label: 'Hospitality', value: 'hospitality' },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | ProjectCategory>(
    'all'
  );

  const filtered =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-canvas">
        <Container>
          <SectionHeading
            label="Portfolio"
            title="Our Projects"
            subtitle="A curated collection of residential, commercial, and hospitality projects that define our practice."
          />

          {/* Filter bar with sliding indicator */}
          <div className="mt-10 sm:mt-14 flex overflow-x-auto whitespace-nowrap pb-2 gap-2 sm:flex-wrap" role="tablist" aria-label="Project categories">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                role="tab"
                aria-selected={activeCategory === cat.value}
                className={`relative font-body text-xs uppercase tracking-wider px-5 py-2.5 shrink-0 transition-all duration-300 ${
                  activeCategory === cat.value
                    ? 'bg-canvas-dark text-white'
                    : 'bg-transparent text-canvas-dark/40 hover:text-canvas-dark/70 structural-border'
                }`}
              >
                {cat.label}
                {activeCategory === cat.value && (
                  <motion.span
                    layoutId="projectFilterIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-bronze"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Project grid */}
      <section className="pb-28 lg:pb-36 bg-canvas">
        <Container>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12"
            layout
          >
            {filtered.map((project) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                title={project.title}
                category={project.category}
                location={project.location}
                year={project.year}
                image={project.heroImage}
                aspectRatio="landscape"
              />
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-center font-body text-canvas-dark/35 py-24">
              No projects found in this category.
            </p>
          )}
        </Container>
      </section>
    </>
  );
}
