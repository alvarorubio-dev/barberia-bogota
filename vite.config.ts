import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  server: {
    proxy: {
      '/wp-json': {
        target: 'https://paginawebeconomica.org/blog',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path
      }
    }
  },
=======
>>>>>>> c565bc3ded9c582e21bb48939a0a09a94108c66e
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
