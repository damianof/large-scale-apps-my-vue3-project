import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Primitives from '../views/Primitives.vue'
import WidgetsPlayground from '../views/WidgetsPlayground.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/primitives',
    name: 'Primitives',
    component: Primitives
  },
  {
    path: '/widgets-playground',
    name: 'WidgetsPlayground',
    component: WidgetsPlayground
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
