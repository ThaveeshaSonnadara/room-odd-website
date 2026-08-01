'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
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
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > 150 && latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Pages with dark hero section where transparent header should show white text
  const isDarkHeroPage =
    pathname === '/' ||
    pathname === '/about' ||
    pathname === '/services' ||
    pathname === '/process' ||
    pathname === '/contact' ||
    pathname.startsWith('/projects/') ||
    pathname.startsWith('/blog/');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
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

  const showWhiteText = mobileOpen || (!scrolled && isDarkHeroPage);

  const handleConsultationClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/contact') {
      e.preventDefault();
      const element = document.getElementById('contact-form');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 pointer-events-auto"
        initial={{ y: -100 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
      >
        <div
          className={`w-full transition-all duration-500 ease-architectural ${
            scrolled && !mobileOpen
              ? 'bg-white/85 dark:bg-[#0D0E10]/85 backdrop-blur-xl border-b border-canvas-dark/10 dark:border-white/10 shadow-md shadow-charcoal/8 dark:shadow-black/50 py-1 lg:py-2'
              : 'bg-transparent backdrop-blur-none border-b border-transparent shadow-none py-3 lg:py-5'
          }`}
        >
          <Container>
            <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-14 lg:h-16' : 'h-16 lg:h-20'}`}>
              {/* Logo */}
              <Link
                href="/"
                className="relative z-10 flex items-baseline gap-1.5"
                aria-label="Room ODD — Home"
              >
                <span
                  className={`font-display text-2xl lg:text-3xl tracking-tight transition-colors duration-300 font-bold ${
                    showWhiteText
                      ? 'text-white'
                      : 'text-canvas-dark dark:text-white'
                  }`}
                >
                  Room
                </span>
                <span className="font-body text-xs font-semibold uppercase tracking-widest text-bronze">
                  ODD
                </span>
              </Link>

              {/* Desktop Navigation */}
              <nav
                className="hidden lg:flex items-center gap-8"
                aria-label="Main navigation"
              >
                {navLinks.map((link) => {
                  const isActive =
                    link.href === '/'
                      ? pathname === '/'
                      : pathname.startsWith(link.href);

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`font-body text-xs uppercase tracking-wider transition-all duration-300 relative py-1.5 ${
                        isActive
                          ? 'text-bronze font-bold'
                          : showWhiteText
                            ? 'text-white/90 hover:text-white font-medium'
                            : 'text-canvas-dark dark:text-white font-semibold hover:text-bronze dark:hover:text-bronze'
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="activeNavIndicator"
                          className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-bronze"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* Desktop CTA & Theme Toggle */}
              <div className="flex items-center gap-3">
                <div className="hidden lg:block">
                  <ThemeToggle showWhiteText={showWhiteText} />
                </div>

                <Link
                  href="/contact#contact-form"
                  onClick={handleConsultationClick}
                  className={`group hidden lg:inline-flex items-center gap-1.5 font-body text-xs uppercase tracking-wider px-5 py-2.5 transition-all duration-300 ${
                    showWhiteText
                      ? 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                      : 'bg-canvas-dark text-white hover:bg-olive-deep dark:bg-bronze dark:hover:bg-bronze-dark dark:text-white'
                  }`}
                >
                  <span>Book a Consultation</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-bronze dark:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>

              {/* Mobile menu button */}
              <button
                className="lg:hidden relative z-50 p-2 -mr-2 cursor-pointer"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
              >
                <div className="w-6 h-5 relative flex flex-col justify-between">
                  <span
                    className={`block h-0.5 w-full transition-all duration-300 origin-center ${
                      mobileOpen
                        ? 'rotate-45 translate-y-2.5 bg-[#FFFFFF]'
                        : showWhiteText
                          ? 'bg-[#FFFFFF]'
                          : 'bg-charcoal dark:bg-[#FFFFFF]'
                    }`}
                  />
                  <span
                    className={`block h-0.5 transition-all duration-300 ${
                      mobileOpen
                        ? 'opacity-0 w-full'
                        : showWhiteText
                          ? 'bg-[#FFFFFF] w-4'
                          : 'bg-charcoal dark:bg-[#FFFFFF] w-4'
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-full transition-all duration-300 origin-center ${
                      mobileOpen
                        ? '-rotate-45 -translate-y-2 bg-[#FFFFFF]'
                        : showWhiteText
                          ? 'bg-[#FFFFFF]'
                          : 'bg-charcoal dark:bg-[#FFFFFF]'
                    }`}
                  />
                </div>
              </button>
            </div>
          </Container>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
