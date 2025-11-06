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

console.log('\n✅ Directory structure created successfully!');
console.log('\nNext steps:');
console.log('1. Run: npm install');
console.log('2. Run: npm run dev');
console.log('3. Open: http://localhost:3000\n');
