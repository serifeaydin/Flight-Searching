import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Çıktı dizininizi buraya belirtin
  },
  resolve: {
    alias: {
      'jwt-decode': 'node_modules/jwt-decode/build/jwt-decode.esm.js'
    }
  }
})