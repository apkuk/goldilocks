'use client';

import { motion } from 'framer-motion';

interface ComparisonColumn {
  title: string;
  emoji?: string;
  color: 'cyan' | 'amber' | 'orange';
  items: string[];
}

interface ComparisonTableProps {
  title?: string;
  columns: ComparisonColumn[];
}

export default function ComparisonTable({ title, columns }: ComparisonTableProps) {
  const colorClasses = {
    cyan: {
      header: 'bg-cyan-500',
      bg: 'bg-cyan-50',
      border: 'border-cyan-200',
      text: 'text-cyan-900',
    },
    amber: {
      header: 'bg-amber-500',
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      text: 'text-amber-900',
    },
    orange: {
      header: 'bg-orange-500',
      bg: 'bg-orange-50',
      border: 'border-orange-200',
      text: 'text-orange-900',
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="my-12"
    >
      {title && (
        <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">{title}</h3>
      )}

      <div className={`grid md:grid-cols-${columns.length} gap-6`}>
        {columns.map((column, colIndex) => {
          const colors = colorClasses[column.color];
          return (
            <motion.div
              key={colIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: colIndex * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`rounded-lg overflow-hidden shadow-lg border-2 ${colors.border}`}
            >
              <div className={`${colors.header} text-white py-4 px-6 text-center`}>
                {column.emoji && <div className="text-4xl mb-2">{column.emoji}</div>}
                <h4 className="text-xl font-bold">{column.title}</h4>
              </div>
              <div className={`${colors.bg} p-6`}>
                <ul className="space-y-3">
                  {column.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (colIndex * 0.1) + (itemIndex * 0.05) }}
                      className={`${colors.text} text-sm flex items-start gap-2`}
                    >
                      <span className="flex-shrink-0 mt-1">•</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
