'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { MobileMenu } from './MobileMenu';

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

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? 'bg-canvas/95 backdrop-blur-sm shadow-sm'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
      >
        <Container>
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="relative z-10 flex items-baseline gap-1.5"
              aria-label="Room ODD — Home"
            >
              <span
                className={`font-display text-2xl lg:text-3xl tracking-tight transition-colors duration-300 ${
                  scrolled ? 'text-canvas-dark' : 'text-white'
                }`}
              >
                Room
              </span>
              <span
                className={`font-body text-xs font-semibold uppercase tracking-widest transition-colors duration-300 ${
                  scrolled ? 'text-bronze' : 'text-bronze'
                }`}
              >
                ODD
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center gap-8"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-body text-xs uppercase tracking-wider transition-colors duration-300 hover:text-bronze ${
                    scrolled ? 'text-canvas-dark/70' : 'text-white/70'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <Link
              href="/contact"
              className={`hidden lg:inline-flex items-center font-body text-xs uppercase tracking-wider px-5 py-2.5 transition-all duration-300 ${
                scrolled
                  ? 'bg-canvas-dark text-white hover:bg-olive-deep'
                  : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
              }`}
            >
              Book a Consultation
            </Link>

            {/* Mobile menu button */}
            <button
              className="lg:hidden relative z-10 p-2 -mr-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`block h-px w-full transition-all duration-300 origin-center ${
                    mobileOpen
                      ? 'rotate-45 translate-y-2.5 bg-white'
                      : scrolled
                        ? 'bg-canvas-dark'
                        : 'bg-white'
                  }`}
                />
                <span
                  className={`block h-px w-full transition-all duration-300 ${
                    mobileOpen
                      ? 'opacity-0'
                      : scrolled
                        ? 'bg-canvas-dark'
                        : 'bg-white'
                  }`}
                />
                <span
                  className={`block h-px w-full transition-all duration-300 origin-center ${
                    mobileOpen
                      ? '-rotate-45 -translate-y-2 bg-white'
                      : scrolled
                        ? 'bg-canvas-dark'
                        : 'bg-white'
                  }`}
                />
              </div>
            </button>
          </div>
        </Container>

        {/* Structural bottom border — visible when scrolled */}
        {scrolled && (
          <div className="h-px bg-canvas-dark/8" />
        )}
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <MobileMenu onClose={() => setMobileOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
