'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface HeroProps {
  title?: string;
  subtitle?: string;
  byline?: string;
  subByline?: string;
}

export default function Hero({
  title = 'Just Right AI',
  subtitle = 'Finding the Goldilocks Zone for AI Adoption',
  byline = 'By Andrew Kilshaw',
  subByline = 'Former CLO at Nike, SVP at Sanofi, VP at Shell',
}: HeroProps) {
  const [activeView, setActiveView] = useState<'tooCold' | 'tooHot' | 'justRight'>('justRight');
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const tooColdQuotes = [
    '"It\'s just autocomplete, nothing revolutionary"',
    '"AI hallucinates too much to be useful"',
    '"This is another tech bubble waiting to burst"',
  ];

  const tooHotQuotes = [
    '"AI will 10x our productivity overnight"',
    '"Everyone needs to use ChatGPT now"',
    '"AI is the future, get on board or get left behind"',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-300">
          {title}
        </h1>
        <p className="text-2xl md:text-3xl text-gray-300 mb-8">{subtitle}</p>

        {/* Goldilocks Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 max-w-3xl mx-auto"
        >
          <Image
            src="/gdl.png"
            alt="Goldilocks with Too Cold Bear and Too Hot Bear - Finding Just Right AI"
            width={1200}
            height={1200}
            className="rounded-lg shadow-2xl"
            priority
          />
        </motion.div>

        <p className="text-lg text-gray-400 mb-2">{byline}</p>
        {subByline && <p className="text-sm text-gray-500 mb-8">{subByline}</p>}

        {/* Company Logos */}
        <div className="flex justify-center items-center gap-8 mb-12 opacity-60">
          <span className="text-xs text-gray-500">Formerly:</span>
          <span className="text-sm font-semibold">Nike</span>
          <span className="text-sm font-semibold">Shell</span>
          <span className="text-sm font-semibold">Sanofi</span>
          <span className="text-sm font-semibold">BlackRock</span>
        </div>

        {/* Too Cold, Just Right, Too Hot Toggle */}
        <div className="mb-12">
          <div className="flex justify-center gap-2 mb-6 flex-wrap">
            <button
              onClick={() => setActiveView('tooCold')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeView === 'tooCold'
                  ? 'bg-cyan-600 text-white shadow-lg'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              ❄️ Too Cold
            </button>
            <button
              onClick={() => setActiveView('justRight')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeView === 'justRight'
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              ✨ Just Right
            </button>
            <button
              onClick={() => setActiveView('tooHot')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeView === 'tooHot'
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              🔥 Too Hot
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeView}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="min-h-[200px] flex items-center justify-center"
            >
              {activeView === 'tooCold' && (
                <div className="text-center max-w-2xl">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={currentQuoteIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-2xl italic text-cyan-300"
                    >
                      {tooColdQuotes[currentQuoteIndex]}
                    </motion.p>
                  </AnimatePresence>
                  <p className="mt-4 text-gray-400">The skeptics who dismiss AI entirely</p>
                </div>
              )}

              {activeView === 'tooHot' && (
                <div className="text-center max-w-2xl">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={currentQuoteIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-2xl italic text-orange-300"
                    >
                      {tooHotQuotes[currentQuoteIndex]}
                    </motion.p>
                  </AnimatePresence>
                  <p className="mt-4 text-gray-400">The optimists who expect magic</p>
                </div>
              )}

              {activeView === 'justRight' && (
                <div className="text-center max-w-2xl">
                  <div className="text-4xl font-bold mb-4 text-amber-300">
                    Capacity × Capability
                  </div>
                  <p className="text-xl text-gray-300">
                    Real value happens where AI accelerates existing work{' '}
                    <span className="text-blue-400 font-semibold">(capacity)</span> AND
                    enables new capabilities you couldn't access before{' '}
                    <span className="text-purple-400 font-semibold">(capability)</span>
                  </p>
                  <p className="mt-4 text-gray-400">The evidence-based sweet spot</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/article"
            className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105"
          >
            Read the Framework ↓
          </Link>
          <Link
            href="/playbook"
            className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105"
          >
            Download Playbook
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
