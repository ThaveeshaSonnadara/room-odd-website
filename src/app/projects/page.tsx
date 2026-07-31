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

          {/* Filter bar */}
          <div className="mt-12 flex flex-wrap gap-2" role="tablist" aria-label="Project categories">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                role="tab"
                aria-selected={activeCategory === cat.value}
                className={`font-body text-xs uppercase tracking-wider px-5 py-2.5 transition-all duration-300 ${
                  activeCategory === cat.value
                    ? 'bg-canvas-dark text-white'
                    : 'bg-transparent text-canvas-dark/50 hover:text-canvas-dark structural-border'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Project grid */}
      <section className="pb-24 lg:pb-32 bg-canvas">
        <Container>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
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
            <p className="text-center font-body text-canvas-dark/40 py-20">
              No projects found in this category.
            </p>
          )}
        </Container>
      </section>
    </>
  );
}
