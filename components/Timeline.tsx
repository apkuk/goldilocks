'use client';

import { motion } from 'framer-motion';

interface TimelineItem {
  title: string;
  description: string;
  icon?: string;
  color?: 'blue' | 'green' | 'amber' | 'purple';
}

interface TimelineProps {
  items: TimelineItem[];
  variant?: 'vertical' | 'horizontal';
}

export default function Timeline({ items, variant = 'vertical' }: TimelineProps) {
  const colorClasses = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    amber: 'bg-amber-500',
    purple: 'bg-purple-500',
  };

  if (variant === 'horizontal') {
    return (
      <div className="my-12 overflow-x-auto pb-4">
        <div className="flex gap-8 min-w-max px-4">
          {items.map((item, index) => {
            const color = item.color || 'blue';
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex-shrink-0 w-64"
              >
                {/* Connector line */}
                {index < items.length - 1 && (
                  <div className="absolute top-6 left-full w-8 h-0.5 bg-gray-300" />
                )}

                {/* Icon bubble */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`${colorClasses[color]} w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl mb-4 shadow-lg`}
                >
                  {item.icon || (index + 1)}
                </motion.div>

                {/* Content */}
                <div className="bg-white rounded-lg p-4 shadow-md border-l-4" style={{ borderColor: `var(--${color}-500)` }}>
                  <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="my-12 relative">
      {/* Vertical line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300" />

      <div className="space-y-8">
        {items.map((item, index) => {
          const color = item.color || 'blue';
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex items-start gap-6"
            >
              {/* Icon bubble */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
                className={`${colorClasses[color]} relative z-10 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg flex-shrink-0`}
              >
                {item.icon || (index + 1)}
              </motion.div>

              {/* Content card */}
              <motion.div
                whileHover={{ scale: 1.02, x: 5 }}
                className={`flex-1 bg-white rounded-lg p-6 shadow-md border-l-4 ${
                  color === 'blue' ? 'border-blue-500' :
                  color === 'green' ? 'border-green-500' :
                  color === 'amber' ? 'border-amber-500' :
                  'border-purple-500'
                }`}
              >
                <h4 className="font-bold text-xl text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
