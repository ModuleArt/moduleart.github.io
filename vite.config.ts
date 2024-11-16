import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
// import sitemap from "vite-plugin-sitemap";

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  plugins: [
    react(),
    // sitemap({
    //   outDir: "docs",
    //   robots: [{ userAgent: "*", allow: "/", disallow: "/assets" }],
    // }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "docs",
    emptyOutDir: true,
    // minify: "terser",
  },
}));
