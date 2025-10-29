import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Just Right AI | Finding the Goldilocks Zone for AI Adoption',
  description: 'An evidence-based framework for AI adoption: capacity × capability, risk-tiered controls, and operational playbooks for senior leaders. By Andrew Kilshaw, former CLO at Nike and SVP at Sanofi.',
  keywords: ['AI adoption', 'AI strategy', 'AI framework', 'Goldilocks AI', 'organizational capability', 'AI productivity', 'Andrew Kilshaw', 'TalentOptima'],
  authors: [{ name: 'Andrew Kilshaw', url: 'https://talentoptima.co' }],
  openGraph: {
    title: 'Just Right AI - The Goldilocks Framework',
    description: 'Move beyond AI hype and fear. Find the evidence-based sweet spot.',
    url: 'https://justrightai.com',
    siteName: 'Just Right AI',
    images: [
      {
        url: '/gdl.png',
        width: 1200,
        height: 1200,
        alt: 'Just Right AI - Goldilocks Framework by Andrew Kilshaw',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Just Right AI - The Goldilocks Framework',
    description: 'Evidence-based AI adoption framework for leaders',
    images: ['/gdl.png'],
    creator: '@andrewkilshaw',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Plausible Analytics */}
        <script
          defer
          data-domain="your-domain.com"
          src="https://plausible.io/js/script.js"
        ></script>
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
