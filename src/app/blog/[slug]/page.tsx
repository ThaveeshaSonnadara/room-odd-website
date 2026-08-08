'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { blogPosts } from '@/lib/data';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 as const },
  transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] },
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="pt-40 pb-24">
        <Container>
          <h1 className="font-display text-4xl text-canvas-dark">
            Article Not Found
          </h1>
          <Link
            href="/blog"
            className="inline-flex items-center mt-8 font-body text-xs uppercase tracking-wider text-bronze hover:text-bronze-dark transition-colors duration-300"
          >
            ← Back to Journal
          </Link>
        </Container>
      </section>
    );
  }

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] flex items-end overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/50" />
        <Container className="relative z-10 pb-16">
          <motion.div className="flex items-center gap-3 mb-4" {...fadeUp}>
            <span className="editorial-label text-bronze">{post.category}</span>
            <span className="text-white/20">·</span>
            <span className="editorial-label text-white/50">{post.readTime}</span>
          </motion.div>
          <motion.h1
            className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tighter max-w-4xl"
            {...fadeUp}
          >
            {post.title}
          </motion.h1>
          <motion.p className="mt-4 font-body text-sm text-white/40" {...fadeUp}>
            {new Date(post.date).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </motion.p>
        </Container>
      </section>

      {/* Article content */}
      <section className="py-24 lg:py-32 bg-canvas">
        <Container>
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="font-body text-base text-canvas-dark/80 dark:text-white/80 leading-loose space-y-6"
              {...fadeUp}
            >
              {post.content.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="py-24 lg:py-32 bg-beige">
          <Container>
            <h2 className="font-display text-3xl text-canvas-dark dark:text-white mb-12">
              Continue Reading
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {related.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone mb-4">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-600 ease-architectural group-hover:scale-105"
                    />
                  </div>
                  <span className="editorial-label text-bronze">{p.category}</span>
                  <h3 className="mt-2 font-display text-xl text-canvas-dark dark:text-white group-hover:text-bronze transition-colors duration-300">
                    {p.title}
                  </h3>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Back to journal */}
      <section className="py-16 bg-canvas border-t border-canvas-dark/8">
        <Container>
          <Link
            href="/blog"
            className="inline-flex items-center font-body text-xs uppercase tracking-wider text-canvas-dark/50 dark:text-white/50 hover:text-bronze dark:hover:text-bronze transition-colors duration-300 group"
          >
            <span className="mr-2 inline-block transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            Back to Journal
          </Link>
        </Container>
      </section>
    </>
  );
}
