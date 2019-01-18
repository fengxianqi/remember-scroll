module.exports = {
  "env": {
      "browser": true,
      "commonjs": true,
      "es6": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
      "ecmaVersion": 2015,
      "sourceType": "module"
  },
  "rules": {
      "indent": [
          "error",
          2
      ],
      "linebreak-style": [
          "error",
          "unix"
      ],
      "quotes": [
          "error",
          "single"
      ],
      "semi": [
          "error",
          "never"
      ],
      "space-before-function-paren": ["error", "always"],
      "max-len": ["error", {"code": 200}],
      "no-console": "off"
  },
  globals: {
    "process": true,
    "__dirname": true
  }
};
