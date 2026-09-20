import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['b5b4-154-163-250-212.ngrok-free.app', '.ngrok-free.app'],
  },
});
