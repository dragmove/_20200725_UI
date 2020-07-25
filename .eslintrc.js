module.exports = {
  env: {
    browser: true,
    node: true,
  },
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  },
};

/*
{
  "env": {
    "browser": true,
    "commonjs": true,
    "node": true,
    "jquery": true,
    "amd": true,
    "es6": true
  },
  "globals": {},
  "extends": "eslint:recommended",
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
      "modules": true
    },
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "rules": {
    "constructor-super": "off",
    "indent": "off",
    "linebreak-style": "off",
    "no-console": "off",
    "no-extra-boolean-cast": "off",
    "no-unreachable": "off",
    "no-unused-vars": [
      "error",
      {
        "args": "none"
      }
    ],
    "no-undef": ["off"],
    "quotes": ["off"],
    "semi": ["error", "always"]
  }
}
*/
