module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
  },
  "settings": {
    "react": {
      "version": "detect",
    },
  },
  "extends": [
  ],
 
  "parserOptions": {
    
    "ecmaFeatures": {
      "jsx": true,
    },
    "ecmaVersion": 13,
    "sourceType": "module",
  },
 
  "plugins": [
   
  ],
  "rules": {
    "object-curly-spacing": [
      2,
      "always",
    ],
    "indent": [
      2,
      2,
    ],
    "quotes": [
      "error",
      "double",
    ],
    "require-jsdoc": "off",
    "valid-jsdoc": "off",
    "linebreak-style": "off",
    "operator-linebreak": [
      "error",
      "after",
    ],
    "react/jsx-max-props-per-line": [
      "error",
      {
        "maximum": 1,
        "when": "always",
      },
    ],
    "react/jsx-first-prop-new-line": [
      "error",
      "multiline-multiprop",
    ],
    "react/jsx-closing-tag-location": [
      "error",
      "always",
    ],
    "react/jsx-closing-bracket-location": [
      "error",
      "line-aligned",
    ],
    "react/react-in-jsx-scope": "off",
  },
};
