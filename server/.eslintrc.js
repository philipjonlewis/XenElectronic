export default {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    ["eslint:recommended", "prettier"],
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {},
};
