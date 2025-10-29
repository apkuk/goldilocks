import type { MDXComponents } from 'mdx/types';
import RiskDial from '@/components/RiskDial';
import EvidenceCard from '@/components/EvidenceCard';
import PullQuote from '@/components/PullQuote';
import KeyPoint from '@/components/KeyPoint';
import CheckList from '@/components/CheckList';
import ExpandableSection from '@/components/ExpandableSection';
import StatCard from '@/components/StatCard';
import ComparisonTable from '@/components/ComparisonTable';
import Timeline from '@/components/Timeline';
import TabbedContent from '@/components/TabbedContent';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    RiskDial,
    EvidenceCard,
    PullQuote,
    KeyPoint,
    CheckList,
    ExpandableSection,
    StatCard,
    ComparisonTable,
    Timeline,
    TabbedContent,
    ...components,
  };
}
