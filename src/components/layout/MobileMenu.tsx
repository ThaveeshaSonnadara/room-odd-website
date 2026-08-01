'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

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
      transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {/* Bronze accent line at top */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-bronze/40"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
        style={{ transformOrigin: 'left' }}
      />

      <nav
        className="flex-1 flex flex-col items-center justify-center gap-5"
        aria-label="Mobile navigation"
      >
        {navLinks.map((link, i) => (
          <motion.div
            key={link.href}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{
              duration: 0.4,
              delay: 0.1 + i * 0.04,
              ease: [0.22, 0.61, 0.36, 1],
            }}
          >
            <Link
              href={link.href}
              onClick={onClose}
              className="font-display text-3xl text-white/70 hover:text-white transition-colors duration-300"
            >
              {link.label}
            </Link>
          </motion.div>
        ))}

        {/* CTA & Theme Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{
            duration: 0.4,
            delay: 0.1 + navLinks.length * 0.04,
            ease: [0.22, 0.61, 0.36, 1],
          }}
          className="mt-8 flex flex-col items-center gap-6"
        >
          <div className="flex items-center gap-2 font-body text-xs text-white/50 uppercase tracking-wider">
            <span>Theme</span>
            <ThemeToggle showWhiteText={true} />
          </div>

          <Link
            href="/contact#contact-form"
            onClick={(e) => {
              onClose();
              if (window.location.pathname === '/contact') {
                e.preventDefault();
                const element = document.getElementById('contact-form');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }
            }}
            className="inline-flex items-center font-body text-xs uppercase tracking-wider px-8 py-4 bg-bronze text-white hover:bg-bronze-dark transition-colors duration-300"
          >
            Book a Consultation
          </Link>
        </motion.div>
      </nav>

      {/* Bottom info */}
      <motion.div
        className="p-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <p className="font-body text-xs text-white/25">
          studio@roomodd.lk &nbsp;·&nbsp; +94 11 269 4200
        </p>
      </motion.div>
    </motion.div>
  );
}
