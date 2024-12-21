module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // 'plugin:react/recommended',
    'airbnb',
    'prettier',
    'plugin:import/typescript',
    // 'plugin:@next/next/recommended',
    'next',
    // 'next/core-web-vitals',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    parserOptions: {
      ecmaVersion: 6,
      ecmaFeatures: {
        experimentalObjectRestSpread: true,
      },
    },
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-console': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'no-param-reassign': 0,
    'react/no-unescaped-entities': 0,
    'react/prop-types': 'off',
    'no-plusplus': 'off',
    'prefer-destructuring': ['error', { object: true, array: false }],
    'react/no-danger': 'off',
    'react/jsx-no-target-blank': ['error', { allowReferrer: true }],
    '@next/next/no-img-element': 'off',
  },
  settings: {
    react: {
      version: '17.0.2',
    },
    // Module import path mapping
    'import/resolver': {
      node: {
        extensions: ['.scss', '.ts', '.tsx'],
      },
      typescript: {},
    },
  },
  globals: {
    JSX: true,
  },
}
