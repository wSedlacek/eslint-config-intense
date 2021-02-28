'use strict';

const { NOT_VALUABLE, OFF, WARN } = require('./utils');

module.exports = {
  plugins: ['ramda'],
  rules: {
    // plugin:ramda ************************************************************
    // rules URL: https://github.com/ramda/eslint-plugin-ramda
    'ramda/always-simplification': WARN,
    'ramda/any-pass-simplification': WARN,
    'ramda/both-simplification': WARN,
    'ramda/complement-simplification': WARN,
    'ramda/compose-pipe-style': OFF('I use pipe everywhere.'),
    'ramda/compose-simplification': WARN,
    'ramda/cond-simplification': WARN,
    'ramda/either-simplification': WARN,
    'ramda/eq-by-simplification': WARN,
    'ramda/filter-simplification': WARN,
    'ramda/if-else-simplification': WARN,
    'ramda/map-simplification': WARN,
    'ramda/merge-simplification': WARN,
    'ramda/no-redundant-and': WARN,
    'ramda/no-redundant-not': WARN,
    'ramda/no-redundant-or': WARN,
    'ramda/pipe-simplification': WARN,
    'ramda/prefer-both-either': OFF(
      `${NOT_VALUABLE}, sometimes the list shrinks and grows over time and I don't want to bother flipping it back and forth between both and allPass just for nothing.`
    ),
    'ramda/prefer-complement': WARN,
    'ramda/prefer-ramda-boolean': OFF(NOT_VALUABLE),
    'ramda/prop-satisfies-simplification': WARN,
    'ramda/reduce-simplification': WARN,
    'ramda/reject-simplification': WARN,
    'ramda/set-simplification': WARN,
    'ramda/unless-simplification': WARN,
    'ramda/when-simplification': WARN,
  },
};
