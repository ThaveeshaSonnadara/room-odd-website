'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { ImageLightbox } from '@/components/ui/ImageLightbox';
import { projects } from '@/lib/data';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 as const },
  transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] },
};

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const project = projects.find((p) => p.slug === slug);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!project) {
    return (
      <section className="pt-40 pb-24">
        <Container>
          <h1 className="font-display text-4xl text-canvas-dark">
            Project Not Found
          </h1>
          <p className="mt-4 font-body text-canvas-dark/60">
            The project you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center mt-8 font-body text-xs uppercase tracking-wider text-bronze hover:text-bronze-dark transition-colors duration-300"
          >
            ← Back to Projects
          </Link>
        </Container>
      </section>
    );
  }

  const related = projects
    .filter((p) => p.slug !== slug && p.category === project.category)
    .slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
        <Container className="relative z-10 pb-16">
          <motion.p className="editorial-label text-white/50 mb-4" {...fadeUp}>
            {project.category} &nbsp;·&nbsp; {project.year}
          </motion.p>
          <motion.h1
            className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tighter"
            {...fadeUp}
          >
            {project.title}
          </motion.h1>
        </Container>
      </section>

      {/* Project meta */}
      <section className="border-b border-canvas-dark/8">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 py-8">
            {[
              { label: 'Location', value: project.location },
              { label: 'Year', value: String(project.year) },
              { label: 'Area', value: project.area },
              { label: 'Type', value: project.category.charAt(0).toUpperCase() + project.category.slice(1) },
            ].map((item, i) => (
              <div
                key={item.label}
                className={`py-4 md:py-0 ${
                  i < 3 ? 'border-b md:border-b-0 md:border-r border-canvas-dark/8' : ''
                } ${i > 0 ? 'md:pl-8' : ''}`}
              >
                <p className="editorial-label text-canvas-dark/40 mb-1">
                  {item.label}
                </p>
                <p className="font-body text-sm text-canvas-dark">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Brief + Description */}
      <section className="py-24 lg:py-32 bg-canvas">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <motion.div className="lg:col-span-4" {...fadeUp}>
              <h2 className="font-display text-3xl text-canvas-dark mb-6">
                The Brief
              </h2>
              <p className="font-body text-base text-canvas-dark/70 leading-relaxed">
                {project.brief}
              </p>
            </motion.div>

            <motion.div className="lg:col-span-8" {...fadeUp}>
              <h2 className="font-display text-3xl text-canvas-dark mb-6">
                Design Response
              </h2>
              <p className="font-body text-base text-canvas-dark/70 leading-relaxed">
                {project.description}
              </p>

              {/* Materials */}
              <div className="mt-12">
                <h3 className="editorial-label text-canvas-dark/40 mb-4">
                  Material Palette
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.materials.map((material) => (
                    <span
                      key={material}
                      className="font-body text-xs px-4 py-2 structural-border text-canvas-dark/60"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section className="py-12 bg-beige">
        <Container>
          <p className="editorial-label text-canvas-dark/40 mb-6">
            {project.images.length} {project.images.length === 1 ? 'Image' : 'Images'} &nbsp;·&nbsp; Click to expand
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.images.map((img, i) => (
              <motion.button
                key={i}
                onClick={() => setLightboxIndex(i)}
                className="group relative aspect-[4/3] overflow-hidden bg-stone text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.22, 0.61, 0.36, 1],
                }}
                aria-label={`Open image ${i + 1} fullscreen`}
              >
                <Image
                  src={img}
                  alt={`${project.title} — View ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-architectural group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center h-12 w-12 border border-white/70 bg-charcoal/40 backdrop-blur-sm">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white">
                      <path d="M2 2h5M2 2v5M14 2h-5M14 2v5M2 14h5M2 14v-5M14 14h-5M14 14v-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </Container>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <ImageLightbox
            images={project.images}
            initialIndex={lightboxIndex}
            projectTitle={project.title}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>

      {/* Related projects */}
      {related.length > 0 && (
        <section className="py-24 lg:py-32 bg-canvas">
          <Container>
            <h2 className="font-display text-3xl text-canvas-dark mb-12">
              Related Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {related.map((p) => (
                <Link key={p.slug} href={`/projects/${p.slug}`} className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone mb-4">
                    <Image
                      src={p.heroImage}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-600 ease-architectural group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-display text-xl text-canvas-dark group-hover:text-bronze transition-colors duration-300">
                    {p.title}
                  </h3>
                  <p className="mt-1 editorial-label text-canvas-dark/40">
                    {p.location} &nbsp;·&nbsp; {p.year}
                  </p>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 bg-olive-deep text-center">
        <Container>
          <motion.h2
            className="font-display text-4xl md:text-5xl font-light text-white tracking-tighter"
            {...fadeUp}
          >
            Start Your Own Project
          </motion.h2>
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
