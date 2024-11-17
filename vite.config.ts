import { defineConfig, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import sitemap from 'vite-plugin-sitemap'

const config: UserConfig = {
  plugins: [
    react(),
    sitemap({
      outDir: 'docs',
      robots: [{ userAgent: '*', allow: '/', disallow: '/assets' }],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
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
        api: 'modern-compiler', // or "modern"
      },
    },
  },
}

export default defineConfig(() => config)
