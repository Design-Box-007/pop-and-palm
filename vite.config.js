import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/imagekit': {
        target: 'https://api.imagekit.io/v1',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/imagekit/, ''),
      },
    },
  },
})

