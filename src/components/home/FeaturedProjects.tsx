'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { projects } from '@/lib/data';

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="py-28 lg:py-36 bg-beige">
      <Container>
        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-20">
          <SectionHeading
            label="02 / Selected Work"
            title="Featured Projects"
            subtitle="A curated selection of residential, commercial, and hospitality projects that define our practice."
          />
          <Link
            href="/projects"
            className="mt-8 lg:mt-0 inline-flex items-center font-body text-xs uppercase tracking-wider text-canvas-dark/40 dark:text-white/50 hover:text-bronze dark:hover:text-bronze transition-colors duration-300 group hover-underline"
          >
            View All Projects
            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Asymmetric grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Large left card */}
          {featured[0] && (
            <ProjectCard
              slug={featured[0].slug}
              title={featured[0].title}
              category={featured[0].category}
              location={featured[0].location}
              year={featured[0].year}
              image={featured[0].heroImage}
              aspectRatio="landscape"
              className="lg:row-span-2"
            />
          )}

          {/* Right column — two stacked cards */}
          <div className="flex flex-col gap-10">
            {featured.slice(1, 3).map((project) => (
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
          </div>
        </div>

        {/* Bottom row — full width */}
        {featured[3] && (
          <div className="mt-10">
            <ProjectCard
              slug={featured[3].slug}
              title={featured[3].title}
              category={featured[3].category}
              location={featured[3].location}
              year={featured[3].year}
              image={featured[3].heroImage}
              aspectRatio="landscape"
            />
          </div>
        )}
      </Container>
    </section>
  );
}
