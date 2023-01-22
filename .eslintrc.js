module.exports = {
  extends: [
    '@react-ddd',
  ],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  rules: {
    'no-restricted-syntax': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
};
