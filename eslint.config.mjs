import globals from 'globals';
import pluginJs from '@eslint/js';
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import jsdocPlugin from 'eslint-plugin-jsdoc';
import importPlugin from 'eslint-plugin-import';

export default [
  pluginJs.configs.recommended,
  {
    ignores: ['node_modules/**', 'dist/**']
  },
  {
    languageOptions: {
      globals: globals.browser,
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: '.',
        sourceType: 'module'
      }
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      prettier: prettierPlugin,
      jsdoc: jsdocPlugin,
      import: importPlugin
    },
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      ...typescriptPlugin.configs.recommended.rules,
      ...prettierConfig.rules,
      ...jsdocPlugin.configs['flat/recommended'].rules,
      semi: 'error',
      eqeqeq: ['error', 'always'],
      'prettier/prettier': 'error',
      'no-console': ['error', { allow: ['error', 'info'] }],
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'sort-imports': ['error', { ignoreDeclarationSort: true }],
      'import/first': 'error',
      'import/order': [
        'error',
        {
          'newlines-between': 'never',
          alphabetize: { order: 'asc', caseInsensitive: false }
        }
      ],
      'jsdoc/check-syntax': 'warn',
      'jsdoc/check-values': 'error',
      'jsdoc/require-description': 'warn',
      'jsdoc/require-returns-description': 'off',
      'jsdoc/require-jsdoc': [
        'error',
        {
          require: {
            FunctionDeclaration: true,
            MethodDefinition: true,
            ClassDeclaration: true,
            ArrowFunctionExpression: true,
            FunctionExpression: true
          }
        }
      ]
    }
  }
];
