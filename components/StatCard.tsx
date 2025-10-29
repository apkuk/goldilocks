'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface StatCardProps {
  value: string | number;
  label: string;
  icon?: string;
  trend?: 'up' | 'down' | 'neutral';
  description?: string;
  variant?: 'blue' | 'green' | 'amber' | 'purple' | 'red';
  animate?: boolean;
}

export default function StatCard({
  value,
  label,
  icon,
  trend,
  description,
  variant = 'blue',
  animate = true,
}: StatCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  const variants = {
    blue: 'from-blue-500 to-cyan-500',
    green: 'from-green-500 to-emerald-500',
    amber: 'from-amber-500 to-yellow-500',
    purple: 'from-purple-500 to-pink-500',
    red: 'from-red-500 to-orange-500',
  };

  const trendIcons = {
    up: '↗',
    down: '↘',
    neutral: '→',
  };

  const trendColors = {
    up: 'text-green-600',
    down: 'text-red-600',
    neutral: 'text-gray-600',
  };

  useEffect(() => {
    if (isInView && animate && typeof value === 'number') {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setDisplayValue(end);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value, animate]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.3 }}
      className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow overflow-hidden"
    >
      {/* Gradient background */}
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${variants[variant]}`} />

      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className={`text-4xl font-bold bg-gradient-to-r ${variants[variant]} bg-clip-text text-transparent`}
          >
            {animate && typeof value === 'number' ? displayValue : value}
          </motion.div>
          <p className="text-gray-600 text-sm font-medium mt-1">{label}</p>
        </div>
        {icon && <div className="text-4xl opacity-20">{icon}</div>}
      </div>

      {trend && (
        <div className={`flex items-center gap-1 text-sm font-semibold ${trendColors[trend]}`}>
          <span className="text-lg">{trendIcons[trend]}</span>
          <span>Trend</span>
        </div>
      )}

      {description && (
        <p className="text-gray-500 text-xs mt-2 border-t border-gray-100 pt-2">
          {description}
        </p>
      )}
    </motion.div>
  );
}
