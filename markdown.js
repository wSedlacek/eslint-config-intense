const { BUGGY } = require('./utils');

module.exports = {
  parser: 'markdown-eslint-parser',
  plugins: ['codegen', 'md'],
  rules: {
    // plugin:md ***************************************************************
    // rules URL: https://github.com/leo-buneev/eslint-plugin-md#usage
    'md/remark': [
      BUGGY(
        'eslint-plugin-markdown@2.0.0',
        'The heading increment is given false positives'
      ),
      {
        plugins: [
          'preset-lint-markdown-style-guide',
          'frontmatter',
          // Disable rules handled by Prettier
          ['lint-maximum-line-length', false],
          ['lint-emphasis-marker', false],
          ['lint-list-item-content-indent', false],
          ['lint-list-item-indent', false],
          ['lint-list-item-spacing', false],
          ['lint-ordered-list-marker-value', false],
          ['lint-no-consecutive-blank-lines', false],
          ['lint-table-cell-padding', false],
          ['lint-link-title-style', false],
          ['lint-no-shortcut-reference-link', false],
        ],
      },
    ],
  },
};
