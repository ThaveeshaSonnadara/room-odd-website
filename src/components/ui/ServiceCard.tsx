'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Home, Building, Compass, RefreshCw, Map, MessageSquare, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  index: string;
  title: string;
  description: string;
  image: string;
  className?: string;
}

const serviceIconMap: Record<string, React.ReactNode> = {
  'Residential Architecture': <Home className="w-4 h-4 text-bronze" />,
  'Commercial Architecture': <Building className="w-4 h-4 text-bronze" />,
  'Interior Architecture': <Compass className="w-4 h-4 text-bronze" />,
  'Renovation & Adaptive Reuse': <RefreshCw className="w-4 h-4 text-bronze" />,
  'Spatial & Master Planning': <Map className="w-4 h-4 text-bronze" />,
  'Architectural Consultation': <MessageSquare className="w-4 h-4 text-bronze" />,
};

export function ServiceCard({
  index,
  title,
  description,
  image,
  className = '',
}: ServiceCardProps) {
  const icon = serviceIconMap[title] || <Compass className="w-4 h-4 text-bronze" />;

  return (
    <motion.div
      className={`group relative card-hover-accent structural-border p-6 lg:p-8 transition-colors duration-400 hover:bg-beige/40 dark:hover:bg-white/5 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {/* Top Header Row with Index & Icon */}
      <div className="flex items-center justify-between mb-6">
        <span className="editorial-label text-canvas-dark/35 dark:text-white/35 font-semibold">
          {index}
        </span>
        <div className="w-8 h-8 rounded-full bg-bronze/10 border border-bronze/20 flex items-center justify-center group-hover:bg-bronze transition-colors duration-300 [&_svg]:group-hover:text-white [&_svg]:transition-colors [&_svg]:duration-300">
          {icon}
        </div>
      </div>

      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-stone mb-6">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-800 ease-architectural group-hover:scale-[1.04]"
        />
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-400 group-hover:bg-charcoal/10" />
      </div>

      {/* Content */}
      <div className="flex items-baseline justify-between mb-2">
        <h3 className="font-display text-2xl font-normal text-canvas-dark dark:text-white group-hover:text-bronze transition-colors duration-300">
          {title}
        </h3>
        <ArrowRight className="w-4 h-4 text-bronze opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0 ml-2" />
      </div>
      <p className="font-body text-sm text-canvas-dark/60 dark:text-white/60 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
