import React from 'react';
import { Container } from '@/components/ui/Container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'Room ODD terms and conditions governing the use of our website and services.',
};

export default function TermsPage() {
  return (
    <>
      <section className="pt-32 pb-8 bg-canvas">
        <Container>
          <p className="editorial-label text-canvas-dark/40 mb-4">Legal</p>
          <h1 className="font-display text-5xl md:text-6xl font-light text-canvas-dark tracking-tighter">
            Terms &amp; Conditions
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
                Use of Website
              </h2>
              <p>
                This website is owned and operated by Room ODD (Pvt) Ltd. By
                accessing and using this website, you accept and agree to be
                bound by these terms and conditions. If you do not agree with
                any part of these terms, please do not use our website.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-canvas-dark mb-4">
                Intellectual Property
              </h2>
              <p>
                All content on this website — including text, images,
                architectural designs, graphics, logos, and visual materials —
                is the property of Room ODD (Pvt) Ltd and is protected by
                copyright laws. You may not reproduce, distribute, or use any
                content without prior written permission.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-canvas-dark mb-4">
                Architectural Services
              </h2>
              <p>
                The information provided on this website is for general
                informational purposes only and does not constitute a contract
                or professional advice. All architectural services are subject
                to a separate engagement agreement between Room ODD and the
                client.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-canvas-dark mb-4">
                Project Photography
              </h2>
              <p>
                Project photographs displayed on this website are used with
                permission from clients and photographers. These images may
                not be reproduced or used without explicit written consent
                from Room ODD and the respective rights holders.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-canvas-dark mb-4">
                Limitation of Liability
              </h2>
              <p>
                Room ODD makes no warranties or representations about the
                accuracy or completeness of the content on this website. In no
                event shall Room ODD be liable for any damages arising from
                the use of, or inability to use, this website.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-canvas-dark mb-4">
                Governing Law
              </h2>
              <p>
                These terms and conditions are governed by and construed in
                accordance with the laws of the Democratic Socialist Republic
                of Sri Lanka. Any disputes arising from the use of this
                website shall be subject to the exclusive jurisdiction of the
                courts of Sri Lanka.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-canvas-dark mb-4">
                Contact
              </h2>
              <p>
                For questions about these terms, please contact us at{' '}
                <a
                  href="mailto:studio@roomodd.lk"
                  className="text-bronze hover:text-bronze-dark transition-colors duration-300"
                >
                  studio@roomodd.lk
                </a>
                .
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
