module.exports = (config) => {
  return Object.assign(config, {
    proxy: {
      "/v1": "http://localhost:4080",
    },
  });
};
