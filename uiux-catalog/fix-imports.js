const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing import paths after setup...\n');

// Files that need import path fixes
const filesToFix = [
  {
    file: 'app/layout.tsx',
    replacements: [
      {
        from: "// import { ThemeProvider } from '@/contexts/ThemeContext';",
        to: "import { ThemeProvider } from '@/contexts/ThemeContext';",
      },
      {
        from: "// import { AnimationProvider } from '@/contexts/AnimationContext';",
        to: "import { AnimationProvider } from '@/contexts/AnimationContext';",
      },
      {
        from: /const ThemeProvider = \(\{ children \}: \{ children: React\.ReactNode \}\) => <>\{children\}</>;[\s\S]*?const AnimationProvider = \(\{ children \}: \{ children: React\.ReactNode \}\) => <>\{children\}</>;/,
        to: '',
      },
    ],
  },
  {
    file: 'app/page.tsx',
    replacements: [
      {
        from: "// import { useAnimation } from '@/contexts/AnimationContext';",
        to: "import { useAnimation } from '@/contexts/AnimationContext';",
      },
      {
        from: /\/\/ import \{[\s\S]*?\} from '@\/lib\/animations\/variants';/,
        to: "import {\n  pageTransition,\n  fadeInUp,\n  staggerContainer,\n  staggerItem,\n} from '@/lib/animations/variants';",
      },
      {
        from: /const useAnimation[\s\S]*?const animationEnabled = true;/,
        to: '',
      },
    ],
  },
];

filesToFix.forEach(({ file, replacements }) => {
  const filePath = path.join(process.cwd(), file);
  
  if (!fs.existsSync(filePath)) {
    console.log(`   ⚠ File not found: ${file}`);
    return;
  }
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    replacements.forEach(({ from, to }) => {
      if (content.includes(from) || (from instanceof RegExp && from.test(content))) {
        content = content.replace(from, to);
        modified = true;
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`   ✓ Fixed: ${file}`);
    } else {
      console.log(`   - No changes needed: ${file}`);
    }
  } catch (error) {
    console.log(`   ✗ Error fixing ${file}: ${error.message}`);
  }
});

console.log('\n✅ Import paths fixed!');
console.log('\nYou can now run: npm run dev\n');
