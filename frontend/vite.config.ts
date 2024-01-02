import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0' // Replace with your desired host, e.g., 'localhost' or '0.0.0.0' for all network interfaces
  },
})
