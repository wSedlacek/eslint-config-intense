'use strict';

const { ERROR, WARN } = require('./utils');

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: './react.js',
  plugins: ['react-native'],
  rules: {
    // plugin:react-native ******************************************************************
    // rules URL: https://github.com/
    'react-native/no-color-literals': WARN,
    'react-native/no-inline-styles': WARN,
    'react-native/no-raw-text': ERROR,
    'react-native/no-single-element-style-arrays': WARN,
    'react-native/no-unused-styles': WARN,
    'react-native/sort-styles': WARN,
    'react-native/split-platform-components': WARN,
  },
};
