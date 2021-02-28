'use strict';

/**
 * @param {string} _reason the rationale for not using the rule.
 * @returns {'off'} the rule disabled
 */
module.exports.OFF = (_reason) => 'off';

/**
 * Some plugins extend rules of other plugins.
 * For example, the typescript plugin may extend a rule in the base eslint rule set.
 *
 * @param {string} _ruleId the rationale for not using the rule.
 * @returns {'off'} the rule disabled
 */
module.exports.SUCCESSOR = (_ruleId) => 'off';

/**
 * Used for `@typescript-eslint` extension rules for eslint rules of the same name.
 * see: https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#extension-rules
 */
module.exports.TYPESCRIPT_EXTENDED = module.exports.SUCCESSOR(
  '@typescript-eslint/*'
);

module.exports.WARN = 'warn';
module.exports.ERROR = 'error';
module.exports.DEPRECATED = 'off';

/**
 * used when a rule is only turned off because it was found not to work well.
 *
 * @param {string} _asOfVersion the version of the parser or plugin when last investigated
 * @param {string} _reason the reason why this rule was found to be buggy
 * @returns {'off'} the rule disabled
 */
module.exports.BUGGY = (_asOfVersion, _reason) => 'off';

/**
 * This is useful when adding new rules at once.
 * I first write in all the rules and set them to UNKNOWN and then change them to other values as I individually address them.
 */
module.exports.UNKNOWN = 'off';

/** Used to signal that while a rule may have utility, it should really be configured differently depending on the project. */
module.exports.PROJECT_BY_PROJECT =
  'This is a project-by-project rule that should be configured differently depending on the project.';

/** Used to signify that the rule in question is borderline-useless. */
module.exports.NOT_VALUABLE =
  "I don't see enough value to justify including this rule.";

/**
 * Used to signal that while a rule may be useful for formatting, formatting itself ise beyond the scope of this config
 */
module.exports.CODE_FORMATTING =
  'Code formatting rules are unnecessary when using prettier';

/** This rule is turned off in an override for *.js files only because it requires typescript */
module.exports.JAVASCRIPT = 'off';

module.exports.MARKDOWN = 'off';

module.exports.TYPESCRIPT = 'off';

module.exports.USER_DISCRETION = 'off';

module.exports.restrictedGlobals = require('confusing-browser-globals');
