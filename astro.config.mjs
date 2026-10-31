import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// GitHub Pages: set site to https://<user>.github.io and base to '/<repo>' (project pages).
// Vercel: remove both.
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://ItsDaddict.github.io',
  // base: '/<repo>',
});
