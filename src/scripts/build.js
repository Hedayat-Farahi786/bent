// File: scripts/build.js
const { execSync } = require('child_process');
const fs = require('fs-extra');

async function build() {
  try {
    // Clean dist directory
    await fs.remove('./dist');

    // Build the project
    execSync('npm run build', { stdio: 'inherit' });

    // Copy necessary files
    await fs.copy('./public/robots.txt', './dist/robots.txt');
    await fs.copy('./public/sitemap.xml', './dist/sitemap.xml');

    // Copy CMS admin files
    await fs.copy('./public/admin', './dist/admin');

    console.log('Build completed successfully!');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

build();
