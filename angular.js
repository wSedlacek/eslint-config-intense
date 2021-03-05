const { ERROR, OFF, SUCCESSOR, WARN } = require('./utils');

const base = require('.');

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: base.parserOptions.ecmaVersion,
    sourceType: 'module',
  },
  plugins: ['@angular-eslint', 'rxjs-angular'],
  rules: {
    // plugin:@angular-eslint **************************************************
    // rules URL: https://github.com/angular-eslint/angular-eslint#status-of-codelyzer-rules-conversion
    '@angular-eslint/contextual-decorator': WARN,
    '@angular-eslint/component-class-suffix': [
      WARN,
      {
        suffixes: ['Component', 'Page'],
      },
    ],
    '@angular-eslint/component-max-inline-declarations': WARN,
    '@angular-eslint/component-selector': WARN,
    '@angular-eslint/contextual-lifecycle': ERROR,
    '@angular-eslint/directive-class-suffix': WARN,
    '@angular-eslint/directive-selector': WARN,
    '@angular-eslint/no-attribute-decorator': WARN,
    '@angular-eslint/no-conflicting-lifecycle': WARN,
    '@angular-eslint/no-empty-lifecycle-method': WARN,
    '@angular-eslint/no-forward-ref': WARN,
    '@angular-eslint/no-host-metadata-property': WARN,
    '@angular-eslint/no-input-prefix': WARN,
    '@angular-eslint/no-input-rename': WARN,
    '@angular-eslint/no-inputs-metadata-property': WARN,
    '@angular-eslint/no-lifecycle-call': WARN,
    '@angular-eslint/no-output-native': WARN,
    '@angular-eslint/no-output-on-prefix': WARN,
    '@angular-eslint/no-output-rename': WARN,
    '@angular-eslint/no-outputs-metadata-property': WARN,
    '@angular-eslint/no-pipe-impure': WARN,
    '@angular-eslint/no-queries-metadata-property': WARN,
    '@angular-eslint/pipe-prefix': WARN,
    '@angular-eslint/prefer-on-push-component-change-detection': WARN,
    '@angular-eslint/prefer-output-readonly': WARN,
    '@angular-eslint/relative-url-prefix': WARN,
    '@angular-eslint/use-component-selector': OFF(
      'Pages do not need selectors'
    ),
    '@angular-eslint/use-component-view-encapsulation': WARN,
    '@angular-eslint/use-injectable-provided-in': WARN,
    '@angular-eslint/use-lifecycle-interface': WARN,
    '@angular-eslint/use-pipe-decorator': WARN,
    '@angular-eslint/use-pipe-transform-interface': WARN,

    // plugin:rxjs-angular ****************************************************
    // rules URL: https://github.com/cartant/eslint-plugin-rxjs-angular#rules
    'rxjs-angular/prefer-composition': SUCCESSOR(
      'rxjs-angular/prefer-takeuntil'
    ),
    'rxjs-angular/prefer-async-pipe': WARN,
    'rxjs-angular/prefer-takeuntil': WARN,
  },
};
