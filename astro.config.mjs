// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages: SITE_URL is https://<user>.github.io and BASE_PATH is /<repo-name>
  // (or / for a <user>.github.io repo). The deploy workflow sets both.
  site: process.env.SITE_URL,
  base: process.env.BASE_PATH || '/',
  output: 'static',
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  }
});
