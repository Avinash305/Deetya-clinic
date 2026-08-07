import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    allowedHosts: ['.monkeycode-ai.live'],
  },
  build: {
    // Modern browsers only - smaller bundle
    target: 'es2020',
    // Minify with esbuild
    minify: 'esbuild',
    cssMinify: true,
    // Reduce CSS duplication
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        // Stable vendor chunks so the big framework/library files are
        // downloaded once and cached forever (hashed filenames + immutable
        // Cache-Control on Netlify). Route/page chunks change per deploy.
        manualChunks(id) {
          // Order matters: check the more specific 'react-*' packages first so
          // the substring 'node_modules/react' doesn't swallow them.
          if (id.includes('node_modules/react-router')) {
            return 'vendor-router';
          }
          if (id.includes('node_modules/react-icons')) {
            return 'vendor-icons';
          }
          if (id.includes('node_modules/framer-motion') || id.includes('node_modules/motion-dom') || id.includes('node_modules/motion-utils')) {
            return 'vendor-motion';
          }
          if (
            id.includes('node_modules/react/') ||
            id.includes('node_modules/react-dom/') ||
            id.includes('node_modules/scheduler/')
          ) {
            return 'vendor-react';
          }
        },
      },
    },
  },
});
