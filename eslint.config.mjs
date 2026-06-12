import neostandard from 'neostandard';
import tseslint from 'typescript-eslint';
import jest from 'eslint-plugin-jest';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
  ...neostandard({
    ts: true,
  }),
  {
    ignores: ['**/coverage', '**/dist', '**/node_modules', 'eslint.config.mjs'],
  },
  {
    files: ['**/*.ts', '**/*.mts', '**/*.cts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: true,
      },
    },
    plugins: {
      jest,
      prettier,
    },
    rules: {
      ...jest.configs.all.rules,
      ...prettierConfig.rules,
      'prettier/prettier': ['error'],
      'no-restricted-syntax': 0,
      'no-console': 'off',
      'no-underscore-dangle': 0,
      'no-plusplus': [
        'error',
        {
          allowForLoopAfterthoughts: true,
        },
      ],
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
        },
      ],
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': 'error',
      '@typescript-eslint/explicit-function-return-type': 'error',
    },
  }
);
