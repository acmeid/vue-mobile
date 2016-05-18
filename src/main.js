import Vue from 'vue'
import VueRouter from 'vue-router'
import { configRouter } from './route'
import App from './App.vue'

const FastClick = require('fastclick')
FastClick.attach(document.body)

// import dTap from './util/directives/tap'

/* eslint-disable no-new */

Vue.config.debug = true
// install router
Vue.use(VueRouter)

// Vue.directive('tap', dTap)

// create router
const router = new VueRouter({
  hashbang: true,
  history: true,
  saveScrollPosition: true,
  suppressTransitionError: true
})
// configure router
configRouter(router)
// boostrap the app
router.start(Vue.extend(App), '#app-root')
// just for debugging
window.router = router
