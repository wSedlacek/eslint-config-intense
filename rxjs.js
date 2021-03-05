const { OFF, WARN } = require('./utils');

module.exports = {
  plugins: ['rxjs'],
  rules: {
    // plugin:rxjs **************************************************************
    // rules URL: https://github.com/cartant/eslint-plugin-rxjs
    'rxjs/finnish': [
      WARN,
      {
        functions: true,
        methods: true,
        names: {
          '^(canActivate|canActivateChild|canDeactivate|canLoad|intercept|resolve|validate)$': false,
        },
        parameters: true,
        properties: true,
        types: {
          '^EventEmitter$': false,
        },
        variables: true,
      },
    ],
    'rxjs/no-async-subscribe': WARN,
    'rxjs/no-create': WARN,
    'rxjs/no-cyclic-action': WARN,
    'rxjs/no-ignored-notifier': WARN,
    'rxjs/no-ignored-replay-buffer': OFF(),
    'rxjs/no-ignored-subscription': WARN,
    'rxjs/no-ignored-takewhile-value': WARN,
    'rxjs/no-implicit-any-catch': WARN,
    'rxjs/no-index': WARN,
    'rxjs/no-internal': WARN,
    'rxjs/no-nested-subscribe': WARN,
    'rxjs/no-redundant-notify': WARN,
    'rxjs/no-sharereplay': [WARN, { allowConfig: true }],
    'rxjs/no-subject-unsubscribe': WARN,
    'rxjs/no-subject-value': OFF(),
    'rxjs/no-unbound-methods': WARN,
    'rxjs/no-unsafe-catch': WARN,
    'rxjs/no-unsafe-first': WARN,
    'rxjs/no-unsafe-subject-next': WARN,
    'rxjs/no-unsafe-switchmap': WARN,
    'rxjs/no-unsafe-takeuntil': WARN,
  },
};
