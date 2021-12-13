module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  extends: ['plugin:vue/essential', 'airbnb-base', '@vue/airbnb'],

  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    parser: 'babel-eslint',
  },

  plugins: ['vue'],

  rules: {
    'import/no-extraneous-dependencies': 'off',
    'max-len': ['warn', 120],
    'implicit-arrow-linebreak': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },

  root: true,
};
