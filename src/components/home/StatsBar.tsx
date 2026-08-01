'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Building2, Compass, Award } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { stats } from '@/lib/data';

const statIconMap: Record<number, React.ReactNode> = {
  0: <Calendar className="w-4 h-4 text-bronze mb-2.5 mx-auto opacity-75" />,
  1: <Building2 className="w-4 h-4 text-bronze mb-2.5 mx-auto opacity-75" />,
  2: <Compass className="w-4 h-4 text-bronze mb-2.5 mx-auto opacity-75" />,
  3: <Award className="w-4 h-4 text-bronze mb-2.5 mx-auto opacity-75" />,
};

function AnimatedStat({ value, label, index }: { value: string; label: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (!isInView) return;

    const numericMatch = value.match(/^(\d+)/);
    const suffix = value.replace(/^\d+/, '');

    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const target = parseInt(numericMatch[1], 10);
    const duration = 1200;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);

      setDisplayValue(`${current}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const timer = setTimeout(() => {
      requestAnimationFrame(animate);
    }, index * 150);

    return () => clearTimeout(timer);
  }, [isInView, value, index]);

  return (
    <motion.div
      ref={ref}
      className={`py-12 lg:py-16 text-center border-white/8 ${
        index < 2 ? 'border-b lg:border-b-0' : ''
      } ${index % 2 === 0 ? 'border-r' : ''} ${
        index < 3 ? 'lg:border-r' : ''
      }`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 0.61, 0.36, 1],
      }}
    >
      {statIconMap[index]}
      <p className="font-display text-4xl lg:text-5xl text-white font-light tracking-tight tabular-nums">
        {displayValue}
      </p>
      <p className="mt-2 editorial-label text-white/35">
        {label}
      </p>
    </motion.div>
  );
}

export function StatsBar() {
  return (
    <section className="bg-olive-deep py-0">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <AnimatedStat
              key={stat.label}
              value={stat.value}
              label={stat.label}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
