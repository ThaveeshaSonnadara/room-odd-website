'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/process', label: 'Process' },
  { href: '/team', label: 'Team' },
  { href: '/blog', label: 'Journal' },
  { href: '/contact', label: 'Contact' },
];

interface MobileMenuProps {
  onClose: () => void;
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <motion.div
      className="fixed inset-0 z-40 bg-charcoal flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <nav
        className="flex-1 flex flex-col items-center justify-center gap-6"
        aria-label="Mobile navigation"
      >
        {navLinks.map((link, i) => (
          <motion.div
            key={link.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.1 + i * 0.05,
              ease: [0.22, 0.61, 0.36, 1],
            }}
          >
            <Link
              href={link.href}
              onClick={onClose}
              className="font-display text-3xl text-white/80 hover:text-white transition-colors duration-300"
            >
              {link.label}
            </Link>
          </motion.div>
        ))}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.1 + navLinks.length * 0.05,
            ease: [0.22, 0.61, 0.36, 1],
          }}
          className="mt-8"
        >
          <Link
            href="/contact"
            onClick={onClose}
            className="inline-flex items-center font-body text-xs uppercase tracking-wider px-8 py-4 bg-bronze text-white hover:bg-bronze-dark transition-colors duration-300"
          >
            Book a Consultation
          </Link>
        </motion.div>
      </nav>

      {/* Bottom info */}
      <div className="p-8 text-center">
        <p className="font-body text-xs text-white/30">
          studio@roomodd.lk &nbsp;·&nbsp; +94 11 269 4200
        </p>
      </div>
    </motion.div>
  );
}
