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
    params: true,
    meta: {
      requiresLogin: true
    }
  },
  {
    name: 'download_schema_list',
    path: '/schema/:id/download_list',
    component: () => import('../views/SchemaDownload'),
    params: true,
    meta: {
      requiresLogin: true
    }
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('../views/Login')
  },
  {
    name: 'logout',
    path: '/logout',
    component: () => import('../views/Logout'),
    meta: {
      requiresLogin: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
