// Builds the site for GitHub Pages ("Deploy from a branch", folder /docs).
// Run with `npm run pages`, then commit ../docs.
import { execSync } from 'node:child_process';
import fs from 'node:fs';

// Project Pages are served at /<repo-name>/
execSync('npx next build', {
  stdio: 'inherit',
  env: { ...process.env, NEXT_PUBLIC_BASE_PATH: '/kitaklaro-landing' },
});

fs.rmSync('../docs', { recursive: true, force: true });
fs.cpSync('out', '../docs', { recursive: true });
fs.writeFileSync('../docs/.nojekyll', ''); // Jekyll would drop the _next/ folder
