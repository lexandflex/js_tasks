module.exports = {
  extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'func-names': ['error', 'never'],
    'space-before-function-paren': ['error', 'always'],
    semi: ['error', 'never'],
    'linebreak-style': 0,
    'prefer-destructuring': 'error',
    'max-len': [
      'warn',
      {
        code: 115,
        ignoreUrls: true,
        ignorePattern: 'import',
      },
    ],
    'no-unused-vars': 'warn',
    'no-extend-native': 'off',
    'operator-linebreak': 'warn',
    'comma-dangle': [
      2,
      'always-multiline',
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
    'arrow-parens': ['error', 'as-needed'],
    'import/no-extraneous-dependencies': [2, { devDependencies: ['**/test.tsx', '**/test.ts'] }],
    '@typescript-eslint/indent': [2, 2],
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'class-methods-use-this': 0,
    'import/no-cycle': 0,
  },
}
