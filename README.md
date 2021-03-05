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

### Special Cases

The goal isn't to prevent patterns from being used, but instead to
encourage good patterns by default and documenting where patterns
need to be broken via required descriptions on disable directives.

If for example I needed to use `let` for some reason I could do so
with the following directive.

```ts
// eslint-disable-next-line prefer-const -- This needs to be let
let something = '';
```

Requiring descriptions like this not only encourages thought about
why this pattern is being broken by the developer but by the entire
team during code review and future developers coming back to add to
and refactor this code.

### Single Warning Policy

With how powerful eslint is there is a lot of overlap between it and
other tools. These configurations intentionally disable any rules that
overlap with the functions of a tool that does a better job at enforcing
that particular rule.

With how many rules there are across the wide range of plugins this
configuration uses there are many that may overlap with each other.
Where ever possible these configurations attempt to pick a single rule
of those that overlap so that any given problem is only reported once.

#### Code Formatting

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

#### Type Checking

Writing JavaScript without Type Checking is like playing web dev on
hardcore mode. It is so easy to shot yourself, or your friend, in the foot.
We have many great tools now that luckily make our lives much easier. Chief
among them is TypeScript. While ESLint can enforce many type rules, TypeScript
does a far better job so any rules that overlap with options or checking already
done in TypeScript are intentionally disabled much like code formatting rules
and I would encourage you to explore your `tsconfig.json` options before looking
to enable any of those rules.

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
         files: '**/*.ts',
         excludedFiles: ['**/*.md.ts', '**/*.spec.ts'],
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
         excludedFiles: '**/*.md.js',
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
           'suiyobi/javascript',
           'suiyobi/angular',
           'suiyobi/rxjs',
           'suiyobi/ngrx',
           'suiyobi/markdown-snippet',
         ],
         files: '*.md.ts',
       },
     ],
     root: true,
   };
   ```

   Note: TypeScript rules are not available available in Markdown
   because while eslint knows how to parse markdown, TypeScript
   still doesn't.

   You can adjust the configuration to the needs of your project.
   You may also consider making a configuration for each package if
   you are using a monorepo to apply the proper platform configurations
   where they are applicable.

### Entry Points

#### Overview

Each of your extends should consist of either a `platform`, `framework` and
one or more `utils` OR a `other-parser`.

```js
['<platform>', '<framework>', ...utils];
// OR
['<other-parser>'];
```

The supported entry points are

#### Platforms

- `suiyobi/javascript`
- `suiyobi/typescript`

#### Frameworks

- `suiyobi/angular`
- `suiyobi/cypress`
- `suiyobi/jest`
- `suiyobi/node`
- `suiyobi/react`
- `suiyobi/react-native`

#### Utils

- `suiyobi/fp-ts`
- `suiyobi/lodash`
- `suiyobi/markdown-snippet`
- `suiyobi/ngneat`
- `suiyobi/ngrx`
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
