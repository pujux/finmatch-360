// @ts-check
/* eslint-disable import/no-anonymous-default-export */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends(
    'next/core-web-vitals',
    'plugin:import/recommended',
    'prettier',
  ),
  {
    plugins: {
      prettier,
      '@typescript-eslint': tseslint,
    },
    rules: {
      'import/named': 'off',
      'arrow-body-style': ['error', 'as-needed'],
      eqeqeq: ['error', 'smart'],
      'guard-for-in': 'error',
      'no-bitwise': 'error',
      'no-caller': 'error',
      'no-console': [
        'warn',
        {
          allow: ['error', 'warn'],
        },
      ],
      'no-eval': 'error',
      'no-new-wrappers': 'error',
      'no-throw-literal': 'error',
      'no-undef-init': 'error',
      'prefer-arrow-callback': 'error',
      radix: 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-empty-function': [
        'error',
        {
          allow: ['constructors', 'arrowFunctions'],
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'none',
          ignoreRestSiblings: true,
          argsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/explicit-function-return-type': ['off'],
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          accessibility: 'no-public',
        },
      ],
      //   '@typescript-eslint/member-delimiter-style': [
      //     'error',
      //     {
      //       multiline: {
      //         delimiter: 'semi',
      //         requireLast: true,
      //       },
      //       singleline: {
      //         delimiter: 'semi',
      //         requireLast: false,
      //       },
      //     },
      //   ],
      '@typescript-eslint/no-shadow': [
        'error',
        {
          hoist: 'all',
        },
      ],
      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowShortCircuit: false,
          allowTernary: true,
        },
      ],
      '@typescript-eslint/prefer-function-type': 'error',
      '@typescript-eslint/unified-signatures': 'error',
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      'import/no-unresolved': 'off',
      'import/namespace': 'off',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
          pathGroupsExcludedImportTypes: ['builtin'],
        },
      ],
      //   '@typescript-eslint/no-extra-semi': 'error',
      'no-extra-semi': 'off',
    },
  },
];
