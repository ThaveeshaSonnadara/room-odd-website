'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { blogPosts } from '@/lib/data';

export default function BlogPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-canvas">
        <Container>
          <SectionHeading
            label="Journal"
            title="Thoughts on Architecture"
            subtitle="Ideas, reflections, and insights from our practice — on design, materials, and the built environment."
          />
        </Container>
      </section>

      {/* Blog grid */}
      <section className="pb-24 lg:pb-32 bg-canvas">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                className="group"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.22, 0.61, 0.36, 1],
                }}
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone mb-6">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-600 ease-architectural group-hover:scale-105"
                    />
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="editorial-label text-bronze">
                      {post.category}
                    </span>
                    <span className="text-canvas-dark/20">·</span>
                    <span className="editorial-label text-canvas-dark/40">
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="font-display text-xl lg:text-2xl text-canvas-dark group-hover:text-bronze transition-colors duration-300 leading-snug">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="mt-3 font-body text-sm text-canvas-dark/60 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Date */}
                  <p className="mt-4 font-body text-xs text-canvas-dark/30">
                    {new Date(post.date).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                </Link>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
