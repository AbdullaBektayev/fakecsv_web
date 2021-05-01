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
    component: () => import('../views/Schema.vue'),
    meta: {
      requiresLogin: true
    }
  },
  {
    name: 'edit_schema',
    path: '/schema/:id/edit',
    component: () => import('../views/editSchema'),
    params: true
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('../views/Login')
  },
  {
    name: 'logout',
    path: '/logout',
    component: () => import('../views/Logout')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
