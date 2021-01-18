import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    exclude: ["monaco-editor"],
  },
  esbuild: {
    jsxFactory: "aoife",
    jsxFragment: "aoife.Frag",
  },
});
