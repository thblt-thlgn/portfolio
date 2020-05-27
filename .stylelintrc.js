// https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configure.md#configuration
module.exports = {
  extends: 'stylelint-config-sass-guidelines',
  rules: {
    'order/properties-alphabetical-order': null,
    'selector-class-pattern': null,
    'selector-no-qualifying-type': null,
    'max-nesting-depth': 2,
    'scss/selector-no-redundant-nesting-selector': null,
    'selector-max-id': 1,
  },
};
