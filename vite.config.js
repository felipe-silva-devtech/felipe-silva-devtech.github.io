import path from "path";

// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  plugins: [react()],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@ui": path.resolve(__dirname, "./src/ui"),
    },
  },
  build: {
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: `bundles/[name].js`,
        chunkFileNames: `chunks/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
});
