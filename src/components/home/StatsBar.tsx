'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { stats } from '@/lib/data';

export function StatsBar() {
  return (
    <section className="bg-olive-deep py-0">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className={`py-12 lg:py-16 text-center ${
                index < stats.length - 1
                  ? 'border-b lg:border-b-0 lg:border-r border-white/10'
                  : ''
              } ${index % 2 === 0 && index < stats.length - 1 ? 'border-r border-white/10' : ''} ${
                index % 2 === 0 ? 'lg:border-r' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 0.61, 0.36, 1],
              }}
            >
              <p className="font-display text-4xl lg:text-5xl text-white font-light tracking-tight">
                {stat.value}
              </p>
              <p className="mt-3 editorial-label text-white/40">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
