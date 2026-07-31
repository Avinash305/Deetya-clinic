import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), viteSingleFile()],
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
    // Minify with terser-equivalent esbuild
    minify: 'esbuild',
    cssMinify: true,
    // Reduce CSS duplication
    cssCodeSplit: false,
    // Rollup optimizations
    rollupOptions: {
      output: {
        // Reduce chunk count
        manualChunks: undefined,
      },
    },
  },
});
