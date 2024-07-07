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
  ...typescriptPlugin.configs.recommended,
  ...typescriptPlugin.configs.stylistic,
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
      prettier: prettierPlugin,
      jsdoc: jsdocPlugin,
      import: importPlugin
    },
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      ...prettierConfig.rules,
      ...jsdocPlugin.configs['flat/recommended'].rules,
      semi: 'error',
      eqeqeq: ['error', 'always'],
      'prettier/prettier': 'error',
      'no-console': ['error', { allow: ['error', 'info'] }],
      'sort-imports': ['error', { ignoreDeclarationSort: true }],
      'import/first': 'error',
      'import/order': [
        'error',
        {
          'newlines-between': 'never',
          alphabetize: { order: 'asc', caseInsensitive: true },
          pathGroups: [
            {
              pattern: '~/**',
              group: 'external',
              position: 'after'
            }
          ]
        }
      ],
      'jsdoc/check-syntax': 'warn',
      'jsdoc/check-values': 'error',
      'jsdoc/no-undefined-types': ['warn', { definedTypes: ['Buffer'] }],
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
      ],
      'jsdoc/tag-lines': ['warn', 'never', { startLines: 1 }]
    }
  }
];
