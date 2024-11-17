import { defineConfig, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import sitemap from 'vite-plugin-sitemap'

const config: UserConfig = {
  plugins: [
    react(),
    sitemap({
      outDir: 'docs',
      hostname: 'https://moduleart.github.io/',
      robots: [{ userAgent: '*', allow: '/', disallow: '/assets' }],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '~': resolve(__dirname, './node_modules'),
    },
  },
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    minify: 'terser',
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
}

export default defineConfig(() => config)
