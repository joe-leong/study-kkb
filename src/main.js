import Vue from 'vue'
import App from './App.vue'
import Bus from './utils/eventBus'

Vue.prototype.$bus = new Bus()
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
