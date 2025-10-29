import type { MDXComponents } from 'mdx/types';
import RiskDial from './components/RiskDial';
import EvidenceCard from './components/EvidenceCard';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    RiskDial,
    EvidenceCard,
    ...components,
  };
}
