// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Static output. `npm run build` emits plain HTML/CSS into dist/,
 * which Vercel serves directly — no serverless functions, no adapter.
 */
export default defineConfig({
  site: 'https://mithrilatomics.com',
  trailingSlash: 'never',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    // SVG logos are imported as assets; raster art is optimised at build time.
    responsiveStyles: true,
  },
  vite: {
    build: {
      cssMinify: 'lightningcss',
    },
  },
});
