# 🎨 Design Catalog - Technical Specification

**Version:** 1.0  
**Date:** 2025-11-06  
**Author:** @amnrzni  
**Status:** Ready for Implementation

---

## 📋 Table of Contents

1. [Project Overview](#1-project-overview)
2. [Technical Architecture](#2-technical-architecture)
3. [Component System](#3-component-system)
4. [Styling Strategy](#4-styling-strategy)
5. [Animation Framework](#5-animation-framework)
6. [File Structure](#6-file-structure)
7. [Development Workflow](#7-development-workflow)
8. [Phase 1 Implementation Guide](#8-phase-1-implementation-guide)
9. [Quality Standards](#9-quality-standards)
10. [Deployment Strategy](#10-deployment-strategy)

---

## 1. Project Overview

### Vision
A live, interactive design catalog where development teams can:
- Browse 4 design styles (Glassmorphism, Neumorphism, Material Design, Minimalism)
- Explore components with live previews
- See realistic examples and use cases
- Toggle animations and view different states
- Navigate through a morphing landing page

### Target Users
- Frontend developers seeking design inspiration
- UI/UX designers exploring implementation
- Product teams choosing design directions
- Internal design system consumers

---

## 2. Technical Architecture

### Stack Decisions

#### Framework: Next.js 14 (App Router)
```typescript
- React 18+
- TypeScript (strict mode)
- Server Components where possible
- Client Components for interactivity
- App Router for modern routing
```

#### Styling: Tailwind CSS + CSS Modules
```typescript
Primary: Tailwind CSS
- Utility-first for rapid development
- Custom design tokens per style
- JIT compilation
- Responsive utilities

Secondary: CSS Modules
- Complex effects (glassmorphism blur, neumorphism shadows)
- Style-scoped CSS
- Co-located with components
```

#### State Management: React Context API
```typescript
- ThemeContext (current design style, color variant)
- AnimationContext (animation speed, enabled/disabled)
- ComponentStateContext (hover, focus, active states)
- Local state for component-specific logic
```

#### Animation: Framer Motion (Full Suite)
```typescript
- Page transitions
- Component entrance/exit
- Hover/click interactions
- Scroll-triggered animations
- Global animation controls
```

#### Code Quality: ESLint + Prettier
```typescript
- Strict TypeScript rules
- Airbnb style guide (adapted)
- Auto-formatting on save
- Pre-commit hooks
```

---

## 3. Component System

### Component Architecture: Compound Components

#### Pattern:
```typescript
// Example: Button component
<Button style="glassmorphism" size="large">
  <Button.Icon>🚀</Button.Icon>
  <Button.Text>Launch</Button.Text>
</Button>

// Or with style prop system
<Button style="glassmorphism" variant="primary" />
<Button style="neumorphism" variant="secondary" />
<Button style="material" variant="contained" />
<Button style="minimalism" variant="outlined" />
```

#### Component Props Interface:
```typescript
interface BaseComponentProps {
  // Style system
  style: 'glassmorphism' | 'neumorphism' | 'material' | 'minimalism';
  variant?: 'primary' | 'secondary' | 'outlined' | 'ghost';
  
  // Size
  size?: 'sm' | 'md' | 'lg' | 'xl';
  
  // State
  disabled?: boolean;
  loading?: boolean;
  active?: boolean;
  
  // Animation
  animate?: boolean;
  animationSpeed?: 'slow' | 'normal' | 'fast';
  
  // Accessibility
  ariaLabel?: string;
  ariaDescribedBy?: string;
  
  // Common
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}
```

### Component Organization (Co-located)

```typescript
// File structure per component
Button/
├── index.tsx                 // Main component export
├── variants/
│   ├── Glassmorphism.tsx    // Glassmorphism variant
│   ├── Neumorphism.tsx      // Neumorphism variant
│   ├── Material.tsx         // Material Design variant
│   └── Minimalism.tsx       // Minimalism variant
├── animations.ts            // Framer Motion variants
├── Button.module.css        // Complex CSS (if needed)
├── Button.types.ts          // TypeScript interfaces
└── README.mdx               // Component documentation
```

### Vertical Development Approach

**Phase Sequence:**
1. **Glassmorphism** (all components)
   - Buttons → Cards → Forms → Navigation → Feedback → Data Display
2. **Neumorphism** (all components)
3. **Material Design** (all components)
4. **Minimalism** (all components)

---

## 4. Styling Strategy

### Tailwind Configuration

```typescript
// tailwind.config.ts
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      // Glassmorphism
      colors: {
        glass: {
          primary: '#5B9FFF',
          secondary: '#A78BFA',
          accent: '#F472B6',
        },
      },
      backdropBlur: {
        'glass-sm': '40px',
        'glass-md': '60px',
        'glass-lg': '100px',
      },
      
      // Neumorphism
      boxShadow: {
        'neo-outset': '8px 8px 16px rgba(163, 177, 198, 0.6), -8px -8px 16px #FFFFFF',
        'neo-inset': 'inset 4px 4px 8px rgba(163, 177, 198, 0.6), inset -4px -4px 8px #FFFFFF',
      },
      
      // Material Design
      boxShadow: {
        'md-1': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        'md-2': '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
        'md-4': '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
      },
      
      // Spacing (8dp grid for Material)
      spacing: {
        '1': '8px',
        '2': '16px',
        '3': '24px',
        '4': '32px',
        '6': '48px',
      },
      
      // Breakpoints (Tailwind defaults)
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
```

### CSS Modules for Complex Effects

```css
/* Button/Glassmorphism.module.css */
.glassButton {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(60px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.glassButton:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.25);
}
```

---

## 5. Animation Framework

### Framer Motion Configuration

#### Global Animation Context
```typescript
// contexts/AnimationContext.tsx
interface AnimationSettings {
  enabled: boolean;
  speed: 'slow' | 'normal' | 'fast';
  reducedMotion: boolean;
}

const speedMultipliers = {
  slow: 1.5,
  normal: 1,
  fast: 0.5,
};
```

#### Animation Variants Library

```typescript
// lib/animations/variants.ts

// Page transitions
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3, ease: [0.4, 0.0, 0.2, 1] },
};

// Button interactions
export const buttonVariants = {
  hover: (style: string) => ({
    glassmorphism: {
      scale: 1.02,
      y: -2,
      boxShadow: '0 12px 48px rgba(0, 0, 0, 0.3)',
    },
    neumorphism: {
      boxShadow: '12px 12px 24px rgba(163, 177, 198, 0.6), -12px -12px 24px #FFFFFF',
    },
    material: {
      scale: 1.02,
      boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    },
    minimalism: {
      borderColor: '#000000',
      backgroundColor: '#000000',
      color: '#FFFFFF',
    },
  }[style]),
  
  press: {
    scale: 0.98,
  },
};

// Card entrance (stagger)
export const cardStagger = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  },
};

// Scroll animations
export const scrollReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// Modal animations
export const modalVariants = {
  backdrop: {
    hidden: { opacity: 0 },
    visible: { opacity: 0.6 },
  },
  modal: {
    hidden: { opacity: 0, scale: 0.95, y: -20 },
    visible: { opacity: 1, scale: 1, y: 0 },
  },
};
```

#### Style-Specific Animations

```typescript
// Glassmorphism
export const glassAnimations = {
  shimmer: {
    backgroundPosition: ['0% 0%', '100% 100%'],
    transition: { duration: 3, repeat: Infinity, ease: 'linear' },
  },
  blurShift: {
    backdropFilter: ['blur(40px)', 'blur(80px)', 'blur(40px)'],
    transition: { duration: 2, repeat: Infinity },
  },
};

// Material ripple effect (custom implementation)
export const materialRipple = {
  // Implemented via custom hook: useMaterialRipple()
};
```

---

## 6. File Structure

### Complete Directory Structure

```typescript
design-catalog/
├── .github/
│   └── workflows/
│       └── deploy.yml              // Vercel deployment config
│
├── public/
│   ├── images/
│   │   ├── backgrounds/
│   │   │   ├── city-background.jpg
│   │   │   └── [other backgrounds]
│   │   └── logos/
│   └── fonts/
│
├── src/
│   ├── app/                        // Next.js App Router
│   │   ├── layout.tsx              // Root layout
│   │   ├── page.tsx                // Landing page (morphing showcase)
│   │   ├── globals.css             // Global styles
│   │   │
│   │   ├── glassmorphism/
│   │   │   ├── page.tsx            // Dashboard showcase
│   │   │   ├── layout.tsx          // Style-specific layout
│   │   │   └── components/
│   │   │       ├── page.tsx        // Components overview
│   │   │       ├── buttons/
│   │   │       │   └── page.tsx    // Button showcase
│   │   │       ├── cards/
│   │   │       │   └── page.tsx
│   │   │       └── [other categories]/
│   │   │
│   │   ├── neumorphism/
│   │   │   └── [same structure]
│   │   │
│   │   ├── material-design/
│   │   │   └── [same structure]
│   │   │
│   │   └── minimalism/
│   │       └── [same structure]
│   │
│   ├── components/
│   │   ├── layout/                 // Global layout components
│   │   │   ├── Navbar/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── Navbar.module.css
│   │   │   │   └── README.mdx
│   │   │   ├── Sidebar/
│   │   │   └── Footer/
│   │   │
│   │   ├── shared/                 // Shared utility components
│   │   │   ├── ComponentShowcase/  // PRIORITY #1
│   │   │   │   ├── index.tsx
│   │   │   │   ├── StateControls.tsx
│   │   │   │   ├── HoverTooltip.tsx     // Inline documentation
│   │   │   │   └── README.mdx
│   │   │   ├── CodeBlock/
│   │   │   ├── AnimationControls/
│   │   │   └── ThemeCustomizer/
│   │   │
│   │   ├── glassmorphism/          // Style-specific components
│   │   │   ├── Button/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── variants/
│   │   │   │   │   ├── Glassmorphism.tsx
│   │   │   │   │   ├── Neumorphism.tsx
│   │   │   │   │   ├── Material.tsx
│   │   │   │   │   └── Minimalism.tsx
│   │   │   │   ├── animations.ts
│   │   │   │   ├── Button.module.css
│   │   │   │   ├── Button.types.ts
│   │   │   │   └── README.mdx
│   │   │   ├── Card/
│   │   │   ├── Input/
│   │   │   └── [other components]/
│   │   │
│   │   ├── neumorphism/
│   │   ├── material/
│   │   └── minimalism/
│   │
│   ├── contexts/
│   │   ├── ThemeContext.tsx        // Current design style
│   │   ├── AnimationContext.tsx    // Animation settings
│   │   └── ComponentStateContext.tsx
│   │
│   ├── hooks/
│   │   ├── useTheme.ts
│   │   ├── useAnimation.ts
│   │   ├── useMaterialRipple.ts
│   │   ├── useMediaQuery.ts
│   │   └── useKeyboardShortcuts.ts
│   │
│   ├── lib/
│   │   ├── animations/
│   │   │   ├── variants.ts         // Framer Motion variants
│   │   │   └── utils.ts
│   │   ├── constants/
│   │   │   ├── colors.ts
│   │   │   ├── typography.ts
│   │   │   └── spacing.ts
│   │   └── utils/
│   │       ├── cn.ts               // classNames utility
│   │       └── formatters.ts
│   │
│   ├── styles/
│   │   ├── glassmorphism.css       // Global style-specific CSS
│   │   ├── neumorphism.css
│   │   ├── material.css
│   │   └── minimalism.css
│   │
│   └── types/
│       ├── component.ts
│       ├── theme.ts
│       └── animation.ts
│
├── docs/
│   ├── technical-specification.md
│   ├── agent-instructions.md
│   └── design-catalog-project-outline_Version4.md
│
├── mockups/                        // Reference HTML mockups
│   ├── glassmorphism-final.html
│   ├── neumorphism-final.html
│   ├── materialdesign_final.html
│   └── minimalism-final.html
│
├── .eslintrc.json
├── .prettierrc
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── vercel.json                     // Deployment config
└── README.md
```

---

## 7. Development Workflow

### Phase 1 Implementation Sequence

#### Week 3-5: Glassmorphism Full Implementation

**Sprint 1 (Week 3): Foundation**
1. Initialize Next.js 14 + TypeScript
2. Configure Tailwind + CSS Modules
3. Install Framer Motion
4. Set up ESLint + Prettier
5. Create base folder structure
6. Build ThemeContext + AnimationContext
7. Create root layout
8. Build landing page (morphing showcase)

**Sprint 2 (Week 4): Core Components**
9. Build ComponentShowcase (PRIORITY)
   - Live preview container
   - Hover tooltip documentation
   - State controls (hover, active, focus, disabled)
   - Code snippet viewer (future)
10. Implement Glassmorphism Button
    - Primary, Secondary, Outlined variants
    - All states (hover, active, disabled, loading)
    - Framer Motion animations
11. Implement Glassmorphism Card
    - Basic, Stat, Image variants
    - Entrance animations
12. Implement Glassmorphism Form Inputs
    - Text, Email, Password, Search
    - Textarea, Select (future)
    - Focus states, validation

**Sprint 3 (Week 5): Navigation & Feedback**
13. Glassmorphism Navigation
    - Navbar (sticky, animated)
    - Tabs (indicator slide)
    - Breadcrumbs
14. Glassmorphism Feedback
    - Toggle switches
    - Range sliders
    - Badges, Alerts (future)
15. Glassmorphism Dashboard Showcase
    - Full dashboard page
    - Stat cards grid
    - Activity feed
    - Settings panel

**Deliverables (End of Week 5):**
- ✅ Full Next.js app deployed to Vercel
- ✅ Glassmorphism: 10+ components
- ✅ ComponentShowcase working
- ✅ Landing page with morphing effects
- ✅ Animation controls functional

---

## 8. Phase 1 Implementation Guide

### Landing Page: Morphing Showcase

#### Concept:
```typescript
// Landing page morphs between all 4 design styles
// User can click on a style to navigate to that section

// Hero section
<MorphingHero>
  {/* Background morphs between:
      - Glassmorphism: City photo with blur
      - Neumorphism: Soft gradient
      - Material: Bold color blocks
      - Minimalism: Pure white
  */}
  <h1>Design Style Catalog</h1>
  <p>Explore 4 Modern Design Styles</p>
</MorphingHero>

// Style selection cards
<StyleGrid>
  <StyleCard 
    style="glassmorphism"
    onClick={() => router.push('/glassmorphism')}
    previewImage="/previews/glass.jpg"
  />
  <StyleCard style="neumorphism" />
  <StyleCard style="material" />
  <StyleCard style="minimalism" />
</StyleGrid>

// Feature highlights (fade in on scroll)
<FeatureSection>
  <Feature icon="🎨" title="4 Design Styles" />
  <Feature icon="🧩" title="80+ Components" />
  <Feature icon="✨" title="Live Animations" />
</FeatureSection>
```

#### Navigation Flow:
```
Landing Page (morphing showcase)
  ↓ User clicks "Glassmorphism"
Glassmorphism Dashboard
  → Shows use case example
  → "Explore Components" button
  ↓
Glassmorphism Components Overview
  → Grid of component categories
  ↓ User clicks "Buttons"
Button Showcase Page
  → ComponentShowcase with all button variants
  → Hover tooltip shows explanation
  → State controls to test interactions
```

---

### Component Showcase Structure

```typescript
// ComponentShowcase component
interface ComponentShowcaseProps {
  title: string;
  description: string;
  component: React.ComponentType;
  variants: string[];
  states: string[];
  documentation?: string; // MDX content
}

// Example usage
<ComponentShowcase
  title="Glassmorphism Button"
  description="Translucent button with blur effect"
  component={GlassButton}
  variants={['primary', 'secondary', 'outlined']}
  states={['default', 'hover', 'active', 'disabled', 'loading']}
  documentation={ButtonDocs} // MDX import
>
  <GlassButton variant="primary">
    Click Me
  </GlassButton>
</ComponentShowcase>
```

#### Hover Tooltip Documentation:
```typescript
// When user hovers over a component in showcase
<HoverTooltip>
  <TooltipContent>
    <h4>Primary Button</h4>
    <p>Used for main call-to-action</p>
    <code>
      {'<Button style="glassmorphism" variant="primary" />'}
    </code>
  </TooltipContent>
</HoverTooltip>
```

---

### Animation Implementation

#### Global Animation Toggle
```typescript
// User can toggle animations on/off
const { animationEnabled, setAnimationEnabled } = useAnimation();

// In component
<motion.button
  animate={animationEnabled ? 'hover' : undefined}
  variants={buttonVariants}
>
  Click me
</motion.button>
```

#### Desktop-First Responsive
```typescript
// Start with desktop design, adapt to mobile
// Example: Button
<button className={cn(
  // Desktop default
  'px-6 py-3 text-base',
  // Tablet
  'md:px-5 md:py-2.5 md:text-sm',
  // Mobile
  'sm:px-4 sm:py-2 sm:text-xs'
)} />
```

---

## 9. Quality Standards

### Accessibility (WCAG AA)

#### Requirements:
```typescript
// All interactive elements
- Keyboard navigation (Tab, Enter, Space, Arrows)
- Focus indicators (visible outline)
- ARIA labels for screen readers
- Color contrast ratio ≥ 4.5:1 (text)
- Touch targets ≥ 44x44px (mobile)

// Example: Button
<button
  aria-label="Submit form"
  aria-describedby="submit-help"
  className="focus:outline-2 focus:outline-blue-500"
  onKeyDown={handleKeyDown}
>
  Submit
</button>
```

### TypeScript Standards

```typescript
// Strict mode enabled
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}

// All components must have proper types
interface ButtonProps extends BaseComponentProps {
  variant: 'primary' | 'secondary' | 'outlined';
  size?: 'sm' | 'md' | 'lg';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
```

### ESLint Configuration

```json
{
  "extends": [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "no-console": "warn",
    "no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "error"
  }
}
```

---

## 10. Deployment Strategy

### Vercel Configuration

```json
// vercel.json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["iad1"],
  "env": {
    "NEXT_PUBLIC_SITE_URL": "https://catalog.vercel.app"
  }
}
```

### Deployment Process
```bash
# Automatic deployment on push to main
git push origin main

# Vercel detects changes and deploys
# Preview URL created for PR branches
```

### Performance Targets
```
- Lighthouse Score: ≥ 90
- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Time to Interactive (TTI): < 3.5s
- Cumulative Layout Shift (CLS): < 0.1
```

---

## 11. Content Strategy

### Realistic but Made-Up Content

```typescript
// Use realistic-sounding content, not Lorem Ipsum
// Examples from mockups:

const dashboardContent = {
  greeting: "Good evening, amnrzni ✨",
  subtitle: "Here's what's happening with your projects today",
  stats: {
    revenue: "$124,580",
    users: "8,549",
    growth: "+23.5%",
    conversion: "3.24%",
  },
  activities: [
    { title: "Payment received", time: "2 mins ago" },
    { title: "New user registered", time: "5 mins ago" },
    { title: "Report generated", time: "12 mins ago" },
  ],
};

// Component examples should use this realistic content
<StatCard
  icon="💰"
  label="Revenue"
  value="$124,580"
  change="+12.3%"
  trend="up"
/>
```

---

## 12. Documentation Standards

### MDX Component Documentation

```mdx
<!-- components/glassmorphism/Button/README.mdx -->

# Glassmorphism Button

Translucent button with frosted glass effect and subtle hover animations.

## Variants

- **Primary**: Main call-to-action
- **Secondary**: Secondary actions
- **Outlined**: Tertiary actions

## Usage

```tsx
import { Button } from '@/components/glassmorphism/Button';

<Button variant="primary" size="lg">
  Click me
</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'primary' \| 'secondary' \| 'outlined' | 'primary' | Button style variant |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Button size |
| disabled | boolean | false | Disabled state |

## Accessibility

- Keyboard navigable
- ARIA labels supported
- Focus indicators
```

---

## 13. Implementation Checklist

### Phase 1 Setup (Week 3)
- [ ] Initialize Next.js 14 with TypeScript
- [ ] Install dependencies (Tailwind, Framer Motion, ESLint)
- [ ] Configure tailwind.config.ts with custom tokens
- [ ] Set up folder structure
- [ ] Create ThemeContext and AnimationContext
- [ ] Build root layout (app/layout.tsx)
- [ ] Create landing page with morphing hero
- [ ] Deploy to Vercel

### Phase 1 Components (Week 4-5)
- [ ] Build ComponentShowcase wrapper
- [ ] Implement HoverTooltip for inline docs
- [ ] Create Glassmorphism Button (all variants)
- [ ] Create Glassmorphism Card (all variants)
- [ ] Create Glassmorphism Form Inputs
- [ ] Create Glassmorphism Toggle Switch
- [ ] Create Glassmorphism Slider
- [ ] Create Glassmorphism Tabs
- [ ] Build Glassmorphism Dashboard page
- [ ] Implement all Framer Motion animations

### Quality Assurance
- [ ] All components TypeScript strict mode compliant
- [ ] WCAG AA accessibility standards met
- [ ] ESLint passes with no errors
- [ ] Lighthouse score ≥ 90
- [ ] Mobile responsive (tested on 375px width)
- [ ] Desktop optimized (1920px width)

---

**End of Technical Specification**

This document should be used in conjunction with:
- `design-catalog-project-outline_Version4.md` (project overview)
- `agent-instructions.md` (Copilot Agent prompt)
- HTML mockups in `/mockups` folder (visual reference)

---

**Version History:**
- v1.0 (2025-11-06): Initial technical specification
