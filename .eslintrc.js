module.exports = {
  root: true,
  extends: ["custom"],
  parserOptions: {
    projectFolderIgnoreList: [],
    ecmaFeatures: {
      jsx: true,
    },
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    ecmaVersion: "latest",
    sourceType: "module",
  },
};
