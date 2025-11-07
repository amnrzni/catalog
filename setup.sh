#!/bin/bash

# Design Catalog - Complete Project Setup Script
# This script creates the entire Next.js 14 application structure for Phase 1

echo "🎨 Setting up Design Catalog - Phase 1: Glassmorphism"
echo "=================================================="

# Create directory structure
echo "📁 Creating directory structure..."

mkdir -p app
mkdir -p app/glassmorphism
mkdir -p app/glassmorphism/components/buttons
mkdir -p app/glassmorphism/components/cards
mkdir -p app/glassmorphism/components/forms
mkdir -p app/glassmorphism/components/navigation

mkdir -p components/shared/ComponentShowcase
mkdir -p components/glassmorphism/Button/variants
mkdir -p components/glassmorphism/Card/variants
mkdir -p components/glassmorphism/Input/variants
mkdir -p components/glassmorphism/Textarea/variants
mkdir -p components/glassmorphism/Toggle/variants
mkdir -p components/glassmorphism/Slider/variants
mkdir -p components/glassmorphism/Tabs/variants
mkdir -p components/glassmorphism/Navbar/variants

mkdir -p contexts
mkdir -p hooks
mkdir -p lib/animations
mkdir -p lib/utils
mkdir -p types
mkdir -p public/images

echo "✅ Directory structure created!"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Run 'npm run dev' to start the development server"
echo "2. Open http://localhost:3000 in your browser"
echo "3. Start building components!"
