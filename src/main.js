import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ELEMENT  from 'element-ui'
import {sync} from 'vuex-router-sync'
import i18n from './i18n/i18n'
import '@/assets/iconfont/iconfont.css'

import http from './utils/http'; //引入请求工具

Vue.config.productionTip = false
Vue.use(ELEMENT)

sync(store, router)

//挂载全局请求
Vue.prototype.$globalRequest = http.globalRequest;
Vue.prototype.$userRequest = http.userRequest;

//挂载全局的页面高度(保证单页的高度至少在500-1000之间)
var h = document.documentElement.clientHeight;
var CHeight = (h<=500)? 500 : (h>=1000? 1000 : h);
Vue.prototype.$pageHeight = CHeight;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
