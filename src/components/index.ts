import SvgIcon from './SvgIcon/index.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const allGlobalComponent: any = {
  SvgIcon,
}

// 对外暴露一个插件对象
export default {
  install(app: any) {
    // 名字必须是install
    console.log('install components')

    Object.keys(allGlobalComponent).forEach((key) => {
      // 注册为全局组件
      app.component(key, allGlobalComponent[key])
    })
    // 将element-plus提供图标注册为全局组件
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
