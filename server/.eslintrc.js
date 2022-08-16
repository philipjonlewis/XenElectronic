module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['standard-with-typescript', 'airbnb'],
  overrides: [],
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    semi: 'always',
    'import/no-unresolved': 'off',
    'no-unused-vars': 'off',
    'import/extensions': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/semi ': 'off',
    'import/prefer-default-export': 'off',
  },
};
