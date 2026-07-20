import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";

export default defineConfig({
  // relative base so the build works at any path (GitHub Pages subpath included)
  base: "./",
  plugins: [svelte()],
});
