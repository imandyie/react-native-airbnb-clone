module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "rules": {
	"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
	"no-alert": 0,
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "react/no-unused-prop-types": "off",
    "react/prefer-stateless-function": "off",
    "react/prop-types": "off",
    "import/no-extraneous-dependencies": "off",
    "no-console": "off",
    "no-unused-vars": [
      "error",
      {
        "ignoreRestSiblings": true
      }
    ],
    "complexity": [
      "error",
      12
    ],
    "comma-dangle": [
      "error",
      "always-multiline"
    ],
    "quotes": [
      2,
      "single",
      "avoid-escape"
    ]
  },
  "env": {
    "browser": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
  "sourceType": "module",
  "ecmaVersion": 6,
  "ecmaFeatures": {
    "jsx": true
    },
  },
  "root": true,
  "globals": {
    "fetch": false,
    "console": false,
    "require": false,
    "alert": false,
    "setTimeout": false,
    "Promise": false,
    "__DEV__": false
  },
};