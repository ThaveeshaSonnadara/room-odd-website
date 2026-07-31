import React from 'react';
import { Container } from '@/components/ui/Container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Room ODD privacy policy — how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="pt-32 pb-8 bg-canvas">
        <Container>
          <p className="editorial-label text-canvas-dark/40 mb-4">Legal</p>
          <h1 className="font-display text-5xl md:text-6xl font-light text-canvas-dark tracking-tighter">
            Privacy Policy
          </h1>
          <p className="mt-4 font-body text-sm text-canvas-dark/40">
            Last updated: January 2024
          </p>
        </Container>
      </section>

      <section className="py-16 lg:py-24 bg-canvas">
        <Container>
          <div className="max-w-3xl space-y-12 font-body text-base text-canvas-dark/70 leading-relaxed">
            <div>
              <h2 className="font-display text-2xl text-canvas-dark mb-4">
                Information We Collect
              </h2>
              <p>
                When you contact us through our website, we collect the
                information you provide, including your name, email address,
                phone number, and project details. We use this information
                solely to respond to your inquiry and discuss potential
                architectural services.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-canvas-dark mb-4">
                How We Use Your Information
              </h2>
              <p>
                Your personal information is used exclusively to communicate
                with you about your architectural project inquiry. We do not
                sell, rent, or share your personal information with third
                parties except as necessary to provide our services (e.g.,
                email delivery via our service provider).
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-canvas-dark mb-4">
                Cookies and Analytics
              </h2>
              <p>
                Our website may use essential cookies to ensure functionality.
                We may also use analytics tools to understand how visitors
                interact with our site. These tools collect anonymous usage
                data and do not identify individual visitors.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-canvas-dark mb-4">
                Data Security
              </h2>
              <p>
                We implement appropriate technical and organisational measures
                to protect your personal information against unauthorised
                access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-canvas-dark mb-4">
                Your Rights
              </h2>
              <p>
                You have the right to request access to, correction of, or
                deletion of your personal data. To exercise these rights,
                please contact us at{' '}
                <a
                  href="mailto:studio@roomodd.lk"
                  className="text-bronze hover:text-bronze-dark transition-colors duration-300"
                >
                  studio@roomodd.lk
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-canvas-dark mb-4">
                Contact
              </h2>
              <p>
                For questions about this privacy policy, contact us at:
              </p>
              <address className="mt-4 not-italic">
                <p>Room ODD (Pvt) Ltd</p>
                <p>42 Ward Place, Colombo 07, Sri Lanka</p>
                <p>
                  <a
                    href="mailto:studio@roomodd.lk"
                    className="text-bronze hover:text-bronze-dark transition-colors duration-300"
                  >
                    studio@roomodd.lk
                  </a>
                </p>
              </address>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
