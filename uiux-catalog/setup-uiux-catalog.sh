#!/bin/bash

echo "🎨 Setting up /uiux-catalog directory structure..."
echo ""

cd /home/runner/work/catalog/catalog/uiux-catalog

# Create directory structure
echo "Creating directories..."
mkdir -p app
mkdir -p components/glassmorphism/Button
mkdir -p components/glassmorphism/Card
mkdir -p components/glassmorphism/Input
mkdir -p components/glassmorphism/Slider
mkdir -p components/glassmorphism/Tabs
mkdir -p components/glassmorphism/Toggle
mkdir -p contexts
mkdir -p lib/animations
mkdir -p lib/utils
mkdir -p types
mkdir -p public/images

echo "✓ Directories created"
echo ""

# Copy files from root
echo "Copying files from root..."
cd ..

cp app.layout.tsx uiux-catalog/app/layout.tsx 2>/dev/null && echo "✓ app/layout.tsx" || echo "- app.layout.tsx not found"
cp app.page.tsx uiux-catalog/app/page.tsx 2>/dev/null && echo "✓ app/page.tsx" || echo "- app.page.tsx not found"
cp app.globals.css uiux-catalog/app/globals.css 2>/dev/null && echo "✓ app/globals.css" || echo "- app.globals.css not found"

cp components.glassmorphism.Button.index.tsx uiux-catalog/components/glassmorphism/Button/index.tsx 2>/dev/null && echo "✓ Button/index.tsx" || echo "- Button index not found"
cp components.glassmorphism.Button.animations.ts uiux-catalog/components/glassmorphism/Button/animations.ts 2>/dev/null && echo "✓ Button/animations.ts" || echo "- Button animations not found"
cp components.glassmorphism.Card.index.tsx uiux-catalog/components/glassmorphism/Card/index.tsx 2>/dev/null && echo "✓ Card/index.tsx" || echo "- Card not found"
cp components.glassmorphism.Input.index.tsx uiux-catalog/components/glassmorphism/Input/index.tsx 2>/dev/null && echo "✓ Input/index.tsx" || echo "- Input not found"
cp components.glassmorphism.Slider.index.tsx uiux-catalog/components/glassmorphism/Slider/index.tsx 2>/dev/null && echo "✓ Slider/index.tsx" || echo "- Slider not found"
cp components.glassmorphism.Tabs.index.tsx uiux-catalog/components/glassmorphism/Tabs/index.tsx 2>/dev/null && echo "✓ Tabs/index.tsx" || echo "- Tabs not found"
cp components.glassmorphism.Toggle.index.tsx uiux-catalog/components/glassmorphism/Toggle/index.tsx 2>/dev/null && echo "✓ Toggle/index.tsx" || echo "- Toggle not found"

cp ThemeContext.tsx uiux-catalog/contexts/ThemeContext.tsx 2>/dev/null && echo "✓ contexts/ThemeContext.tsx" || echo "- ThemeContext not found"
cp AnimationContext.tsx uiux-catalog/contexts/AnimationContext.tsx 2>/dev/null && echo "✓ contexts/AnimationContext.tsx" || echo "- AnimationContext not found"

cp lib.animations.variants.ts uiux-catalog/lib/animations/variants.ts 2>/dev/null && echo "✓ lib/animations/variants.ts" || echo "- variants not found"
cp lib.utils.cn.ts uiux-catalog/lib/utils/cn.ts 2>/dev/null && echo "✓ lib/utils/cn.ts" || echo "- cn not found"

cp types.index.ts uiux-catalog/types/index.ts 2>/dev/null && echo "✓ types/index.ts" || echo "- types not found"

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. cd uiux-catalog"
echo "2. npm install"
echo "3. npm run build"
echo "4. npm run dev"
