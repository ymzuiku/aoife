const isProd = process.env.NODE_ENV === "production";

const { networkInterfaces } = require("os");

function getIPAddress() {
  const interfaces = networkInterfaces();
  for (const devName in interfaces) {
    const iface = interfaces[devName];
    for (let i = 0; i < iface.length; i++) {
      const alias = iface[i];
      if (alias.family === "IPv4" && alias.address !== "127.0.0.1" && !alias.internal) {
        return alias.address;
      }
    }
  }
  return "127.0.0.1";
}

// https://vitejs.dev/config/
module.exports = {
  localIp: getIPAddress(),
  base: "/",
  plugins: [
    require("@vitejs/plugin-react")(),
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
  // server: {
  //   port: 8201,
  //   proxy: {
  //     "/v1": {
  //       target: "http://127.0.0.1:8200",
  //       changeOrigin: true,
  //     },
  //   },
  // },
  // logLevel: "error",
  build: {
    brotliSize: false,
    outDir: "dist",
  },
  logLevel: "warn",
  esbuild: {
    logOverride: { "this-is-undefined-in-esm": "silent" },
    // jsxInject: `import * as React from "react";
    // export { React };`,
  },
};
