module.exports = {
  extends: ['@mate-academy/eslint-config-react-typescript'],
  rules: {
    'max-len': ['error', {
      ignoreTemplateLiterals: true,
      ignoreComments: true,
    }],
    "import/no-extraneous-dependencies": ["error", { 
      "devDependencies": false, 
      "optionalDependencies": false, 
      "peerDependencies": false 
    }],
    'jsx-a11y/label-has-associated-control': ["error", {
      assert: "either",
    }],
  },
};
