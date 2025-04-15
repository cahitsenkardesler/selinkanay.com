import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/selin-kanay/',
  plugins: [vue()],
  server: {
    port: 5174
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
}) 