#!/bin/bash

# Development Environment Setup Script for Just Right AI - Goldilocks
# This script sets up the local development environment

set -e  # Exit on error

echo "🚀 Setting up Just Right AI - Goldilocks development environment..."
echo ""

# Check Node.js version
echo "✅ Checking Node.js version..."
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 20 ]; then
    echo "❌ Error: Node.js 20.x or higher is required"
    echo "   Current version: $(node -v)"
    exit 1
fi
echo "   Node.js version: $(node -v) ✓"

# Check npm version
echo "✅ Checking npm version..."
NPM_VERSION=$(npm -v | cut -d'.' -f1)
if [ "$NPM_VERSION" -lt 10 ]; then
    echo "❌ Error: npm 10.x or higher is required"
    echo "   Current version: $(npm -v)"
    exit 1
fi
echo "   npm version: $(npm -v) ✓"

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install

# Set up Git hooks
echo ""
echo "🪝 Setting up Git hooks with Husky..."
npm run prepare

# Run initial checks
echo ""
echo "🔍 Running initial checks..."

echo "   → Type checking..."
npm run type-check

echo "   → Linting..."
npm run lint

echo "   → Test build..."
npm run build

echo ""
echo "✅ Development environment setup complete!"
echo ""
echo "📚 Next steps:"
echo "   1. Start development server: npm run dev"
echo "   2. Open http://localhost:3000 in your browser"
echo "   3. Read CONTRIBUTING.md for development guidelines"
echo ""
echo "🎉 Happy coding!"
