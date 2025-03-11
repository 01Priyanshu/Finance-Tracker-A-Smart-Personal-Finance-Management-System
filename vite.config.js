import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Ensure this alias points to your src directory
    },
  },
  build: {
    rollupOptions: {
      input: '/index.html', // Ensure Vite correctly identifies entry point
    },
  },
});
