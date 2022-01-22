import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import './plugins/element.js'
// global css
import './assets/styles/index.scss'
// axios
import axios from 'axios'

Vue.use(Element)
Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
