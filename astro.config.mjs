// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ahprasandh.github.io',
  base: '/tamilcookbook',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});