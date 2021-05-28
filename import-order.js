const { OFF, PROJECT_BY_PROJECT, TYPESCRIPT, WARN } = require('./utils');

module.exports = {
  env: { es6: true },
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      impliedStrict: true,
    },
  },
  plugins: ['@typescript-eslint', 'import', 'sort-export-all'],
  rules: {
    // plugin:eslint ***********************************************************
    // rules URL: https://github.com/eslint/eslint/tree/master/docs/rules
    'no-duplicate-imports': OFF(TYPESCRIPT),
    'no-restricted-imports': OFF(PROJECT_BY_PROJECT),
    'sort-imports': [
      WARN,
      {
        ignoreDeclarationSort: true,
      },
    ],

    // plugin:@typescript-eslint ***********************************************
    // rules URL: https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
    '@typescript-eslint/no-duplicate-imports': WARN,

    // plugin:import ***********************************************************
    // rules URL: https://github.com/benmosher/eslint-plugin-import#rules
    'import/first': WARN,
    'import/newline-after-import': WARN,
    'import/no-duplicates': WARN,
    'import/order': [
      WARN,
      {
        'alphabetize': {
          order: 'asc',
          caseInsensitive: false,
        },
        'groups': [['external', 'builtin'], 'internal', 'parent', 'sibling'],
        'newlines-between': 'always',
        'pathGroups': [
          {
            group: 'external',
            pattern:
              '{@angular/**,@nestjs/**,react,react-native,react-*,@vue/**,vue,@ngneat/spectator,@ngneat/spectator/**}',
            position: 'before',
          },
        ],
        'pathGroupsExcludedImportTypes': ['react'],
      },
    ],

    // plugin:sort-export-all **************************************************
    // rules URL: https://github.com/nirtamir2/eslint-plugin-sort-export-all
    'sort-export-all/sort-export-all': WARN,
  },
};
