import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://nspenner.github.io',
  base: '/motiondesignportfolio',
  output: 'static',
  build: {
    assets: '_astro'
  }
});
