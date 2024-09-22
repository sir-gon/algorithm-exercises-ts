import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import _import from 'eslint-plugin-import';
import jest from 'eslint-plugin-jest';
import prettier from 'eslint-plugin-prettier';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [
  {
    ignores: ['**/coverage', '**/dist', '**/node_modules', '**/*.js']
  },
  ...fixupConfigRules(
    compat.extends(
      'eslint:recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-type-checked',
      'plugin:@typescript-eslint/stylistic-type-checked',
      'airbnb-base',
      'prettier',
      'plugin:import/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:jest/all'
    )
  ),
  {
    plugins: {
      '@typescript-eslint': fixupPluginRules(typescriptEslint),
      import: fixupPluginRules(_import),
      jest: fixupPluginRules(jest),
      prettier
    },

    languageOptions: {
      parser: tsParser,
      ecmaVersion: 5,
      sourceType: 'script',

      parserOptions: {
        project: true
      }
    },

    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx']
      },

      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: '.'
        }
      }
    },

    rules: {
      'prettier/prettier': ['error'],

      'import/extensions': [
        'error',
        'always',
        {
          pattern: {
            ts: 'never'
          }
        }
      ],

      'no-restricted-syntax': 0,
      'no-console': 'off',
      'no-underscore-dangle': 0,

      'no-plusplus': [
        'error',
        {
          allowForLoopAfterthoughts: true
        }
      ],

      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': 'error'
    }
  },
  {
    files: ['**/*.ts', '**/*.mts', '**/*.cts', '**/*.tsx'],

    rules: {
      '@typescript-eslint/explicit-function-return-type': 'error'
    }
  },
  {
    ignores: ["dist/*", "coverage/*", "node_modules/*", "eslint.config.mjs"]
  }
];
