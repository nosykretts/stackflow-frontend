// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import moment from 'moment'
import iView from 'iview'
import store from './store'
import App from '@/components/App'
import router from './router'
import editor from 'vue2-medium-editor'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.prototype.moment = moment
Vue.use(iView)
axios.defaults.baseURL = 'http://api.fajarpatappari.tk:3004/api'
axios.defaults.headers.common.Authorization = localStorage.getItem('token') || 'Bearer jwt'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
