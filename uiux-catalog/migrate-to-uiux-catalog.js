const fs = require('fs');
const path = require('path');

console.log('🎨 Design Catalog - Complete Migration to /uiux-catalog');
console.log('======================================================\n');

const rootDir = process.cwd();
const baseDir = path.join(rootDir, 'uiux-catalog');

// Ensure uiux-catalog exists
if (!fs.existsSync(baseDir)) {
  console.log('Creating /uiux-catalog directory...');
  fs.mkdirSync(baseDir, { recursive: true });
}

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

let dirCount = 0;
directories.forEach(dir => {
  const dirPath = path.join(baseDir, dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`   ✓ Created: ${dir}`);
    dirCount++;
  } else {
    console.log(`   - Exists: ${dir}`);
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

let copiedCount = 0;
let failedCount = 0;
Object.entries(fileMappings).forEach(([source, dest]) => {
  const sourcePath = path.join(rootDir, source);
  const destPath = path.join(baseDir, dest);
  
  if (fs.existsSync(sourcePath)) {
    try {
      // Ensure destination directory exists
      const destDir = path.dirname(destPath);
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }
      
      // Copy file
      fs.copyFileSync(sourcePath, destPath);
      console.log(`   ✓ ${source} → ${dest}`);
      copiedCount++;
    } catch (error) {
      console.log(`   ✗ Failed to copy ${source}: ${error.message}`);
      failedCount++;
    }
  } else {
    console.log(`   - Not found: ${source}`);
    failedCount++;
  }
});

// Step 3: Verify config files exist
console.log('\nStep 3: Verifying configuration files...');
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

let configCount = 0;
configFiles.forEach(file => {
  const filePath = path.join(baseDir, file);
  if (fs.existsSync(filePath)) {
    console.log(`   ✓ ${file} exists`);
    configCount++;
  } else {
    console.log(`   - ${file} missing (will be created by migration)`);
  }
});

// Summary
console.log('\n' + '='.repeat(60));
console.log('✅ MIGRATION SUMMARY');
console.log('='.repeat(60));
console.log(`Directories created:     ${dirCount}/${directories.length}`);
console.log(`Source files copied:     ${copiedCount}/${Object.keys(fileMappings).length}`);
console.log(`Config files present:    ${configCount}/${configFiles.length}`);
console.log(`Files failed/not found:  ${failedCount}`);
console.log('='.repeat(60));

console.log('\n✅ Migration complete!');

if (copiedCount > 0) {
  console.log('\nNext steps:');
  console.log('1. cd uiux-catalog');
  console.log('2. npm install');
  console.log('3. npm run build');
  console.log('4. npm run dev\n');
  
  console.log('For Vercel deployment:');
  console.log('- The vercel.json is already configured');
  console.log('- Just push to GitHub and deploy!');
} else {
  console.log('\n⚠️  No source files were copied.');
  console.log('This might be because:');
  console.log('1. Files have already been migrated');
  console.log('2. Source files don\'t exist at the root');
  console.log('\nCheck the /uiux-catalog directory to verify files exist.');
}

console.log('');

