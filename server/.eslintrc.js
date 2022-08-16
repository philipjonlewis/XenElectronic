module.exports = {
  env: {
    browser: false,
    es2021: true,
  },
  extends: 'airbnb',
  // extends: ['standard-with-typescript', 'airbnb'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'warn',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'linebreak-style': 0,
  },
};
