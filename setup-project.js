const fs = require('fs');
const path = require('path');

console.log('🎨 Design Catalog - Project Setup');
console.log('=====================================\n');

// Directory structure
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

// File mappings (source -> destination)
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
console.log('📁 Creating directories...');
directories.forEach(dir => {
  const dirPath = path.join(process.cwd(), dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`   ✓ Created: ${dir}`);
  } else {
    console.log(`   - Exists: ${dir}`);
  }
});

// Move files to proper locations
console.log('\n📦 Moving files to proper locations...');
Object.entries(fileMappings).forEach(([source, dest]) => {
  const sourcePath = path.join(process.cwd(), source);
  const destPath = path.join(process.cwd(), dest);
  
  if (fs.existsSync(sourcePath)) {
    try {
      fs.renameSync(sourcePath, destPath);
      console.log(`   ✓ Moved: ${source} → ${dest}`);
    } catch (error) {
      console.log(`   ✗ Failed to move ${source}: ${error.message}`);
    }
  } else {
    console.log(`   - Source not found: ${source}`);
  }
});

console.log('\n✅ Directory structure created successfully!');
console.log('\nNext steps:');
console.log('1. Run: npm install');
console.log('2. Run: npm run dev');
console.log('3. Open: http://localhost:3000\n');
