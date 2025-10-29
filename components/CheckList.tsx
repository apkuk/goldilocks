'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface CheckListProps {
  title?: string;
  items: string[];
  variant?: 'default' | 'interactive';
  defaultChecked?: boolean;
}

export default function CheckList({
  title,
  items,
  variant = 'default',
  defaultChecked = false,
}: CheckListProps) {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(
    new Set(defaultChecked ? items.map((_, i) => i) : [])
  );

  const toggleItem = (index: number) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(index)) {
      newChecked.delete(index);
    } else {
      newChecked.add(index);
    }
    setCheckedItems(newChecked);
  };

  const progress = (checkedItems.size / items.length) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="my-8 bg-white rounded-lg border border-gray-200 shadow-lg p-6"
    >
      {title && <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>}

      {variant === 'interactive' && (
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Progress</span>
            <span>{checkedItems.size} / {items.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      )}

      <ul className="space-y-3">
        {items.map((item, index) => {
          const isChecked = checkedItems.has(index);
          return (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-start gap-3"
            >
              {variant === 'interactive' ? (
                <button
                  onClick={() => toggleItem(index)}
                  className={`flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${
                    isChecked
                      ? 'bg-green-500 border-green-500'
                      : 'bg-white border-gray-300 hover:border-green-400'
                  }`}
                >
                  {isChecked && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-white text-sm"
                    >
                      ✓
                    </motion.span>
                  )}
                </button>
              ) : (
                <span className="flex-shrink-0 text-green-600 text-lg">✓</span>
              )}
              <span
                className={`flex-1 ${
                  isChecked ? 'line-through text-gray-500' : 'text-gray-700'
                }`}
              >
                {item}
              </span>
            </motion.li>
          );
        })}
      </ul>
    </motion.div>
  );
}
