import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // proxy: { //this is for only development mode  
    //   '/api': {
    //     target: 'http://localhost:3600',
    //     changeOrigin: true,
    //     secure: false,
    //   },
    // },
  },
  plugins: [react()],
})
  