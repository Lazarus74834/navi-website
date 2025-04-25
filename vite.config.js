import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/navi-website/', // Repository name for GitHub Pages
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0, // Disable asset inlining
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  },
  resolve: {
    alias: {
      '@': '/src',
      '@assets': '/src/assets',
      '@components': '/src/components',
      '@styles': '/src/styles',
    },
  },
})