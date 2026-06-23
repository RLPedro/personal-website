import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/substack': {
        target: 'https://brumanotes.substack.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/substack/, '/feed'),
      },
    },
  },
})
