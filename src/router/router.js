import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/schema_list',
    name: 'schema_list',
    component: () => import('../views/Schema.vue')
  },
  {
    name: 'edit_schema',
    path: '/edit_schema',
    component: () => import('../views/editSchema')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
