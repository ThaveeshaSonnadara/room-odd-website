'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CustomSelect } from '@/components/ui/CustomSelect';
import { MapPin, Phone, Mail, Clock, Send, ArrowUpRight } from 'lucide-react';
import { companyInfo } from '@/lib/data';

/* ── Zod Schema ──────────────────────────────────────────────────── */

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  projectType: z.string().min(1, 'Please select a project type'),
  budget: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const projectTypes = [
  'Residential Architecture',
  'Commercial Architecture',
  'Interior Architecture',
  'Renovation',
  'Spatial Planning',
  'Architectural Consultation',
  'Other',
];

const budgetRanges = [
  'Under LKR 50M',
  'LKR 50M – 100M',
  'LKR 100M – 250M',
  'LKR 250M – 500M',
  'Above LKR 500M',
  'Prefer not to say',
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 as const },
  transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] },
};

/* ── Component ───────────────────────────────────────────────────── */

export default function ContactPage() {
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'sending' | 'sent' | 'error'
  >('idle');
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('sending');
    setSubmitError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      setSubmitStatus('sent');
      reset();
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : typeof err === 'string'
            ? err
            : 'An error occurred while sending your message. Please try again.';
      setSubmitError(message);
      setSubmitStatus('error');
    }
  };

  const inputClasses =
    'w-full bg-transparent font-body text-sm text-canvas-dark placeholder:text-canvas-dark/45 py-3.5 border-b-2 border-canvas-dark/15 focus:border-bronze focus:placeholder:text-canvas-dark/30 outline-none transition-colors duration-400';
  const labelClasses = 'block editorial-label text-canvas-dark/50 mb-2.5';
  const errorClasses = 'mt-1.5 font-body text-xs text-error';

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
          alt="Room ODD studio"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/50" />
        <Container className="relative z-10 pb-16">
          <motion.p className="editorial-label text-white/50 mb-4" {...fadeUp}>
            Get in Touch
          </motion.p>
          <motion.span
            className="block w-12 h-px bg-bronze/40 mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] }}
            style={{ transformOrigin: 'left' }}
          />
          <motion.h1
            className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tighter"
            {...fadeUp}
          >
            Contact Us
          </motion.h1>
        </Container>
      </section>

      {/* Form + Info */}
      <section id="contact-form" className="py-28 lg:py-36 bg-canvas scroll-mt-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Form */}
            <motion.div className="lg:col-span-7" {...fadeUp}>
              <SectionHeading
                label="Book a Consultation"
                title="Tell Us About Your Project"
                className="mb-14"
              />

              {submitStatus === 'sent' ? (
                <motion.div
                  className="py-20 text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
                >
                  {/* Success checkmark */}
                  <motion.div
                    className="w-14 h-14 mx-auto mb-6 rounded-full border border-bronze/30 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
                  >
                    <svg className="w-6 h-6 text-bronze" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <motion.path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M5 13l4 4L19 7"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      />
                    </svg>
                  </motion.div>
                  <p className="font-display text-3xl text-canvas-dark mb-4">
                    Thank You
                  </p>
                  <p className="font-body text-base text-canvas-dark/55">
                    We&apos;ve received your message and will be in touch within
                    48 hours to discuss your project.
                  </p>
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="mt-8 inline-flex items-center font-body text-xs uppercase tracking-wider text-bronze hover:text-bronze-dark transition-colors duration-300"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-9"
                  noValidate
                >
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className={labelClasses}>
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      className={inputClasses}
                      {...register('name')}
                    />
                    {errors.name && (
                      <p className={errorClasses}>{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                    <div>
                      <label htmlFor="email" className={labelClasses}>
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        className={inputClasses}
                        {...register('email')}
                      />
                      {errors.email && (
                        <p className={errorClasses}>{errors.email.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelClasses}>
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+94 77 000 0000"
                        className={inputClasses}
                        {...register('phone')}
                      />
                    </div>
                  </div>

                  {/* Project Type + Budget */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                    <div>
                      <label htmlFor="projectType" className={labelClasses}>
                        Project Type *
                      </label>
                      <Controller
                        name="projectType"
                        control={control}
                        render={({ field }) => (
                          <CustomSelect
                            id="projectType"
                            placeholder="Select a project type"
                            options={projectTypes}
                            value={field.value || ''}
                            onChange={field.onChange}
                            error={errors.projectType?.message}
                          />
                        )}
                      />
                    </div>
                    <div>
                      <label htmlFor="budget" className={labelClasses}>
                        Budget Range
                      </label>
                      <Controller
                        name="budget"
                        control={control}
                        render={({ field }) => (
                          <CustomSelect
                            id="budget"
                            placeholder="Select budget range"
                            options={budgetRanges}
                            value={field.value || ''}
                            onChange={field.onChange}
                            error={errors.budget?.message}
                          />
                        )}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className={labelClasses}>
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tell us about your project — site location, scale, timeline, and any initial ideas."
                      className={`${inputClasses} resize-none`}
                      {...register('message')}
                    />
                    {errors.message && (
                      <p className={errorClasses}>{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit */}
                  {submitStatus === 'error' && (
                    <p className="font-body text-sm text-error">
                      {submitError}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={submitStatus === 'sending'}
                    className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-wider px-8 py-4 bg-canvas-dark text-white hover:bg-olive-deep transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    <span>
                      {submitStatus === 'sending'
                        ? 'Sending…'
                        : 'Send Message'}
                    </span>
                    <Send className="w-3.5 h-3.5 text-bronze transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info sidebar */}
            <motion.aside className="lg:col-span-5" {...fadeUp}>
              <div className="lg:sticky lg:top-32 space-y-14">
                {/* Office */}
                <div>
                  <h3 className="editorial-label text-canvas-dark/35 mb-4 flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-bronze" />
                    Studio Address
                  </h3>
                  <p className="font-body text-base text-canvas-dark">
                    {companyInfo.address}
                  </p>
                  <p className="mt-2 font-body text-sm text-canvas-dark/45 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-bronze/70 shrink-0" />
                    {companyInfo.hours}
                  </p>
                </div>

                {/* Contact details */}
                <div>
                  <h3 className="editorial-label text-canvas-dark/35 mb-4 flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-bronze" />
                    Direct Contact
                  </h3>
                  <div className="space-y-2.5">
                    <a
                      href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-2 font-body text-base text-canvas-dark hover:text-bronze transition-colors duration-300"
                    >
                      <Phone className="w-4 h-4 text-canvas-dark/30" />
                      {companyInfo.phone}
                    </a>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="flex items-center gap-2 font-body text-base text-canvas-dark hover:text-bronze transition-colors duration-300"
                    >
                      <Mail className="w-4 h-4 text-canvas-dark/30" />
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                {/* Social */}
                <div>
                  <h3 className="editorial-label text-canvas-dark/35 mb-4">
                    Follow Us
                  </h3>
                  <div className="flex gap-6">
                    <a
                      href={companyInfo.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-body text-sm text-canvas-dark/50 hover:text-bronze transition-colors duration-300 group"
                    >
                      <span>Instagram</span>
                      <ArrowUpRight className="w-3 h-3 text-bronze/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                    <a
                      href={companyInfo.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-body text-sm text-canvas-dark/50 hover:text-bronze transition-colors duration-300 group"
                    >
                      <span>LinkedIn</span>
                      <ArrowUpRight className="w-3 h-3 text-bronze/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Quick note */}
                <div className="p-7 structural-border card-hover-accent">
                  <p className="font-display text-lg text-canvas-dark mb-2">
                    Response Time
                  </p>
                  <p className="font-body text-sm text-canvas-dark/55 leading-relaxed">
                    We respond to all inquiries within 48 business hours. For
                    urgent matters, please call us directly.
                  </p>
                </div>
              </div>
            </motion.aside>
          </div>
        </Container>
      </section>
    </>
  );
}
