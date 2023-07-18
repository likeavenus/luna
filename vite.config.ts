import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // extensions: ['.glb', '.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json']

  },
  assetsInclude: ['**/*.glb', '**/*.fbx']
})
