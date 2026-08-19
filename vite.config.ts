import { defineConfig } from "vite";

// Static Q2 marketing performance report — no framework build step.
// All site assets live in /public and are copied verbatim into dist.
export default defineConfig({
  base: "./",
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    // Leave the hand-written script/link tags in index.html untouched.
    rollupOptions: {
      external: (id) => !id.includes("index.html"),
    },
  },
});
