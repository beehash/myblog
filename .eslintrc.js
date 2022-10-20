/*
 * @Author: Amelia
 * @email: zhangshan1@able-elec.com
 * @Date: 2022-08-01 12:54:40
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
  ],
  extends: ['plugin:react-hooks/recommended', 'plugin:@typescript-eslint/base'],
  parser: '@typescript-eslint/parser',
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'consistent-return': 0,
    'no-param-reassign': 0,
    'import/prefer-default-export': 0,
    // '@typescript-eslint/no-explicit-any': 0,
    // 'import/no-mutable-exports': 0,
    'class-methods-use-this': 0,
    eqeqeq: 0,
    'no-irregular-whitespace': 'off',
    'max-len': ['warn', {
      code: 135,
      ignorePattern: 'd="([\\s\\S]*?)"',
      ignoreTemplateLiterals: true,
      ignoreStrings: true,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreTrailingComments: true,
      ignoreRegExpLiterals: true,
    }],
    '@typescript-eslint/no-empty-function': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'no-sequences': 'off',
  },
  ignorePatterns: [
    'node_modules',
    'build',
    'dist',
    'public',
  ],
};
