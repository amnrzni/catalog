const fs = require('fs');
const path = require('path');

console.log('🎨 Design Catalog - Complete Migration to /uiux-catalog');
console.log('======================================================\n');

const rootDir = process.cwd();
const baseDir = path.join(rootDir, 'uiux-catalog');

// Step 1: Create directory structure
console.log('Step 1: Creating directory structure...');
const directories = [
  'app',
  'components/glassmorphism/Button',
  'components/glassmorphism/Card',
  'components/glassmorphism/Input',
  'components/glassmorphism/Slider',
  'components/glassmorphism/Tabs',
  'components/glassmorphism/Toggle',
  'contexts',
  'lib/animations',
  'lib/utils',
  'types',
  'public/images'
];

directories.forEach(dir => {
  const dirPath = path.join(baseDir, dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`   ✓ Created: ${dir}`);
  }
});

// Step 2: Copy source files
console.log('\nStep 2: Copying source files...');
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

Object.entries(fileMappings).forEach(([source, dest]) => {
  const sourcePath = path.join(rootDir, source);
  const destPath = path.join(baseDir, dest);
  
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, destPath);
    console.log(`   ✓ ${source} → ${dest}`);
  } else {
    console.log(`   - Not found: ${source}`);
  }
});

// Step 3: Copy configuration files
console.log('\nStep 3: Copying configuration files...');
const configFiles = [
  'package.json',
  'tsconfig.json',
  'next.config.js',
  'tailwind.config.js',
  'postcss.config.js',
  '.eslintrc.json',
  '.prettierrc',
  '.gitignore'
];

configFiles.forEach(file => {
  const sourcePath = path.join(rootDir, file);
  const destPath = path.join(baseDir, file);
  
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, destPath);
    console.log(`   ✓ ${file}`);
  }
});

// Step 4: Update next.config.js (no changes needed, it will work from the subdirectory)
console.log('\nStep 4: Configuration files ready');

// Step 5: Create/update tsconfig.json for path aliases
console.log('\nStep 5: Updating tsconfig.json...');
const tsconfigPath = path.join(baseDir, 'tsconfig.json');
if (fs.existsSync(tsconfigPath)) {
  const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, 'utf-8'));
  
  // Ensure paths are set correctly
  if (!tsconfig.compilerOptions) tsconfig.compilerOptions = {};
  if (!tsconfig.compilerOptions.paths) tsconfig.compilerOptions.paths = {};
  
  tsconfig.compilerOptions.paths['@/*'] = ['./*'];
  tsconfig.compilerOptions.baseUrl = '.';
  
  fs.writeFileSync(tsconfigPath, JSON.stringify(tsconfig, null, 2));
  console.log('   ✓ Updated path aliases in tsconfig.json');
}

// Step 6: Create README for uiux-catalog
console.log('\nStep 6: Creating README...');
const readmeContent = `# UI/UX Catalog

This directory contains the complete Next.js application for the Design Catalog.

## Getting Started

1. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

2. Run development server:
   \`\`\`bash
   npm run dev
   \`\`\`

3. Build for production:
   \`\`\`bash
   npm run build
   \`\`\`

## Directory Structure

- \`app/\` - Next.js 14 App Router pages
- \`components/\` - React components
- \`contexts/\` - React Context providers
- \`lib/\` - Utility functions and animations
- \`types/\` - TypeScript type definitions
- \`public/\` - Static assets

## Deployment

This app is configured for deployment on Vercel.
`;

fs.writeFileSync(path.join(baseDir, 'README.md'), readmeContent);
console.log('   ✓ Created README.md');

console.log('\n✅ Migration complete!');
console.log('\nNext steps:');
console.log('1. cd uiux-catalog');
console.log('2. npm install');
console.log('3. npm run build');
console.log('4. npm run dev\n');
console.log('For Vercel deployment:');
console.log('- Root Directory: uiux-catalog');
console.log('- Build Command: npm run build');
console.log('- Output Directory: .next\n');
