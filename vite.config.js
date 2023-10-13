import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:3000', //the request is coming form this url and will also append this line in place of /api
    }
  },
  plugins: [react()],
})


// configuring vite for proxy url