# Design Catalog - Setup Instructions

## 🚀 Quick Start

This project is ready to deploy. Follow these steps to set up the complete Next.js 14 application:

### Step 1: Run Setup Script

```bash
node setup-project.js
```

This script will:
- ✅ Create all required directories (app/, components/, contexts/, hooks/, lib/, types/, public/)
- ✅ Move source files from root to their proper locations
- ✅ Organize the complete Next.js project structure

### Step 2: Install Dependencies

```bash
npm install
```

This installs:
- Next.js 14.2.20
- React 18.3.1
- TypeScript 5.7.2
- Tailwind CSS 3.4.17
- Framer Motion 11.11.17
- clsx + tailwind-merge (class utilities)
- All dev dependencies (ESLint, Prettier, etc.)

### Step 3: Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📁 Project Structure (After Setup)

```
/catalog/
├── app/                          # Next.js 14 App Router
│   ├── layout.tsx               # Root layout with providers
│   ├── globals.css              # Global styles + Tailwind
│   ├── page.tsx                 # Landing page (morphing showcase)
│   └── glassmorphism/           # Glassmorphism section
│       ├── page.tsx             # Dashboard page
│       └── components/          # Component showcase pages
│           ├── buttons/page.tsx
│           ├── cards/page.tsx
│           └── forms/page.tsx
│
├── components/                   # React Components
│   ├── shared/                  # Shared components
│   │   └── ComponentShowcase/   # Showcase wrapper system
│   └── glassmorphism/           # Glassmorphism components
│       ├── Button/              # Button component
│       │   ├── index.tsx
│       │   ├── Button.types.ts
│       │   ├── animations.ts
│       │   └── variants/
│       │       └── Glassmorphism.tsx
│       ├── Card/                # Card component
│       ├── Input/               # Input components
│       ├── Textarea/            # Textarea component
│       ├── Toggle/              # Toggle switch
│       ├── Slider/              # Range slider
│       ├── Tabs/                # Tabs component
│       └── Navbar/              # Navigation bar
│
├── contexts/                     # React Context
│   ├── ThemeContext.tsx         # Design style management
│   └── AnimationContext.tsx     # Animation controls
│
├── hooks/                        # Custom React hooks
│   ├── useTheme.ts              # Theme hook
│   └── useAnimation.ts          # Animation hook
│
├── lib/                          # Utilities & helpers
│   ├── animations/
│   │   └── variants.ts          # Framer Motion variants
│   └── utils/
│       └── cn.ts                # Classnames utility
│
├── types/                        # TypeScript definitions
│   └── index.ts                 # All type interfaces
│
├── public/                       # Static assets
│   └── images/                  # Images
│
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript config
├── tailwind.config.js            # Tailwind config
├── next.config.js                # Next.js config
├── .eslintrc.json                # ESLint rules
├── .prettierrc                   # Prettier config
└── vercel.json                   # Vercel deployment
```

---

## ✅ What's Already Complete

### Configuration Files
- [x] package.json with all dependencies
- [x] TypeScript (strict mode)
- [x] Tailwind CSS with glassmorphism tokens
- [x] ESLint + Prettier
- [x] Next.js config
- [x] Vercel deployment config

### Core Files
- [x] Type definitions (types/index.ts)
- [x] Animation variants (lib/animations/variants.ts)
- [x] Classnames utility (lib/utils/cn.ts)
- [x] Theme context (contexts/ThemeContext.tsx)
- [x] Animation context (contexts/AnimationContext.tsx)

### Ready to Add
- [ ] app/layout.tsx
- [ ] app/globals.css
- [ ] app/page.tsx
- [ ] Glassmorphism components (10+)
- [ ] ComponentShowcase wrapper
- [ ] Dashboard page
- [ ] Component showcase pages

---

## 🎨 Design Tokens (Tailwind Config)

The project includes custom design tokens for glassmorphism:

### Glass Backgrounds
- `glass-bg`: rgba(255, 255, 255, 0.08)
- `glass-bg-strong`: rgba(255, 255, 255, 0.12)
- `glass-bg-light`: rgba(255, 255, 255, 0.05)

### Glass Borders
- `glass-border`: rgba(255, 255, 255, 0.18)
- `glass-border-strong`: rgba(255, 255, 255, 0.25)
- `glass-border-light`: rgba(255, 255, 255, 0.12)

### Accent Colors
- `accent-primary`: #5B9FFF (Blue)
- `accent-secondary`: #A78BFA (Purple)
- `accent-success`: #34D399 (Green)
- `accent-warning`: #FBBF24 (Yellow)
- `accent-danger`: #F87171 (Red)
- `accent-pink`: #F472B6 (Pink)

### Text Colors
- `text-primary`: rgba(255, 255, 255, 0.95)
- `text-secondary`: rgba(255, 255, 255, 0.70)
- `text-tertiary`: rgba(255, 255, 255, 0.45)

### Backdrop Blur
- Custom blur levels: `xl` (60px), `2xl` (100px)

### Box Shadows
- `shadow-glass`: 0 8px 32px rgba(0, 0, 0, 0.2)
- `shadow-glass-strong`: 0 12px 48px rgba(0, 0, 0, 0.3)

---

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start dev server (http://localhost:3000)

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
```

---

## 📦 Dependencies

### Core
- **Next.js 14.2.20** - React framework with App Router
- **React 18.3.1** - UI library
- **TypeScript 5.7.2** - Type-safe JavaScript

### Styling
- **Tailwind CSS 3.4.17** - Utility-first CSS
- **PostCSS** - CSS transformation
- **Autoprefixer** - CSS vendor prefixes

### Animation
- **Framer Motion 11.11.17** - Production-ready motion library

### Utilities
- **clsx** - Conditional classnames
- **tailwind-merge** - Merge Tailwind classes intelligently

### Dev Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript strict mode** - Maximum type safety

---

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Manual Build

```bash
npm run build
npm start
```

---

## 📚 Documentation References

- **Project Outline**: `/design-catalog-project-outline.md`
- **Technical Spec**: `/uiux-catalog/technical-specification.md`
- **Agent Instructions**: `/uiux-catalog/agent-instructions.md`
- **Visual Mockups**: `/mockups/glassmorphism-final.html`

---

## 🎯 Phase 1 Implementation Status

### Completed ✅
- [x] Project initialization
- [x] Configuration setup
- [x] Type definitions
- [x] Context providers
- [x] Animation system
- [x] Utility functions

### In Progress 🚧
- [ ] App layout and pages
- [ ] Glassmorphism components
- [ ] ComponentShowcase wrapper
- [ ] Dashboard page

### Planned 📋
- [ ] Neumorphism components
- [ ] Material Design components
- [ ] Minimalism components
- [ ] Interactive demos
- [ ] Documentation

---

## 🆘 Troubleshooting

### Port already in use
```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

### Module not found errors
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
```

### TypeScript errors
```bash
# Check TypeScript
npx tsc --noEmit

# Build to see errors
npm run build
```

---

## 📞 Support

For issues or questions, refer to:
1. This README
2. Project documentation in `/docs`
3. HTML mockups in `/mockups`
4. Technical specification

---

**Ready to build!** Run `node setup-project.js` to begin. 🚀
