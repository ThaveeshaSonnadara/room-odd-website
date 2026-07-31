import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { companyInfo } from '@/lib/data';

const footerNav = {
  studio: [
    { href: '/about', label: 'About' },
    { href: '/team', label: 'Team' },
    { href: '/process', label: 'Process' },
    { href: '/blog', label: 'Journal' },
    { href: '/contact', label: 'Contact' },
  ],
  services: [
    { href: '/services', label: 'Residential' },
    { href: '/services', label: 'Commercial' },
    { href: '/services', label: 'Interior' },
    { href: '/services', label: 'Renovations' },
    { href: '/services', label: 'Consultation' },
  ],
  legal: [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms & Conditions' },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white" role="contentinfo">
      {/* Main footer */}
      <Container>
        <div className="py-20 lg:py-24">
          {/* Top row — Logo + tagline */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
            <div>
              <Link href="/" className="inline-flex items-baseline gap-1.5" aria-label="Room ODD — Home">
                <span className="font-display text-4xl lg:text-5xl tracking-tight text-white">
                  Room
                </span>
                <span className="font-body text-sm font-semibold uppercase tracking-widest text-bronze">
                  ODD
                </span>
              </Link>
              <p className="mt-4 font-body text-sm text-white/70 max-w-md leading-relaxed">
                Chartered Architectural Consultancy. Designing exceptional
                spaces across Sri Lanka since {companyInfo.founded}.
              </p>
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="mt-8 lg:mt-0 inline-flex items-center font-body text-xs uppercase tracking-wider px-8 py-4 bg-bronze text-white hover:bg-bronze-dark transition-colors duration-300 self-start"
            >
              Start Your Project
            </Link>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/10 mb-16" />

          {/* Navigation columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
            {/* Studio */}
            <div>
              <h3 className="editorial-label text-white/60 mb-6">
                Studio
              </h3>
              <ul className="space-y-3">
                {footerNav.studio.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-white/70 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="editorial-label text-white/60 mb-6">
                Services
              </h3>
              <ul className="space-y-3">
                {footerNav.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-white/70 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="editorial-label text-white/60 mb-6">
                Contact
              </h3>
              <ul className="space-y-3">
                <li>
                  <p className="font-body text-sm text-white/70">
                    {companyInfo.address}
                  </p>
                </li>
                <li>
                  <a
                    href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
                    className="font-body text-sm text-white/70 hover:text-white transition-colors duration-300"
                  >
                    {companyInfo.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="font-body text-sm text-white/70 hover:text-white transition-colors duration-300"
                  >
                    {companyInfo.email}
                  </a>
                </li>
                <li>
                  <p className="font-body text-xs text-white/50 mt-2">
                    {companyInfo.hours}
                  </p>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="editorial-label text-white/60 mb-6">
                Follow
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href={companyInfo.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-white/70 hover:text-white transition-colors duration-300"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href={companyInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-white/70 hover:text-white transition-colors duration-300"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={companyInfo.social.pinterest}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-white/70 hover:text-white transition-colors duration-300"
                  >
                    Pinterest
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between py-6 gap-4">
            <p className="font-body text-xs text-white/50">
              &copy; {currentYear} Room ODD (Pvt) Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {footerNav.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-xs text-white/50 hover:text-white/80 transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
