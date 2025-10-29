'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PullQuoteProps {
  children: ReactNode;
  author?: string;
  variant?: 'default' | 'highlight' | 'warning' | 'success';
  size?: 'normal' | 'large';
}

export default function PullQuote({
  children,
  author,
  variant = 'default',
  size = 'normal',
}: PullQuoteProps) {
  const variants = {
    default: 'bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-400 text-blue-900',
    highlight: 'bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-500 text-amber-900',
    warning: 'bg-gradient-to-r from-red-50 to-orange-50 border-red-400 text-red-900',
    success: 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-500 text-green-900',
  };

  const sizeClasses = {
    normal: 'text-xl md:text-2xl py-6',
    large: 'text-2xl md:text-4xl py-8',
  };

  return (
    <motion.blockquote
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`${variants[variant]} ${sizeClasses[size]} px-8 my-8 border-l-4 rounded-r-lg shadow-lg relative overflow-hidden`}
    >
      {/* Decorative quote mark */}
      <span className="absolute top-2 left-2 text-6xl opacity-10">"</span>

      <div className="relative z-10">
        <p className="font-semibold italic leading-relaxed">{children}</p>
        {author && (
          <footer className="mt-4 text-sm font-normal opacity-75">— {author}</footer>
        )}
      </div>
    </motion.blockquote>
  );
}
