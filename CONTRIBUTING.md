# Contributing to Just Right AI - Goldilocks

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to this project.

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher
- Git

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/apkuk/goldilocks.git
   cd goldilocks
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Git hooks**
   ```bash
   npm run prepare
   ```
   This will set up Husky pre-commit and pre-push hooks automatically.

4. **Start development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Development Workflow

### Branch Naming Convention

- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation changes
- `refactor/description` - Code refactoring
- `perf/description` - Performance improvements
- `test/description` - Test additions or updates

### Making Changes

1. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow the existing code style
   - Write clear, concise commit messages
   - Add comments for complex logic

3. **Run checks locally**
   ```bash
   npm run type-check    # TypeScript type checking
   npm run lint          # ESLint
   npm run lint:fix      # Auto-fix linting issues
   npm run format        # Format code with Prettier
   npm run build         # Test build
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add new interactive component"
   ```
   
   Our pre-commit hooks will automatically:
   - Run ESLint on staged files
   - Format code with Prettier
   - Check for TypeScript errors

5. **Push to your branch**
   ```bash
   git push origin feature/your-feature-name
   ```
   
   Our pre-push hooks will:
   - Run full type checking
   - Run complete linting

6. **Create a Pull Request**
   - Go to the repository on GitHub
   - Click "New Pull Request"
   - Fill out the PR template
   - Wait for CI checks to pass
   - Request review

## 📝 Commit Message Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>: <description>

[optional body]

[optional footer]
```

**Types:**
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Code style changes (formatting, semicolons, etc.)
- `refactor` - Code refactoring
- `perf` - Performance improvements
- `test` - Test additions or updates
- `chore` - Build process or auxiliary tool changes

**Examples:**
```bash
feat: add new StatCard component with counter animation
fix: resolve Tailwind CSS 4.x PostCSS configuration issue
docs: update README with deployment instructions
refactor: simplify RiskDial state management
```

## 🧪 Testing

Before submitting a PR:

1. **Type Check**
   ```bash
   npm run type-check
   ```

2. **Lint**
   ```bash
   npm run lint
   ```

3. **Build**
   ```bash
   npm run build
   ```

All tests must pass before your PR can be merged.

## 🎨 Code Style

- Use TypeScript strict mode
- Follow existing code patterns
- Use functional components with hooks
- Prefer named exports over default exports
- Use Tailwind CSS for styling (no inline styles)
- Use Framer Motion for animations
- Comment complex logic

### Component Structure

```typescript
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface ComponentProps {
  title: string;
  // ... other props
}

export default function Component({ title }: ComponentProps) {
  const [state, setState] = useState('');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Component content */}
    </motion.div>
  );
}
```

## 🐛 Reporting Bugs

When reporting bugs, please include:

- Clear description of the issue
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Environment details (OS, browser, Node version)

## 💡 Requesting Features

When requesting features:

- Check if the feature already exists
- Provide clear use case
- Explain why this feature would benefit the project
- Include mockups or examples if possible

## 📦 CI/CD Pipeline

Our CI pipeline runs on every push and PR:

1. **Install dependencies**
2. **Type checking** - Ensures TypeScript compiles without errors
3. **Linting** - Checks code quality with ESLint
4. **Build** - Verifies production build succeeds
5. **Deploy Preview** - Creates Netlify preview for PRs
6. **Deploy Production** - Deploys to production on main branch

## 🔐 Security

If you discover a security vulnerability, please email andrew@talentoptima.co instead of using the issue tracker.

## 📄 License

By contributing, you agree that your contributions will be licensed under the same license as the project.

## ❓ Questions?

Feel free to open an issue or reach out to:
- Andrew Kilshaw - andrew@talentoptima.co
- LinkedIn: [andrewkilshaw](https://www.linkedin.com/in/andrewkilshaw)

---

**Thank you for contributing to Just Right AI - Goldilocks! 🐻**
