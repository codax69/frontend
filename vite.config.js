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
        secure: false, 
        agent: new https.Agent({
          rejectUnauthorized: false
        })
      }
    }
  }
});
