# Bulls, Bears, and the Nexus - Interactive Microsite

An evidence-based framework for AI adoption built with Next.js 15, TypeScript, and Tailwind CSS.

## Overview

This microsite presents the CAP² framework (Capacity × Capability) for responsible AI adoption, featuring:

- 🎯 Interactive risk tier assessment tool
- 📊 Evidence-based research library
- 📖 Long-form article with embedded components
- 📥 Downloadable implementation playbook
- ⚡ Built with Next.js 15, TypeScript, Framer Motion

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 4.x
- **Animation:** Framer Motion 12.x
- **Content:** MDX for article pages
- **Deployment:** Netlify (via GitHub integration)

## Project Structure

```
nexus-microsite/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── article/
│   │   └── page.mdx        # Main article (MDX)
│   ├── framework/
│   │   └── page.tsx        # Framework deep dive
│   ├── evidence/
│   │   └── page.tsx        # Evidence library
│   ├── playbook/
│   │   └── page.tsx        # Playbook download
│   └── about/
│       └── page.tsx        # About Andrew
├── components/
│   ├── Hero.tsx            # Animated hero with bulls/bears/nexus
│   ├── RiskDial.tsx        # Interactive risk tier selector
│   └── EvidenceCard.tsx    # Evidence display cards
├── lib/
│   ├── evidence.ts         # Evidence database & filtering
│   ├── risk.ts             # Risk tier mapping logic
│   ├── vendors.ts          # Vendor tool data
│   └── analytics.ts        # Plausible analytics wrapper
├── types/
│   └── core.ts             # TypeScript type definitions
├── public/                 # Static assets
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind configuration
├── netlify.toml            # Netlify deployment config
└── package.json            # Dependencies & scripts
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd nexus-microsite
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

## Deployment to Netlify via GitHub

### Step 1: Push to GitHub

1. Initialize git repository (if not already):
```bash
git init
git add .
git commit -m "Initial commit: Bulls, Bears, and Nexus microsite"
```

2. Create a new repository on GitHub

3. Push to GitHub:
```bash
git remote add origin <your-github-repo-url>
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Netlify

#### Option A: Netlify Dashboard (Recommended)

1. Go to [netlify.com](https://netlify.com) and sign in
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub" and authorize Netlify
4. Select your repository
5. Configure build settings (should auto-detect):
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - **Node version:** 20
6. Click "Deploy site"

#### Option B: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize and deploy
netlify init

# Follow prompts:
# - Create & configure new site
# - Build command: npm run build
# - Publish directory: .next

# Deploy
netlify deploy --prod
```

### Environment Variables (Optional)

If you need to configure analytics or other services:

1. In Netlify dashboard, go to Site settings → Environment variables
2. Add variables:
   - `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` - Your domain for Plausible analytics

## Customization

### Update Author Info

Edit [app/about/page.tsx](app/about/page.tsx) to update:
- Bio content
- Contact information
- Career highlights

### Add/Edit Evidence Items

Edit [lib/evidence.ts](lib/evidence.ts):

```typescript
{
  id: 'unique-id',
  axis: 'capacity' | 'capability',
  headline: 'Your headline',
  metric: '+XX%',
  summary: 'Brief summary...',
  citations: [
    {
      title: 'Study title',
      author: 'Author name',
      year: 2024,
      source: 'journal',
      url: 'https://...'
    }
  ],
  tags: ['tag1', 'tag2'],
  dateAdded: '2025-10-28'
}
```

### Customize Risk Tiers

Edit [lib/risk.ts](lib/risk.ts) to modify tier guidance and controls.

### Update Vendor Tools

Edit [lib/vendors.ts](lib/vendors.ts) to add/update AI vendor information.

## Analytics Setup

The site includes Plausible Analytics integration (privacy-focused, GDPR compliant).

1. Sign up at [plausible.io](https://plausible.io)
2. Add your domain
3. Update [app/layout.tsx](app/layout.tsx):
   ```tsx
   data-domain="your-actual-domain.com"
   ```

## Performance

Target metrics (per PRD):
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1

Run Lighthouse audits regularly:
```bash
npm run build
# Then run Lighthouse in Chrome DevTools
```

## TypeScript

This project uses TypeScript in strict mode. No `any` types allowed.

Type checking:
```bash
npm run type-check
```

## Accessibility

- WCAG 2.1 Level AA compliant
- Keyboard navigation supported
- ARIA labels on interactive components
- Focus indicators visible

## License

This project is open source. Attribution to Andrew Kilshaw / TalentOptima appreciated.

## Support

Questions or issues?
- Email: andrew@talentoptima.co
- LinkedIn: [linkedin.com/in/andrewkilshaw](https://linkedin.com/in/andrewkilshaw)
- Website: [talentoptima.co](https://talentoptima.co)

## Contributing

This is a single-author project, but suggestions welcome via GitHub issues.

## Roadmap

Future enhancements (v2.0+):
- [ ] PDF generation for playbook downloads
- [ ] CAP² Mapper interactive tool
- [ ] User accounts and saved assessments
- [ ] Additional evidence items
- [ ] Video content integration
- [ ] Multi-language support

---

Built with ❤️ by Andrew Kilshaw | [TalentOptima](https://talentoptima.co)
