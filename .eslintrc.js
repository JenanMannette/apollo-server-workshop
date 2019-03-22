module.exports = {
  extends: ['airbnb'],
  rules: {
    'max-len': ['error', 150, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'no-underscore-dangle': 'off',
    'no-use-before-define': ['error', { functions: false, classes: false }],
  },
};