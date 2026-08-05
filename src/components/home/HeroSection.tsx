'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '@/components/ui/Container';

gsap.registerPlugin(ScrollTrigger);

const headlineWords = ['Crafting', 'Spaces'];
const subtitleWords = ['That', 'Define', 'Living'];

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgElementsRef = useRef<HTMLDivElement[]>([]);

  // GSAP ScrollTrigger animations
  useEffect(() => {
    if (reduceMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const section = sectionRef.current!;
      const video = videoRef.current;
      const content = contentRef.current;
      const bgElements = bgElementsRef.current.filter(Boolean) as HTMLDivElement[];

      // Video parallax - slower scroll speed
      if (video) {
        gsap.to(video, {
          yPercent: 30,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }

      // Content fade/scale on scroll
      if (content) {
        gsap.to(content, {
          opacity: 0,
          scale: 0.95,
          y: -40,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: '+=400',
            scrub: 1,
          },
        });
      }

      // Multi-layer background parallax
      bgElements.forEach((el, i) => {
        const depth = (i + 1) * 15; // 15, 30, 45, 60
        gsap.to(el, {
          yPercent: depth,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      });

      // Bronze rule draw animation on scroll into view
      const rule = section.querySelector('.hero-rule');
      if (rule) {
        gsap.fromTo(
          rule,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1,
            ease: 'architectural',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Staggered text reveal on load
      const words = section.querySelectorAll('.hero-word');
      words.forEach((word, i) => {
        gsap.fromTo(
          word,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.5 + i * 0.12,
            ease: 'architectural',
          }
        );
      });

      // Subtitle words
      const subWords = section.querySelectorAll('.hero-subword');
      subWords.forEach((word, i) => {
        gsap.fromTo(
          word,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.7 + i * 0.12,
            ease: 'architectural',
          }
        );
      });

      // CTA buttons
      const ctas = section.querySelector('.hero-ctas');
      if (ctas) {
        gsap.fromTo(
          ctas,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 1.3,
            ease: 'architectural',
          }
        );
      }

      // Scroll indicator
      const scrollIndicator = section.querySelector('.hero-scroll');
      if (scrollIndicator) {
        gsap.fromTo(
          scrollIndicator,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.6,
            delay: 1.8,
            ease: 'architectural',
          }
        );
      }

      // Scroll indicator pulse animation
      const pulseLine = section.querySelector('.hero-pulse');
      if (pulseLine) {
        gsap.to(pulseLine, {
          scaleY: 0.4,
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: 'power2.inOut',
          transformOrigin: 'top',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [reduceMotion]);

  // Video load handling
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      video.play().catch(() => {
        // Autoplay prevented, show fallback
        video.setAttribute('poster', '/hero-fallback.jpg');
      });
    };

    video.addEventListener('canplay', handleCanPlay);
    video.muted = true;
    video.loop = true;
    video.playsInline = true;

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100dvh] min-h-[560px] max-h-[1200px] flex items-center overflow-hidden bg-canvas-dark"
      aria-label="Room ODD - Chartered Architectural Consultancy"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0" style={{ willChange: 'transform' }}>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          className="w-full h-full object-cover scale-[1.15]"
          aria-hidden="true"
          poster="/hero-fallback.jpg"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_3HV5PTnlZH9hs8IFitAwB8FvPvJ/hf_20260805_145830_77e669f5-590c-4ac6-8f57-fa6d18161a34.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Multi-layer Parallax Background Elements */}
      <div
        ref={(el) => { bgElementsRef.current[0] = el as HTMLDivElement; }}
        className="absolute inset-0 z-5 opacity-10"
        style={{ willChange: 'transform' }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-olive/20 to-transparent" />
      </div>
      <div
        ref={(el) => { bgElementsRef.current[1] = el as HTMLDivElement; }}
        className="absolute inset-0 z-5 opacity-5"
        style={{ willChange: 'transform' }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 dot-grid" style={{ backgroundSize: '60px 60px' }} />
      </div>
      <div
        ref={(el) => { bgElementsRef.current[2] = el as HTMLDivElement; }}
        className="absolute inset-0 z-5 opacity-5"
        style={{ willChange: 'transform' }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-bronze/10 via-transparent to-transparent" />
      </div>

      {/* Dark overlay with subtle gradient */}
      <div
        className="absolute inset-0 z-10 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80"
        aria-hidden="true"
      />

      {/* Subtle vignette */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        aria-hidden="true"
        style={{
          boxShadow: 'inset 0 0 200px rgba(0,0,0,0.4)',
        }}
      />

      {/* Content with GSAP-driven scroll animations */}
      <div
        ref={contentRef}
        className="relative z-20 w-full"
        style={{ willChange: 'transform, opacity' }}
      >
        <Container>
          <div className="max-w-4xl">
            {/* Editorial label */}
            <p className="editorial-label text-white/60 mb-6 hero-label">
              Chartered Architectural Consultancy &nbsp;·&nbsp; Sri Lanka
            </p>

            {/* Bronze rule that draws itself */}
            <span className="hero-rule block w-20 h-px bg-bronze/60 mb-8" style={{ transformOrigin: 'left' }} />

            {/* Headline with staggered word reveal */}
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white tracking-tighter leading-[0.98] sm:leading-[0.95]">
              {headlineWords.map((word, i) => (
                <span
                  key={word}
                  className="hero-word inline-block mr-[0.25em] opacity-0"
                >
                  {word}
                </span>
              ))}
              <br className="hidden sm:inline" />
              {subtitleWords.map((word, i) => (
                <span
                  key={word}
                  className="hero-subword inline-block mr-[0.25em] text-white/75 opacity-0"
                >
                  {word}
                </span>
              ))}
            </h1>

            {/* Subtitle */}
            <motion.p
              className="mt-10 font-body text-lg text-white/70 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1, ease: [0.22, 0.61, 0.36, 1] }}
            >
              We design architecture that is timeless, considered, and deeply
              connected to place. Residential, commercial, and interior projects
              crafted with precision.
            </motion.p>

            {/* CTAs */}
            <div className="hero-ctas mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 opacity-0">
              <Link
                href="/contact#contact-form"
                className="inline-flex items-center justify-center text-center font-body text-xs uppercase tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 bg-bronze text-white hover:bg-bronze-dark transition-all duration-300 hover-track-wider active:scale-[0.98]"
              >
                Book a Consultation
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center text-center font-body text-xs uppercase tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 bg-transparent text-white border border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300 active:scale-[0.98]"
              >
                View Projects
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.8 }}
      >
        <span className="editorial-label text-white/50">Scroll</span>
        <motion.div
          className="hero-pulse w-px h-10 bg-gradient-to-b from-white/50 to-transparent"
          style={{ transformOrigin: 'top' }}
        />
      </motion.div>
    </section>
  );
}