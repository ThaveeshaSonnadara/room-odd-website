'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
            className="object-cover transition-transform duration-800 ease-architectural group-hover:scale-105"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-400 group-hover:bg-charcoal/30" />
        </div>

        {/* Info */}
        <div className="mt-4 flex items-baseline justify-between">
          <div>
            <h3 className="font-display text-xl lg:text-2xl font-normal text-canvas-dark group-hover:text-bronze transition-colors duration-300">
              {title}
            </h3>
            <p className="mt-1 editorial-label text-canvas-dark/40">
              {category}
            </p>
          </div>
          <div className="text-right">
            <p className="editorial-label text-canvas-dark/40">
              {location}
            </p>
            <p className="editorial-label text-canvas-dark/30 mt-1">
              {year}
            </p>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
