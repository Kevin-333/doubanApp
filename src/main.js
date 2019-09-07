// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import App from './App'
import router from './router'

import axios from 'axios'
Vue.prototype.axios = axios

require('./mock')

import mui from './assets/mui/js/mui.js'
import './assets/mui/css/mui.css'
Vue.prototype.mui=mui

import $ from 'jquery'

import {store} from './store/store'


// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
