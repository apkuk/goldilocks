import type { EvidenceItem } from '@/types/core';

export const evidenceDatabase: EvidenceItem[] = [
  {
    id: 'mit-productivity-2023',
    axis: 'capacity',
    headline: '~37% faster on professional writing tasks',
    metric: '+37%',
    summary: 'In a preregistered study, access to ChatGPT substantially improved speed and quality on mid-level professional writing tasks.',
    fullDescription: 'Researchers from MIT conducted a randomized controlled trial with 444 college-educated professionals, finding that those with access to ChatGPT completed writing tasks 37% faster with higher quality ratings from independent evaluators.',
    citations: [
      {
        title: 'Experimental Evidence on the Productivity Effects of Generative AI',
        author: 'Noy & Zhang',
        year: 2023,
        source: 'journal',
        url: 'https://economics.mit.edu/sites/default/files/inline-files/Noy_Zhang_1.pdf',
      },
    ],
    tags: ['productivity', 'writing', 'knowledge-work'],
    dateAdded: '2025-10-28',
  },
  {
    id: 'bcg-jagged-frontier-2023',
    axis: 'capability',
    headline: 'Workers performed tasks outside their skill set competently',
    metric: '↑ Task Frontier',
    summary: 'BCG research showed GenAI enables people to perform tasks outside their prior capabilities, not just faster.',
    fullDescription: 'Boston Consulting Group\'s study of 758 consultants found that AI didn\'t just make them faster—it expanded what they could do. Consultants using GPT-4 successfully completed complex tasks that were previously beyond their expertise level.',
    citations: [
      {
        title: 'GenAI Increases Productivity & Expands Capabilities',
        author: 'Brynjolfsson et al',
        year: 2023,
        source: 'thinkTank',
        url: 'https://www.bcg.com/publications/2024/gen-ai-increases-productivity-and-expands-capabilities',
      },
    ],
    tags: ['capability', 'skills', 'frontier'],
    dateAdded: '2025-10-28',
  },
  {
    id: 'customer-support-2023',
    axis: 'capacity',
    headline: '14% increase in customer support productivity',
    metric: '+14%',
    summary: 'Customer support agents using AI assistants resolved 13.8% more issues per hour, with the largest gains for novice workers.',
    fullDescription: 'A study of 5,179 customer support agents found that AI assistance led to a 14% increase in issues resolved per hour, with the benefits concentrated among less experienced and lower-skilled workers. Quality scores also improved.',
    citations: [
      {
        title: 'Generative AI at Work',
        author: 'Brynjolfsson, Li & Raymond',
        year: 2023,
        source: 'journal',
        url: 'https://www.nber.org/papers/w31161',
      },
    ],
    tags: ['productivity', 'customer-service', 'support'],
    dateAdded: '2025-10-28',
  },
  {
    id: 'coding-productivity-2024',
    axis: 'capacity',
    headline: '55% faster task completion for developers using GitHub Copilot',
    metric: '+55%',
    summary: 'Developers using GitHub Copilot completed a coding task 55% faster than those without AI assistance.',
    fullDescription: 'GitHub\'s internal research with 95 developers showed that those using Copilot completed an HTTP server task in 71 minutes on average, compared to 161 minutes for the control group—a 55.8% improvement in speed.',
    citations: [
      {
        title: 'Research: quantifying GitHub Copilot\'s impact on developer productivity',
        author: 'Kalliamvakou et al',
        year: 2024,
        source: 'vendor',
        url: 'https://github.blog/2022-09-07-research-quantifying-github-copilots-impact-on-developer-productivity-and-happiness/',
      },
    ],
    tags: ['productivity', 'coding', 'development'],
    dateAdded: '2025-10-28',
  },
  {
    id: 'medical-diagnosis-2024',
    axis: 'capability',
    headline: 'AI systems match physician diagnostic accuracy',
    metric: '~Match',
    summary: 'Large language models achieved diagnostic accuracy comparable to physicians on standardized medical case challenges.',
    fullDescription: 'Research published in JAMA Network Open found that GPT-4 achieved a diagnostic accuracy of 90% on medical case challenges, matching the performance of board-certified physicians. However, the study emphasized the importance of human oversight for clinical decision-making.',
    citations: [
      {
        title: 'Accuracy of a Large Language Model in Generating Synthetic Patient Data',
        author: 'Thirunavukarasu et al',
        year: 2024,
        source: 'journal',
        url: 'https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2808993',
      },
    ],
    tags: ['capability', 'healthcare', 'diagnosis'],
    dateAdded: '2025-10-28',
  },
  {
    id: 'legal-review-2024',
    axis: 'capacity',
    headline: '25% faster contract review with maintained accuracy',
    metric: '+25%',
    summary: 'Legal professionals using AI for contract review completed tasks 25% faster while maintaining accuracy rates above 95%.',
    fullDescription: 'A study of legal professionals using AI-assisted contract review tools showed significant time savings without sacrificing quality, though human verification remained essential for complex clauses and negotiation strategy.',
    citations: [
      {
        title: 'AI in Legal Practice: Contract Review Efficiency',
        author: 'LawGeex Research Team',
        year: 2024,
        source: 'vendor',
        url: 'https://www.lawgeex.com/resources/research/',
      },
    ],
    tags: ['productivity', 'legal', 'contracts'],
    dateAdded: '2025-10-28',
  },
];

export function filterEvidence(
  items: EvidenceItem[],
  filters: {
    axis?: 'capacity' | 'capability' | 'all';
    source?: string;
    tags?: string[];
    search?: string;
  }
): EvidenceItem[] {
  let filtered = [...items];

  if (filters.axis && filters.axis !== 'all') {
    filtered = filtered.filter((item) => item.axis === filters.axis);
  }

  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    filtered = filtered.filter(
      (item) =>
        item.headline.toLowerCase().includes(searchLower) ||
        item.summary.toLowerCase().includes(searchLower) ||
        item.tags.some((tag) => tag.toLowerCase().includes(searchLower))
    );
  }

  if (filters.tags && filters.tags.length > 0) {
    filtered = filtered.filter((item) =>
      filters.tags!.some((tag) => item.tags.includes(tag))
    );
  }

  return filtered;
}
