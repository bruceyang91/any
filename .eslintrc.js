module.exports = {
    "extends": "eslint:recommended",
    "rules": {
        "no-console":["error",{
           "allow":["warn","error","info"]
        }],
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 5
    },
    "globals":{

    },
    "env": {
        "browser": true,
        "commonjs": true
    }
};
