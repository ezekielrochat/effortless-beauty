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
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/confirmation/'),
    }),
  ],
  redirects: {
    '/work': '/gallery',
    '/work/updos': '/gallery',
    '/work/downstyles': '/gallery',
    '/work/makeup': '/gallery',
    '/hair-makeup-stylists-for-weddings': '/experience',
    '/contact-us': '/check-your-date',
    '/get-a-quote': '/check-your-date',
    '/job-application': '/careers',
    '/vendors': '/about',
    '/sitemap': '/',
    '/blog/5-tips-for-brides-for-day-of-makeup': '/blog/5-tips-for-day-of-makeup',
    '/blog/fall-2025-makeup-trends-whats-trending': '/blog/fall-2025-makeup-trends',
    '/blog/the-8-things-you-need-to-know-about-bridal-trial-runs': '/blog/bridal-trial-runs',
    '/blog/things-to-know-before-booking-your-bridal-hair-makeup-services':
      '/blog/things-to-know-before-booking',
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
