import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import Sitemap from 'vite-plugin-sitemap' // 1. Add Sitemap import

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Sitemap({ 
      hostname: 'https://www.cloudoat.com',
      // Add all your project routes here for AI crawlers to find
      dynamicRoutes: [
        '/',
        '/services',
        '/benefits',
        '/how-it-works',
        '/contact',
        '/client-portal'
      ],
    }), // 2. Add Sitemap to plugins array
  ],
  server: {
    proxy: {
      '/dynamodb': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dynamodb/, ''),
      },
    },
  },
})