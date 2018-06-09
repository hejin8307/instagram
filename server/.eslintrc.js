module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "parserOptions": {
        "ecmaVersion": 2017
    },
    "extends": "eslint:recommended",
    "rules": {
        'no-console': 'off',
        "indent": [
            2
        ],
        "linebreak-style": [
            "unix"
        ],
        "semi": [
            "always"
        ],
        "no-unused-vars": ["error", { "argsIgnorePattern": "next" }]
    }
};