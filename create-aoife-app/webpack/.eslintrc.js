module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    "jest/globals": true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["prettier", "@typescript-eslint", "jest"],
  globals: {
    $: true,
    test: true,
  },
  rules: {
    "no-async-promise-executor": 0,
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
    "prettier/prettier": 1,
    "no-empty": 0,
    "no-constant-condition": 0,
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    // quotes: ["error", "double"],
    semi: ["error", "always"],
    "no-console": [
      "warn",
      {
        allow: ["warn", "error"],
      },
    ],
    eqeqeq: ["warn", "always"],
    "prefer-const": [
      "error",
      {
        destructuring: "all",
        ignoreReadBeforeAssign: true,
      },
    ],
    "@typescript-eslint/ban-types": 0,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/indent": 0,
    "@typescript-eslint/no-unused-vars": 1,
    "@typescript-eslint/interface-name-prefix": 0,
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/no-triple-slash-reference": 0,
    "@typescript-eslint/ban-ts-ignore": 0,
    "@typescript-eslint/no-this-alias": 0,
    "@typescript-eslint/triple-slash-reference": 0,
  },
};