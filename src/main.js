import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './utils/guard'
import fetch from './fetch/api'
import date from './utils/date'

// 创建全局
Vue.prototype.fetch = fetch
Vue.prototype.$date = date

Vue.use(Element, { size: 'small', zIndex: 3000 })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
