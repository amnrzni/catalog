'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useAnimation } from '@/contexts/AnimationContext';
import { pageTransition, fadeInUp, staggerContainer, staggerItem } from '@/lib/animations/variants';

// Design style configurations
const designStyles = [
  {
    id: 'glassmorphism',
    name: 'Glassmorphism',
    description: 'Frosted glass effect with backdrop blur and transparency',
    icon: '✨',
    color: '#5B9FFF',
    gradient: 'from-[#5B9FFF] to-[#A78BFA]',
    bg: 'bg-gradient-to-br from-blue-900/20 to-purple-900/20',
  },
  {
    id: 'neumorphism',
    name: 'Neumorphism',
    description: 'Soft UI with subtle shadows and light effects',
    icon: '🎨',
    color: '#A78BFA',
    gradient: 'from-[#A78BFA] to-[#F472B6]',
    bg: 'bg-gradient-to-br from-purple-900/20 to-pink-900/20',
  },
  {
    id: 'material',
    name: 'Material Design',
    description: 'Google\'s material design with depth and motion',
    icon: '📐',
    color: '#34D399',
    gradient: 'from-[#34D399] to-[#5B9FFF]',
    bg: 'bg-gradient-to-br from-green-900/20 to-blue-900/20',
  },
  {
    id: 'minimalism',
    name: 'Minimalism',
    description: 'Clean, simple, and elegant design approach',
    icon: '⚡',
    color: '#FBBF24',
    gradient: 'from-[#FBBF24] to-[#F472B6]',
    bg: 'bg-gradient-to-br from-yellow-900/20 to-pink-900/20',
  },
];

export default function LandingPage() {
  const [currentStyleIndex, setCurrentStyleIndex] = useState(0);
  const { animationEnabled } = useAnimation();
  const currentStyle = designStyles[currentStyleIndex];

  // Auto-rotate through design styles
  useEffect(() => {
    if (!animationEnabled) return;

    const interval = setInterval(() => {
      setCurrentStyleIndex(prev => (prev + 1) % designStyles.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [animationEnabled]);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Morphing Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStyle.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className={`fixed inset-0 -z-10 ${currentStyle.bg}`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_50%)]" />
        </motion.div>
      </AnimatePresence>

      <div className="container-custom py-20">
        {/* Hero Section */}
        <motion.section
          className="mb-32 text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={staggerItem} className="mb-6">
            <span className="inline-block rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-text-secondary backdrop-blur-sm">
              Explore Modern Design
            </span>
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="mb-6 text-6xl font-black tracking-tight sm:text-7xl md:text-8xl"
          >
            Design Style{' '}
            <span className="gradient-text">Catalog</span>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mx-auto mb-12 max-w-2xl text-xl text-text-secondary sm:text-2xl"
          >
            Discover and explore{' '}
            <AnimatePresence mode="wait">
              <motion.span
                key={currentStyle.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="font-bold"
                style={{ color: currentStyle.color }}
              >
                {currentStyle.name}
              </motion.span>
            </AnimatePresence>
            , with interactive components and real examples.
          </motion.p>

          <motion.div variants={staggerItem} className="flex items-center justify-center gap-4">
            <Link
              href="/glassmorphism"
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary px-8 py-4 font-semibold text-white transition-all hover:scale-105 hover:shadow-2xl hover:shadow-accent-primary/50"
            >
              <span className="relative z-10">Explore Components</span>
              <div className="absolute inset-0 -z-0 bg-gradient-to-r from-accent-secondary to-accent-primary opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>

            <a
              href="#styles"
              className="rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/10"
            >
              Learn More
            </a>
          </motion.div>
        </motion.section>

        {/* Style Selection Grid */}
        <motion.section
          id="styles"
          className="mb-32"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={staggerItem} className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">Choose Your Style</h2>
            <p className="text-lg text-text-secondary">
              Click any style to explore its components
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {designStyles.map((style, index) => (
              <motion.div
                key={style.id}
                variants={staggerItem}
                custom={index}
              >
                <Link href={`/${style.id}`}>
                  <motion.div
                    className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10 ${
                      currentStyle.id === style.id ? 'ring-2 ring-white/30' : ''
                    }`}
                    whileHover={{ y: -8, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setCurrentStyleIndex(index)}
                  >
                    {/* Icon */}
                    <div className="mb-4 text-5xl">{style.icon}</div>

                    {/* Title */}
                    <h3 className="mb-2 text-2xl font-bold">{style.name}</h3>

                    {/* Description */}
                    <p className="mb-4 text-sm text-text-secondary">
                      {style.description}
                    </p>

                    {/* Gradient Bar */}
                    <div
                      className={`h-1 w-16 rounded-full bg-gradient-to-r ${style.gradient}`}
                    />

                    {/* Hover Effect */}
                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          className="mb-32"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={staggerItem} className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">Why This Catalog?</h2>
            <p className="text-lg text-text-secondary">
              Everything you need to build beautiful interfaces
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: '🎨',
                title: '4 Design Styles',
                description:
                  'Complete implementations of Glassmorphism, Neumorphism, Material, and Minimalism',
              },
              {
                icon: '⚡',
                title: '80+ Components',
                description:
                  'Buttons, cards, forms, navigation, and more - all production-ready',
              },
              {
                icon: '✨',
                title: 'Live Animations',
                description:
                  'Smooth Framer Motion animations with customizable speed controls',
              },
              {
                icon: '📱',
                title: 'Fully Responsive',
                description:
                  'Desktop-first design that works perfectly on all devices',
              },
              {
                icon: '♿',
                title: 'Accessible',
                description:
                  'WCAG AA compliant with keyboard navigation and ARIA labels',
              },
              {
                icon: '⚙️',
                title: 'TypeScript',
                description:
                  'Strict typing throughout for maximum code quality and safety',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
              >
                <div className="mb-4 text-4xl">{feature.icon}</div>
                <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                <p className="text-text-secondary">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-12 backdrop-blur-sm">
            <h2 className="mb-4 text-4xl font-bold">
              Ready to Explore?
            </h2>
            <p className="mb-8 text-xl text-text-secondary">
              Start with Glassmorphism - our most modern and popular style
            </p>
            <Link
              href="/glassmorphism"
              className="inline-block rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary px-10 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-2xl hover:shadow-accent-primary/50"
            >
              View Glassmorphism Components
            </Link>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
}
