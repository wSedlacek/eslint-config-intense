# eslint-config-suiyobi

> "Enterprise Grade Linting"

## Philosophy

When coding at scale ensuring high quality code as a project ages can
prove difficult. Linting can drastically improve code quality by front
loading many of the issues that should be caught in code review to the
point where a developer has the most context.

Eslint is a really powerful tool that can do a lot, but there are some
things it is better at than others. These configurations aim to focus
on what it is good at. Namely improving code quality by making patterns
more consistent and encouraging the use of modern language features.

### Code Formatting

Code formatting is extremely useful when working on a team as it as it
reduces the number of changes that aren't meaningful leaving only the
important parts for code review. Additionally having consistent
formatting makes code much easier to read and switch contexts in the
code base.

But, linting works best when it is showing you meaningful warnings and
potentially unexpected behavior. Code Formatting rules just increase the
noise which which makes more important warnings seem less important.

As such these configurations do not include any code formatting (quote
style, indenting, spacing, etc.) rules. There are much better tools out
there (prettier) for code formatting so I would encourage you to use
those and enable format on save before you consider overriding the eslint
configurations with code formatting rules.

## Usage

1. Install the configuration

   ```shell
   npm install -D eslint-config-suiyobi
   ```

2. Add a `.eslintrc.js` to the root of your project that looks something like this

   ```js
   module.exports = {
     overrides: [
       {
         extends: [
           'suiyobi/typescript',
           'suiyobi/angular',
           'suiyobi/rxjs',
           'suiyobi/ngrx',
         ],
         files: '**/!(*.spec).ts',
         parserOptions: { project: './tsconfig.json' },
       },
       {
         extends: ['suiyobi/typescript', 'suiyobi/jest'],
         files: '**/*.spec.ts',
         parserOptions: { project: './tsconfig.json' },
         settings: { jest: { version: 26 } },
       },
       {
         extends: ['suiyobi/angular-template'],
         files: '**/*.html',
         parserOptions: { project: './tsconfig.json' },
       },
       {
         extends: ['suiyobi/javascript', 'suiyobi/node'],
         files: '**/*.js',
       },
       {
         extends: ['suiyobi/markdown'],
         files: ['*.md'],
       },
       {
         extends: [
           'suiyobi/javascript',
           'suiyobi/node',
           'suiyobi/markdown-snippet',
         ],
         files: '*.md.js',
       },
       {
         extends: [
           'suiyobi/typescript',
           'suiyobi/angular',
           'suiyobi/rxjs',
           'suiyobi/ngrx',
           'suiyobi/markdown-snippet',
         ],
         files: '*.md.ts',
         parserOptions: { project: './tsconfig.json' },
       },
     ],
     root: true,
   };
   ```

   You can adjust the configuration to the needs of your project.
   You may also consider making a configuration for each package if
   you are using a monorepo to apply the proper platform configurations
   where they are applicable.

### Entry Points

Each of your extends should consist of either a `platform`, `framework` and
one or more `utils` OR a `other-parser`.

```js
['<platform>', '<framework>', ...utils];
// OR
['<other-parser>'];
```

The supported entry points are

#### Platforms

- `suiyobi/typescript`
- `suiyobi/javascript`

#### Frameworks

- `suiyobi/angular`
- `suiyobi/node`
- `suiyobi/jest`
- `suiyobi/react`
- `suiyobi/react-native`

#### Utils

- `suiyobi/markdown-snippet`
- `suiyobi/lodash`
- `suiyobi/ngrx`
- `suiyobi/ngneat`
- `suiyobi/ramda`
- `suiyobi/rxjs`

#### Other Parsers

- `suiyobi/angular-template`
- `suiyobi/markdown`

### Rules Overriding

Depending on your project, you may choose to override or add additional
rules. To do this simply add a `rules` with any rules you wish to override
under the specific `overrides` where the rule applies.

#### Mono repo import sorting

If you wish to sort your can add this rule to your configuration replacing
`<your-project>` with the namespace of your packages.

```js
module.exports = {
  // ...other settings
  rules: {
    'import/order': [
      'warn',
      {
        'alphabetize': {
          caseInsensitive: false,
          order: 'asc',
        },
        'groups': [['external', 'builtin'], 'internal', 'parent', 'sibling'],
        'newlines-between': 'always',
        'pathGroups': [
          {
            group: 'external',
            pattern:
              '{@angular/**,@nestjs/**,react,react-native,react-*,@vue/**,vue}',
            position: 'before',
          },
          {
            group: 'external',
            pattern: '@<your-project>/**',
            position: 'after',
          },
        ],
        'pathGroupsExcludedImportTypes': ['react'],
      },
    ],
  },
};
```

## Credits

This project forks `eslint-config-intense` for a very strong base of linting
and tooling. Huge thanks to @dimitropoulos and his great work in setting up
strong rules. Additional thanks to my co-workers Samuel and Derek for
introducing me to some linting concepts (todo-expiration) and libraries
(ramda).
