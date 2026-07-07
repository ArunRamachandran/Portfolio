import fs from 'fs';
import path from 'path';

const buildDir = 'build';
const v1Dir = 'v1';
const v1BuildDir = path.join(buildDir, 'v1');

try {
  // Create v1 build directory
  if (!fs.existsSync(v1BuildDir)) {
    fs.mkdirSync(v1BuildDir, { recursive: true });
  }

  // Copy v1 index.html to build/v1/
  const v1IndexPath = path.join(v1Dir, 'index.html');
  const v1BuildIndexPath = path.join(v1BuildDir, 'index.html');

  if (fs.existsSync(v1IndexPath)) {
    fs.copyFileSync(v1IndexPath, v1BuildIndexPath);
    console.log(`✅ Copied v1 index to ${v1BuildIndexPath}`);
  }

  console.log('✅ Post-build setup complete!');
  console.log(`   - V2 (main): ${buildDir}/index.html`);
  console.log(`   - V1 (legacy): ${v1BuildDir}/index.html`);
} catch (error) {
  console.error('❌ Post-build error:', error.message);
  process.exit(1);
}
