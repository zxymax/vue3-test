import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { viteMockServe } from 'vite-plugin-mock'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ command, mode }) => {
  let env = loadEnv(mode, process.cwd()) 
  return {
    server: {
      proxy: {
        [env.VITE_APP_BASE_API]: {
          // 服务器地址
          target: env.VITE_SERVE,
          // 代理跨域
          changeOrigin: true,
          // 路径重写
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    plugins: [
      vue(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
      viteMockServe({
        // default
        localEnabled: command === 'serve',
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnable: true,
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    },
  }
})
// https://vitejs.dev/config/
// export default defineConfig(({command}) => {
//   return {
//     plugins: [
//       vue(),
//       createSvgIconsPlugin({
//         iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
//         symbolId: 'icon-[dir]-[name]',
//       }),
//     viteMockServe({
//       mockPath: 'mock',
//       enable: true
//     }),
//     ],
//     resolve: {
//       alias: {
//         '@': path.resolve('./src'),
//       },
//     },
//     // scss 全局变量配置
//     css: {
//       preprocessorOptions: {
//         scss: {
//           javascriptEnable: true,
//           additionalData: '@import "./src/styles/variable.scss";'
//         }
//       }
//     }
//   }
// })
