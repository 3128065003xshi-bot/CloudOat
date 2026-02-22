import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 1. Import it

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 2. Add it here
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