import { defineConfig } from "vite";

export default defineConfig({
  esbuild: {
    jsxFactory: "aoife",
    jsxFragment: "aoife.Frag",
  },
  server: {
    proxy: {
      "/test-proxy": {
        target: "http://127.0.0.1:4080",
        changeOrigin: true,
      },
    },
  },
});
