'use strict';

const { MARKDOWN, OFF } = require('./utils');

const base = require('.');

module.exports = {
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
    },
    ecmaVersion: base.parserOptions.ecmaVersion,
    sourceType: 'module',
  },
  rules: {
    // plugin:eslint ***********************************************************
    // rules URL: https://github.com/eslint/eslint/tree/master/docs/rules
    'no-undef': OFF(MARKDOWN),
    'no-unused-expressions': OFF(MARKDOWN),
    'no-unused-vars': OFF(MARKDOWN),

    // plugin:unicorn **********************************************************
    // rules URL: https://github.com/sindresorhus/eslint-plugin-unicorn#rules
    'unicorn/filename-case': OFF(MARKDOWN),
  },
};
