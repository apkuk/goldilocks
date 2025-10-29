# Deployment Guide: Netlify via GitHub

This guide walks you through deploying the Bulls, Bears, and Nexus microsite to Netlify using GitHub integration.

## Prerequisites

- GitHub account
- Netlify account (free tier works fine)
- Git installed locally

## Step-by-Step Deployment

### 1. Push to GitHub

#### First Time Setup

```bash
# Navigate to project directory
cd nexus-microsite

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Bulls, Bears, and Nexus microsite"

# Create repository on GitHub
# Go to https://github.com/new
# Create a new repository (name it whatever you like, e.g., "nexus-microsite")

# Add remote origin
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### Subsequent Updates

```bash
# Make your changes
# ...

# Stage changes
git add .

# Commit changes
git commit -m "Description of your changes"

# Push to GitHub
git push
```

### 2. Connect to Netlify

#### Via Netlify Dashboard (Easiest Method)

1. **Sign in to Netlify**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Sign in with GitHub (recommended) or email

2. **Import Project**
   - Click "Add new site" button
   - Select "Import an existing project"
   - Choose "Deploy with GitHub"

3. **Authorize Netlify**
   - If first time: Authorize Netlify to access your GitHub account
   - Select which repositories Netlify can access

4. **Select Repository**
   - Find and select your `nexus-microsite` repository
   - Click the repository name

5. **Configure Build Settings**
   - Netlify should auto-detect Next.js settings
   - Verify these settings:
     ```
     Build command: npm run build
     Publish directory: .next
     ```
   - If not auto-detected, enter them manually

6. **Advanced Settings (Optional)**
   - Click "Show advanced"
   - Add environment variables if needed:
     - `NODE_VERSION` = `20`
     - `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` = your domain (if using Plausible)

7. **Deploy**
   - Click "Deploy site"
   - Wait 2-5 minutes for first deployment
   - Netlify will provide a temporary URL like `random-name.netlify.app`

### 3. Configure Custom Domain (Optional)

#### If You Own a Domain

1. **Add Custom Domain**
   - In Netlify dashboard, go to "Domain settings"
   - Click "Add custom domain"
   - Enter your domain (e.g., `nexusframework.com`)

2. **Configure DNS**
   - Follow Netlify's instructions to update your DNS settings
   - Option A: Point your domain's A record to Netlify's load balancer
   - Option B: Change nameservers to Netlify DNS (easier)

3. **Enable HTTPS**
   - Netlify provides free SSL certificates via Let's Encrypt
   - Click "Verify DNS configuration" once DNS propagates
   - Certificate provisioning happens automatically

#### Using Netlify Subdomain

If you don't have a domain, you can customize the Netlify subdomain:
- Go to "Site settings" → "Site details"
- Click "Change site name"
- Enter a memorable name (e.g., `bulls-bears-nexus.netlify.app`)

### 4. Configure Plausible Analytics (Optional)

1. **Sign up for Plausible**
   - Go to [plausible.io](https://plausible.io)
   - Create account and add your domain

2. **Update Site Code**
   - Edit `app/layout.tsx`
   - Change `data-domain="your-domain.com"` to your actual domain

3. **Redeploy**
   - Commit and push changes to GitHub
   - Netlify will auto-deploy

### 5. Set Up Continuous Deployment

Continuous deployment is already configured! Every time you push to `main` branch:

1. GitHub notifies Netlify of new commits
2. Netlify automatically runs `npm run build`
3. New version is deployed to production
4. Previous version is kept for rollback if needed

**Branch Previews:**
- Create a pull request → Netlify builds a preview
- Merge to main → Deploys to production

### 6. Monitoring & Rollback

#### View Build Logs
- Netlify dashboard → "Deploys" tab
- Click any deploy to see full build logs
- Useful for debugging build failures

#### Rollback
- Go to "Deploys" tab
- Find a previous successful deploy
- Click "Publish deploy" to instantly rollback

### 7. Performance & Optimization

#### Enable Netlify Edge
Already configured in `netlify.toml`:
- Next.js plugin handles edge deployment
- Static assets cached globally
- Server-side rendering at edge locations

#### Check Performance
```bash
# Build locally first
npm run build

# Then run Lighthouse in Chrome DevTools
# Or use online tool: web.dev/measure
```

Target scores (per PRD):
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90
- SEO: > 95

## Troubleshooting

### Build Fails on Netlify

**Problem:** Build succeeds locally but fails on Netlify

**Solutions:**
1. Check Node version:
   - Add environment variable: `NODE_VERSION` = `20`
2. Clear build cache:
   - Deploys tab → Options → Clear cache and retry
3. Check build logs for specific errors

### TypeScript Errors

**Problem:** Type errors in production build

**Solutions:**
```bash
# Run type check locally first
npm run type-check

# Fix all errors before pushing
```

### Missing Environment Variables

**Problem:** Site works locally but not on Netlify

**Solutions:**
1. Add env vars in Netlify:
   - Site settings → Environment variables
   - Add all `NEXT_PUBLIC_*` variables
2. Redeploy

### Slow Build Times

**Problem:** Builds take > 5 minutes

**Solutions:**
1. Use dependency caching (enabled by default)
2. Consider upgrading Netlify plan for faster build machines
3. Optimize dependencies (remove unused packages)

## CLI Deployment (Alternative)

### Install Netlify CLI

```bash
npm install -g netlify-cli
```

### Login

```bash
netlify login
```

### Deploy

```bash
# Deploy preview
netlify deploy

# Deploy to production
netlify deploy --prod
```

## GitHub Actions (Advanced)

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) for CI/CD.

**Setup:**
1. Get Netlify auth token:
   - Netlify → User settings → Applications → Personal access tokens
   - Create new token

2. Get Netlify site ID:
   - Site settings → General → Site details → API ID

3. Add secrets to GitHub:
   - Repository → Settings → Secrets and variables → Actions
   - Add `NETLIFY_AUTH_TOKEN`
   - Add `NETLIFY_SITE_ID`

4. Push to trigger workflow

## Cost Estimate

**Netlify Free Tier includes:**
- 100 GB bandwidth/month
- 300 build minutes/month
- Unlimited sites
- SSL certificates
- Branch previews

**This project's usage:**
- Estimated ~10-20 builds/month (normal development)
- ~5-10 GB bandwidth (for ~10,000 visitors/month)
- Well within free tier limits

**Upgrade to Pro ($19/month) if you need:**
- > 1 TB bandwidth
- > 300 build minutes
- Role-based access control
- Form submissions

## Support

If you encounter issues:

1. Check [Netlify docs](https://docs.netlify.com)
2. Check build logs in Netlify dashboard
3. Contact: andrew@talentoptima.co

## Quick Reference

```bash
# Local development
npm run dev

# Type check
npm run type-check

# Build for production
npm run build

# Lint code
npm run lint

# Deploy via CLI
netlify deploy --prod
```

**Important URLs:**
- Netlify dashboard: [app.netlify.com](https://app.netlify.com)
- GitHub repo: [github.com/YOUR-USERNAME/YOUR-REPO](https://github.com)
- Your site: [your-site.netlify.app](https://your-site.netlify.app)

---

**Questions?** Contact andrew@talentoptima.co
