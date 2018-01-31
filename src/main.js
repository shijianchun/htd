// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

import Vuex from 'vuex';
import vuexI18n from 'vuex-i18n'

/*import store from './vuex/store'*/
import VueAwesomeSwiper from 'vue-awesome-swiper'
import echarts from "echarts"

import {LangService} from './api/lang'

import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueAwesomeSwiper)
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        i18n: vuexI18n.store
    }
});
Vue.use(vuexI18n.plugin, store)

new LangService().setDefaultLang()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
