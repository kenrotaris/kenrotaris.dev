import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    server: mode === 'development' ? {
      port: 7778,
      proxy: { // because locally we dont use nginx we need to add a proxy which bypasses the cross origin by making requests appear to come from the same origin (localhost:7778), because the frontend and backend run on different ports.
        '/backend': {
          target: "http://localhost:7777",
          changeOrigin: true,
          secure: true,
          logLevel: 'debug',
        }
      }
    } : undefined, // In production, no proxy is used because NGINX handles the reversy proxying from kenrotaris.dev to the proper ports so from the browsers perspective its the same origin
    logLevel: 'info',
    build: {
      sourcemap: mode === 'development', // Vite should generate source maps during the build process (mapping the minified or transpiled code back to the original source code)
    },
  };
});
