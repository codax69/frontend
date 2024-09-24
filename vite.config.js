import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import https from 'https';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://server-1-aopt.onrender.com/',
        changeOrigin: true,
        secure: false, // This will ignore SSL certificate errors
        agent: new https.Agent({
          rejectUnauthorized: false
        })
      }
    }
  }
});
