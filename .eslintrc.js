module.exports = {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  extends: [
    "react-app",
    "react-app/jest"
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'consistent-return': 0,
    'no-param-reassign': 0,
    'import/prefer-default-export': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'import/no-mutable-exports': 0,
    'class-methods-use-this': 0,
    'eqeqeq': 0,
    "no-irregular-whitespace": "off",
    "max-len": ["error", {
      code: 135,
      "ignorePattern": 'd="([\\s\\S]*?)"',
      "ignoreTemplateLiterals": true,
      "ignoreStrings": true,
      "ignoreComments": true,
      "ignoreUrls": true,
      "ignoreTrailingComments": true,
      "ignoreRegExpLiterals": true
    }],
    "@typescript-eslint/no-empty-function": "off",
    "no-sequences": "off"
  }
};
