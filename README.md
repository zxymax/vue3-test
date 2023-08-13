# Vue 3 + TypeScript + Vite

# Eslint安装
- yarn add -D eslint

#### 生成配置文件
- npx eslint --init

# vue3环境代码校验插件安装
- eslint-config-prettier
- eslint-plugin-import
- eslint-plugin-node
- eslint-plugin-prettier
- eslint-plugin-vue
- @babel/eslint-parser

#### 修改.eslintrc.cjs配置文件
```cjs
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
        "no-multiple-empty-line": ["warn", { max: 1} ],
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

```

# 配置prettier
安装依赖
- eslint-plugin-prettier
- prettier
- eslint-config-prettier

#### prettierrc.json规则
```json
{
    "singleQuote": true,
    "semi": false,
    "bracketSpacing": true,
    "htmlWhtespaceSensitivity": "ignore",
    "endOfLine": "auto",
    "trailingComma": "all",
    "tabWidth": 2
}
```

# 配置stylelint
- sass
- sass-loader
- stylelint
- postcss
- postcss-scss
- postcss-html
- stylelint-config-prettier
- stylelint-config-recess-order
- stylelint-config-recommended-scss
- stylelint-config-standard
- stylelint-config-standard-vue
- stylelint-scss
- stylelint-order
- stylelint-config-standard-scss

# Element Plus UI & icons
- yarn add element-plus @element-plus/icons-vue

# src别名设置
vite.config.js
```ts
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve("./src")
    }
  }
})
```
tsconfig.json
```json
"compilerOptions": {
    "baseUrl": "./",
    "paths": {
        "@/*": ["src/*"]
     }
}

```