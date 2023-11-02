import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  base: '/mobile-cairn/',
  plugins: [svelte()],
  preprocess: vitePreprocess(),
})
