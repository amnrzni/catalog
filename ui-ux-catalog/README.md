# 🎨 UI/UX Design Catalog

A comprehensive, elegant UI/UX design system catalog with modern dark theme aesthetic. Built with Next.js 14+, Tailwind CSS, and TypeScript.

![UI/UX Catalog](https://img.shields.io/badge/Next.js-14+-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3+-38bdf8?style=flat-square&logo=tailwind-css)

## ✨ Features

- **10+ Reusable Components**: Buttons, inputs, cards, badges, modals, navigation, and more
- **Elegant Dark Theme**: Beautiful purple gradient color scheme with glassmorphism effects
- **3D CSS Objects**: Pure CSS 3D sphere, torus, and layered disc with animations
- **Interactive Component Browser**: Filter by category and complexity level
- **Design Tokens**: Comprehensive color, spacing, shadow, and animation token system
- **Collection Manager**: Save and export components in JSON, CSS, HTML, or Markdown
- **Search & Discovery**: Real-time search across all components
- **Use Cases**: Browse components by real-world scenarios
- **Accessibility First**: WCAG 2.1 AA compliant with keyboard navigation
- **Fully Responsive**: Mobile-first design that works on all devices

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the catalog.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
ui-ux-catalog/
├── app/                          # Next.js App Router pages
│   ├── components/               # Component browser & detail pages
│   ├── collection/               # Collection manager
│   ├── search/                   # Search page
│   ├── design-tokens/            # Design tokens showcase
│   └── use-cases/                # Use cases browser
├── components/                   # React components
│   ├── layout/                   # Header & Footer
│   ├── ui/                       # UI components library
│   └── catalog/                  # Catalog-specific components
├── lib/                          # Utilities & data
│   ├── types.ts                  # TypeScript types
│   ├── components-data.ts        # Component metadata
│   ├── design-tokens.ts          # Design system tokens
│   └── collection-storage.ts     # LocalStorage utilities
└── styles/                       # CSS styles
    ├── globals.css               # Global styles & CSS variables
    ├── animations.css            # Keyframe animations
    └── 3d-effects.css           # 3D CSS effects
```

## 🎨 Design System

### Color Palette

- **Background**: `#0f1729`, `#1a1f35`, `#1e2537`
- **Primary**: `#8b5cf6`, `#a78bfa`, `#7c3aed`
- **Accents**: Blue `#3b82f6`, Pink `#ec4899`, Orange `#f97316`, Green `#10b981`
- **Text**: `#f1f5f9`, `#cbd5e1`, `#94a3b8`, `#64748b`

### Components

1. **Button** - 5 variants, 3 sizes, loading states
2. **Input** - Focus states, error handling, icon support
3. **Card** - Glassmorphic with hover effects
4. **Badge** - 6 color variants
5. **3D Sphere** - CSS-only animated 3D object
6. **Modal** - Focus trap and keyboard controls
7. **Navigation** - Responsive with smooth transitions
8. **CodeBlock** - Syntax highlighting with copy button
9. **Loading Spinner** - Animated indicators
10. **Dropdown** - Select menu with glassmorphic styling

## 🛠️ Customization

### Design Tokens

All design tokens are centralized in:

- **CSS Variables**: `app/globals.css`
- **Tailwind Config**: `tailwind.config.ts`
- **Token Metadata**: `lib/design-tokens.ts`

### Adding Components

1. Create component in `components/ui/YourComponent.tsx`
2. Add metadata to `lib/components-data.ts`
3. Component will automatically appear in the catalog

## ♿ Accessibility

- Semantic HTML throughout
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Screen reader friendly
- Color contrast compliant (WCAG 2.1 AA)
- Respects `prefers-reduced-motion`

## 📱 Responsive Design

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px
- **Wide**: > 1400px

## 🧪 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion (ready)
- **Code Highlighting**: React Syntax Highlighter
- **Icons**: Lucide Icons (via CDN)

## 📝 License

MIT License - feel free to use this project for your own purposes.

## 🙏 Acknowledgments

- Inspired by modern design systems and component libraries
- Built with ❤️ using Next.js, Tailwind CSS, and TypeScript
