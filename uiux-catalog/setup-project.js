const fs = require('fs');
const path = require('path');

console.log('🎨 Design Catalog - Project Setup');
console.log('=====================================\n');

// Directory structure
const directories = [
  'app',
  'app/tokens',
  'app/components',
  'app/patterns',
  'app/accessibility',
  'app/guidelines',
  'components',
  'components/theme',
  'contexts',
  'hooks',
  'lib',
  'lib/animations',
  'lib/utils',
  'lib/tokens',
  'lib/data',
  'types',
  'public',
  'public/images',
  'docs',
  'styles'
];

// File mappings (source -> destination)
const fileMappings = {};

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
