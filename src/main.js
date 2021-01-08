import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import ECharts from 'echarts'
import VueECharts from 'vue-echarts'
// 由于需要覆盖原有样式，需要在最后引入
import './style/index.css'

Vue.config.productionTip = false
Vue.prototype.$echarts = ECharts
Vue.component('v-chart', VueECharts)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
