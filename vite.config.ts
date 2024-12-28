import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load env file based on mode
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'lucide-icons': ['lucide-react']
          }
        }
      }
    },
    optimizeDeps: {
      include: ['lucide-react']
    },
    server: {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    },
    define: {
      // Expose env variables to the client
      'import.meta.env.VITE_INSTAGRAM_CLIENT_ID': JSON.stringify(env.VITE_INSTAGRAM_CLIENT_ID),
      'import.meta.env.VITE_INSTAGRAM_CLIENT_SECRET': JSON.stringify(env.VITE_INSTAGRAM_CLIENT_SECRET)
    }
  };
});