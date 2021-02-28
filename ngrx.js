'use strict';

const { SUCCESSOR, WARN } = require('./utils');

module.exports = {
  plugins: ['ngrx'],
  rules: {
    // plugin:ngrx **************************************************************
    // rules URL: https://github.com/timdeschryver/eslint-plugin-ngrx#rules
    'ngrx/action-hygiene': WARN,
    'ngrx/avoid-combining-selectors': WARN,
    'ngrx/avoid-dispatching-multiple-actions-sequentially': WARN,
    'ngrx/avoid-mapping-selectors': WARN,
    'ngrx/no-dispatch-in-effects': WARN,
    'ngrx/no-effect-decorator': WARN,
    'ngrx/no-effect-decorator-and-creator': SUCCESSOR(
      'ngrx/no-effect-decorator'
    ),
    'ngrx/no-effects-in-providers': WARN,
    'ngrx/no-multiple-actions-in-effects': WARN,
    'ngrx/no-multiple-stores': WARN,
    'ngrx/no-reducer-in-key-names': WARN,
    'ngrx/no-typed-store': WARN,
    'ngrx/on-function-explicit-return-type': WARN,
    'ngrx/prefer-inline-action-props': WARN,
    'ngrx/select-style': WARN,
    'ngrx/use-lifecycle-interface': WARN,
    'ngrx/use-selector-in-select': WARN,
  },
};
