const fs = require('fs');
const path = require('path');

console.log('🎨 Design Catalog - Reorganizing to /uiux-catalog');
console.log('=====================================\n');

const baseDir = path.join(process.cwd(), 'uiux-catalog');

// Directory structure within uiux-catalog
const directories = [
  'app',
  'app/glassmorphism',
  'app/glassmorphism/components',
  'app/glassmorphism/components/buttons',
  'app/glassmorphism/components/cards',
  'app/glassmorphism/components/forms',
  'components',
  'components/shared',
  'components/shared/ComponentShowcase',
  'components/glassmorphism',
  'components/glassmorphism/Button',
  'components/glassmorphism/Button/variants',
  'components/glassmorphism/Card',
  'components/glassmorphism/Card/variants',
  'components/glassmorphism/Input',
  'components/glassmorphism/Input/variants',
  'components/glassmorphism/Textarea',
  'components/glassmorphism/Textarea/variants',
  'components/glassmorphism/Toggle',
  'components/glassmorphism/Toggle/variants',
  'components/glassmorphism/Slider',
  'components/glassmorphism/Slider/variants',
  'components/glassmorphism/Tabs',
  'components/glassmorphism/Tabs/variants',
  'components/glassmorphism/Navbar',
  'components/glassmorphism/Navbar/variants',
  'contexts',
  'hooks',
  'lib',
  'lib/animations',
  'lib/utils',
  'types',
  'public',
  'public/images'
];

// File mappings (source from root -> destination in uiux-catalog)
const fileMappings = {
  'types.index.ts': 'types/index.ts',
  'lib.utils.cn.ts': 'lib/utils/cn.ts',
  'lib.animations.variants.ts': 'lib/animations/variants.ts',
  'ThemeContext.tsx': 'contexts/ThemeContext.tsx',
  'AnimationContext.tsx': 'contexts/AnimationContext.tsx',
  'app.layout.tsx': 'app/layout.tsx',
  'app.globals.css': 'app/globals.css',
  'app.page.tsx': 'app/page.tsx',
  'components.glassmorphism.Button.index.tsx': 'components/glassmorphism/Button/index.tsx',
  'components.glassmorphism.Button.animations.ts': 'components/glassmorphism/Button/animations.ts',
  'components.glassmorphism.Card.index.tsx': 'components/glassmorphism/Card/index.tsx',
  'components.glassmorphism.Input.index.tsx': 'components/glassmorphism/Input/index.tsx',
  'components.glassmorphism.Toggle.index.tsx': 'components/glassmorphism/Toggle/index.tsx',
  'components.glassmorphism.Slider.index.tsx': 'components/glassmorphism/Slider/index.tsx',
  'components.glassmorphism.Tabs.index.tsx': 'components/glassmorphism/Tabs/index.tsx',
};

// Create directories
console.log('📁 Creating directories in /uiux-catalog...');
directories.forEach(dir => {
  const dirPath = path.join(baseDir, dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`   ✓ Created: uiux-catalog/${dir}`);
  } else {
    console.log(`   - Exists: uiux-catalog/${dir}`);
  }
});

// Move files to proper locations in uiux-catalog
console.log('\n📦 Moving files to /uiux-catalog...');
let successCount = 0;
let failCount = 0;
Object.entries(fileMappings).forEach(([source, dest]) => {
  const sourcePath = path.join(process.cwd(), source);
  const destPath = path.join(baseDir, dest);
  
  if (fs.existsSync(sourcePath)) {
    try {
      // Create destination directory if it doesn't exist
      const destDir = path.dirname(destPath);
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }
      
      // Copy file (use copy instead of rename to preserve originals)
      fs.copyFileSync(sourcePath, destPath);
      console.log(`   ✓ Copied: ${source} → uiux-catalog/${dest}`);
      successCount++;
    } catch (error) {
      console.log(`   ✗ Failed to copy ${source}: ${error.message}`);
      failCount++;
    }
  } else {
    console.log(`   - Source not found: ${source}`);
    failCount++;
  }
});

console.log('\n✅ Directory structure created!');
console.log(`   Files copied: ${successCount}`);
console.log(`   Files failed/not found: ${failCount}`);
console.log('\nNext steps:');
console.log('1. Update next.config.js, vercel.json, and tsconfig.json');
console.log('2. Copy config files (package.json, tailwind.config.js, etc.) to /uiux-catalog');
console.log('3. Run: npm install (in /uiux-catalog)');
console.log('4. Run: npm run build (in /uiux-catalog)');
console.log('5. Run: npm run dev (in /uiux-catalog)\n');

// Run this script with: node organize-to-uiux-catalog.js
