// .eslintrc.js
module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "plugin:jsx-control-statements/recommended",
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    "prettier",
  ],
  settings: {},
  plugins: ["@typescript-eslint", "jsx-control-statements", "prettier"],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    "jsx-control-statements/jsx-control-statements": true,
  },
  globals: {
    $: true,
  },
  rules: {
    "@typescript-eslint/ban-types": 0,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "prettier/prettier": 1,
    "no-console": ["warn", { allow: ["warn", "error"] }],
    eqeqeq: ["warn", "always"],
    "prefer-const": ["error", { destructuring: "all", ignoreReadBeforeAssign: true }],
    "@typescript-eslint/indent": ["error", 2, { VariableDeclarator: 4, SwitchCase: 1 }],
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/interface-name-prefix": 0,
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/no-triple-slash-reference": 0,
    "@typescript-eslint/ban-ts-ignore": 0,
    "@typescript-eslint/no-this-alias": 0,
    "@typescript-eslint/triple-slash-reference": ["error", { path: "always", types: "never", lib: "never" }],
    "jsx-control-statements/jsx-use-if-tag": 0,
  },
};
