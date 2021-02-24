#!/usr/bin/env node

const fs = require("fs-extra");
const resolve = require("path").resolve;
const pwd = (...args) => resolve(process.cwd(), ...args);
const argv = process.argv.splice(2);

const build = argv[1] === "--vite" ? "vite" : "webpack";

fs.copySync(resolve(__dirname, build), pwd(argv[0]));
fs.copyFile(resolve(__dirname, "gitignore"), pwd(argv[0], ".gitignore"));

console.log("create aoife done!");
console.log("Please run:", `cd ${argv[0]} && yarn install`);
