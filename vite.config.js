import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  base: './', // Add this line for proper asset paths
  publicDir: 'public' // Explicitly set public directory
})