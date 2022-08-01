const isProd = process.env.NODE_ENV === "production";

// https://vitejs.dev/config/
module.exports = {
  base: "/",
  plugins: [
    isProd &&
      require("@vitejs/plugin-legacy")({
        targets: ["defaults", "not IE 11"],
        polyfills: [
          "es/array",
          "es/array-buffer",
          "es/object",
          "es/string",
          "es/number",
          "es/function",
          "es/map",
          "es/math",
          "es/set",
          "es/promise",
          "es/regexp",
          "es/weak-set",
          "es/weak-map",
          "es/date",
        ],
      }),
  ],
  build: {
    brotliSize: false,
    outDir: "dist",
  },
  esbuild: {
    logOverride: { "this-is-undefined-in-esm": "silent" },
  },
};
