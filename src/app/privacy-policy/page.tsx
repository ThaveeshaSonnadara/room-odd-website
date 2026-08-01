import React from 'react';
import type { Metadata } from 'next';
import { ShieldCheck, Mail, Lock, FileText, CheckCircle2, Building2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Room ODD privacy policy — how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 lg:pt-40 pb-12 bg-canvas border-b border-canvas-dark/6 dark:border-white/10">
        <Container>
          <div className="max-w-3xl">
            <p className="editorial-label text-bronze mb-4 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-bronze" />
              Legal & Transparency
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-light text-canvas-dark dark:text-white tracking-tighter">
              Privacy Policy
            </h1>
            <div className="mt-6 flex items-center gap-3 editorial-label text-canvas-dark/40 dark:text-white/40">
              <Lock className="w-3.5 h-3.5 text-bronze" />
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
                Information We Collect
              </h2>
              <p className="text-canvas-dark/65 dark:text-white/65 text-sm leading-relaxed">
                When you contact us through our website or request a project consultation, we collect the information you voluntarily provide, including your full name, email address, phone number, project type, and project brief details. We use this information solely to respond to your inquiry and evaluate architectural design services.
              </p>
            </div>

            <div className="p-8 bg-white dark:bg-[#14161A] border border-canvas-dark/10 dark:border-white/10 rounded-sm space-y-3">
              <h2 className="font-display text-2xl text-canvas-dark dark:text-white flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-bronze" />
                How We Use Your Information
              </h2>
              <p className="text-canvas-dark/65 dark:text-white/65 text-sm leading-relaxed">
                Your personal information is used exclusively to communicate with you regarding your architectural inquiry, arrange site visits, and prepare project proposals. We do not sell, rent, or trade your personal information with third parties. Third-party services (such as transactional email providers) only process data under strict confidentiality obligations.
              </p>
            </div>

            <div className="p-8 bg-white dark:bg-[#14161A] border border-canvas-dark/10 dark:border-white/10 rounded-sm space-y-3">
              <h2 className="font-display text-2xl text-canvas-dark dark:text-white flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-bronze" />
                Cookies & Analytics
              </h2>
              <p className="text-canvas-dark/65 dark:text-white/65 text-sm leading-relaxed">
                Our website uses essential technical cookies to remember your preferences (such as light/dark theme selection). We may also utilize privacy-focused analytics tools to monitor website performance and visitor navigation patterns without capturing personally identifiable information.
              </p>
            </div>

            <div className="p-8 bg-white dark:bg-[#14161A] border border-canvas-dark/10 dark:border-white/10 rounded-sm space-y-3">
              <h2 className="font-display text-2xl text-canvas-dark dark:text-white flex items-center gap-2.5">
                <Lock className="w-4 h-4 text-bronze" />
                Data Security Standards
              </h2>
              <p className="text-canvas-dark/65 dark:text-white/65 text-sm leading-relaxed">
                We maintain appropriate administrative and technical safeguards (including HTTPS encryption and secure server infrastructure) to protect your personal data against unauthorized access, destruction, disclosure, or alteration.
              </p>
            </div>

            <div className="p-8 bg-white dark:bg-[#14161A] border border-canvas-dark/10 dark:border-white/10 rounded-sm space-y-3">
              <h2 className="font-display text-2xl text-canvas-dark dark:text-white flex items-center gap-2.5">
                <Building2 className="w-4 h-4 text-bronze" />
                Your Rights & Contact
              </h2>
              <p className="text-canvas-dark/65 dark:text-white/65 text-sm leading-relaxed">
                You have the right to request access to, correction of, or deletion of any personal information held by Room ODD. To exercise your privacy rights or ask questions regarding this policy, please reach out to us at:
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
