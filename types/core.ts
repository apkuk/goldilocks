// Core type definitions for the Nexus microsite

export type RiskTier = 'T0' | 'T1' | 'T2' | 'T3';
export type EvidenceAxis = 'capacity' | 'capability';
export type SourceType = 'journal' | 'press' | 'gov' | 'vendor' | 'thinkTank';

export interface Citation {
  title: string;
  author: string;
  year: number;
  source: SourceType;
  url: string;
  abstract?: string;
  doi?: string;
}

export interface EvidenceItem {
  id: string;
  axis: EvidenceAxis;
  headline: string;
  metric: string;
  summary: string;
  fullDescription?: string;
  citations: Citation[];
  tags: string[];
  dateAdded: string; // ISO 8601
}

export interface VendorTool {
  id: string;
  name: string;
  vendor: 'OpenAI' | 'Anthropic' | 'Google' | 'Microsoft' | 'Other';
  surface: 'Consumer' | 'Enterprise' | 'API';
  trainsOnDataByDefault: boolean;
  privacyPolicyUrl: string;
  pricingUrl?: string;
  suitableForTiers: RiskTier[];
}

export interface TierGuidance {
  tier: RiskTier;
  title: string;
  description: string;
  stakes: 'low' | 'medium' | 'high' | 'critical';
  controls: string[];
  recommendedTools: VendorTool[];
  privacyNotes: string[];
  exampleUseCases: string[];
  docsUrl?: string;
}

export interface TaskMapping {
  id: string;
  task: string;
  description?: string;
  hoursPerMonth: number;
  riskTier: RiskTier;
  aiType: EvidenceAxis;
  controls: string[];
  estimatedTimeSavings?: number; // percentage
  priority: number; // 1-5, auto-calculated
  assignedTo?: string;
  status: 'identified' | 'piloting' | 'scaled' | 'sunset';
}

export interface PlaybookMeta {
  version: string;
  generatedAt: string;
  userTasks: TaskMapping[];
  selectedTier?: RiskTier;
}

// Component prop types
export interface HeroProps {
  title: string;
  subtitle: string;
  byline: string;
  subByline?: string;
  ctaPrimary: { text: string; href: string };
  ctaSecondary: { text: string; href: string };
  toggleContent: {
    bulls: string[];
    bears: string[];
    nexus: { title: string; visual: React.ReactNode };
  };
  companyLogos?: Array<{ src: string; alt: string }>;
}

export interface RiskDialProps {
  initialTier?: RiskTier;
  onChange?: (tier: RiskTier) => void;
}

export interface EvidenceCardProps {
  item: EvidenceItem;
  expanded?: boolean;
  onExpand?: (id: string) => void;
}

export interface CAPMapperState {
  tasks: TaskMapping[];
  summary: {
    totalHours: number;
    capacityHours: number;
    capabilityHours: number;
    highestPriority: TaskMapping | null;
  };
}

export type CAPMapperAction =
  | { type: 'ADD_TASK'; payload: Omit<TaskMapping, 'id'> }
  | { type: 'UPDATE_TASK'; payload: TaskMapping }
  | { type: 'DELETE_TASK'; payload: string }
  | { type: 'CALCULATE_SUMMARY' };
