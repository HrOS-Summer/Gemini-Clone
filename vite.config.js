import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['b772-139-167-41-102.ngrok-free.app'], // Add your ngrok domain here
    
  }
})
