module.exports = {
    // 运行环境
    "env": {
        "browser": true, // 浏览器环境
        "es2021": true,
        "node": true,
        "jest": true
    },
    "parser": "vue-eslint-parser",
    // 规则继承
    "extends": [
        // 全部规则默认是关闭的，这个配置项开启推荐规则，推荐规则参照文档
        // 比如：函数不能重名，对象不能出现重复key
        "eslint:recommended",
        // vue3语法规则
        "plugin:@typescript-eslint/recommended",
        // ts语法规则
        "plugin:vue/vue3-essential",
        "plugin:prettier/recommended"
    ],
    // 要为特定类型的文件制定处理器
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    // 制定解析器选项
    "parserOptions": {
        "ecmaVersion": "latest", // 校验ECMA最新版本
        "parser": "@typescript-eslint/parser",
        "sourceType": "module", // 设置为”script"（默认），或者"module"代码在ECMAScript模块中
        "jsxPragma": "React",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "plugins": [
        "@typescript-eslint",
        "vue"
    ],
    "rules": {
        "no-var": "error",
        "no-multiple-empty-lines": ["warn", { max: 1} ],
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-unexpected-multiline": "error",
        "no-useless-escape": "off",

        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/prefer-ts-expect-error": "error",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/semi": "off",
        
        "vue/multi-word-component-names": "off",
        "vue/script-setup-uses-vars": "error",
        "vue/no-mutating-props": "off",
        "vue/attribute-hyphenation": "off"
    }
}
