'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Building,
  Compass,
  RefreshCw,
  Map,
  MessageSquare,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  CheckCircle2,
  FolderKanban,
  MapPin,
  Calendar,
  Layers,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { services, projects, Project } from '@/lib/data';

const serviceIconMap: Record<string, React.ReactNode> = {
  residential: <Home className="w-5 h-5 text-bronze" />,
  commercial: <Building className="w-5 h-5 text-bronze" />,
  interior: <Compass className="w-5 h-5 text-bronze" />,
  renovation: <RefreshCw className="w-5 h-5 text-bronze" />,
  'spatial-planning': <Map className="w-5 h-5 text-bronze" />,
  consultation: <MessageSquare className="w-5 h-5 text-bronze" />,
};

const serviceDeliverablesMap: Record<string, string[]> = {
  residential: [
    '3D Conceptual Renders',
    'Custom Spatial Floorplans',
    'Material Palette Boards',
    'On-Site Construction Supervision',
  ],
  commercial: [
    'Grade-A Floorplate Layouts',
    'Facade Glazing & Solar Shading Analysis',
    'Public Plaza & Traffic Flow Planning',
    'Municipal Code & Safety Compliance',
  ],
  interior: [
    'Bespoke Joinery & Cabinetry Specs',
    'Architectural Lighting Calculations',
    'Tactile Material & Finish Samples',
    'FF&E Procurement Schedule',
  ],
  renovation: [
    'Structural Health & Heritage Audit',
    'Adaptive Reuse Spatial Redesign',
    'Historical Detail Restoration Plan',
    'Contemporary MEP Integration',
  ],
  'spatial-planning': [
    'Site Zoning & Topography Analysis',
    'Solar Orientation & Wind Modeling',
    'Pedestrian & Vehicle Circulation Strategy',
    'Optimal Land Utilization Blueprint',
  ],
  consultation: [
    'Comprehensive Feasibility Report',
    'Planning Approval & Regulatory Guidance',
    'Cost Modeling & Budget Optimization',
    'Tropical Climate Sustainability Strategy',
  ],
};

function getProjectsForService(serviceId: string): Project[] {
  switch (serviceId) {
    case 'residential':
      return projects.filter((p) => p.category === 'residential');
    case 'commercial':
      return projects.filter((p) => p.category === 'commercial');
    case 'interior':
      return projects.filter(
        (p) => p.slug === 'villa-serenity' || p.slug === 'the-coral-house'
      );
    case 'renovation':
      return projects.filter(
        (p) =>
          p.slug === 'kandy-heritage-boutique' ||
          p.slug === 'the-courtyard-residence'
      );
    case 'spatial-planning':
      return projects.filter(
        (p) =>
          p.slug === 'zenith-office-tower' ||
          p.slug === 'oceanic-resort-spa'
      );
    case 'consultation':
      return projects.filter((p) => p.featured);
    default:
      return projects.slice(0, 2);
  }
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 as const },
  transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] },
};

