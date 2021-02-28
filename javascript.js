'use strict';

/* eslint-disable sort-keys -- Keys are grouped based on plugins */

const { JAVASCRIPT, OFF, WARN } = require('./utils');

module.exports = {
  extends: './index.js',
  rules: {
    // plugin:eslint ***********************************************************
    // rules URL: https://github.com/eslint/eslint/tree/master/docs/rules
    'no-console': OFF(JAVASCRIPT),
    'fp/no-mutation': [WARN, { allowThis: true, commonjs: true }],

    // plugin:import ***********************************************************
    // rules URL: https://github.com/benmosher/eslint-plugin-import#rules
    'import/named': OFF(JAVASCRIPT),
    'import/no-commonjs': OFF(
      'Many tools written in node do not support esm or other formats'
    ),
    'import/unambiguous': OFF(JAVASCRIPT),

    // plugin:node *************************************************************
    // rules URL: https://github.com/mysticatea/eslint-plugin-node#-rules
    'node/no-unsupported-features/es-builtins': WARN,
    'node/no-unsupported-features/es-syntax': WARN,
    'node/no-unsupported-features/node-builtins': WARN,
    'node/global-require': OFF(JAVASCRIPT),
  },
};

/* eslint-enable sort-keys -- Keys are grouped based on plugins */
