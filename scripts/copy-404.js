import { copyFileSync } from 'node:fs';
import { resolve } from 'node:path';

// Copy the built index to 404 so GitHub Pages can serve SPA routes.
const dist = resolve('dist');
const indexPath = resolve(dist, 'index.html');
const notFoundPath = resolve(dist, '404.html');

try {
  copyFileSync(indexPath, notFoundPath);
  console.log('404.html created for GitHub Pages SPA fallback.');
} catch (err) {
  console.error('Failed to create 404.html', err);
  process.exit(1);
}