export default function ServicesPage() {
  const [expandedService, setExpandedService] = useState<string | null>(
    'residential'
  );

  const toggleService = (id: string) => {
    setExpandedService((prev) => (prev === id ? null : id));
  };

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
            Our Services
          </motion.h1>
        </Container>
      </section>

      {/* Services list */}
      <section className="py-28 lg:py-36 bg-canvas">
        <Container>
          <SectionHeading
            label="Design Disciplines"
            title="Six Areas of Expertise"
            subtitle="Click on any service to explore deliverables, key outcomes, and real completed projects."
            className="mb-16"
          />

          <div className="space-y-6">
            {services.map((service, i) => {
              const isExpanded = expandedService === service.id;
              const relatedProjects = getProjectsForService(service.id);
              const deliverables =
                serviceDeliverablesMap[service.id] || [];
              const icon = serviceIconMap[service.id] || (
                <Compass className="w-5 h-5 text-bronze" />
              );

              return (
                <motion.div
                  key={service.id}
                  className={`group rounded-lg border transition-all duration-500 overflow-hidden ${
                    isExpanded
                      ? 'border-bronze/40 bg-white dark:bg-[#14161A] shadow-xl shadow-charcoal/5'
                      : 'border-canvas-dark/10 hover:border-bronze/30 bg-white/50 dark:bg-[#14161A]/40'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.04,
                    ease: [0.22, 0.61, 0.36, 1],
                  }}
                >
                  {/* Service Header Row - Clickable Trigger */}
                  <button
                    type="button"
                    onClick={() => toggleService(service.id)}
                    className="w-full text-left p-5 sm:p-6 lg:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 focus:outline-none cursor-pointer"
                  >
                    <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                      <span className="editorial-label text-canvas-dark/35 font-semibold text-base sm:text-lg shrink-0">
                        {service.index}
                      </span>
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-bronze/10 border border-bronze/20 flex items-center justify-center shrink-0 group-hover:bg-bronze transition-colors duration-300 [&_svg]:group-hover:text-white">
                        {icon}
                      </div>
                      <div>
                        <h3 className="font-display text-xl sm:text-2xl lg:text-3xl text-canvas-dark group-hover:text-bronze transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="mt-0.5 sm:mt-1 editorial-label text-bronze">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-canvas-dark/6 dark:border-white/10 gap-4 shrink-0">
                      <span className="inline-flex items-center gap-1.5 editorial-label text-canvas-dark/60 dark:text-white/60 text-[11px] sm:text-xs">
                        <FolderKanban className="w-3.5 h-3.5 text-bronze" />
                        {isExpanded ? 'Hide Outcomes' : 'Explore Outcomes & Projects'}
                      </span>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
                        className="w-8 h-8 rounded-full border border-canvas-dark/10 flex items-center justify-center"
                      >
                        <ChevronDown className="w-4 h-4 text-canvas-dark/60" />
                      </motion.div>
                    </div>
                  </button>

                  {/* Expanded Content Section */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
                        className="border-t border-canvas-dark/8 bg-canvas-card/40 dark:bg-black/20"
                      >
                        <div className="p-6 lg:p-10 space-y-10">
                          {/* Description & Deliverables */}
                          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                            <div className="lg:col-span-6 space-y-4">
                              <h4 className="editorial-label text-canvas-dark/40 flex items-center gap-2">
                                <Layers className="w-3.5 h-3.5 text-bronze" />
                                Service Overview & Approach
                              </h4>
                              <p className="font-body text-base text-canvas-dark/70 leading-relaxed">
                                {service.description}
                              </p>
                              <div className="relative aspect-[16/9] overflow-hidden bg-stone rounded-sm">
                                <Image
                                  src={service.image}
                                  alt={service.title}
                                  fill
                                  sizes="(max-width: 1024px) 100vw, 50vw"
                                  className="object-cover"
                                />
                              </div>
                            </div>

                            <div className="lg:col-span-6 space-y-4">
                              <h4 className="editorial-label text-canvas-dark/40 flex items-center gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-bronze" />
                                Key Tangible Deliverables
                              </h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {deliverables.map((item) => (
                                  <div
                                    key={item}
                                    className="p-3.5 bg-canvas dark:bg-[#1C1E24] border border-canvas-dark/8 rounded-sm flex items-center gap-2.5"
                                  >
                                    <div className="w-1.5 h-1.5 rounded-full bg-bronze shrink-0" />
                                    <span className="font-body text-xs font-medium text-canvas-dark/80">
                                      {item}
                                    </span>
                                  </div>
                                ))}
                              </div>

                              <div className="pt-4 p-5 bg-bronze/10 border border-bronze/20 rounded-sm">
                                <p className="font-display text-lg text-canvas-dark mb-1">
                                  Expected Service Outcome
                                </p>
                                <p className="font-body text-xs text-canvas-dark/65 leading-relaxed">
                                  Every project in this discipline is executed with rigorous technical accuracy, environmental responsiveness, and bespoke architectural detailing.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Related Projects Showcase */}
                          <div className="pt-8 border-t border-canvas-dark/8">
                            <div className="flex items-center justify-between mb-6">
                              <h4 className="editorial-label text-canvas-dark/40 flex items-center gap-2">
                                <FolderKanban className="w-3.5 h-3.5 text-bronze" />
                                Completed Projects for {service.title}
                              </h4>
                              <Link
                                href="/projects"
                                className="editorial-label text-bronze hover:underline flex items-center gap-1"
                              >
                                <span>All Projects</span>
                                <ArrowRight className="w-3 h-3" />
                              </Link>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                              {relatedProjects.map((project) => (
                                <div
                                  key={project.slug}
                                  className="group/card bg-canvas dark:bg-[#181A20] border border-canvas-dark/8 overflow-hidden rounded-sm hover:border-bronze/40 transition-all duration-300"
                                >
                                  <div className="relative aspect-[16/10] overflow-hidden bg-stone">
                                    <Image
                                      src={project.heroImage}
                                      alt={project.title}
                                      fill
                                      sizes="(max-width: 768px) 100vw, 33vw"
                                      className="object-cover transition-transform duration-700 group-hover/card:scale-105"
                                    />
                                    <div className="absolute top-3 right-3 bg-charcoal/70 backdrop-blur-md px-2.5 py-1 text-[10px] uppercase font-body text-white tracking-wider">
                                      {project.area}
                                    </div>
                                  </div>

                                  <div className="p-5 space-y-2">
                                    <div className="flex items-center justify-between">
                                      <h5 className="font-display text-xl text-canvas-dark group-hover/card:text-bronze transition-colors">
                                        {project.title}
                                      </h5>
                                      <span className="editorial-label text-canvas-dark/35 text-[10px]">
                                        {project.year}
                                      </span>
                                    </div>

                                    <p className="font-body text-xs text-canvas-dark/50 flex items-center gap-1">
                                      <MapPin className="w-3 h-3 text-bronze shrink-0" />
                                      {project.location}
                                    </p>

                                    <p className="font-body text-xs text-canvas-dark/65 line-clamp-2 leading-relaxed pt-1">
                                      {project.brief}
                                    </p>

                                    <div className="pt-3 flex items-center justify-between">
                                      <Link
                                        href={`/projects/${project.slug}`}
                                        className="inline-flex items-center gap-1 font-body text-xs text-bronze uppercase tracking-wider font-semibold hover:underline"
                                      >
                                        <span>View Case Study</span>
                                        <ArrowUpRight className="w-3 h-3" />
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-28 lg:py-36 bg-olive-deep text-center">
        <Container>
          <motion.p className="editorial-label text-white/35 mb-5" {...fadeUp}>
            Let&apos;s Build Together
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
            Have a Project in Mind?
          </motion.h2>
          <motion.p
            className="mt-5 font-body text-lg text-white/45 max-w-xl mx-auto"
            {...fadeUp}
          >
            We&apos;d love to discuss how our expertise can bring your vision to
            life.
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
