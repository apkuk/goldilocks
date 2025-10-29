# Quick Start Guide

Get your Bulls, Bears, and Nexus microsite live in 10 minutes.

## 5-Minute Local Setup

```bash
# 1. Navigate to project
cd nexus-microsite

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Open browser
# Visit http://localhost:3000
```

That's it! The site is running locally.

## 10-Minute Netlify Deployment

### Prerequisites
- [ ] GitHub account
- [ ] Netlify account (free)

### Steps

**1. Push to GitHub (2 minutes)**

```bash
# Create repo on GitHub first: github.com/new
# Then:

git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR-USERNAME/nexus-microsite.git
git branch -M main
git push -u origin main
```

**2. Deploy on Netlify (3 minutes)**

1. Go to [app.netlify.com](https://app.netlify.com)
2. Click "Add new site" → "Import from Git"
3. Choose GitHub → Select your repository
4. Click "Deploy site" (settings auto-detect)
5. Wait ~2 minutes for build

**3. Done!**

Your site is live at `https://random-name.netlify.app`

Optional: Change site name in Netlify settings to something memorable.

## What You Get

✅ Fully functional interactive microsite
✅ Auto-deployment on every GitHub push
✅ Free SSL certificate
✅ Global CDN
✅ Branch preview deployments

## Next Steps

- [ ] Customize domain (optional): See [DEPLOYMENT.md](DEPLOYMENT.md)
- [ ] Add Plausible analytics (optional): See README
- [ ] Customize content: Edit files in `app/` and `lib/`

## Customization Checklist

### Essential (Do First)
- [ ] Update analytics domain in `app/layout.tsx` (line 46)
- [ ] Update `robots.txt` with your domain
- [ ] Review and edit `app/about/page.tsx` if needed

### Optional (Do Later)
- [ ] Add more evidence items in `lib/evidence.ts`
- [ ] Customize risk tiers in `lib/risk.ts`
- [ ] Add vendor tools in `lib/vendors.ts`
- [ ] Edit article content in `app/article/page.mdx`

## Common Commands

```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Run production build locally
npm run lint         # Check code quality
npm run type-check   # Verify TypeScript
```

## Getting Help

- **Deployment issues?** See [DEPLOYMENT.md](DEPLOYMENT.md)
- **Technical questions?** See [README.md](README.md)
- **Need support?** Email andrew@talentoptima.co

## File Structure (What to Edit)

```
Key files you'll likely edit:
├── app/
│   ├── about/page.tsx       ← Your bio
│   ├── article/page.mdx     ← Main article content
│   └── layout.tsx           ← Analytics & metadata
├── lib/
│   ├── evidence.ts          ← Evidence library data
│   ├── risk.ts              ← Risk tier definitions
│   └── vendors.ts           ← AI vendor information
└── components/
    └── Hero.tsx             ← Home page hero section
```

---

**Ready to launch?** Follow the 10-minute deployment steps above!
