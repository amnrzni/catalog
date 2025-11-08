# Migration to /uiux-catalog

This repository is being reorganized to have all Next.js app files in the `/uiux-catalog` directory.

## Quick Migration

Run this command to automatically organize all files:

```bash
npm run migrate
```

This will:
1. Create proper directory structure in `/uiux-catalog`
2. Copy all source files (app, components, contexts, lib, types)
3. Copy all configuration files (package.json, tsconfig.json, etc.)
4. Update tsconfig.json with correct path aliases
5. Create .gitignore for the subdirectory

## After Migration

```bash
cd uiux-catalog
npm install
npm run build
```

## Vercel Deployment

The `vercel.json` at the root is already configured with:
```json
{
  "rootDirectory": "uiux-catalog"
}
```

This tells Vercel to build from the `/uiux-catalog` subdirectory.

## Manual Migration (if needed)

If you prefer to do it manually:

1. Create directories:
   ```bash
   mkdir -p uiux-catalog/{app,components/glassmorphism/{Button,Card,Input,Slider,Tabs,Toggle},contexts,lib/{animations,utils},types,public/images}
   ```

2. Copy files:
   ```bash
   cp app.* uiux-catalog/app/
   cp components.* uiux-catalog/components/glassmorphism/
   cp {ThemeContext,AnimationContext}.tsx uiux-catalog/contexts/
   cp lib.* uiux-catalog/lib/
   cp types.* uiux-catalog/types/
   cp {package,tsconfig,next.config,tailwind.config,postcss.config}.* uiux-catalog/
   ```

3. Install and build:
   ```bash
   cd uiux-catalog
   npm install
   npm run build
   ```
