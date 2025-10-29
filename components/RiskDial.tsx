'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import type { RiskTier } from '@/types/core';
import { mapTierToGuidance } from '@/lib/risk';
import { trackEvent } from '@/lib/analytics';

interface RiskDialProps {
  initialTier?: RiskTier;
  onChange?: (tier: RiskTier) => void;
}

export default function RiskDial({
  initialTier = 'T0',
  onChange
}: RiskDialProps) {
  const [selectedTier, setSelectedTier] = useState<RiskTier>(initialTier);
  const guidance = useMemo(() => mapTierToGuidance(selectedTier), [selectedTier]);

  const handleTierChange = (tier: RiskTier) => {
    setSelectedTier(tier);
    onChange?.(tier);
    trackEvent('Risk Dial', { tier });
  };

  const tiers: RiskTier[] = ['T0', 'T1', 'T2', 'T3'];

  const tierColors: Record<RiskTier, { bg: string; text: string; border: string }> = {
    T0: { bg: 'bg-green-600', text: 'text-green-600', border: 'border-green-600' },
    T1: { bg: 'bg-blue-600', text: 'text-blue-600', border: 'border-blue-600' },
    T2: { bg: 'bg-orange-600', text: 'text-orange-600', border: 'border-orange-600' },
    T3: { bg: 'bg-red-600', text: 'text-red-600', border: 'border-red-600' },
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border border-gray-200 bg-white p-6 shadow-lg"
      aria-labelledby="risk-dial-title"
    >
      {/* Tier Selector */}
      <div className="mb-6">
        <h3 id="risk-dial-title" className="text-xl font-semibold text-gray-900 mb-3">
          Risk Tier: {selectedTier}
        </h3>
        <div className="flex gap-2" role="tablist">
          {tiers.map((tier) => (
            <button
              key={tier}
              role="tab"
              aria-selected={tier === selectedTier}
              aria-controls={`panel-${tier}`}
              onClick={() => handleTierChange(tier)}
              className={`
                px-4 py-2 rounded-md font-medium transition-all
                ${tier === selectedTier
                  ? `${tierColors[tier].bg} text-white shadow-md`
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }
              `}
            >
              {tier}
            </button>
          ))}
        </div>
      </div>

      {/* Content Panel */}
      <motion.div
        key={selectedTier}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        role="tabpanel"
        id={`panel-${selectedTier}`}
        className="space-y-4"
      >
        {/* Description */}
        <div className={`border-l-4 ${tierColors[selectedTier].border} pl-4`}>
          <h4 className="font-semibold text-gray-900 mb-1">{guidance.title}</h4>
          <p className="text-sm text-gray-600">{guidance.description}</p>
          <p className="text-xs text-gray-500 mt-1 capitalize">Stakes: {guidance.stakes}</p>
        </div>

        {/* Controls */}
        <div>
          <h5 className="font-medium text-gray-900 mb-2">Recommended Controls:</h5>
          <ul className="space-y-1">
            {guidance.controls.map((control, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                <span className={`${tierColors[selectedTier].text} mt-1`}>•</span>
                <span>{control}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Example Use Cases */}
        {guidance.exampleUseCases.length > 0 && (
          <div>
            <h5 className="font-medium text-gray-900 mb-2">Example Use Cases:</h5>
            <ul className="space-y-1">
              {guidance.exampleUseCases.map((useCase, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-gray-400 mt-1">→</span>
                  <span>{useCase}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tools */}
        <div>
          <h5 className="font-medium text-gray-900 mb-2">Suitable Tools:</h5>
          <div className="flex flex-wrap gap-2">
            {guidance.recommendedTools.slice(0, 3).map((tool) => (
              <a
                key={tool.id}
                href={tool.privacyPolicyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-gray-100 text-sm text-gray-700 rounded-full hover:bg-gray-200 transition"
              >
                {tool.name} →
              </a>
            ))}
          </div>
        </div>

        {/* Privacy Notes */}
        {guidance.privacyNotes.length > 0 && (
          <div className={`${tierColors[selectedTier].bg} bg-opacity-10 border ${tierColors[selectedTier].border} rounded p-3`}>
            <h5 className={`font-medium ${tierColors[selectedTier].text} mb-1 text-sm`}>Privacy Notes:</h5>
            <ul className="space-y-1">
              {guidance.privacyNotes.map((note, idx) => (
                <li key={idx} className="text-xs text-gray-800 flex items-start gap-1">
                  <span>✓</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Documentation Link */}
        {guidance.docsUrl && (
          <div className="pt-2">
            <a
              href={guidance.docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm ${tierColors[selectedTier].text} hover:underline`}
            >
              📄 Read regulatory framework →
            </a>
          </div>
        )}
      </motion.div>
    </motion.section>
  );
}
