import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { execSync } from 'node:child_process';

let gitSha = '';
let gitShortSha = '';
try {
  gitSha = execSync('git rev-parse HEAD').toString().trim();
  gitShortSha = execSync('git rev-parse --short HEAD').toString().trim();
} catch {}

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    define: {
      __GIT_SHA__: JSON.stringify(gitSha),
      __GIT_SHORT_SHA__: JSON.stringify(gitShortSha),
    },
  },
});
