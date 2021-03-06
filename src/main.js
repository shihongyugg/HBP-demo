import Vue from 'vue'
import App from './App.vue'

// ------------------------------------------------------------------
import Vuex from 'vuex'
import store from './vuex/store'
Vue.use(Vuex)
// ------------------------------------------------------------------
// ------------------------------------------------------------------
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router'//router/index.js
// ------------------------------------------------------------------
import axios from 'axios'
// import axios from './axios/index'
Vue.prototype.$axios = axios

// Vue.use(VueRouter)
// ------------------------------------------------------------------
import 'animate.css'
// ------------------------------------------------------------------
import 'swiper/dist/css/swiper.css';
// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------



new Vue({
    el: '#app',
    store,
    router,
    axios,
    render: h => h(App)
})
