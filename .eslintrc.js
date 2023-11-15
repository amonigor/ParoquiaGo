module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  rules: {
    'no-extra-boolean-cast': 0,
    curly: ['error', 'multi'],
  },
};
