#!/usr/bin/env node

/* eslint-disable no-console */
const rollup = require("rollup");
const rollupTypescript = require("rollup-plugin-typescript2");
const { uglify } = require("rollup-plugin-uglify");
const { resolve } = require("path");
const nodeResolve = require("rollup-plugin-node-resolve");
const pwd = (...args) => resolve(process.cwd(), ...args);
const fs = require("fs-extra");
const argv = process.argv.splice(2);
const tsconfig = require("./tsconfig.json");

function clearDir(dir) {
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
      fs.remove(`$\{dir}/file`);
    });
  }
}

fs.copySync("../README.md", "./README.md");
fs.copySync("../README.md", "../create-aoife-app/README.md");
fs.copySync("../README.md", "../create-aoife-app/vite/README.md");
fs.copySync("../README.md", "../create-aoife-app/webpack/README.md");

function haveArgv(...args) {
  let isHave = false;
  args.forEach((str) => {
    argv.forEach((v) => {
      if (v === str) {
        isHave = true;
      }
    });
  });

  return isHave;
}

clearDir(pwd("umd"));

const watchOptions = [
  {
    input: "./lib/index.ts",
    output: {
      file: "./umd/index.js",
      format: "umd",
      name: "aoife",
      sourcemap: false,
    },
    plugins: [
      // nodeResolve(),
      rollupTypescript({
        useTsconfigDeclarationDir: false,
      }),
      uglify(),
      // uglify({
      //   mangle: {
      //     eval: true,
      //   },
      //   sourcemap: false,
      // }),
    ],
  },
];
const watcher = rollup.watch(watchOptions);

const package = require("./package.json");
function updateOtherVersion(url) {
  const json = fs.readJSONSync(url);
  json.dependencies.aoife = "^" + package.version;
  fs.writeFileSync(url, JSON.stringify(json, null, 2), { encoding: "utf8" });
}

// event.code can be one of:
//   START        — the watcher is (re)starting
//   BUNDLE_START — building an individual bundle
//   BUNDLE_END   — finished building a bundle
//   END          — finished building all bundles
//   ERROR        — encountered an error while bundling
//   FATAL        — encountered an unrecoverable error
watcher.on("event", (event) => {
  if (event.code === "ERROR") {
    console.log(event);
  } else if (event.code === "BUNDLE_END") {
    // console.log(event);
    console.log("BUNDLE_END");
  } else if (event.code === "END") {
    if (!haveArgv("--watch", "-w")) {
      watcher.close();
    }
    updateOtherVersion(pwd("../create-aoife-app/webpack/package.json"));
    updateOtherVersion(pwd("../create-aoife-app/vite/package.json"));
  }
});
