import React from 'react';
import type { Metadata } from 'next';
import { Scale, FileText, Shield, Camera, AlertCircle, Gavel, Mail } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'Room ODD terms and conditions governing the use of our website and services.',
};

export default function TermsPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 lg:pt-40 pb-12 bg-canvas border-b border-canvas-dark/6 dark:border-white/10">
        <Container>
          <div className="max-w-3xl">
            <p className="editorial-label text-bronze mb-4 flex items-center gap-2">
              <Scale className="w-4 h-4 text-bronze" />
              Legal & Framework
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-light text-canvas-dark dark:text-white tracking-tighter">
              Terms &amp; Conditions
            </h1>
            <div className="mt-6 flex items-center gap-3 editorial-label text-canvas-dark/40 dark:text-white/40">
              <FileText className="w-3.5 h-3.5 text-bronze" />
              <span>Last updated: January 2024</span>
              <span>·</span>
              <span>Room ODD (Pvt) Ltd</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-canvas">
        <Container>
          <div className="max-w-3xl space-y-8 font-body text-base text-canvas-dark/70 dark:text-white/70 leading-relaxed">
            <div className="p-8 bg-white dark:bg-[#14161A] border border-canvas-dark/10 dark:border-white/10 rounded-sm space-y-3">
              <h2 className="font-display text-2xl text-canvas-dark dark:text-white flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-bronze" />
                Use of Website
              </h2>
              <p className="text-canvas-dark/65 dark:text-white/65 text-sm leading-relaxed">
                This website is owned and operated by Room ODD (Pvt) Ltd. By accessing and using this website, you accept and agree to be bound by these terms and conditions. If you do not agree with any part of these terms, please refrain from using our website.
              </p>
            </div>

            <div className="p-8 bg-white dark:bg-[#14161A] border border-canvas-dark/10 dark:border-white/10 rounded-sm space-y-3">
              <h2 className="font-display text-2xl text-canvas-dark dark:text-white flex items-center gap-2.5">
                <Shield className="w-4 h-4 text-bronze" />
                Intellectual Property Rights
              </h2>
              <p className="text-canvas-dark/65 dark:text-white/65 text-sm leading-relaxed">
                All materials, architectural drawings, 3D renders, conceptual sketches, photographs, logos, and written content displayed on this website are the exclusive intellectual property of Room ODD (Pvt) Ltd and are protected under international copyright laws. Reproduction, redistribution, or commercial use without prior written consent is strictly prohibited.
              </p>
            </div>

            <div className="p-8 bg-white dark:bg-[#14161A] border border-canvas-dark/10 dark:border-white/10 rounded-sm space-y-3">
              <h2 className="font-display text-2xl text-canvas-dark dark:text-white flex items-center gap-2.5">
                <Scale className="w-4 h-4 text-bronze" />
                Architectural Engagement Services
              </h2>
              <p className="text-canvas-dark/65 dark:text-white/65 text-sm leading-relaxed">
                The information provided on this website is for general informational and portfolio presentation purposes only. It does not constitute binding architectural advice or a formal contract. All architectural design services are governed by separate, signed Client-Architect Agreement contracts.
              </p>
            </div>

            <div className="p-8 bg-white dark:bg-[#14161A] border border-canvas-dark/10 dark:border-white/10 rounded-sm space-y-3">
              <h2 className="font-display text-2xl text-canvas-dark dark:text-white flex items-center gap-2.5">
                <Camera className="w-4 h-4 text-bronze" />
                Project Photography & Media
              </h2>
              <p className="text-canvas-dark/65 dark:text-white/65 text-sm leading-relaxed">
                Architectural photography and project media are published with formal consent from property owners and architectural photographers. Downloading, modifying, or republishing project images for commercial purposes is prohibited.
              </p>
            </div>

            <div className="p-8 bg-white dark:bg-[#14161A] border border-canvas-dark/10 dark:border-white/10 rounded-sm space-y-3">
              <h2 className="font-display text-2xl text-canvas-dark dark:text-white flex items-center gap-2.5">
                <AlertCircle className="w-4 h-4 text-bronze" />
                Limitation of Liability
              </h2>
              <p className="text-canvas-dark/65 dark:text-white/65 text-sm leading-relaxed">
                Room ODD endeavours to ensure all information on this website is accurate and current. However, we make no representations or warranties regarding complete timeliness or accuracy. Room ODD shall not be liable for any indirect or consequential damages arising from reliance on website content.
              </p>
            </div>

            <div className="p-8 bg-white dark:bg-[#14161A] border border-canvas-dark/10 dark:border-white/10 rounded-sm space-y-3">
              <h2 className="font-display text-2xl text-canvas-dark dark:text-white flex items-center gap-2.5">
                <Gavel className="w-4 h-4 text-bronze" />
                Governing Law & Contact
              </h2>
              <p className="text-canvas-dark/65 dark:text-white/65 text-sm leading-relaxed">
                These terms are governed by and construed in accordance with the laws of the Democratic Socialist Republic of Sri Lanka. For inquiries or legal permissions, please contact our studio office:
              </p>
              <div className="mt-4 pt-4 border-t border-canvas-dark/6 dark:border-white/10 text-sm">
                <p className="font-medium text-canvas-dark dark:text-white">Room ODD (Pvt) Ltd</p>
                <p className="text-canvas-dark/55 dark:text-white/55">42 Ward Place, Colombo 07, Sri Lanka</p>
                <a
                  href="mailto:studio@roomodd.lk"
                  className="inline-flex items-center gap-1.5 text-bronze hover:text-bronze-dark transition-colors duration-300 mt-2 font-medium"
                >
                  <Mail className="w-3.5 h-3.5" />
                  studio@roomodd.lk
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
