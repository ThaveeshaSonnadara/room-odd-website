import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
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
      {/* Decorative top accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-bronze/30 to-transparent" />

      {/* Main footer */}
      <Container>
        <div className="py-20 lg:py-28">
          {/* Top row — Logo + tagline */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-20">
            <div>
              <Link href="/" className="inline-flex items-baseline gap-1.5" aria-label="Room ODD — Home">
                <span className="font-display text-4xl lg:text-5xl tracking-tight text-white">
                  Room
                </span>
                <span className="font-body text-sm font-semibold uppercase tracking-widest text-bronze">
                  ODD
                </span>
              </Link>
              <p className="mt-5 font-body text-sm text-white/50 max-w-md leading-relaxed">
                Chartered Architectural Consultancy. Designing exceptional
                spaces across Sri Lanka since {companyInfo.founded}.
              </p>
            </div>

            {/* CTA */}
            <Link
              href="/contact#contact-form"
              className="group mt-8 lg:mt-0 inline-flex items-center gap-2 font-body text-xs uppercase tracking-wider px-8 py-4 bg-bronze text-white hover:bg-bronze-dark transition-colors duration-300 self-start"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/8 mb-16" />

          {/* Navigation columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-20">
            {/* Studio */}
            <div>
              <h3 className="editorial-label text-white/40 mb-6">
                Studio
              </h3>
              <ul className="space-y-3.5">
                {footerNav.studio.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-white/55 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="editorial-label text-white/40 mb-6">
                Services
              </h3>
              <ul className="space-y-3.5">
                {footerNav.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-white/55 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="editorial-label text-white/40 mb-6">
                Contact
              </h3>
              <ul className="space-y-3.5">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-bronze shrink-0 mt-0.5" />
                  <p className="font-body text-sm text-white/55">
                    {companyInfo.address}
                  </p>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-bronze shrink-0" />
                  <a
                    href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
                    className="font-body text-sm text-white/55 hover:text-white transition-colors duration-300"
                  >
                    {companyInfo.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-bronze shrink-0" />
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="font-body text-sm text-white/55 hover:text-white transition-colors duration-300"
                  >
                    {companyInfo.email}
                  </a>
                </li>
                <li className="flex items-center gap-2.5 pt-1">
                  <Clock className="w-4 h-4 text-bronze/70 shrink-0" />
                  <p className="font-body text-xs text-white/35">
                    {companyInfo.hours}
                  </p>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="editorial-label text-white/40 mb-6">
                Follow
              </h3>
              <ul className="space-y-3.5">
                <li>
                  <a
                    href={companyInfo.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-white/55 hover:text-white transition-colors duration-300 inline-flex items-center group"
                  >
                    Instagram
                    <span className="ml-1.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-bronze">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href={companyInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-white/55 hover:text-white transition-colors duration-300 inline-flex items-center group"
                  >
                    LinkedIn
                    <span className="ml-1.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-bronze">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href={companyInfo.social.pinterest}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-white/55 hover:text-white transition-colors duration-300 inline-flex items-center group"
                  >
                    Pinterest
                    <span className="ml-1.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-bronze">↗</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between py-6 gap-4">
            <p className="font-body text-xs text-white/35">
              &copy; {currentYear} Room ODD (Pvt) Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {footerNav.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-xs text-white/35 hover:text-white/60 transition-colors duration-300"
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
