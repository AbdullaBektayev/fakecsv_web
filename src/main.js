import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from "@/store"
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresLogin)) {
    let cur_time = new Date().getHours();
    if (!store.getters.loggedIn || 2 < Math.abs(cur_time - store.state.hours)) {
      next({ name: 'login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
