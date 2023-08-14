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
  env: {
    browser: true, // 浏览器环境
    es2021: true,
    node: true,
    jest: true,
  },
  parser: 'vue-eslint-parser',
  // 规则继承
  extends: [
    // 全部规则默认是关闭的，这个配置项开启推荐规则，推荐规则参照文档
    // 比如：函数不能重名，对象不能出现重复key
    'eslint:recommended',
    // vue3语法规则
    'plugin:@typescript-eslint/recommended',
    // ts语法规则
    'plugin:vue/vue3-essential',
    'plugin:prettier/recommended',
  ],
  // 要为特定类型的文件制定处理器
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  // 制定解析器选项
  parserOptions: {
    ecmaVersion: 'latest', // 校验ECMA最新版本
    parser: '@typescript-eslint/parser',
    sourceType: 'module', // 设置为”script"（默认），或者"module"代码在ECMAScript模块中
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'vue'],
  rules: {
    'no-var': 'error',
    'no-multiple-empty-line': ['warn', { max: 1 }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unexpected-multiline': 'error',
    'no-useless-escape': 'off',

    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/semi': 'off',

    'vue/multi-word-component-names': 'off',
    'vue/script-setup-uses-vars': 'error',
    'vue/no-mutating-props': 'off',
    'vue/attribute-hyphenation': 'off',
  },
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
      '@': path.resolve('./src'),
    },
  },
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

# Svg图标配置

#### 安装vite-plugin-svg-icons

- yarn add vite-plugin-svg-icons -D

更新vite.config.ts配置

```ts
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve('./src'),
    },
  },
})
```

main.ts 添加svg配置

```ts
import 'virtual:svg-icons-register'
```

# 自定义插件注册全局组件 Svg

创建 components/index.ts 文件
```ts
// 引入需要注册的组件
import SvgIcon from './SvgIcon/index.vue'

const allGlobalComponent = {
    SvgIcon
}

// 对外暴露一个插件对象
export default {
    install(app) { // 名字必须是install
        console.log('install components')

        Object.keys(allGlobalComponent).forEach(key => {
            // 注册为全局组件
            app.component(key, allGlobalComponent[key])
        })
    }
}
```

mian.ts 文件 引入 components/index.ts 文件 
```ts
import globalComponent from '@/components'

app.use(globalComponent)
```

# 继承Sass
vite.config.ts更新配置
```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // scss 全局变量配置
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnable: true,
        additionalData: '@import "./src/styles/variable.scss";'
      }
    }
  }
})

```
创建 styles/variable.scss
```scss
$color: red;
```

使用 variable 变量
<style scoped lang="scss">
div {
  h1 {
    color: $color;
  }
}
</style>

# Mock接口
安装依赖
- vite-plugin-mock 最新版本在vue3中报错 需要安装指定版本 @2.9.6
- mockjs

更新vite.config.ts配置
```ts
export default defineConfig(({command}) => {
  return {
    plugins: [
      viteMockServe({
        // default
        localEnabled: command === 'serve'
    })
    ]
  }
})
```

#### 创建mock/user.ts
```ts
function createUserList() {
    return [
        {
            userId: 1,
            avatar: 'https://images.evetech.net/types/33328/render?size=64',
            username: 'admin',
            password: '111111',
            desc: 'Plate',
            roles: ['admin'],
            buttons: ['cuser.detail'],
            routes: ['home'],
            token: 'Admin Token'
        },
        {
            userId: 2,
            avatar: 'https://images.evetech.net/alliances/99003581/logo?size=64',
            username: 'system',
            password: '111111',
            desc: 'SystemManager',
            roles: ['manager'],
            buttons: ['cuser.detail', 'cuser.user'],
            routes: ['home'],
            token: 'System Token'
        }
    ]
}

export default [{
    url: '/api/user/login',
    method: 'post',
    response: ({body}) => {
        const { username, password } = body
        const checkUser = createUserList().find(
            (item) => item.username === username && item.password === password
        )
        if (!checkUser) {
            return { code: 201, data: { message: '账号密码不正确'}}
        }
        const { token } = checkUser 
        return { code: 200, data: { token }}
    }
},
{
    url: '/api/user/info',
    method: 'get',
    response: (request) => {
        const token = request.headers.token
        const checkUser = createUserList().find(
            (item) => item.token === token
        )
        if (!checkUser) {
            return { code: 201, data: { message: '获取用户信息失败'}}
        }
        return { code: 200, data: {checkUser}}
    }
}]
```


```ts
// 在main.ts调用接口
import axios from 'axios'
console.log(axios)
axios({
  url: '/api/user/login',
  method: 'post',
  data: {
    username: 'admin',
    password: '111111'
  }
})
```