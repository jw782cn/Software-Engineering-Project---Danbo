import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  /*{
    path: '/',
    name: 'Home',
    component: () => import('../views/Home/Home.vue')
  },*/
  {
    path: '/',
    name: 'Likes',
    component: () => import('../views/Likes/Likes.vue')
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('../views/Index.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
