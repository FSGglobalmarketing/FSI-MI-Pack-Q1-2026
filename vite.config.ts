import { defineConfig, type Plugin } from "vite";
import fs from "node:fs";
import path from "node:path";

// Static Q2 marketing performance report — plain HTML/CSS/JS, no framework.
// All site assets live in /public and are copied verbatim into dist by Vite.
// index.html is hand-written with classic (non-module) script tags, so we
// write it through untouched instead of letting Rollup rewrite/bundle it.
function copyIndexHtmlVerbatim(): Plugin {
  return {
    name: "copy-index-html-verbatim",
    apply: "build",
    closeBundle() {
      const src = path.resolve(__dirname, "index.html");
      const out = path.resolve(__dirname, "dist/index.html");
      fs.mkdirSync(path.dirname(out), { recursive: true });
      fs.copyFileSync(src, out);
    },
  };
}

export default defineConfig({
  base: "./",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [copyIndexHtmlVerbatim()],
});
