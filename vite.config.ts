import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import sitemap from 'vite-plugin-sitemap'

const dynamicRoutes = ['/about', '/quickpictureviewer', '/plaincolor', '/szcontext', '/quickcolorpicker']

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      outDir: 'docs',
      hostname: 'https://moduleart.github.io/',
      robots: [{ userAgent: '*', allow: '/', disallow: '/assets' }],
      dynamicRoutes,
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
  // @ts-expect-error custom options for beasties used by vite-react-ssg
  ssgOptions: {
    beastiesOptions: {
      // E.g., change the preload strategy
      preload: 'media',
      // Other options: https://github.com/danielroe/beasties#usage
    },
  },
})
