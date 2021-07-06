module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node":true,
        "jest": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
    },
    globals: {
      "process": true,
      "__dirname": true,
      "module": true,
      "page": true,
      "browser": true
    }
};
