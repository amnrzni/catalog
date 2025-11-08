# Design Catalog - Setup & Deployment Guide

## 🚨 Important: Project Structure Change

This repository has been reorganized. All Next.js application files are now located in `/uiux-catalog/`.

## 🚀 Quick Setup (Choose One Method)

### Method 1: Using Node.js Migration Script (Recommended)

```bash
# From repository root
npm run migrate

# Then navigate and install
cd uiux-catalog
npm install
npm run dev
```

### Method 2: Using Bash Setup Script

```bash
# From repository root  
npm run setup

# Then navigate and install
cd uiux-catalog
npm install
npm run dev
```

### Method 3: Manual Setup

```bash
# Create directories
cd uiux-catalog
mkdir -p app components/{glassmorphism/{Button,Card,Input,Slider,Tabs,Toggle}} contexts lib/{animations,utils} types public/images

# Copy files from root
cd ..
cp app.* uiux-catalog/app/
cp components.glassmorphism.* uiux-catalog/components/glassmorphism/
cp {ThemeContext,AnimationContext}.tsx uiux-catalog/contexts/
cp lib.* uiux-catalog/lib/
cp types.* uiux-catalog/types/

# Navigate and install
cd uiux-catalog
npm install
npm run dev
```

---

## 📁 New Project Structure

```
/catalog/
├── uiux-catalog/                    # ← Main Next.js application
│   ├── app/                         # Next.js 14 App Router
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/                  # React components
│   │   └── glassmorphism/
│   │       ├── Button/
│   │       ├── Card/
│   │       └── ...
│   ├── contexts/                    # React Context
│   ├── lib/                         # Utilities
│   ├── types/                       # TypeScript types
│   ├── public/                      # Static assets
│   ├── package.json                 # ← Separate dependencies
│   ├── next.config.js
│   ├── tsconfig.json
│   └── tailwind.config.js
├── vercel.json                      # ← Points to /uiux-catalog
├── migrate-to-uiux-catalog.js       # Migration script
├── setup-uiux-catalog.sh            # Bash setup script
└── README-SETUP.md                  # This file
```

---

## 🚀 Vercel Deployment

### Automatic Configuration

The repository is already configured for Vercel! The `vercel.json` at the root contains:

```json
{
  "rootDirectory": "uiux-catalog",
  "buildCommand": "npm run build",
  "framework": "nextjs"
}
```

### Deployment Steps

1. **Connect Repository to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect the `rootDirectory` setting

2. **Vercel Will Automatically:**
   - Use `/uiux-catalog` as the build directory
   - Run `npm install` in `/uiux-catalog`
   - Run `npm run build`
   - Deploy the `.next` output

3. **No Additional Configuration Needed!**

---

## 🛠️ Development Commands

```bash
# Setup (run once)
npm run migrate          # Node.js migration script
# OR
npm run setup            # Bash setup script

# Development (from /uiux-catalog)
cd uiux-catalog
npm install              # Install dependencies
npm run dev              # Start dev server (localhost:3000)
npm run build            # Build for production
npm start                # Start production server
npm run lint             # Run ESLint
npm run format           # Format code with Prettier
```

---

## ✅ What's Already Configured

### In `/uiux-catalog/`:
- ✅ `package.json` with all dependencies
- ✅ `tsconfig.json` with `@/` path aliases
- ✅ `next.config.js` for Next.js 14
- ✅ `tailwind.config.js` with custom design tokens
- ✅ `postcss.config.js`
- ✅ `.eslintrc.json`
- ✅ `.prettierrc`
- ✅ `.gitignore`

### At Root:
- ✅ `vercel.json` pointing to `/uiux-catalog`
- ✅ Migration scripts (Node & Bash)
- ✅ Documentation

---

## 🎨 Design Tokens (Tailwind)

Custom tokens for glassmorphism are pre-configured:

```css
/* Glass backgrounds */
glass-bg, glass-bg-strong, glass-bg-light

/* Accent colors */
accent-primary: #5B9FFF
accent-secondary: #A78BFA
accent-success: #34D399

/* Text colors */
text-primary, text-secondary, text-tertiary

/* Custom backdrop blur levels */
backdrop-blur-xl, backdrop-blur-2xl
```

---

## 🆘 Troubleshooting

### "Cannot find module '@/...'" errors

**Solution:** Make sure you've copied all files and are in the `/uiux-catalog` directory:
```bash
npm run migrate  # or npm run setup
cd uiux-catalog
npm install
```

### Port 3000 already in use

**Solution:**
```bash
# Kill the process
npx kill-port 3000

# Or use a different port
npm run dev -- -p 3001
```

### Module not found errors

**Solution:**
```bash
cd uiux-catalog
rm -rf node_modules .next
npm install
```

### Vercel deployment failing

**Solution:** Ensure `vercel.json` has:
```json
{
  "rootDirectory": "uiux-catalog"
}
```

---

## 📚 Additional Documentation

- **Migration Details:** `/MIGRATION.md`
- **Original README:** `/README.md`
- **Technical Spec:** `/uiux-catalog/technical-specification.md` (after migration)
- **Project Outline:** `/design-catalog-project-outline.md`

---

## 🎯 Quick Checklist

- [ ] Run migration: `npm run migrate` or `npm run setup`
- [ ] Navigate to directory: `cd uiux-catalog`
- [ ] Install dependencies: `npm install`
- [ ] Test locally: `npm run dev`
- [ ] Build for production: `npm run build`
- [ ] Deploy to Vercel (automatic via `vercel.json`)

---

## 💡 Why This Structure?

The issue reported was:
> **Build error occurred**  
> **Error: Couldn't find any `pages` or `app` directory**

**Solution:** All Next.js files are now properly organized in `/uiux-catalog/app/` with:
- Proper Next.js 14 App Router structure
- All configuration files in the same directory
- Vercel configured to build from `/uiux-catalog`

---

**Ready to start?** Run `npm run migrate` or `npm run setup`, then `cd uiux-catalog && npm install`! 🚀
