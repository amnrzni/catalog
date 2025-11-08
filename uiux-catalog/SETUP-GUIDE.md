# Aurora Analytics - Multi-Theme Design Catalog

A comprehensive design system showcasing **4 distinct themes** (Glassmorphism, Material Design, Minimalism, and Neumorphism) built with **Next.js 14**, **TypeScript**, and **CSS Custom Properties**.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Setup Script

```bash
npm run setup
```

This creates the necessary directory structure for the application.

### 3. Organize Page Files

```bash
node organize-pages.js
```

This moves page component files to their correct locations in the app directory.

### 4. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### 5. Build for Production

```bash
npm run build
npm start
```

## 🎨 Features

- **4 Complete Themes**: Seamlessly switch between Glassmorphism, Material Design, Minimalism, and Neumorphism
- **CSS Custom Properties**: All components use CSS variables for perfect theme flexibility
- **Design Tokens**: Structured token system with complete type safety
- **TypeScript**: Strict typing throughout the application
- **Accessibility**: WCAG AA compliant with keyboard navigation and ARIA labels
- **Responsive**: Works perfectly on all screen sizes
- **Production-Ready**: Optimized fonts with next/font, edge-compatible code

## 📁 Project Structure

```
uiux-catalog/
├── app/
│   ├── layout.tsx              # Root layout with font configuration
│   ├── page.tsx                # Dashboard (homepage)
│   ├── tokens/page.tsx         # Design tokens explorer
│   ├── components/page.tsx     # Component gallery
│   └── globals.css             # Global styles with CSS variables
├── components/
│   ├── ThemeProvider.tsx       # Theme context and CSS variable injection
│   ├── ThemeSwitcher.tsx       # Theme selection UI
│   ├── Button.tsx, Card.tsx, etc. # All theme-agnostic components
├── lib/
│   ├── theme-tokens*.ts        # Design token definitions
│   └── sample-data.ts          # Sample data
```

## 🎭 Themes

### Glassmorphism
- Frosted glass with backdrop blur
- Colors: Blue/purple accents
- Font: Inter

### Material Design
- Elevation shadows
- Colors: Material palette
- Font: Roboto

### Minimalism
- No shadows, maximum space
- Colors: Black/white
- Font: Inter

### Neumorphism
- Soft dual shadows
- Colors: Soft pastels
- Font: Poppins

## 🔧 Usage

All components use CSS variables:

```tsx
<div style={{
  background: 'var(--color-bg-surface)',
  padding: 'var(--space-md)',
  borderRadius: 'var(--radius-md)',
}}>
  Content
</div>
```

## 📝 Scripts

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run setup` - Create directories
- `node organize-pages.js` - Organize page files

## 🚢 Deployment

Optimized for Vercel. Just run:

```bash
npm run build
```

---

**Built with conscious design thinking** ✨
