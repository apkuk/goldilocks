import type { RiskTier, TierGuidance } from '@/types/core';
import { vendorTools } from './vendors';

export function mapTierToGuidance(tier: RiskTier): TierGuidance {
  const guidanceMap: Record<RiskTier, TierGuidance> = {
    T0: {
      tier: 'T0',
      title: 'Playground / Low-Stakes Content',
      description: 'Brainstorming, learning, exploration. No sensitive data.',
      stakes: 'low',
      controls: [
        'Light human review',
        'No PII or confidential information',
        'Consumer tools acceptable',
      ],
      recommendedTools: vendorTools.filter((t) => t.surface === 'Consumer'),
      privacyNotes: [
        'Consumer ChatGPT may use conversations for training unless opted out',
        'Avoid any proprietary or sensitive information',
      ],
      exampleUseCases: [
        'Blog post brainstorming',
        'Learning new concepts',
        'Draft personal emails',
      ],
    },
    T1: {
      tier: 'T1',
      title: 'Internal Workflows & Operations',
      description: 'SOPs, internal briefs, research summaries.',
      stakes: 'medium',
      controls: [
        'Source pinning and verification required',
        'Reviewer sign-off before use',
        'Use Enterprise or API surfaces',
        'No customer or regulated data',
      ],
      recommendedTools: vendorTools.filter((t) =>
        ['Enterprise', 'API'].includes(t.surface)
      ),
      privacyNotes: [
        'Enterprise tiers do not train on your data by default',
        'Ensure data residency compliance if required',
      ],
      exampleUseCases: [
        'Internal process documentation',
        'Research summaries for team',
        'Meeting notes synthesis',
      ],
    },
    T2: {
      tier: 'T2',
      title: 'External / Customer-Facing Content',
      description: 'Marketing, support responses, public analysis.',
      stakes: 'high',
      controls: [
        'Policy gates and approval workflows',
        'Traceable sources required',
        'Regular evaluation and red-teaming',
        'Human approval before publication',
        'Enterprise/API surface mandatory',
      ],
      recommendedTools: vendorTools.filter(
        (t) => t.suitableForTiers.includes('T2')
      ),
      privacyNotes: [
        'Zero-retention options recommended',
        'Log all model versions used',
        'Customer data must not be used in prompts',
      ],
      exampleUseCases: [
        'Marketing copy for campaigns',
        'Customer support chatbot responses',
        'Public-facing reports',
      ],
    },
    T3: {
      tier: 'T3',
      title: 'Regulated / High-Impact Decisions',
      description: 'Healthcare, finance, legal, safety-critical.',
      stakes: 'critical',
      controls: [
        'No unsupervised AI autonomy',
        'Documented checks and balances',
        'Tool use with full provenance',
        'Model and version governance',
        'Separation of duties',
        'Regulatory compliance verification',
        'Audit trail for all outputs',
      ],
      recommendedTools: vendorTools.filter(
        (t) => t.suitableForTiers.includes('T3')
      ),
      privacyNotes: [
        'Must comply with HIPAA/GDPR/relevant regulations',
        'Data encryption at rest and in transit',
        'No data leaves your infrastructure (on-prem or VPC options)',
      ],
      exampleUseCases: [
        'Clinical decision support (with physician verification)',
        'Financial advice (with advisor approval)',
        'Legal document analysis (with attorney review)',
      ],
      docsUrl: 'https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai',
    },
  };

  return guidanceMap[tier];
}
