const { defineConfig } = require("vitest/config");
const { customConfig } = require("vitest-config-custom");

module.exports = defineConfig({
  ...customConfig,
});
