import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-bg text-primary">
      {/* Hero section */}
      <motion.section className="relative h-[80vh] bg-primary flex items-center justify-center overflow-hidden" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
        <Image
          src="/hero-placeholder.jpg"
          alt="Hero image"
          fill
          className="object-cover opacity-30"
          priority
        />
        <motion.div className="relative z-10 text-center max-w-2xl" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
          <h1 className="font-display text-2xl lg:text-5xl text-white mb-4">
            Designing Spaces
          </h1>
          <p className="font-body text-lg text-white/80 mb-6">
            Timeless architecture, crafted for luxury living.
          </p>
          <button className="font-body bg-accent text-white px-6 py-3 rounded-md hover:bg-accent/90 transition">
            Book a Consultation
          </button>
        </motion.div>
      </motion.section>
    </main>
  );
}
