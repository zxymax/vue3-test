import SvgIcon from './SvgIcon/index.vue'

const allGlobalComponent = {
  SvgIcon,
}

// 对外暴露一个插件对象
export default {
  install(app) {
    // 名字必须是install
    console.log('install components')

    Object.keys(allGlobalComponent).forEach((key) => {
      // 注册为全局组件
      app.component(key, allGlobalComponent[key])
    })
  },
}
