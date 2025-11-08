/**
 * Post-Setup File Organization Script
 * Run this after npm run setup to move page files to correct locations
 */

const fs = require('fs');
const path = require('path');

console.log('📦 Organizing page files...\n');

const fileMovements = [
  { from: 'app-tokens-page.tsx', to: 'app/tokens/page.tsx' },
  { from: 'app-components-page.tsx', to: 'app/components/page.tsx' },
  { from: 'app-patterns-page.tsx', to: 'app/patterns/page.tsx' },
  { from: 'app-accessibility-page.tsx', to: 'app/accessibility/page.tsx' },
  { from: 'app-guidelines-page.tsx', to: 'app/guidelines/page.tsx' },
];

let successCount = 0;
let failCount = 0;

fileMovements.forEach(({ from, to }) => {
  const sourcePath = path.join(process.cwd(), from);
  const destPath = path.join(process.cwd(), to);

  if (fs.existsSync(sourcePath)) {
    try {
      // Ensure destination directory exists
      const destDir = path.dirname(destPath);
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }

      // Move the file
      fs.renameSync(sourcePath, destPath);
      console.log(`✓ Moved: ${from} → ${to}`);
      successCount++;
    } catch (error) {
      console.log(`✗ Failed to move ${from}: ${error.message}`);
      failCount++;
    }
  } else {
    console.log(`- Not found: ${from}`);
  }
});

console.log(`\n✅ Complete! ${successCount} files moved, ${failCount} failed\n`);
