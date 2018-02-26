// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/index'
import router from './router'
import FastClick from 'fastclick'
import VueResource from 'vue-resource'

import { WechatPlugin } from 'vux'
Vue.use(WechatPlugin)

import  { AlertPlugin, ToastPlugin, ConfirmPlugin } from 'vux'
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(ToastPlugin, {position: 'top'})
Vue.use(VueResource)
// Vue.http.options.emulateJSON = true;
// import { AjaxPlugin } from 'vux'
// Vue.use(AjaxPlugin)

Vue.config.productionTip = false

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
