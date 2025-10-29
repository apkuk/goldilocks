'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { EvidenceItem } from '@/types/core';
import { trackEvent } from '@/lib/analytics';

interface EvidenceCardProps {
  item: EvidenceItem;
  expanded?: boolean;
  onExpand?: (id: string) => void;
}

export default function EvidenceCard({ item, expanded = false, onExpand }: EvidenceCardProps) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const handleToggle = () => {
    const newState = !isExpanded;
    setIsExpanded(newState);
    if (newState) {
      trackEvent('Evidence Card Expanded', { id: item.id, axis: item.axis });
    }
    onExpand?.(item.id);
  };

  const axisColors = {
    capacity: {
      badge: 'bg-blue-100 text-blue-800 border-blue-300',
      border: 'border-blue-200',
      metric: 'text-blue-600',
    },
    capability: {
      badge: 'bg-purple-100 text-purple-800 border-purple-300',
      border: 'border-purple-200',
      metric: 'text-purple-600',
    },
  };

  const colors = axisColors[item.axis];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`rounded-lg border ${colors.border} bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden`}
    >
      {/* Badge */}
      <div className={`px-4 py-2 ${colors.badge} border-b ${colors.border} flex items-center gap-2`}>
        <span className="text-lg">{item.axis === 'capacity' ? '⚡' : '💡'}</span>
        <span className="text-xs font-semibold uppercase tracking-wide">
          {item.axis}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Headline */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.headline}</h3>

        {/* Metric */}
        <div className={`text-3xl font-bold ${colors.metric} mb-3`}>
          {item.metric}
        </div>

        {/* Summary */}
        <p className="text-sm text-gray-600 mb-3">{item.summary}</p>

        {/* Full Description (Expandable) */}
        <AnimatePresence>
          {isExpanded && item.fullDescription && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-3"
            >
              <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded border border-gray-200">
                {item.fullDescription}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Citations */}
        <div className="border-t border-gray-200 pt-3">
          <h4 className="text-xs font-semibold text-gray-700 mb-2">Sources:</h4>
          <ul className="space-y-2">
            {item.citations.map((citation, idx) => (
              <li key={idx} className="text-xs text-gray-600">
                <div className="flex items-start gap-2">
                  <span>•</span>
                  <div>
                    <span className="font-medium">{citation.author}</span>{' '}
                    <span>({citation.year})</span>
                    {citation.title && (
                      <>
                        <br />
                        <span className="italic">{citation.title}</span>
                      </>
                    )}
                    <br />
                    <a
                      href={citation.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                      onClick={() => trackEvent('Citation Clicked', { id: item.id, author: citation.author })}
                    >
                      View paper →
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Expand/Collapse Button */}
        {item.fullDescription && (
          <button
            onClick={handleToggle}
            className="mt-4 text-sm text-gray-600 hover:text-gray-900 font-medium flex items-center gap-1"
          >
            {isExpanded ? '▲ Show less' : '▼ Show more'}
          </button>
        )}
      </div>
    </motion.div>
  );
}
