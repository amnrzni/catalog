# Aurora Analytics - Multi-Theme Design Catalog

A **production-ready**, **fully-accessible** design system showcasing **4 distinct UI themes** built with **Next.js 14**, **TypeScript**, and **CSS Custom Properties**.

![Themes](https://img.shields.io/badge/Themes-4-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue) ![Accessibility](https://img.shields.io/badge/WCAG-AA-green) ![Next.js](https://img.shields.io/badge/Next.js-14-black)

## ✨ Themes

Switch seamlessly between four professionally designed themes:

| Theme | Font | Style | Best For |
|-------|------|-------|----------|
| **Glassmorphism** ✨ | Inter | Frosted glass with backdrop blur | Modern SaaS, Dashboards |
| **Material Design** 📐 | Roboto | Elevation-based shadows | Android apps, Enterprise |
| **Minimalism** ⚡ | Inter | Pure white, maximum space | Portfolios, Editorial |
| **Neumorphism** 🎨 | Poppins | Soft dual shadows | Mobile apps, Creative tools |

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Create directory structure and organize files
npm run setup

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the dashboard.

## 📁 Features

- ✅ **4 Complete Themes** - Glassmorphism, Material, Minimalism, Neumorphism
- ✅ **CSS Variables** - All components use CSS custom properties
- ✅ **Design Tokens** - Structured token system with TypeScript types
- ✅ **Theme Persistence** - Saves theme preference to localStorage
- ✅ **Optimized Fonts** - Uses `next/font` for optimal loading
- ✅ **Fully Accessible** - WCAG AA compliant, keyboard navigation
- ✅ **TypeScript** - Strict typing throughout
- ✅ **Responsive** - Mobile-first, works on all screen sizes
- ✅ **Production Ready** - Build and deploy to Vercel

## 🎯 Pages

- `/` - **Dashboard** with metrics, activity feed, and settings form
- `/tokens` - **Token Explorer** showing all active design tokens
- `/components` - **Component Gallery** with all UI components
- `/patterns` - **Pattern Library** with composed layouts
- `/accessibility` - **Accessibility Guidelines**
- `/guidelines` - **Design Philosophy** for each theme

## 🧩 Components

All components are theme-agnostic and use CSS variables:

- `<Button>` - Primary, secondary, outlined, ghost variants
- `<Card>` - Flexible container with elevation levels
- `<StatCard>` - Metrics display with trend indicators
- `<Input>` / `<Textarea>` - Form controls with validation
- `<Toggle>` / `<Slider>` - Interactive controls
- `<ActivityFeed>` - Timeline/activity list
- `<Navbar>` - Navigation with theme switcher
- `<ThemeProvider>` - Context provider for theme state
- `<ThemeSwitcher>` - UI for switching themes

## 🎨 Design Tokens

Each theme provides complete design tokens. Example:

```tsx
<div style={{
  background: 'var(--color-bg-surface)',
  padding: 'var(--space-lg)',
  borderRadius: 'var(--radius-md)',
  boxShadow: 'var(--shadow-elevation2)',
}}>
  Content adapts to active theme
</div>
```

## 🛠️ Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run setup` | Create directories & organize files |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |

## 🚢 Deployment

Optimized for Vercel:

```bash
npm run build
```

## 📚 Documentation

See [SETUP-GUIDE.md](./SETUP-GUIDE.md) for detailed setup instructions.

## 📄 License

MIT

## 👤 Author

**amnrzni**

---

**Built with conscious design thinking** ✨
