// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    mdx(),
  ],
  site: 'https://itgirl.style',
  markdown: {
    shikiConfig: {
      theme: 'rose-pine-dawn',
    },
  },
  image: {
    domains: ['images.unsplash.com'],
  },
});
