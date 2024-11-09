// File: scripts/copy-content.js
import { copyFileSync, mkdirSync, readdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const contentDir = join(__dirname, '../content');
const distContentDir = join(__dirname, '../dist/content');
const functionsDir = join(__dirname, '../netlify/functions');

// Create directories
mkdirSync(distContentDir, { recursive: true });
mkdirSync(join(distContentDir, 'pages'), { recursive: true });
mkdirSync(join(distContentDir, 'projects'), { recursive: true });
mkdirSync(functionsDir, { recursive: true });

// Copy content
if (existsSync(contentDir)) {
  copyDirectory(contentDir, distContentDir);
}

function copyDirectory(src, dest) {
  const entries = readdirSync(src, { withFileTypes: true });

  entries.forEach(entry => {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);

    if (entry.isDirectory()) {
      mkdirSync(destPath, { recursive: true });
      copyDirectory(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  });
}

console.log('Content files copied successfully!');