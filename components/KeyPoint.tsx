'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface KeyPointProps {
  icon?: string;
  title: string;
  children: ReactNode;
  variant?: 'info' | 'warning' | 'success' | 'danger' | 'neutral';
}

export default function KeyPoint({
  icon,
  title,
  children,
  variant = 'info',
}: KeyPointProps) {
  const variants = {
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-400',
      title: 'text-blue-900',
      text: 'text-blue-800',
      icon: '💡',
    },
    warning: {
      bg: 'bg-amber-50',
      border: 'border-amber-500',
      title: 'text-amber-900',
      text: 'text-amber-800',
      icon: '⚠️',
    },
    success: {
      bg: 'bg-green-50',
      border: 'border-green-500',
      title: 'text-green-900',
      text: 'text-green-800',
      icon: '✓',
    },
    danger: {
      bg: 'bg-red-50',
      border: 'border-red-400',
      title: 'text-red-900',
      text: 'text-red-800',
      icon: '✗',
    },
    neutral: {
      bg: 'bg-gray-50',
      border: 'border-gray-400',
      title: 'text-gray-900',
      text: 'text-gray-800',
      icon: '→',
    },
  };

  const style = variants[variant];
  const displayIcon = icon || style.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.02 }}
      className={`${style.bg} ${style.border} border-l-4 rounded-r-lg p-6 my-6 shadow-md hover:shadow-xl transition-all`}
    >
      <div className="flex items-start gap-4">
        <div className="text-3xl flex-shrink-0">{displayIcon}</div>
        <div className="flex-1">
          <h3 className={`${style.title} text-lg font-bold mb-2`}>{title}</h3>
          <div className={`${style.text} leading-relaxed`}>{children}</div>
        </div>
      </div>
    </motion.div>
  );
}
