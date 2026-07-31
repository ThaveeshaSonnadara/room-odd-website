'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  index: string;
  title: string;
  description: string;
  image: string;
  className?: string;
}

export function ServiceCard({
  index,
  title,
  description,
  image,
  className = '',
}: ServiceCardProps) {
  return (
    <motion.div
      className={`group relative structural-border p-6 lg:p-8 transition-colors duration-400 hover:bg-beige/40 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {/* Index number */}
      <span className="editorial-label text-canvas-dark/30 block mb-6">
        {index}
      </span>

      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-stone mb-6">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-600 ease-architectural group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <h3 className="font-display text-2xl font-normal text-canvas-dark mb-3">
        {title}
      </h3>
      <p className="font-body text-sm text-canvas-dark/60 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
