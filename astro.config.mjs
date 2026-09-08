// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.theeffortlessbeautyco.com',
  trailingSlash: 'never',
  output: 'static',
  adapter: vercel(),
  integrations: [sitemap()],
  redirects: {
    '/work': '/gallery',
    '/work/updos': '/gallery',
    '/work/downstyles': '/gallery',
    '/work/makeup': '/gallery',
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
});
