const {
  BUGGY,
  CODE_FORMATTING,
  ERROR,
  OFF,
  SUCCESSOR,
  TYPESCRIPT,
  TYPESCRIPT_EXTENDED,
  WARN,
} = require('./utils');

const base = require('.');

module.exports = {
  extends: './index.js',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    // plugin:eslint ***********************************************************
    // rules URL: https://github.com/eslint/eslint/tree/master/docs/rules

    // Disabled because TypeScript inherently checks
    'strict': [ERROR, 'never'],

    'constructor-super': OFF(TYPESCRIPT),
    'getter-return': OFF(TYPESCRIPT),
    'no-const-assign': OFF(TYPESCRIPT),
    'no-dupe-args': OFF(TYPESCRIPT),
    'no-dupe-keys': OFF(TYPESCRIPT),
    'no-func-assign': OFF(TYPESCRIPT),
    'no-new-symbol': OFF(TYPESCRIPT),
    'no-obj-calls': OFF(TYPESCRIPT),
    'no-this-before-super': OFF(TYPESCRIPT),
    'no-undef': OFF(TYPESCRIPT),
    'no-unreachable': OFF(TYPESCRIPT),
    'no-unsafe-negation': OFF(TYPESCRIPT),
    'valid-typeof': OFF(TYPESCRIPT),

    // Disabled because @typescript-eslint extends the rule
    'brace-style': TYPESCRIPT_EXTENDED,
    'default-param-last': TYPESCRIPT_EXTENDED,
    'dot-notation': TYPESCRIPT_EXTENDED,
    'init-declarations': TYPESCRIPT_EXTENDED,
    'no-dupe-class-members': TYPESCRIPT_EXTENDED,
    'no-extra-parens': TYPESCRIPT_EXTENDED,
    'no-extra-semi': TYPESCRIPT_EXTENDED,
    'no-loss-of-precision': TYPESCRIPT_EXTENDED,
    'no-empty-function': TYPESCRIPT_EXTENDED,
    'no-implied-eval': TYPESCRIPT_EXTENDED,
    'no-invalid-this': TYPESCRIPT_EXTENDED,
    'no-loop-func': TYPESCRIPT_EXTENDED,
    'no-magic-numbers': TYPESCRIPT_EXTENDED,
    'no-redeclare': TYPESCRIPT_EXTENDED,
    'no-shadow': TYPESCRIPT_EXTENDED,
    'no-throw-literal': TYPESCRIPT_EXTENDED,
    'no-unused-expressions': TYPESCRIPT_EXTENDED,
    'no-unused-vars': TYPESCRIPT_EXTENDED,
    'no-use-before-define': TYPESCRIPT_EXTENDED,
    'comma-dangle': TYPESCRIPT_EXTENDED,
    'comma-spacing': TYPESCRIPT_EXTENDED,
    'func-call-spacing': TYPESCRIPT_EXTENDED,
    'indent': TYPESCRIPT_EXTENDED,
    'keyword-spacing': TYPESCRIPT_EXTENDED,
    'lines-between-class-members': TYPESCRIPT_EXTENDED,
    'no-array-constructor': TYPESCRIPT_EXTENDED,
    'object-curly-spacing': TYPESCRIPT_EXTENDED,
    'quotes': TYPESCRIPT_EXTENDED,
    'require-await': TYPESCRIPT_EXTENDED,
    'semi': TYPESCRIPT_EXTENDED,
    'space-before-function-paren': TYPESCRIPT_EXTENDED,
    'space-infix-ops': TYPESCRIPT_EXTENDED,
    'no-duplicate-imports': TYPESCRIPT_EXTENDED,
    'no-useless-constructor': TYPESCRIPT_EXTENDED,
    'camelcase': SUCCESSOR('@typescript-eslint/naming-convention'),

    // plugin:@shopify *********************************************************
    // rules URL: https://github.com/Shopify/web-configs/tree/main/packages/eslint-plugin#plugin-provided-rules
    '@shopify/typescript/prefer-pascal-case-enums': WARN,
    '@shopify/typescript/prefer-singular-enums': WARN,
    '@shopify/typescript/prefer-build-client-schema': WARN,

    // plugin:import ***********************************************************
    // rules URL: https://github.com/benmosher/eslint-plugin-import#rules
    'import/named': BUGGY(
      'eslint-plugin-import:v2.21.1',
      "doesn't work with TypeScript types, may need to add https://github.com/rx-ts/eslint-import-resolver-ts"
    ),
    'import/no-unresolved': OFF(TYPESCRIPT),

    // plugin:jsdoc ************************************************************
    // rules URL: https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules
    'jsdoc/no-types': WARN,
    'jsdoc/no-undefined-types': OFF(TYPESCRIPT),

    // plugin:@typescript-eslint ***********************************************
    // rules URL: https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin

    // extension rules
    '@typescript-eslint/brace-style': base.rules['brace-style'],
    '@typescript-eslint/comma-dangle': base.rules['comma-dangle'],
    '@typescript-eslint/comma-spacing': base.rules['comma-spacing'],
    '@typescript-eslint/default-param-last': base.rules['default-param-last'],
    '@typescript-eslint/dot-notation': base.rules['dot-notation'],
    '@typescript-eslint/func-call-spacing': base.rules['func-call-spacing'],
    '@typescript-eslint/indent': base.rules.indent,
    '@typescript-eslint/init-declarations': base.rules['init-declarations'],
    '@typescript-eslint/keyword-spacing': base.rules['keyword-spacing'],
    '@typescript-eslint/lines-between-class-members':
      base.rules['lines-between-class-members'],
    '@typescript-eslint/no-array-constructor':
      base.rules['no-array-constructor'],
    '@typescript-eslint/no-dupe-class-members': OFF(TYPESCRIPT),
    '@typescript-eslint/no-duplicate-imports':
      base.rules['no-duplicate-imports'],
    '@typescript-eslint/no-empty-function': base.rules['no-empty-function'],
    '@typescript-eslint/no-extra-parens': base.rules['no-extra-parens'],
    '@typescript-eslint/no-extra-semi': base.rules['no-extra-semi'],
    '@typescript-eslint/no-implied-eval': base.rules['no-implied-eval'],
    '@typescript-eslint/no-invalid-this': base.rules['no-invalid-this'],
    '@typescript-eslint/no-loop-func': base.rules['no-loop-func'],
    '@typescript-eslint/no-loss-of-precision':
      base.rules['no-loss-of-precision'],
    '@typescript-eslint/no-magic-numbers': base.rules['no-magic-numbers'],
    '@typescript-eslint/no-redeclare': base.rules['no-redeclare'],
    '@typescript-eslint/no-shadow': base.rules['no-shadow'],
    '@typescript-eslint/no-throw-literal': base.rules['no-throw-literal'],
    '@typescript-eslint/no-unused-expressions':
      base.rules['no-unused-expressions'],
    '@typescript-eslint/no-unused-vars': base.rules['no-unused-vars'],
    '@typescript-eslint/no-use-before-define':
      base.rules['no-use-before-define'],
    '@typescript-eslint/no-useless-constructor':
      base.rules['no-useless-constructor'],
    '@typescript-eslint/object-curly-spacing':
      base.rules['object-curly-spacing'],
    '@typescript-eslint/quotes': base.rules.quotes,
    '@typescript-eslint/require-await': base.rules['require-await'],
    '@typescript-eslint/return-await': base.rules['no-return-await'],
    '@typescript-eslint/semi': base.rules.semi,
    '@typescript-eslint/space-before-function-paren':
      base.rules['space-before-function-paren'],
    '@typescript-eslint/space-infix-ops': base.rules['space-infix-ops'],

    // Possible Errors
    '@typescript-eslint/adjacent-overload-signatures': WARN,
    '@typescript-eslint/array-type': [WARN, { default: 'array-simple' }],
    '@typescript-eslint/await-thenable': WARN,
    '@typescript-eslint/ban-ts-comment': [
      WARN,
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
      },
    ],
    '@typescript-eslint/ban-tslint-comment': WARN,
    '@typescript-eslint/ban-types': [
      WARN,
      {
        types: {
          'String': {
            message: 'Use string instead',
            fixWith: 'string',
          },
          'Boolean': {
            message: 'Use boolean instead',
            fixWith: 'boolean',
          },
          'Number': {
            message: 'Use number instead',
            fixWith: 'number',
          },
          'Symbol': {
            message: 'Use symbol instead',
            fixWith: 'symbol',
          },
          'Function': {
            message: [
              'The `Function` type accepts any function-like value.',
              'It provides no type safety when calling the function, which can be a common source of bugs.',
              'It also accepts things like class declarations, which will throw at runtime as they will not be called with `new`.',
              'If you are expecting the function to accept certain arguments, you should explicitly define the function shape.',
            ].join('\n'),
          },
          'Array': {
            fixWith: 'unknown[]',
            message: 'use something like `unknown[]` instead',
          },
          // object typing
          'Object': {
            fixWith: 'Record<string, unknown>',
            message: [
              'The `Object` type actually means "any non-nullish value", so it is marginally better than `unknown`.',
              '- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
              '- If you want a type meaning "any value", you probably want `unknown` instead.',
            ].join('\n'),
          },
          '{}': {
            fixWith: 'Record<string, unknown>',
            message: [
              '`{}` actually means "any non-nullish value".',
              '- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
              '- If you want a type meaning "any value", you probably want `unknown` instead.',
            ].join('\n'),
          },
          'object': {
            fixWith: 'Record<string, unknown>',
            message: [
              'The `object` type is currently hard to use ([see this issue](https://github.com/microsoft/TypeScript/issues/21732)).',
              'Consider using `Record<string, unknown>` instead, as it allows you to more easily inspect and use the keys.',
            ].join('\n'),
          },
        },
      },
    ],
    '@typescript-eslint/class-literal-property-style': WARN,
    '@typescript-eslint/consistent-indexed-object-style': [
      WARN,
      'index-signature',
    ], // index-signature is better because it allows you to provide a variable name for the key which serves as a sort of documentation of the author's intent
    '@typescript-eslint/consistent-type-assertions': [
      WARN,
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'allow-as-parameter',
      },
    ],
    '@typescript-eslint/consistent-type-definitions': [WARN, 'interface'],
    '@typescript-eslint/consistent-type-imports': [
      WARN,
      { prefer: 'no-type-imports', disallowTypeAnnotations: true },
    ], // Type imports don't work well with sorting at this time
    '@typescript-eslint/explicit-function-return-type': [
      WARN,
      {
        allowExpressions: true,
        allowHigherOrderFunctions: true,
        allowTypedFunctionExpressions: true,
        allowDirectConstAssertionInArrowFunctions: true,
        allowConciseArrowFunctionExpressionsStartingWithVoid: true,
      },
    ],
    '@typescript-eslint/explicit-member-accessibility': [
      'warn',
      {
        accessibility: 'explicit',
        overrides: {
          accessors: 'explicit',
          constructors: 'no-public',
          methods: 'explicit',
          properties: 'explicit',
          parameterProperties: 'explicit',
        },
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': OFF(
      'I prefer to rely on type inferencing as much as possible.'
    ),
    '@typescript-eslint/member-delimiter-style': OFF(CODE_FORMATTING),
    '@typescript-eslint/member-ordering': [
      WARN,
      {
        default: [
          'signature',

          'private-constructor',
          'protected-constructor',
          'public-constructor',

          'private-static-field',
          'private-static-method',
          'protected-static-field',
          'protected-static-method',
          'public-static-field',
          'public-static-method',

          'private-decorated-field',
          'protected-decorated-field',
          'public-decorated-field',
          'private-instance-field',
          'protected-instance-field',
          'public-instance-field',
          'private-abstract-field',
          'protected-abstract-field',
          'public-abstract-field',

          'private-decorated-method',
          'protected-decorated-method',
          'public-decorated-method',
          'private-instance-method',
          'protected-instance-method',
          'public-instance-method',
          'private-abstract-method',
          'protected-abstract-method',
          'public-abstract-method',
        ],
      },
    ],
    '@typescript-eslint/method-signature-style': WARN, // I use strictFunctionTypes, and thus anything that gets me more contravariance is my friend
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'memberLike',
        format: ['camelCase'],
        leadingUnderscore: 'forbid',
      },
      {
        selector: 'variableLike',
        format: ['camelCase'],
        leadingUnderscore: 'forbid',
      },
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
        leadingUnderscore: 'forbid',
      },
      {
        selector: 'variable',
        types: ['boolean', 'string', 'number'],
        format: ['UPPER_CASE'],
        modifiers: ['const'],
        leadingUnderscore: 'forbid',
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        leadingUnderscore: 'forbid',
      },
      {
        selector: 'function',
        format: ['camelCase'],
        leadingUnderscore: 'forbid',
      },
      {
        selector: 'typeParameter',
        format: ['PascalCase'],
        custom: {
          regex: '^[A-Z]$',
          match: true,
        },
        leadingUnderscore: 'forbid',
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
        leadingUnderscore: 'forbid',
      },
      {
        selector: 'variable',
        modifiers: ['destructured'],
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
    ],
    '@typescript-eslint/no-base-to-string': WARN,
    '@typescript-eslint/no-confusing-non-null-assertion': WARN,
    '@typescript-eslint/no-confusing-void-expression': WARN,
    '@typescript-eslint/no-dynamic-delete': WARN,
    '@typescript-eslint/no-empty-interface': OFF(
      'Often has legitimate use when mocking out an API or showing intent'
    ),
    '@typescript-eslint/no-explicit-any': WARN,
    '@typescript-eslint/no-extra-non-null-assertion': WARN, // I really love that this rule had to be made.  `thing!!!!!!!!!!!!!!!.shutUpTypeScript()`, lol.
    '@typescript-eslint/no-extraneous-class': [
      WARN,
      { allowWithDecorator: true, allowConstructorOnly: true },
    ],
    '@typescript-eslint/no-floating-promises': WARN,
    '@typescript-eslint/no-for-in-array': WARN,
    '@typescript-eslint/no-implicit-any-catch': WARN,
    '@typescript-eslint/no-inferrable-types': WARN,
    '@typescript-eslint/no-invalid-void-type': WARN,
    '@typescript-eslint/no-misused-new': ERROR,
    '@typescript-eslint/no-misused-promises': WARN,
    '@typescript-eslint/no-namespace': WARN,
    '@typescript-eslint/no-non-null-asserted-optional-chain': WARN,
    '@typescript-eslint/no-non-null-assertion': WARN, // I'll quote a friend (who is a better programmer than I am) about the non null assertion: "I wish I never learned of its existence."  Indeed, I view this character as a member of the same family as `any` and `@ts-ignore`.
    '@typescript-eslint/no-parameter-properties': OFF(
      'Parameter properties help clean up constructors and are particularly useful with dependency injection'
    ),
    '@typescript-eslint/no-require-imports': WARN,
    '@typescript-eslint/no-this-alias': WARN,
    '@typescript-eslint/no-type-alias': OFF(
      'The absence of Opaque types in TypeScript is the only remaining feature I miss from FlowType.  Until such a thing is implemented some day (and we seem to get closer every major release) I will continue to use aliases for primitive types.'
    ),
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': WARN,
    '@typescript-eslint/no-unnecessary-condition': WARN,
    '@typescript-eslint/no-unnecessary-qualifier': WARN,
    '@typescript-eslint/no-unnecessary-type-arguments': WARN,
    '@typescript-eslint/no-unnecessary-type-assertion': WARN,
    '@typescript-eslint/no-unnecessary-type-constraint': WARN,
    '@typescript-eslint/no-unsafe-assignment': BUGGY(
      '@typescript-eslint/eslint-plugin:4.15.2',
      'Types do not follow the editor editor config so it ends up given many false positives'
    ),
    '@typescript-eslint/no-unsafe-call': BUGGY(
      '@typescript-eslint/eslint-plugin:4.15.2',
      'Types do not follow the editor editor config so it ends up given many false positives'
    ),
    '@typescript-eslint/no-unsafe-member-access': BUGGY(
      '@typescript-eslint/eslint-plugin:4.15.2',
      'Types do not follow the editor editor config so it ends up given many false positives'
    ),
    '@typescript-eslint/no-unsafe-return': BUGGY(
      '@typescript-eslint/eslint-plugin:4.15.2',
      'Types do not follow the editor editor config so it ends up given many false positives'
    ),
    '@typescript-eslint/non-nullable-type-assertion-style': OFF(
      'using non-null assertions cancels the benefits of the strict null-checking mode..'
    ),
    '@typescript-eslint/no-var-requires': WARN,
    '@typescript-eslint/prefer-as-const': WARN,
    '@typescript-eslint/prefer-enum-initializers': WARN,
    '@typescript-eslint/prefer-for-of': SUCCESSOR('unicorn/no-for-loop'),
    '@typescript-eslint/prefer-function-type': OFF(
      'Certain abstractions read clearer when documented by interfaces, even those with only one call signature.'
    ),
    '@typescript-eslint/prefer-includes': WARN,
    '@typescript-eslint/prefer-literal-enum-member': WARN,
    '@typescript-eslint/prefer-namespace-keyword': OFF(),
    '@typescript-eslint/prefer-nullish-coalescing': WARN,
    '@typescript-eslint/prefer-optional-chain': WARN,
    '@typescript-eslint/prefer-readonly': WARN, // abiding by this rule will ease transition to the private methods proposal https://github.com/tc39/proposal-private-methods which, because it's at stage 3, will be in the language
    '@typescript-eslint/prefer-readonly-parameter-types': [
      WARN,
      { ignoreInferredTypes: true },
    ],
    '@typescript-eslint/prefer-reduce-type-parameter': WARN,
    '@typescript-eslint/prefer-regexp-exec': WARN,
    '@typescript-eslint/prefer-string-starts-ends-with': WARN,
    '@typescript-eslint/prefer-ts-expect-error': WARN,
    '@typescript-eslint/promise-function-async': WARN,
    '@typescript-eslint/require-array-sort-compare': [
      WARN,
      { ignoreStringArrays: true },
    ],
    '@typescript-eslint/restrict-plus-operands': [
      WARN,
      { checkCompoundAssignments: true },
    ],
    '@typescript-eslint/restrict-template-expressions': BUGGY(
      '@typescript-eslint:v2.9.0',
      'seems to have a lot of false positives with the null coalescing operator'
    ), // WARN,
    '@typescript-eslint/sort-type-union-intersection-members': WARN,
    '@typescript-eslint/strict-boolean-expressions': WARN,
    '@typescript-eslint/switch-exhaustiveness-check': WARN,
    '@typescript-eslint/triple-slash-reference': WARN,
    '@typescript-eslint/type-annotation-spacing': OFF(CODE_FORMATTING),
    '@typescript-eslint/typedef': OFF(
      'type inference is your friend... use it.'
    ),
    '@typescript-eslint/unbound-method': [
      WARN,
      {
        ignoreStatic: true,
      },
    ],
    '@typescript-eslint/unified-signatures': WARN,
  },
};
