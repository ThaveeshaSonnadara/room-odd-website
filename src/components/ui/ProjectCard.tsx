'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: number;
  image: string;
  className?: string;
  aspectRatio?: 'landscape' | 'portrait' | 'square';
}

const aspectClasses = {
  landscape: 'aspect-[16/10]',
  portrait: 'aspect-[3/4]',
  square: 'aspect-square',
};

export function ProjectCard({
  slug,
  title,
  category,
  location,
  year,
  image,
  className = '',
  aspectRatio = 'landscape',
}: ProjectCardProps) {
  return (
    <motion.article
      className={`group relative overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
    >
      <Link href={`/projects/${slug}`} className="block">
        {/* Image */}
        <div className={`relative ${aspectClasses[aspectRatio]} overflow-hidden bg-stone`}>
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-1000 ease-architectural group-hover:scale-[1.04]"
          />
          {/* Refined hover overlay with bronze accent bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-charcoal/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Bronze top accent line on hover */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-bronze transform scale-x-0 origin-left transition-transform duration-500 ease-architectural group-hover:scale-x-100" />

          {/* View project indicator on hover */}
          <div className="absolute bottom-6 right-6 opacity-0 translate-y-2 transition-all duration-400 group-hover:opacity-100 group-hover:translate-y-0">
            <span className="editorial-label text-white/90 flex items-center gap-1.5 bg-charcoal/60 backdrop-blur-md px-3 py-1.5 border border-white/10">
              View Project
              <ArrowUpRight className="w-3.5 h-3.5 text-bronze transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="mt-5 flex items-baseline justify-between">
          <div>
            <h3 className="font-display text-xl lg:text-2xl font-normal text-canvas-dark group-hover:text-bronze transition-colors duration-300">
              {title}
            </h3>
            <p className="mt-1.5 editorial-label text-canvas-dark/40">
              {category}
            </p>
          </div>
          <div className="text-right">
            <p className="editorial-label text-canvas-dark/45 inline-flex items-center gap-1">
              <MapPin className="w-3 h-3 text-bronze/70 shrink-0" />
              {location}
            </p>
            <p className="editorial-label text-canvas-dark/25 mt-1">
              {year}
            </p>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
