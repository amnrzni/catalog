# UI/UX Catalog

This directory contains the complete Next.js application.

## Setup Instructions

### 1. Create Directory Structure

Run this command to create all required directories:

```bash
mkdir -p app components/{glassmorphism/{Button,Card,Input,Slider,Tabs,Toggle},shared} contexts lib/{animations,utils} types public/images
```

### 2. Run Migration from Root

From the repository root, run:

```bash
npm run migrate
```

This will copy all source files from the root directory into their proper locations here.

### 3. Install Dependencies

```bash
npm install
```

### 4. Start Development

```bash
npm run dev
```

## Files Already Created

✅ package.json  
✅ tsconfig.json  
✅ next.config.js  
✅ tailwind.config.js  
✅ postcss.config.js  
✅ .eslintrc.json  
✅ .prettierrc  
✅ .gitignore  

## Files Needed (via migration)

- app/layout.tsx
- app/page.tsx
- app/globals.css
- components/glassmorphism/* (Button, Card, Input, etc.)
- contexts/* (ThemeContext, AnimationContext)
- lib/animations/variants.ts
- lib/utils/cn.ts
- types/index.ts

Run `npm run migrate` from the root directory to copy these files.

## Alternative: Manual Copy

If migration script doesn't work, manually copy files:

```bash
# From repository root
cp app.layout.tsx uiux-catalog/app/layout.tsx
cp app.page.tsx uiux-catalog/app/page.tsx  
cp app.globals.css uiux-catalog/app/globals.css
cp components.glassmorphism.* uiux-catalog/components/glassmorphism/
cp {ThemeContext,AnimationContext}.tsx uiux-catalog/contexts/
cp lib.* uiux-catalog/lib/
cp types.* uiux-catalog/types/
```

## Deployment

This directory is configured as the root for Vercel deployment via the `rootDirectory` setting in the repository's `vercel.json`.
