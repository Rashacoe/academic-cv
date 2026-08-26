import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://rashacoe.github.io',
  base: '/academic-cv/',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
