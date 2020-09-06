import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

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
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/r',
    name: 'Reddit',
    // route level code-splitting
    // this generates a separate chunk (reddit.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "reddit" */ '../views/reddit/Reddit.vue')
  },
  {
    path: '/r/:subredditKey',
    name: 'Subreddit',
    props: (route) => { 
      return {
        subredditKey: route.params.subredditKey 
      }
    },
    // route level code-splitting
    // this generates a separate chunk (subreddit.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "subreddit" */ '../views/reddit/Subreddit.vue')
  },
  {
    path: '/r/:subredditKey/:typeId/:userId/:postId',
    name: 'SubredditPost',
    props: (route) => { 
      return {
        subredditKey: route.params.subredditKey,
        typeId: route.params.typeId,
        userId: route.params.userId,
        postId: route.params.postId 
      }
    },
    // route level code-splitting
    // this generates a separate chunk (subreddit.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "subreddit-post" */ '../views/reddit/SubredditPost.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
